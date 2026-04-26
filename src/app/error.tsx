'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-[15px]">
      <div className="text-center max-w-lg">
        <p className="font-heading text-[96px] md:text-[120px] font-bold text-[#196FD2] leading-none mb-4">
          500
        </p>
        <h1 className="font-heading text-[24px] md:text-[32px] font-bold uppercase tracking-wide text-[#333] mb-4">
          Something Went Wrong
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed mb-10">
          An unexpected error occurred. Our team has been notified. Please try again or contact us if the issue persists.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-[5px] bg-[#196FD2] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#1560b8] transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-[5px] border border-[#e5e5e5] px-6 py-3 text-[14px] font-semibold text-[#333] hover:border-[#196FD2] hover:text-[#196FD2] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-[5px] border border-[#e5e5e5] px-6 py-3 text-[14px] font-semibold text-[#333] hover:border-[#196FD2] hover:text-[#196FD2] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
