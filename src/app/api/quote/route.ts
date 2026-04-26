import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { transporter } from '@/lib/mailer'
import { checkRateLimit } from '@/lib/rateLimit'
import { verifyTurnstile } from '@/lib/turnstile'
import { logToSheet } from '@/lib/sheets'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  solution: z.string().min(1),
  rooms: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  notes: z.string().optional(),
})

const MAX_FILE_SIZE = 25 * 1024 * 1024
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const solutionLabels: Record<string, string> = {
  ifp: 'Interactive Flat Panels',
  kiosk: 'Kiosks & Digital Signage',
  cctv: 'CCTV & Security',
  enterprise: 'Enterprise Collaboration',
  education: 'Education / Smart Classroom',
  other: 'Other / Not Sure',
}

const timelineLabels: Record<string, string> = {
  immediate: 'Immediate (within 1 month)',
  '1-3months': '1–3 months',
  '3-6months': '3–6 months',
  '6months+': '6+ months',
  planning: 'Still planning',
}

const budgetLabels: Record<string, string> = {
  under5l: 'Under ₹5 Lakhs',
  '5-20l': '₹5 – ₹20 Lakhs',
  '20-50l': '₹20 – ₹50 Lakhs',
  '50l+': '₹50 Lakhs+',
  notsure: 'Not sure yet',
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'

  if (!checkRateLimit(`quote:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  try {
    const formData = await req.formData()

    const turnstileToken = formData.get('cf-turnstile-response') as string | null
    const turnstileOk = await verifyTurnstile(turnstileToken)
    if (!turnstileOk) {
      return NextResponse.json({ error: 'Security check failed. Please refresh and try again.' }, { status: 400 })
    }

    const fields = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      solution: formData.get('solution') as string,
      rooms: (formData.get('rooms') as string) || undefined,
      timeline: (formData.get('timeline') as string) || undefined,
      budget: (formData.get('budget') as string) || undefined,
      notes: (formData.get('notes') as string) || undefined,
    }

    const data = schema.parse(fields)

    const file = formData.get('attachment') as File | null
    let attachment: { filename: string; content: Buffer } | null = null

    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'File too large. Maximum size is 25MB.' }, { status: 400 })
      }
      if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        return NextResponse.json({ error: 'Invalid file type. Only PDF, DOC, DOCX are allowed.' }, { status: 400 })
      }
      const bytes = await file.arrayBuffer()
      attachment = { filename: file.name, content: Buffer.from(bytes) }
    }

    const solutionLabel = solutionLabels[data.solution] ?? data.solution
    const adminSubject = `[Quote Request] ${solutionLabel} — ${data.name} (${data.company})`

    await transporter.sendMail({
      from: `"InfinityX Global Website" <${process.env.SMTP_USER}>`,
      to: 'contact@infinityxglobal.com',
      replyTo: data.email,
      subject: adminSubject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#196FD2;padding:24px;color:white;">
            <h2 style="margin:0;font-size:20px;">New Quote Request</h2>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;width:160px;font-size:14px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${data.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Company</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${data.company}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Solution</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${solutionLabel}</td></tr>
              ${data.rooms ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Rooms / Units</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${data.rooms}</td></tr>` : ''}
              ${data.timeline ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Timeline</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${timelineLabels[data.timeline] ?? data.timeline}</td></tr>` : ''}
              ${data.budget ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Budget</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${budgetLabels[data.budget] ?? data.budget}</td></tr>` : ''}
              ${data.notes ? `<tr><td style="padding:10px 0;color:#666;font-size:14px;vertical-align:top;">Notes</td><td style="padding:10px 0;font-size:14px;white-space:pre-wrap;">${data.notes}</td></tr>` : ''}
            </table>
            ${attachment ? `<p style="margin:16px 0 0;font-size:13px;color:#555;">Attachment: ${attachment.filename}</p>` : ''}
          </div>
          <div style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#999;">
            Submitted via infinityxglobal.com quote form
          </div>
        </div>
      `,
      attachments: attachment ? [attachment] : undefined,
    })

    await transporter.sendMail({
      from: `"InfinityX Global" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Quote Request Received — InfinityX Global',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#196FD2;padding:24px;color:white;">
            <h2 style="margin:0;font-size:20px;">Thank you, ${data.name}!</h2>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;">
            <p style="font-size:15px;color:#333;margin:0 0 16px;">We've received your quote request for <strong>${solutionLabel}</strong>. Our solutions team will review your requirements and send a detailed proposal within <strong>48 hours</strong>.</p>
            <p style="font-size:14px;color:#666;margin:0 0 8px;">For urgent queries, call us at <a href="tel:8228822849" style="color:#196FD2;">8228822849</a> or <a href="tel:9640778582" style="color:#196FD2;">9640778582</a>.</p>
            <p style="font-size:14px;color:#666;margin:0;">Monday – Saturday, 09:30AM – 06:30PM IST</p>
          </div>
          <div style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#999;">
            InfinityX Global · Hyderabad, Telangana, India · <a href="https://infinityxglobal.com" style="color:#196FD2;">infinityxglobal.com</a>
          </div>
        </div>
      `,
    })

    await logToSheet('Quote', [
      data.name,
      data.company,
      data.email,
      data.phone,
      solutionLabel,
      data.rooms ?? '',
      data.timeline ?? '',
      data.budget ?? '',
      data.notes ?? '',
      attachment ? 'Yes' : 'No',
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      const first = err.issues[0]
      const msg = first ? `${String(first.path[0] ?? 'Field')}: ${first.message}` : 'Invalid form data.'
      return NextResponse.json({ error: msg }, { status: 400 })
    }
    console.error('Quote form error:', err)
    return NextResponse.json({ error: 'Failed to submit quote. Please try again.' }, { status: 500 })
  }
}
