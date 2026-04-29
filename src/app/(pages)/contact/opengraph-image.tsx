import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Contact InfinityX Global'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #196FD2 0%, #0e4d9e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
          Get In Touch
        </div>
        <div style={{ fontSize: '60px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          Contact Us
        </div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.8)', marginBottom: 'auto' }}>
          We respond within 48 hours — guaranteed.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>contact@infinityxglobal.com</div>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>+91 82288 22849</div>
        </div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          infinityxglobal.com
        </div>
      </div>
    ),
    { ...size }
  )
}
