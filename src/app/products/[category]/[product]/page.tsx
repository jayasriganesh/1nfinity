import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, productCategories } from '@/data/products'
import { ProductPageTemplate } from '@/components/product-page-template'

interface Props {
  params: Promise<{ category: string; product: string }>
}

// Pre-render all known category + product slug combinations at build time
export async function generateStaticParams() {
  return productCategories.flatMap((cat) =>
    cat.products.map((p) => ({ category: cat.slug, product: p.slug }))
  )
}

const BASE = 'https://infinityxglobal.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, product: prodSlug } = await params
  const result = getProductBySlug(catSlug, prodSlug)
  if (!result) return {}
  const { category, product } = result
  const title = `${product.name} — ${category.name}`
  const description = product.tagline || product.description
  return {
    title,
    description,
    openGraph: {
      title: `${title} | InfinityX Global`,
      description,
      url: `${BASE}/products/${catSlug}/${prodSlug}`,
      type: 'website',
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { category: catSlug, product: prodSlug } = await params
  const result = getProductBySlug(catSlug, prodSlug)
  if (!result) notFound()

  const { category, product } = result

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.tagline || product.description,
    brand: { '@type': 'Brand', name: 'InfinityX Global' },
    category: category.name,
    ...(product.heroImage ? { image: `${BASE}${product.heroImage}` } : {}),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'INR',
      priceValidUntil: '2099-12-31',
      description: 'Contact for pricing',
      seller: { '@type': 'Organization', name: 'InfinityX Global' },
      url: `${BASE}/get-quote?product=${encodeURIComponent(product.slug)}&category=${encodeURIComponent(catSlug)}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE}/products` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `${BASE}/products/${catSlug}` },
      { '@type': 'ListItem', position: 4, name: product.name, item: `${BASE}/products/${catSlug}/${prodSlug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductPageTemplate
        product={product}
        categoryName={category.name}
        categorySlug={catSlug}
      />
    </>
  )
}
