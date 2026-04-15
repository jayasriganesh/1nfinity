import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface ProductListingCardProps {
  image: string
  name: string
  description: string
  href: string
  className?: string
}

// ─── Component ────────────────────────────────────────────
export function ProductListingCard({
  image,
  name,
  description,
  href,
  className,
}: ProductListingCardProps) {
  return (
    <div
      className={cn(
        'group bg-white rounded-md overflow-hidden',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {/* Product Image (Clickable) */}
      <Link href={href} className="block relative aspect-[4/3] bg-surface overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name */}
        <h4 className="text-xl font-semibold text-text-primary mb-3">
          {name}
        </h4>

        {/* Short Description */}
        {description && (
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Learn More Link */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm transition-colors duration-200 hover:text-primary-dark"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
