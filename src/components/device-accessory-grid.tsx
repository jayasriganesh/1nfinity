import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface DeviceAccessoryGridProps {
  className?: string
}

interface GridItem {
  title: string
  subtitle: string
  description: string
  href: string
  image: string
  imageAlt: string
}

// ─── Component ────────────────────────────────────────────
export function DeviceAccessoryGrid({ className }: DeviceAccessoryGridProps) {
  const devices: GridItem = {
    title: 'Professional Displays',
    subtitle: 'Enterprise-Grade Solutions',
    description: 'From interactive flat panels to LED video walls and commercial displays, discover our complete range of professional display technology designed for collaboration and engagement.',
    href: '/products',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&q=80',
    imageAlt: 'Professional display technology',
  }

  const accessories: GridItem = {
    title: 'Accessories & Peripherals',
    subtitle: 'Complete Your Setup',
    description: 'Premium mounts, cables, interactive pens, and peripheral devices to maximize your display investment. Professional-grade accessories built for reliability and performance.',
    href: '/products/accessories',
    image: 'https://images.unsplash.com/photo-1589739900243-c5a9d8d0e7f2?w=1200&q=80',
    imageAlt: 'Display accessories and peripherals',
  }

  return (
    <section className={cn('py-20 lg:py-28 bg-white relative overflow-hidden', className)}>
      {/* Subtle background gradient for continuity */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Devices Card */}
          <Link
            href={devices.href}
            className="group relative overflow-hidden rounded-lg bg-surface hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src={devices.image}
                alt={devices.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative -mt-20 p-6 lg:p-8 z-10">
              <div className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-semibold uppercase tracking-wider rounded mb-3">
                {devices.subtitle}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {devices.title}
              </h3>
              <p className="text-white/90 text-sm lg:text-base mb-4">
                {devices.description}
              </p>
              <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </Link>

          {/* Accessories Card */}
          <Link
            href={accessories.href}
            className="group relative overflow-hidden rounded-lg bg-surface hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src={accessories.image}
                alt={accessories.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative -mt-20 p-6 lg:p-8 z-10">
              <div className="inline-block px-3 py-1 bg-secondary/90 text-white text-xs font-semibold uppercase tracking-wider rounded mb-3">
                {accessories.subtitle}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {accessories.title}
              </h3>
              <p className="text-white/90 text-sm lg:text-base mb-4">
                {accessories.description}
              </p>
              <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                <span>View Accessories</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
