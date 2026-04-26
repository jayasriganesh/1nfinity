'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface AboutStatsSectionProps {
  className?: string
}

interface Stat {
  value: string
  label: string
  isNumeric: boolean
  numericValue?: number
  suffix?: string
}

// ─── Component ────────────────────────────────────────────
export function AboutStatsSection({ className }: AboutStatsSectionProps) {
  const stats: Stat[] = [
    {
      value: '4000+',
      label: 'Total Installations',
      isNumeric: true,
      numericValue: 4000,
      suffix: '+',
    },
    {
      value: '2014',
      label: 'Founded',
      isNumeric: true,
      numericValue: 2014,
    },
    {
      value: 'MSME · ISO · GeM',
      label: 'Certifications',
      isNumeric: false,
    },
    {
      value: 'Pan India',
      label: 'Service Network',
      isNumeric: false,
    },
  ]

  return (
    <section
      className={cn(
        'py-24 lg:py-32 relative overflow-hidden',
        // Dark background
        'bg-[#1a1a1a]',
        className
      )}
    >
      {/* Dotted Pattern Overlay - MAXHUB Style */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-custom relative z-10">
        {/* About Content - Centered */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            ABOUT INFINITYX GLOBAL
          </h2>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6">
            As an innovation-driven team, InfinityX Global focuses on developing collaboration solutions that enable immersive
            communications. Since established in 2014, we have enhanced team creativity and productivity nationwide by
            providing advanced audio-visual technologies and one-stop solutions.
          </p>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10">
            InfinityX Ecosystem focuses on a total solution for complete scenarios. From smart Interactive Displays, to high-quality
            LED Video Walls and eye-catching Digital Signage, to CCTV & Security Solutions, we&apos;ve got you covered.
          </p>

          {/* Learn More Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/about">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Sub-components ───────────────────────────────────────

interface StatItemProps {
  stat: Stat
}

function StatItem({ stat }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!stat.isNumeric || !isInView || !stat.numericValue) return

    const duration = 2000 // 2 seconds animation
    const steps = 60 // 60 steps for smooth animation
    const increment = stat.numericValue / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(stat.numericValue!)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, stat.isNumeric, stat.numericValue])

  return (
    <div ref={ref} className="text-center">
      {/* Stat Value */}
      <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
        {stat.isNumeric ? (
          <>
            {count.toLocaleString()}
            {stat.suffix && <span>{stat.suffix}</span>}
          </>
        ) : (
          <span className="text-2xl lg:text-3xl font-bold">{stat.value}</span>
        )}
      </div>

      {/* Stat Label */}
      <div className="text-sm lg:text-base text-white/70 font-medium">
        {stat.label}
      </div>
    </div>
  )
}
