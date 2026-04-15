import Link from 'next/link'
import { Monitor, Smartphone, Cloud, Settings, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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
    <section className={cn('py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden', className)}>
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Software Ecosystem
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            CAST CMS Platform
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Powerful content management software designed to simplify digital signage deployment and management at scale. Control everything from a single, intuitive dashboard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/60 shadow-xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Continuous Operation</div>
            </div>
            <div className="text-center border-l border-r border-border/30">
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
      </div>
    </section>
  )
}
