import { cn } from '@/lib/utils'
import { spacing, backgrounds } from '@/lib/layout-system'

// ─── Types ────────────────────────────────────────────────────
interface SectionProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'subtle' | 'primary' | 'accent' | 'elevated'
  container?: 'default' | 'narrow' | 'wide' | 'fullWidth'
  withTransition?: boolean
  fullWidth?: boolean // Allow section to break out of container
}

// ─── Section Wrapper ──────────────────────────────────────────
export function Section({
  children,
  className,
  size = 'md',
  background = 'white',
  container = 'default',
  withTransition = false,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        spacing.section[size],
        backgrounds[background],
        className
      )}
    >
      {/* Top transition overlay - softens section entry */}
      {withTransition && (
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
      )}

      {/* Bottom transition overlay - prepares for next section */}
      {withTransition && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
      )}

      {fullWidth ? (
        <div className="relative z-10">{children}</div>
      ) : (
        <div className={cn(spacing.container[container], 'relative z-10')}>
          {children}
        </div>
      )}
    </section>
  )
}

// ─── Section Header ───────────────────────────────────────────
interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={cn('max-w-3xl mb-12 lg:mb-16', alignClass, className)}>
      {badge && (
        <div className={cn('mb-4', align === 'center' ? 'flex justify-center' : '')}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
