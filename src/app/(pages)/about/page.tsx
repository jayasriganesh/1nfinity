import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About InfinityX Global | System Integration Company India Since 2014',
  description: 'InfinityX Global — India\'s trusted system integration and intelligent display solutions company. Founded 2014. 4000+ installations. MSME, ISO, and GeM certified. Headquartered in Hyderabad, serving pan India.',
  keywords: ['AV integration company India', 'system integration company Hyderabad', 'display solutions provider India', 'MSME ISO GeM certified', 'IT infrastructure company India'],
  openGraph: {
    title: 'About InfinityX Global | System Integration Company India Since 2014',
    description: 'India\'s trusted system integration and display solutions company. Founded 2014. 4000+ installations. MSME, ISO, GeM certified. Pan India.',
    url: 'https://infinityxglobal.com/about',
    type: 'website',
  },
}

const stats = [
  { value: '2014', label: 'Founded' },
  { value: '4000+', label: 'Installations' },
  { value: '10+', label: 'Years Experience' },
  { value: 'Pan India', label: 'Coverage' },
]

const certs = [
  {
    title: 'MSME Registered',
    description:
      'Ministry of Micro, Small and Medium Enterprises certified — ensuring compliance with government procurement standards.',
  },
  {
    title: 'ISO Certified',
    description:
      'ISO certification reflects our commitment to quality management and consistent service delivery across every project.',
  },
  {
    title: 'GeM Empanelled',
    description:
      'Government e-Marketplace registered vendor enabling seamless, transparent procurement for government organisations across India.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[3px] text-[#196FD2] mb-4">
            About InfinityX Global
          </p>
          <h1 className="font-heading text-[36px] md:text-[52px] font-bold uppercase tracking-wide text-[#333] mb-6 leading-tight">
            Where Collaboration<br />Comes to Life
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-relaxed max-w-2xl">
            InfinityX Global is a leading AV integration and collaboration solutions provider operating
            across India — transforming workplaces, classrooms, and institutions with intelligent display technology.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold uppercase tracking-wide text-[#333] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[15px] text-[#666] leading-relaxed">
                <p>
                  Founded in 2014, InfinityX Global has been at the forefront of deploying collaboration
                  and display technologies across India&apos;s corporate, educational, and government sectors.
                </p>
                <p>
                  From huddle rooms to 500-seat auditoriums, and from primary school classrooms to university
                  lecture theatres, we bring world-class AV integration expertise to every project — backed
                  by in-house technical staff and a pan-India service network.
                </p>
                <p>
                  Our deep product expertise, proven deployment methodology, and end-to-end support capabilities
                  make us the preferred partner for organisations seeking reliable, scalable AV solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#f5f5f5] rounded-md p-6 text-center">
                  <p className="font-heading text-[32px] md:text-[40px] font-bold text-[#196FD2] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-[#999] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="awards" className="py-16 md:py-20 bg-[#f5f5f5] scroll-mt-[80px]">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <h2 className="font-heading text-[28px] md:text-[36px] font-bold uppercase tracking-wide text-[#333] mb-10">
            Certifications &amp; Accreditations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certs.map((cert) => (
              <div key={cert.title} className="bg-white border border-[#e5e5e5] rounded-md p-8 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#196FD2]/10 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#196FD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-[18px] font-bold text-[#333] mb-3 uppercase tracking-wide">
                  {cert.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#196FD2]">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <h2 className="font-heading text-[28px] md:text-[38px] font-bold text-white mb-4 leading-tight">
            Ready to work with us?
          </h2>
          <p className="text-[15px] text-white/80 leading-relaxed mb-8 max-w-md">
            Get in touch with our solutions team. We&apos;ll assess your space and requirements and
            respond within 48 hours — guaranteed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-3 text-[14px] font-semibold text-[#196FD2] hover:bg-[#f5f5f5] transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[5px] border border-white/50 px-7 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
