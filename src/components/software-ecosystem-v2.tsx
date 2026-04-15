import Link from 'next/link'
import { Monitor, Smartphone, Cloud, Settings, ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { IconCard } from '@/components/layout/card'
import { Button } from '@/components/ui/button'
import { grid, spacing } from '@/lib/layout-system'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface SoftwareEcosystemProps {
  className?: string
}

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

// ─── Component ────────────────────────────────────────────
export function SoftwareEcosystem({ className }: SoftwareEcosystemProps) {
  const features: Feature[] = [
    {
      icon: Monitor,
      title: 'Multi-Display Management',
      description: 'Centralized control for all your connected displays across multiple locations',
    },
    {
      icon: Smartphone,
      title: 'Mobile Control',
      description: 'Manage content and monitor devices from anywhere with our mobile app',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Platform',
      description: 'Secure, scalable cloud infrastructure with 99.9% uptime guarantee',
    },
    {
      icon: Settings,
      title: 'Advanced Scheduling',
      description: 'Create complex scheduling rules and automate content distribution',
    },
  ]

  return (
    <Section size="xl" background="accent" withTransition className={className}>
      <SectionHeader
        badge="Software Ecosystem"
        title="CAST CMS Platform"
        subtitle="Powerful content management software designed to simplify digital signage deployment and management at scale. Control everything from a single, intuitive dashboard."
      />

      {/* Features Grid */}
      <div className={cn(grid.cols4, spacing.gap.lg, 'mb-12')}>
        {features.map((feature, index) => (
          <IconCard
            key={index}
            icon={<feature.icon className="h-6 w-6 text-white" />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Key Benefits Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/60 shadow-xl">
        <div className={cn(grid.cols3, spacing.gap.lg, 'mb-8')}>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">Continuous Operation</div>
          </div>
          <div className="text-center lg:border-l lg:border-r border-border/30">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">Multi-Zone</div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">Content Layouts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">Web-Based</div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">Platform Access</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <Link href="/products/software">
              Learn More About CAST CMS
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
