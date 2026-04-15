// ─── Category Page Template ───────────────────────────────────────────────────
// This component powers all /products/[category] pages.
// CLONE TARGET: Replace the inner layout sections with the cloned design.
// The props interface and data wiring must stay intact — only markup changes.

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { ProductCategory, Product } from '@/data/products'

interface CategoryPageTemplateProps {
  category: ProductCategory
}

export function CategoryPageTemplate({ category }: CategoryPageTemplateProps) {
  return (
    <div className="bg-white">
      {/* ── Category Header ── */}
      <section className="bg-surface py-16 lg:py-20 border-b border-border">
        <div className="mx-auto w-full max-w-[1230px] px-4 md:px-[15px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-text-primary">{category.name}</span>
          </nav>

          <h1 className="font-heading text-[32px] md:text-[42px] font-bold uppercase text-text-primary mb-4 leading-tight">
            {category.name}
          </h1>
          <p className="text-[16px] md:text-[18px] text-text-secondary max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1230px] px-4 md:px-[15px]">
          {category.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  categorySlug={category.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                Products coming soon. Contact us for details.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Get Quote Strip ── */}
      <section className="bg-primary py-14">
        <div className="mx-auto w-full max-w-[1230px] px-4 md:px-[15px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-[24px] md:text-[28px] font-bold text-white mb-1">
              Need a custom solution?
            </h2>
            <p className="text-white/80 text-[15px]">
              Our team will respond within 48 hours with pricing and availability.
            </p>
          </div>
          <Link
            href={`/get-quote?category=${encodeURIComponent(category.slug)}`}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-[5px] bg-white px-8 py-4 font-semibold text-primary text-[15px] hover:bg-surface transition-colors"
          >
            <span>Get Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

// ─── Product Card (used inside CategoryPageTemplate) ─────────────────────────

function ProductCard({
  product,
  categorySlug,
}: {
  product: Product
  categorySlug: string
}) {
  const href = `/products/${categorySlug}/${product.slug}`

  return (
    <div className="group bg-white rounded-md overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <Link href={href} className="block relative aspect-[4/3] bg-surface overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-[18px] font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/get-quote?product=${encodeURIComponent(product.slug)}&category=${encodeURIComponent(categorySlug)}`}
            className="text-sm text-text-muted hover:text-primary transition-colors font-medium"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
