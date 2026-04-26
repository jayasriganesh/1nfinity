import { ImageResponse } from 'next/og'
import { getProductBySlug } from '@/data/products'

export const alt = 'Product — InfinityX Global'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category: catSlug, product: prodSlug } = await params
  const result = getProductBySlug(catSlug, prodSlug)
  const productName = result?.product.name ?? prodSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const categoryName = result?.category.name ?? catSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const tagline = result?.product.tagline ?? result?.product.description ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #111 0%, #1a2a4a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: '16px', color: '#196FD2', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
          {categoryName}
        </div>
        <div style={{ fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>
          {productName}
        </div>
        {tagline ? (
          <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, marginBottom: 'auto', maxWidth: '900px' }}>
            {tagline.length > 140 ? tagline.slice(0, 137) + '…' : tagline}
          </div>
        ) : (
          <div style={{ marginBottom: 'auto' }} />
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            infinityxglobal.com
          </div>
          <div style={{ fontSize: '14px', color: '#196FD2', letterSpacing: '1px' }}>
            Contact for Pricing
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
