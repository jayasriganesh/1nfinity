'use client'

import { useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [phoneCode, setPhoneCode] = useState('+91')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.name === 'phone'
      ? e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
      : e.target.value
    setForm((prev) => ({ ...prev, [e.target.name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          phone: form.phone ? `${phoneCode}${form.phone}` : '',
          'cf-turnstile-response': turnstileToken,
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-md border border-[#e5f5e5] bg-[#f0fff0] p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading text-[20px] font-bold text-[#333] mb-2 uppercase tracking-wide">
          Message Received
        </h3>
        <p className="text-[14px] text-[#666]">
          Thank you for getting in touch. Our team will respond within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Phone
          </label>
          <div className="flex">
            <select
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              className="border border-[#e5e5e5] border-r-0 rounded-l-[4px] px-2 py-3 text-[14px] text-[#333] bg-white focus:outline-none focus:border-[#196FD2] transition-colors"
            >
              <option value="+91">+91 IN</option>
              <option value="+977">+977 NP</option>
              <option value="+94">+94 LK</option>
              <option value="+975">+975 BT</option>
              <option value="+966">+966 SA</option>
              <option value="+971">+971 AE</option>
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={handleChange}
              className="flex-1 border border-[#e5e5e5] rounded-r-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
              placeholder="98765 43210"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors bg-white"
        >
          <option value="">Select a subject</option>
          <option value="sales">Sales Enquiry</option>
          <option value="quote">Get a Quote</option>
          <option value="support">Technical Support</option>
          <option value="partner">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors resize-none"
          placeholder="Tell us about your project or requirements..."
        />
      </div>

      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
        />
      )}
      {status === 'error' && (
        <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-[4px] px-4 py-3">
          {errorMsg}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2 rounded-[5px] bg-[#196FD2] px-8 py-3 text-[14px] font-semibold text-white hover:bg-[#1560b8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
