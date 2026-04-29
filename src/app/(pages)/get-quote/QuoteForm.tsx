'use client'

import { useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [attachment, setAttachment] = useState<File | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [phoneCode, setPhoneCode] = useState('+91')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    solution: '',
    rooms: '',
    timeline: '',
    budget: '',
    notes: '',
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
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => {
        if (k === 'phone') return
        if (v) fd.append(k, v)
      })
      fd.append('phone', form.phone ? `${phoneCode}${form.phone}` : '')
      if (attachment) fd.append('attachment', attachment)
      if (turnstileToken) fd.append('cf-turnstile-response', turnstileToken)
      const res = await fetch('/api/quote', { method: 'POST', body: fd })
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
      <div className="rounded-md border border-[#e5f5e5] bg-[#f0fff0] p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading text-[22px] font-bold text-[#333] mb-2 uppercase tracking-wide">
          Quote Request Received
        </h3>
        <p className="text-[14px] text-[#666] max-w-md mx-auto">
          Thank you! Our solutions team will review your requirements and send a detailed
          proposal within 48 hours.
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
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Company / Institution *
          </label>
          <input
            id="company" name="company" type="text" required
            value={form.company} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="Organisation name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Email *
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Phone *
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
              id="phone" name="phone" type="tel" inputMode="numeric" maxLength={10} required
              value={form.phone} onChange={handleChange}
              className="flex-1 border border-[#e5e5e5] rounded-r-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
              placeholder="98765 43210"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="solution" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Solution Type *
          </label>
          <select
            id="solution" name="solution" required
            value={form.solution} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors bg-white"
          >
            <option value="">Select solution type</option>
            <option value="ifp">Interactive Flat Panels</option>
            <option value="kiosk">Kiosks &amp; Digital Signage</option>
            <option value="cctv">CCTV &amp; Security</option>
            <option value="enterprise">Enterprise Collaboration</option>
            <option value="education">Education / Smart Classroom</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="rooms" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            No. of Rooms / Units
          </label>
          <input
            id="rooms" name="rooms" type="text"
            value={form.rooms} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="e.g. 5 rooms, 20 units"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="timeline" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Expected Timeline
          </label>
          <select
            id="timeline" name="timeline"
            value={form.timeline} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors bg-white"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (within 1 month)</option>
            <option value="1-3months">1–3 months</option>
            <option value="3-6months">3–6 months</option>
            <option value="6months+">6+ months</option>
            <option value="planning">Still planning</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Approximate Budget
          </label>
          <select
            id="budget" name="budget"
            value={form.budget} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors bg-white"
          >
            <option value="">Select budget range</option>
            <option value="under5l">Under ₹5 Lakhs</option>
            <option value="5-20l">₹5 – ₹20 Lakhs</option>
            <option value="20-50l">₹20 – ₹50 Lakhs</option>
            <option value="50l+">₹50 Lakhs+</option>
            <option value="notsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes" name="notes" rows={4}
          value={form.notes} onChange={handleChange}
          className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors resize-none"
          placeholder="Tell us more about your project, site details, or specific requirements..."
        />
      </div>

      <div>
        <label htmlFor="attachment" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Attach RFQ / Brochure <span className="normal-case tracking-normal font-normal">(PDF, DOC, DOCX — max 25MB)</span>
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
          className="w-full text-[14px] text-[#333] file:mr-4 file:py-2 file:px-4 file:rounded-[4px] file:border-0 file:text-[13px] file:font-semibold file:bg-[#f0f6ff] file:text-[#196FD2] hover:file:bg-[#e0edff] cursor-pointer"
        />
        {attachment && (
          <p className="text-[12px] text-[#666] mt-1">{attachment.name} ({(attachment.size / 1024 / 1024).toFixed(1)} MB)</p>
        )}
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
        {status === 'submitting' ? 'Submitting...' : 'Request a Quote'}
      </button>
    </form>
  )
}
