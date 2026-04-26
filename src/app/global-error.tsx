'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', padding: '0 16px' }}>
          <p style={{ fontSize: '96px', fontWeight: 700, color: '#196FD2', lineHeight: 1, margin: '0 0 16px' }}>
            500
          </p>
          <h1 style={{ fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#333', margin: '0 0 16px' }}>
            Critical Error
          </h1>
          <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6, margin: '0 0 32px' }}>
            A critical error occurred. Please refresh the page or contact us at contact@infinityxglobal.com.
          </p>
          <button
            onClick={reset}
            style={{ background: '#196FD2', color: '#fff', border: 'none', borderRadius: '5px', padding: '12px 24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  )
}
