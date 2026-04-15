'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CtaSectionGradient() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Gradient Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-16 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Display Solutions?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Get a custom quote for your project. Our team responds within 48 hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <Link href="/get-quote">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
                asChild
              >
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
