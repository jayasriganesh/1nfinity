import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { transporter } from '@/lib/mailer'
import { checkRateLimit } from '@/lib/rateLimit'
import { verifyTurnstile } from '@/lib/turnstile'
import { logToSheet } from '@/lib/sheets'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(1),
  role: z.string().min(1),
  experience: z.string().min(1),
  message: z.string().optional(),
})

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const roleLabels: Record<string, string> = {
  sales: 'Sales Executive',
  support: 'Field Support Engineer',
  pm: 'Project Manager',
  marketing: 'Marketing Executive',
  other: 'Other / Open Application',
}

const expLabels: Record<string, string> = {
  fresher: 'Fresher',
  '1-3': '1–3 Years',
  '3-5': '3–5 Years',
  '5+': '5+ Years',
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'

  if (!checkRateLimit(`careers:${ip}`, 5)) {
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
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role: formData.get('role') as string,
      experience: formData.get('experience') as string,
      message: (formData.get('message') as string) || undefined,
    }

    const data = schema.parse(fields)

    const cv = formData.get('cv') as File | null
    let attachment: { filename: string; content: Buffer } | null = null

    if (cv && cv.size > 0) {
      if (cv.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'CV file too large. Maximum size is 10MB.' }, { status: 400 })
      }
      if (!ALLOWED_MIME_TYPES.includes(cv.type)) {
        return NextResponse.json({ error: 'Invalid file type. Only PDF, DOC, DOCX are allowed.' }, { status: 400 })
      }
      const bytes = await cv.arrayBuffer()
      attachment = { filename: cv.name, content: Buffer.from(bytes) }
    }

    const roleLabel = roleLabels[data.role] ?? data.role
    const expLabel = expLabels[data.experience] ?? data.experience

    await transporter.sendMail({
      from: `"InfinityX Global Website" <${process.env.SMTP_USER}>`,
      to: 'contact@infinityxglobal.com',
      replyTo: data.email,
      subject: `[Careers] ${roleLabel} Application — ${data.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#196FD2;padding:24px;color:white;">
            <h2 style="margin:0;font-size:20px;">New Job Application</h2>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;width:160px;font-size:14px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${data.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Role</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${roleLabel}</td></tr>
              <tr><td style="padding:10px 0;${data.message ? 'border-bottom:1px solid #f0f0f0;' : ''}color:#666;font-size:14px;">Experience</td><td style="padding:10px 0;${data.message ? 'border-bottom:1px solid #f0f0f0;' : ''}font-size:14px;">${expLabel}</td></tr>
              ${data.message ? `<tr><td style="padding:10px 0;color:#666;font-size:14px;vertical-align:top;">Cover Note</td><td style="padding:10px 0;font-size:14px;white-space:pre-wrap;">${data.message}</td></tr>` : ''}
            </table>
            ${attachment ? `<p style="margin:16px 0 0;font-size:13px;color:#555;">CV Attached: ${attachment.filename}</p>` : '<p style="margin:16px 0 0;font-size:13px;color:#999;">No CV attached.</p>'}
          </div>
          <div style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#999;">
            Submitted via infinityxglobal.com/careers
          </div>
        </div>
      `,
      attachments: attachment ? [attachment] : undefined,
    })

    await transporter.sendMail({
      from: `"InfinityX Global" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Application Received — InfinityX Global',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#196FD2;padding:24px;color:white;">
            <h2 style="margin:0;font-size:20px;">Thank you, ${data.name}!</h2>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;">
            <p style="font-size:15px;color:#333;margin:0 0 16px;">We've received your application for <strong>${roleLabel}</strong>. Our team will review it and get back to you if your profile matches our current requirements.</p>
            <p style="font-size:14px;color:#666;margin:0;">InfinityX Global · Hyderabad, Telangana, India</p>
          </div>
          <div style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#999;">
            <a href="https://infinityxglobal.com" style="color:#196FD2;">infinityxglobal.com</a>
          </div>
        </div>
      `,
    })

    await logToSheet('Careers', [
      data.name,
      data.email,
      data.phone,
      roleLabel,
      expLabel,
      data.message ?? '',
      attachment ? 'Yes' : 'No',
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      const first = err.issues[0]
      const msg = first ? `${String(first.path[0] ?? 'Field')}: ${first.message}` : 'Invalid form data.'
      return NextResponse.json({ error: msg }, { status: 400 })
    }
    console.error('Careers form error:', err)
    return NextResponse.json({ error: 'Failed to submit application. Please try again.' }, { status: 500 })
  }
}
