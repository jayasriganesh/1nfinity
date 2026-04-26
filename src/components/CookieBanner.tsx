'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] text-white px-4 py-4 md:py-3">
      <div className="mx-auto max-w-[1230px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[13px] text-[#ccc] leading-relaxed">
          We use cookies to improve your experience.{' '}
          <Link href="/privacy-policy#cookies" className="underline text-white hover:text-[#196FD2] transition-colors">
            Learn more
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[13px] font-semibold text-[#999] hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-[13px] font-semibold bg-[#196FD2] hover:bg-[#1560b8] text-white rounded-[5px] px-5 py-2 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
