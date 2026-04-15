'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface StatsStripProps {
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
export function StatsStrip({ className }: StatsStripProps) {
  // Stats from pages.md homepage section
  const stats: Stat[] = [
    {
      value: '4000+',
      label: 'Installations',
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
    <section className={cn('py-20 lg:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden', className)}>
      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath fill='%23ffffff' d='M0 300V0h600v300H0zm600 0V0h600v300H600zM0 600V300h600v300H0zm600 0V300h600v300H600z'/%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='1' d='M200 100c20 0 40 20 60 20s40-20 60-20 40 20 60 20M500 150c-20 20-40 40-60 40s-40-20-60-20-40 20-60 20M800 100c20 0 40 20 60 20s40-20 60-20 40 20 60 20M300 400c20 0 40-20 60-20s40 20 60 20 40-20 60-20M700 450c20 0 40-20 60-20s40 20 60 20'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
      <div className="text-5xl lg:text-6xl font-bold text-white mb-3">
        {stat.isNumeric ? (
          <>
            {count.toLocaleString()}
            {stat.suffix && <span>{stat.suffix}</span>}
          </>
        ) : (
          <span className="text-3xl lg:text-4xl">{stat.value}</span>
        )}
      </div>

      {/* Stat Label */}
      <div className="text-sm lg:text-base text-white/80 font-medium uppercase tracking-wide">
        {stat.label}
      </div>
    </div>
  )
}
