import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/section'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface CtaSectionProps {
  className?: string
}

// ─── Component ────────────────────────────────────────────
export function CtaSection({ className }: CtaSectionProps) {
  return (
    <Section size="lg" background="subtle" withTransition className={className}>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-12 lg:p-16 shadow-2xl text-center">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Display Solutions?
          </h2>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your project. Our team responds within 48 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/get-quote">Get Quote</Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="px-8 py-6 text-base text-white border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
