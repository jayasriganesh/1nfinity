import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { transporter } from '@/lib/mailer'
import { checkRateLimit } from '@/lib/rateLimit'
import { logToSheet } from '@/lib/sheets'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'

  if (!checkRateLimit(`newsletter:${ip}`, 5)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const { email } = schema.parse(body)

    await transporter.sendMail({
      from: `"InfinityX Global Website" <${process.env.SMTP_USER}>`,
      to: 'contact@infinityxglobal.com',
      subject: `[Newsletter] New Subscriber: ${email}`,
      text: `New newsletter subscriber: ${email}\n\nSubmitted via infinityxglobal.com footer.`,
    })

    await logToSheet('Newsletter', [email])

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    console.error('Newsletter error:', err)
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
  }
}
