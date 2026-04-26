import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Get a Quote — InfinityX Global'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0e4d9e 0%, #196FD2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
          Free Consultation
        </div>
        <div style={{ fontSize: '60px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          Get a Quote
        </div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, marginBottom: 'auto' }}>
          Tell us about your project — we&apos;ll send a tailored proposal within 48 hours.
        </div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          infinityxglobal.com
        </div>
      </div>
    ),
    { ...size }
  )
}
