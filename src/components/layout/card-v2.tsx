import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────
interface CardProps {
  title: string
  description?: string
  href?: string
  image?: string
  imageAlt?: string
  badge?: string
  variant?: 'elevated' | 'glass' | 'outlined' | 'gradient'
  size?: 'small' | 'medium' | 'large' | 'tall' | 'hero'
  className?: string
  children?: React.ReactNode
}

// ─── Refined Card Component ───────────────────────────────────
export function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  badge,
  size = 'medium',
  className,
  children,
}: CardProps) {
  const content = (
    <>
      {/* Image Layer */}
      {image && (
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay - more refined */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/30 group-hover:from-gray-900/90 group-hover:via-gray-900/50 transition-all duration-500" />
        </div>
      )}

      {/* Content Layer */}
      <div className={cn(
        'relative h-full flex flex-col justify-end p-8',
        'text-white'
      )}>
        {badge && (
          <span className="inline-block mb-4 w-fit px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded">
            {badge}
          </span>
        )}

        <h3 className={cn(
          'font-bold mb-3 leading-tight',
          size === 'hero' || size === 'large' ? 'text-3xl' : 'text-2xl'
        )}>
          {title}
        </h3>

        {description && (
          <p className="text-base text-white/80 mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {children}

        {/* Hover Arrow */}
        {href && (
          <div className="flex items-center gap-2 mt-2 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">Explore</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </>
  )

  const baseClasses = cn(
    'group relative block',
    'overflow-hidden rounded-lg',
    // Professional hover states
    'transition-all duration-500 ease-out',
    'hover:shadow-2xl',
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return <div className={baseClasses}>{content}</div>
}

// ─── Icon Card (for features/services) ───────────────────────
interface IconCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function IconCard({
  icon,
  title,
  description,
  className,
}: IconCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 p-6',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:border-gray-300',
        className
      )}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
