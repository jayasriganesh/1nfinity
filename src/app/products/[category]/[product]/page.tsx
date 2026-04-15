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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, product: prodSlug } = await params
  const result = getProductBySlug(catSlug, prodSlug)
  if (!result) return {}
  const { category, product } = result
  return {
    title: `${product.name} — ${category.name} | InfinityX Global`,
    description: product.tagline || product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { category: catSlug, product: prodSlug } = await params
  const result = getProductBySlug(catSlug, prodSlug)
  if (!result) notFound()

  const { category, product } = result

  return (
    <ProductPageTemplate
      product={product}
      categoryName={category.name}
      categorySlug={catSlug}
    />
  )
}
