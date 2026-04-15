import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News & Insights | InfinityX Global',
  description: 'Latest news, product updates, and industry insights from InfinityX Global.',
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <h1 className="font-heading text-[36px] md:text-[52px] font-bold uppercase tracking-wide text-[#333] mb-4">
            News &amp; Insights
          </h1>
          <p className="text-[16px] text-[#666] max-w-xl leading-relaxed">
            Stay updated with the latest from InfinityX Global — product launches, industry news,
            and collaboration technology insights.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <h2 className="font-heading text-[22px] text-[#333] mb-3 uppercase tracking-wide">Content Coming Soon</h2>
            <p className="text-[14px] text-[#999] leading-relaxed mb-8">
              We&apos;re working on bringing you the latest news and insights. Check back soon.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[5px] bg-[#196FD2] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#1560b8] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
