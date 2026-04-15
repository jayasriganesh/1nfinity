'use client'

import Link from 'next/link'
import Image from 'next/image'

export function ProductCategoryLargeCards() {
  const categories = [
    {
      id: 'professional-displays',
      badge: 'CUTTING-EDGE TECHNOLOGY',
      title: 'Professional Displays',
      description: 'From Interactive Flat Panels to LED Video Walls and commercial displays, we deliver transformative visual experiences designed for collaboration and engagement.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      href: '/products',
    },
    {
      id: 'accessories',
      badge: 'COMPLETE ECOSYSTEM',
      title: 'Accessories & Peripherals',
      description: 'Premium mounts, cables, presentation tools, and peripheral devices to complement your display setup. Professional-grade accessories built for reliability and performance.',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&q=80',
      href: '/products/accessories',
    },
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Badge */}
                <div className="inline-flex mb-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded">
                    {category.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
