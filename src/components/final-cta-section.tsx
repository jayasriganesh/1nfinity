import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface FinalCtaSectionProps {
  className?: string
}

// ─── Component ────────────────────────────────────────────
export function FinalCtaSection({ className }: FinalCtaSectionProps) {
  return (
    <section className={cn('py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50', className)}>
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center bg-primary rounded-2xl p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle dotted pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Display Solutions?
            </h2>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Get a custom quote for your project. Our team responds within 48 hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/get-quote">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-10 py-6 text-base text-white border-2 border-white/40 hover:bg-white/10 hover:border-white bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
