'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function AboutSectionWithStats() {
  const stats = [
    { value: '4,000+', label: 'Installations' },
    { value: '2,014', label: 'Established' },
    { value: 'MSME · ISO · GeM', label: 'Certifications' },
    { value: 'Pan India', label: 'Service Network' },
  ]

  return (
    <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6">
            ABOUT INFINITYX GLOBAL
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            As an innovation-driven team, InfinityX Global focuses on developing collaboration solutions
            that enable immersive communication. Since established in 2014, we have enhanced team
            creativity and productivity nationwide by providing advanced audio-visual technology.
          </p>

          <p className="text-white/80 text-lg leading-relaxed mb-10">
            InfinityX Ecosystem focuses on a total solution for complete scenarios. From smart Interactive
            Displays, to high-quality LED Video Walls and eye-catching Digital Signage, to CCTV & Security
            Solutions, we've got you covered.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold mb-16"
            asChild
          >
            <Link href="/about">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-8 pt-12 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  )
}
