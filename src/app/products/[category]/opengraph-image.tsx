import { ImageResponse } from 'next/og'
import { getCategoryBySlug, productCategories } from '@/data/products'

export const dynamic = 'force-static'
export const alt = 'Product Category — InfinityX Global'

export function generateStaticParams() {
  return productCategories.map((cat) => ({ category: cat.slug }))
}
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  const name = category?.name ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

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
          Products
        </div>
        <div style={{ fontSize: '56px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          {name}
        </div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginBottom: 'auto' }}>
          {category?.description ?? 'High-performance display and AV solutions across India.'}
        </div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          infinityxglobal.com
        </div>
      </div>
    ),
    { ...size }
  )
}
