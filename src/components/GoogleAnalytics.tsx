'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('cookie_consent') === 'accepted') {
      setConsented(true)
    }
    const onConsent = () => setConsented(true)
    window.addEventListener('cookie-consent-accepted', onConsent)
    return () => window.removeEventListener('cookie-consent-accepted', onConsent)
  }, [])

  if (!id || !consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  )
}
