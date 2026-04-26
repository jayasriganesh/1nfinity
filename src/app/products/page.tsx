import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { v1Categories } from '@/data/products'

export const metadata: Metadata = {
  title: 'Products | Interactive Displays, Kiosks & CCTV — InfinityX Global',
  description:
    'Explore InfinityX Global\'s full range — interactive flat panels, digital kiosks, CCTV security systems, and LED video walls. Trusted by enterprises and schools across India since 2014.',
  keywords: [
    'interactive flat panel supplier India',
    'digital kiosk manufacturer India',
    'CCTV solutions supplier',
    'AV products India',
    'display solutions Hyderabad',
    'intelligent display solutions India',
  ],
  openGraph: {
    title: 'Products | Interactive Displays, Kiosks & CCTV — InfinityX Global',
    description: 'Interactive flat panels, digital kiosks, CCTV, and LED video walls from InfinityX Global. Trusted across India since 2014.',
    url: 'https://infinityxglobal.com/products',
    type: 'website',
  },
}

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-surface py-16 lg:py-20 border-b border-border">
        <div className="mx-auto w-full max-w-[1230px] px-4 md:px-[15px] text-center">
          <h1 className="font-heading text-[32px] md:text-[48px] font-bold uppercase text-text-primary mb-4">
            Our Products
          </h1>
          <p className="text-[16px] md:text-[18px] text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A comprehensive range of display solutions for enterprise, education, retail, and
            government sectors.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1230px] px-4 md:px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {v1Categories.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-md bg-surface transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Image container */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {category.imageHover && (
                      <Image
                        src={category.imageHover}
                        alt={category.imageAlt}
                        fill
                        className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  {/* Label */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-center text-text-primary group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
