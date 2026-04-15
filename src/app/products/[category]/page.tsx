import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getCategoryBySlug, productCategories } from '@/data/products'
import { CategoryPageTemplate } from '@/components/category-page-template'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ category: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  return {
    title: `${category.name} | InfinityX Global`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)

  // Unknown slug → 404
  if (!category) notFound()

  // V1-available categories → full template
  if (category.availableV1) {
    return <CategoryPageTemplate category={category} />
  }

  // After-trip categories → coming soon holding page
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-[500px] text-center">
        <p className="font-sans text-[12px] font-semibold tracking-[3px] uppercase text-[#196FD2] mb-4">
          Coming Soon
        </p>
        <h1 className="font-heading text-[32px] md:text-[40px] text-[#111] mb-4 leading-tight">
          {category.name}
        </h1>
        <p className="font-sans text-[15px] text-[#666] mb-8 leading-relaxed">
          {category.description}
        </p>
        <p className="font-sans text-[14px] text-[#999] mb-8">
          This product range will be available shortly. Get in touch for pricing and specifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/get-quote"
            className="inline-block bg-[#196FD2] text-white font-sans text-[14px] px-8 py-3 rounded-[5px] hover:bg-[#1560b8] transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            href="/products"
            className="inline-block border border-[#ddd] text-[#333] font-sans text-[14px] px-8 py-3 rounded-[5px] hover:border-[#196FD2] hover:text-[#196FD2] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </main>
  )
}
