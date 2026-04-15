import type { Metadata } from 'next'
import { QuoteForm } from './QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Quote | InfinityX Global',
  description: 'Request a free consultation and quote for your AV integration project. InfinityX Global responds within 48 hours.',
}

const benefits = [
  { title: 'Free Site Assessment', desc: 'Our engineers assess your space and recommend the optimal configuration.' },
  { title: 'Detailed Proposal', desc: 'Receive a comprehensive proposal with product specs, pricing, and timeline.' },
  { title: '48hr Response', desc: 'Guaranteed response within 48 business hours for all quote requests.' },
  { title: 'No Obligation', desc: 'Consultation and proposal are completely free with no commitment required.' },
]

export default function GetQuotePage() {
  return (
    <>
      <section className="bg-[#196FD2] py-20 md:py-24">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[3px] text-white/60 mb-4">
            Free Consultation
          </p>
          <h1 className="font-heading text-[36px] md:text-[52px] font-bold uppercase tracking-wide text-white mb-4 leading-tight">
            Get a Quote
          </h1>
          <p className="text-[16px] text-white/80 max-w-xl leading-relaxed">
            Tell us about your project. Our solutions team will assess your requirements
            and deliver a tailored proposal within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Benefits */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-heading text-[20px] font-bold uppercase tracking-wide text-[#333] mb-6">
                What to Expect
              </h2>
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#196FD2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#196FD2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-[14px] font-bold text-[#333] mb-1 uppercase tracking-wide">{b.title}</h3>
                    <p className="text-[13px] text-[#666] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}

              <div className="border-t border-[#e5e5e5] pt-6 mt-6">
                <p className="text-[13px] text-[#999] mb-2">Prefer to call?</p>
                <a href="tel:8228822849" className="text-[15px] text-[#196FD2] font-medium hover:underline block">
                  8228822849
                </a>
                <a href="tel:9640778582" className="text-[15px] text-[#196FD2] font-medium hover:underline block">
                  9640778582
                </a>
                <p className="text-[12px] text-[#999] mt-2">Mon–Sat, 09:30AM – 06:30PM IST</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
