'use client'

import { useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

export function CareersForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [cv, setCv] = useState<File | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [phoneCode, setPhoneCode] = useState('+91')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
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
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('phone', form.phone ? `${phoneCode}${form.phone}` : '')
      fd.append('role', form.role)
      fd.append('experience', form.experience)
      if (form.message) fd.append('message', form.message)
      if (cv) fd.append('cv', cv)
      if (turnstileToken) fd.append('cf-turnstile-response', turnstileToken)

      const res = await fetch('/api/careers', { method: 'POST', body: fd })
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
          Application Received
        </h3>
        <p className="text-[14px] text-[#666]">
          Thank you for your interest in InfinityX Global. We&apos;ll review your application and reach out if your profile matches our requirements.
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
          <label htmlFor="email" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Email *
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div>
          <label htmlFor="role" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
            Role Applying For *
          </label>
          <select
            id="role" name="role" required
            value={form.role} onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors bg-white"
          >
            <option value="">Select a role</option>
            <option value="sales">Sales Executive</option>
            <option value="support">Field Support Engineer</option>
            <option value="pm">Project Manager</option>
            <option value="marketing">Marketing Executive</option>
            <option value="other">Other / Open Application</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Years of Experience *
        </label>
        <select
          id="experience" name="experience" required
          value={form.experience} onChange={handleChange}
          className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors bg-white"
        >
          <option value="">Select experience level</option>
          <option value="fresher">Fresher</option>
          <option value="1-3">1–3 Years</option>
          <option value="3-5">3–5 Years</option>
          <option value="5+">5+ Years</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Cover Note
        </label>
        <textarea
          id="message" name="message" rows={4}
          value={form.message} onChange={handleChange}
          className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors resize-none"
          placeholder="Tell us about yourself and why you'd like to join InfinityX Global..."
        />
      </div>

      <div>
        <label htmlFor="cv" className="block text-[12px] font-semibold uppercase tracking-widest text-[#999] mb-2">
          Upload CV <span className="normal-case tracking-normal font-normal">(PDF, DOC, DOCX — max 10MB)</span>
        </label>
        <input
          id="cv" name="cv" type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setCv(e.target.files?.[0] ?? null)}
          className="w-full text-[14px] text-[#333] file:mr-4 file:py-2 file:px-4 file:rounded-[4px] file:border-0 file:text-[13px] file:font-semibold file:bg-[#f0f6ff] file:text-[#196FD2] hover:file:bg-[#e0edff] cursor-pointer"
        />
        {cv && (
          <p className="text-[12px] text-[#666] mt-1">{cv.name} ({(cv.size / 1024 / 1024).toFixed(1)} MB)</p>
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
        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
