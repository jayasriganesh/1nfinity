import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { solutions } from '@/data/solutions'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions | InfinityX Global',
  description: 'InfinityX Global collaboration solutions for enterprise and education — complete AV integration across India.',
}

export default function SolutionsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[3px] text-[#196FD2] mb-4">
            Solutions
          </p>
          <h1 className="font-heading text-[36px] md:text-[52px] font-bold uppercase tracking-wide text-[#333] mb-6 leading-tight">
            Solutions for Every Space
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-relaxed max-w-2xl">
            From corporate boardrooms to university lecture theatres, InfinityX Global delivers
            complete, connected collaboration environments built around your needs.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group relative overflow-hidden rounded-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={solution.heroImage}
                    alt={solution.heroImageAlt ?? solution.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 ${solution.heroDark ? 'bg-black/50' : 'bg-white/40'}`} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#196FD2] mb-2">
                    {solution.heroDark ? 'Education' : 'Enterprise'}
                  </p>
                  <h2 className={`font-heading text-[28px] md:text-[36px] font-bold uppercase tracking-wide leading-tight mb-3 ${solution.heroDark ? 'text-white' : 'text-[#333]'}`}>
                    {solution.name}
                  </h2>
                  <p className={`text-[14px] leading-relaxed mb-6 max-w-sm ${solution.heroDark ? 'text-white/80' : 'text-[#555]'}`}>
                    {solution.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#196FD2] group-hover:gap-3 transition-all">
                    Explore Solution <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#196FD2]">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <h2 className="font-heading text-[28px] md:text-[38px] font-bold text-white mb-4 leading-tight">
            Not sure which solution fits you?
          </h2>
          <p className="text-[15px] text-white/80 leading-relaxed mb-8 max-w-md">
            Our solutions team will assess your space and recommend the right configuration.
            Response within 48 hours — guaranteed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-3 text-[14px] font-semibold text-[#196FD2] hover:bg-[#f5f5f5] transition-colors"
            >
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
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
