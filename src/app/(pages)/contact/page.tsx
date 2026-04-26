import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact InfinityX Global | Sales & Support Enquiries',
  description: 'Get in touch with InfinityX Global for AV product enquiries, installation support, and pricing. Call +91 82288 22849 or email contact@infinityxglobal.com. Hyderabad, serving pan India.',
  keywords: ['contact AV solutions India', 'interactive flat panel enquiry', 'display solutions Hyderabad contact', 'AV integration support India'],
  openGraph: {
    title: 'Contact InfinityX Global | Sales & Support Enquiries',
    description: 'Reach InfinityX Global for AV product enquiries and pricing. +91 82288 22849 · contact@infinityxglobal.com · Hyderabad, pan India.',
    url: 'https://infinityxglobal.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-20 md:py-24">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[3px] text-[#196FD2] mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-[36px] md:text-[52px] font-bold uppercase tracking-wide text-[#333] mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-[16px] text-[#666] max-w-xl leading-relaxed">
            Our team is available Monday to Saturday, 09:30AM – 06:30PM IST.
            We respond to all enquiries within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-heading text-[13px] font-bold text-[#333] mb-3 uppercase tracking-widest">
                  Call Us
                </h3>
                <a
                  href="tel:8228822849"
                  className="block text-[15px] text-[#196FD2] hover:underline mb-1"
                >
                  8228822849
                </a>
                <a
                  href="tel:9640778582"
                  className="block text-[15px] text-[#196FD2] hover:underline"
                >
                  9640778582
                </a>
              </div>
              <div>
                <h3 className="font-heading text-[13px] font-bold text-[#333] mb-3 uppercase tracking-widest">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@infinityxglobal.com"
                  className="block text-[15px] text-[#196FD2] hover:underline"
                >
                  contact@infinityxglobal.com
                </a>
              </div>
              <div>
                <h3 className="font-heading text-[13px] font-bold text-[#333] mb-3 uppercase tracking-widest">
                  Office
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  InfinityX Global<br />
                  Hyderabad, Telangana<br />
                  India
                </p>
              </div>
              <div>
                <h3 className="font-heading text-[13px] font-bold text-[#333] mb-3 uppercase tracking-widest">
                  Quick Actions
                </h3>
                <Link
                  href="/get-quote"
                  className="block text-[14px] text-[#196FD2] hover:underline mb-2"
                >
                  Get a Quote →
                </Link>
                <Link
                  href="/products"
                  className="block text-[14px] text-[#196FD2] hover:underline mb-2"
                >
                  Browse Products →
                </Link>
                <Link
                  href="/solutions"
                  className="block text-[14px] text-[#196FD2] hover:underline"
                >
                  View Solutions →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-[24px] md:text-[28px] font-bold uppercase tracking-wide text-[#333] mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
