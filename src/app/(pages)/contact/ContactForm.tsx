'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission — wire to server action in Sprint 8
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
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
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-3 text-[14px] text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#196FD2] focus:ring-2 focus:ring-[#196FD2]/20 transition-colors"
            placeholder="+91 98765 43210"
          />
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
