import { Section } from '@/components/layout/section'
import { Card } from '@/components/layout/card'
import { grid, spacing } from '@/lib/layout-system'
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
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=1200&q=80',
    imageAlt: 'Display accessories and peripherals',
  }

  return (
    <Section size="lg" background="white" withTransition className={className}>
      <div className={cn(grid.cols2, spacing.gap.lg)}>
        {/* Devices Card */}
        <Card
          title={devices.title}
          description={devices.description}
          href={devices.href}
          image={devices.image}
          imageAlt={devices.imageAlt}
          badge={devices.subtitle}
          size="hero"
          className="min-h-[400px] lg:min-h-[500px]"
        />

        {/* Accessories Card */}
        <Card
          title={accessories.title}
          description={accessories.description}
          href={accessories.href}
          image={accessories.image}
          imageAlt={accessories.imageAlt}
          badge={accessories.subtitle}
          size="hero"
          className="min-h-[400px] lg:min-h-[500px]"
        />
      </div>
    </Section>
  )
}
