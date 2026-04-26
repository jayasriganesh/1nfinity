import type { Metadata } from 'next'
import { CareersForm } from './CareersForm'

export const metadata: Metadata = {
  title: 'Careers at InfinityX Global | AV Technology Jobs India',
  description: 'Join InfinityX Global — growing system integration and AV technology company based in Hyderabad. Opportunities in sales, technical support, and installation for passionate display technology professionals.',
  keywords: ['AV technology jobs India', 'system integration careers Hyderabad', 'display solutions jobs India', 'IT infrastructure company hiring'],
  openGraph: {
    title: 'Careers at InfinityX Global | AV Technology Jobs India',
    description: 'Join InfinityX Global — Hyderabad-based AV technology company. Sales, support, and installation roles.',
    url: 'https://infinityxglobal.com/careers',
    type: 'website',
  },
}

const values = [
  {
    title: 'Client-First Culture',
    description: 'Every role at InfinityX Global directly impacts how businesses and institutions experience technology.',
  },
  {
    title: 'Growth Opportunities',
    description: 'Fast-growing company with real ownership — your contributions shape products and decisions.',
  },
  {
    title: 'Pan-India Presence',
    description: 'Work with clients across sectors — education, enterprise, government — across India and beyond.',
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[3px] text-[#196FD2] mb-4">
            Join Our Team
          </p>
          <h1 className="font-heading text-[36px] md:text-[52px] font-bold uppercase tracking-wide text-[#333] mb-4 leading-tight">
            Careers at InfinityX Global
          </h1>
          <p className="text-[16px] text-[#666] max-w-xl leading-relaxed">
            We are a fast-growing AV integration company based in Hyderabad with 10+ years of experience
            and 4000+ installations across India. If you are passionate about technology and client success,
            we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-20 bg-white border-b border-[#f0f0f0]">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <h2 className="font-heading text-[22px] md:text-[28px] font-bold uppercase tracking-wide text-[#333] mb-10">
            Why InfinityX Global
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-[#196FD2] pl-5">
                <h3 className="font-heading text-[16px] font-bold text-[#333] mb-2 uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide text-[#333] mb-4">
                Apply Now
              </h2>
              <p className="text-[14px] text-[#666] leading-relaxed mb-6">
                Don&apos;t see a specific opening? Send us your profile anyway — we review all applications
                and reach out when a suitable opportunity arises.
              </p>
              <p className="text-[13px] text-[#999]">
                For queries, email us at{' '}
                <a href="mailto:contact@infinityxglobal.com" className="text-[#196FD2] hover:underline">
                  contact@infinityxglobal.com
                </a>
              </p>
            </div>
            <div className="lg:col-span-2">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
