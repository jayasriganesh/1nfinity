import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'InfinityX Global'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#196FD2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-1px',
            marginBottom: '24px',
          }}
        >
          InfinityX Global
        </div>
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Premier System Integration &amp; Intelligent Display Solutions
        </div>
        <div
          style={{
            marginTop: '40px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          infinityxglobal.com
        </div>
      </div>
    ),
    { ...size }
  )
}
