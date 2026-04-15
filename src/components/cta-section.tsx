import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface CtaSectionProps {
  className?: string
}

// ─── Component ────────────────────────────────────────────
export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section className={cn('py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden', className)}>
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-primary rounded-3xl p-12 lg:p-16 shadow-2xl">
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
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-base"
            >
              <Link href="/get-quote">Get Quote</Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="px-8 py-6 text-base text-white border-2 border-white/30 hover:bg-white/10 hover:border-white"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
