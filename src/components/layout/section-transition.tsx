import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface SectionTransitionProps {
  variant?: 'divider' | 'spacer' | 'gradient' | 'wave'
  className?: string
}

// ─── Section Transition Component ────────────────────────
export function SectionTransition({
  variant = 'spacer',
  className,
}: SectionTransitionProps) {
  if (variant === 'divider') {
    return (
      <div className={cn('py-12 lg:py-16', className)}>
        <div className="container-custom">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>
    )
  }

  if (variant === 'spacer') {
    return <div className={cn('h-12 lg:h-20', className)} />
  }

  if (variant === 'gradient') {
    return (
      <div className={cn('h-24 lg:h-32 bg-gradient-to-b from-transparent via-gray-50 to-transparent', className)} />
    )
  }

  if (variant === 'wave') {
    return (
      <div className={cn('relative h-24 lg:h-32', className)}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            className="fill-gray-50/50"
          />
        </svg>
      </div>
    )
  }

  return null
}
