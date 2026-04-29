import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'About InfinityX Global'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #111 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: '18px', color: '#196FD2', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
          About Us
        </div>
        <div style={{ fontSize: '58px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          InfinityX Global
        </div>
        <div style={{ display: 'flex', gap: '40px', marginBottom: 'auto' }}>
          {[['2014', 'Founded'], ['4000+', 'Installations'], ['Pan India', 'Coverage']].map(([val, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#196FD2' }}>{val}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
          MSME · ISO · GeM Certified
        </div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          infinityxglobal.com
        </div>
      </div>
    ),
    { ...size }
  )
}
