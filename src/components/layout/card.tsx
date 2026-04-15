import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { card as cardStyles, interactions } from '@/lib/layout-system'

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

// ─── Unified Card Component ───────────────────────────────────
export function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  badge,
  variant = 'elevated',
  size = 'medium',
  className,
  children,
}: CardProps) {
  const content = (
    <>
      {/* Image Layer */}
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay with hover intensity change */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30" />
        </div>
      )}

      {/* Content Layer */}
      <div className={cn(
        'relative h-full flex flex-col justify-end p-6 lg:p-8 transition-all duration-500',
        'group-hover:p-7 lg:group-hover:p-9',
        image ? 'text-white' : 'text-text-primary'
      )}>
        {badge && (
          <span className="inline-block mb-3 w-fit px-3 py-1 bg-primary/90 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
            {badge}
          </span>
        )}

        <h3 className={cn(
          'font-bold mb-2 transition-all duration-300',
          size === 'hero' || size === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl',
          !image && 'group-hover:text-primary',
          'group-hover:translate-y-[-4px]'
        )}>
          {title}
        </h3>

        {description && (
          <p className={cn(
            'text-sm lg:text-base mb-3 line-clamp-3 transition-all duration-300',
            image ? 'text-white/90 group-hover:text-white' : 'text-text-secondary',
            'opacity-90 group-hover:opacity-100'
          )}>
            {description}
          </p>
        )}

        {children}

        {/* Hover Arrow with slide animation */}
        {href && (
          <div className={cn(
            'flex items-center gap-2 font-semibold mt-2',
            'opacity-0 group-hover:opacity-100',
            'transition-all duration-500 ease-out',
            'transform translate-y-4 group-hover:translate-y-0',
            image ? 'text-white' : 'text-primary'
          )}>
            <span className="text-sm">Explore</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </>
  )

  const baseClasses = cn(
    'group relative block',
    cardStyles.base,
    !image && cardStyles[variant],
    'overflow-hidden', // Ensure containment
    // Rich hover interactions
    'transition-all duration-500 ease-out',
    'hover:scale-[1.02] active:scale-[0.98]',
    'hover:-translate-y-2',
    'shadow-lg hover:shadow-2xl hover:shadow-primary/10',
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
  variant?: 'elevated' | 'glass'
  className?: string
}

export function IconCard({
  icon,
  title,
  description,
  variant = 'glass',
  className,
}: IconCardProps) {
  return (
    <div
      className={cn(
        cardStyles.base,
        cardStyles[variant],
        interactions.slowTransition,
        interactions.hoverLift,
        'p-6',
        className
      )}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {title}
      </h3>

      <p className="text-sm text-text-secondary">
        {description}
      </p>
    </div>
  )
}
