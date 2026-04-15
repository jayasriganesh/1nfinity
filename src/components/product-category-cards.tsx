import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface ProductCategoryCardsProps {
  className?: string
}

interface CategoryCard {
  name: string
  href: string
  imageDefault: string
  imageHover: string
  imageAlt: string
}

// ─── Component ────────────────────────────────────────────
export function ProductCategoryCards({ className }: ProductCategoryCardsProps) {
  // Category cards from pages.md (V1 scope: 3 cards)
  const categories: CategoryCard[] = [
    {
      name: 'Interactive Flat Panels',
      href: '/products/interactive-flat-panels',
      imageDefault: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
      imageHover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      imageAlt: 'Interactive flat panel display in conference room',
    },
    {
      name: 'Kiosks & Signage',
      href: '/products/kiosks',
      imageDefault: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      imageHover: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
      imageAlt: 'Digital kiosk and signage display',
    },
    {
      name: 'CCTV & Security',
      href: '/products/cctv',
      imageDefault: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      imageHover: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
      imageAlt: 'CCTV security camera system',
    },
  ]

  return (
    <section className={cn('py-16 lg:py-24 bg-white', className)}>
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase">
            Our Products
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our comprehensive range of display solutions designed for enterprise, education, retail, and government sectors.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-md bg-surface transition-all duration-300 hover:shadow-lg">
                {/* Image Container with Dual Image Hover Effect */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  {/* Default Image */}
                  <Image
                    src={category.imageDefault}
                    alt={category.imageAlt}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover Image */}
                  <Image
                    src={category.imageHover}
                    alt={category.imageAlt}
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Category Label */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-center text-text-primary group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            View All Products
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
