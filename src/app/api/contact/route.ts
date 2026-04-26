import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { transporter } from '@/lib/mailer'
import { checkRateLimit } from '@/lib/rateLimit'
import { verifyTurnstile } from '@/lib/turnstile'
import { logToSheet } from '@/lib/sheets'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

const subjectLabels: Record<string, string> = {
  sales: 'Sales Enquiry',
  quote: 'Get a Quote',
  support: 'Technical Support',
  partner: 'Partnership',
  other: 'Other',
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'

  if (!checkRateLimit(`contact:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const { 'cf-turnstile-response': turnstileToken, ...rest } = body as Record<string, unknown>

    const turnstileOk = await verifyTurnstile(turnstileToken as string | null)
    if (!turnstileOk) {
      return NextResponse.json({ error: 'Security check failed. Please refresh and try again.' }, { status: 400 })
    }

    const data = schema.parse(rest)
    const subjectLabel = subjectLabels[data.subject] ?? data.subject
    const adminSubject = `[Contact] ${subjectLabel} — ${data.name}${data.company ? ` (${data.company})` : ''}`

    await transporter.sendMail({
      from: `"InfinityX Global Website" <${process.env.SMTP_USER}>`,
      to: 'contact@infinityxglobal.com',
      replyTo: data.email,
      subject: adminSubject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#196FD2;padding:24px;color:white;">
            <h2 style="margin:0;font-size:20px;">New Contact Form Submission</h2>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;width:140px;font-size:14px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${data.name}</td></tr>
              ${data.company ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Company</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${data.company}</td></tr>` : ''}
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ''}
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;">Subject</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${subjectLabel}</td></tr>
              <tr><td style="padding:10px 0;color:#666;font-size:14px;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:14px;white-space:pre-wrap;">${data.message}</td></tr>
            </table>
          </div>
          <div style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#999;">Submitted via infinityxglobal.com contact form</div>
        </div>
      `,
    })

    await transporter.sendMail({
      from: `"InfinityX Global" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'We received your message — InfinityX Global',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#196FD2;padding:24px;color:white;"><h2 style="margin:0;font-size:20px;">Thank you, ${data.name}!</h2></div>
          <div style="padding:24px;border:1px solid #e5e5e5;">
            <p style="font-size:15px;color:#333;margin:0 0 16px;">We've received your message and our team will get back to you within <strong>48 hours</strong>.</p>
            <p style="font-size:14px;color:#666;margin:0 0 8px;">For urgent queries, call us at <a href="tel:8228822849" style="color:#196FD2;">8228822849</a> or <a href="tel:9640778582" style="color:#196FD2;">9640778582</a>.</p>
            <p style="font-size:14px;color:#666;margin:0;">Monday – Saturday, 09:30AM – 06:30PM IST</p>
          </div>
          <div style="padding:16px 24px;background:#f9f9f9;font-size:12px;color:#999;">InfinityX Global · Hyderabad, Telangana, India · <a href="https://infinityxglobal.com" style="color:#196FD2;">infinityxglobal.com</a></div>
        </div>
      `,
    })

    await logToSheet('Contact', [
      data.name,
      data.company ?? '',
      data.email,
      data.phone ?? '',
      subjectLabel,
      data.message,
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      const first = err.issues[0]
      const msg = first ? `${String(first.path[0] ?? 'Field')}: ${first.message}` : 'Invalid form data.'
      return NextResponse.json({ error: msg }, { status: 400 })
    }
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
