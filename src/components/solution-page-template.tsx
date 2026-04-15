'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Solution } from '@/data/solutions'

// ─── Animation helpers ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})

// ─── Root component ───────────────────────────────────────
export function SolutionPageTemplate({ solution }: { solution: Solution }) {
  const [activeScenario, setActiveScenario] = useState(0)

  return (
    <div className="bg-white">
      {/* 1 ── Hero ───────────────────────── */}
      <SolutionHero solution={solution} />

      {/* 2 ── Features Strip ─────────────── */}
      <SolutionFeatures solution={solution} />

      {/* 3 ── Scenarios (tabbed) ─────────── */}
      <SolutionScenarios
        solution={solution}
        activeScenario={activeScenario}
        setActiveScenario={setActiveScenario}
      />

      {/* 4 ── Customer Stories ───────────── */}
      {solution.customerStories && solution.customerStories.length > 0 && (
        <SolutionStories solution={solution} />
      )}

      {/* 5 ── CTA ────────────────────────── */}
      <SolutionCTA solution={solution} />
    </div>
  )
}

// ─── 1. Hero ─────────────────────────────────────────────
function SolutionHero({ solution }: { solution: Solution }) {
  const dark = solution.heroDark

  return (
    <section
      className={cn(
        'relative overflow-hidden flex items-center',
        dark ? 'min-h-[500px] md:min-h-[600px]' : 'min-h-[320px] md:min-h-[400px]'
      )}
    >
      {/* BG image */}
      <div className="absolute inset-0">
        <Image
          src={solution.heroImage}
          alt={solution.heroImageAlt ?? solution.name}
          fill
          className={cn('object-cover', dark ? 'opacity-80' : 'opacity-50')}
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0',
          dark
            ? 'bg-gradient-to-b from-black/50 via-black/30 to-black/50'
            : 'bg-gradient-to-b from-white/60 via-white/40 to-white/80'
        )}
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-maxhub px-4 md:px-[15px] py-20 md:py-28 text-center">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className={cn(
              'font-heading text-[36px] md:text-[48px] lg:text-[56px] font-bold uppercase tracking-wide leading-tight mb-5',
              dark ? 'text-white' : 'text-text-primary'
            )}
          >
            {solution.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className={cn(
              'text-[16px] md:text-[20px] leading-relaxed font-light',
              dark ? 'text-white/85' : 'text-text-secondary'
            )}
          >
            {solution.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 2. Features Strip ────────────────────────────────────
function SolutionFeatures({ solution }: { solution: Solution }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white border-b border-border">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {solution.features.map((feature, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = feature.icon ? ((LucideIcons as any)[feature.icon] ?? LucideIcons.CheckCircle) : LucideIcons.CheckCircle

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-start gap-4 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-[16px] md:text-[18px] font-bold text-text-primary mb-2 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 3. Scenarios ─────────────────────────────────────────
function SolutionScenarios({
  solution,
  activeScenario,
  setActiveScenario,
}: {
  solution: Solution
  activeScenario: number
  setActiveScenario: (i: number) => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })
  const active = solution.scenarios[activeScenario]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        {/* Section heading */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-10 md:mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[24px] md:text-[36px] font-bold uppercase tracking-wide text-text-primary mb-4"
          >
            {solution.overviewHeading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[15px] md:text-[16px] text-text-secondary leading-relaxed max-w-2xl"
          >
            {solution.overviewDescription}
          </motion.p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-0 overflow-x-auto scrollbar-hide border-b border-border mb-8 md:mb-12 bg-white rounded-t-md shadow-sm">
          {solution.scenarios.map((scenario, i) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(i)}
              className={cn(
                'relative flex-shrink-0 px-5 md:px-6 py-4 text-[13px] md:text-[14px] font-medium whitespace-nowrap transition-all duration-200',
                'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:transition-all after:duration-200',
                activeScenario === i
                  ? 'text-primary after:bg-primary bg-white'
                  : 'text-text-secondary hover:text-primary after:bg-transparent hover:after:bg-primary/30 bg-white'
              )}
            >
              {scenario.tabLabel}
            </button>
          ))}
        </div>

        {/* Active scenario panel — fade transition */}
        <motion.div
          key={activeScenario}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
        >
          {/* Room image — takes 3/5 columns */}
          <div className="lg:col-span-3">
            {active.image && (
              <div className="relative aspect-[16/9] overflow-hidden rounded-md shadow-md">
                <Image
                  src={active.image}
                  alt={active.imageAlt ?? active.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            )}
          </div>

          {/* Text + products — takes 2/5 columns */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-heading text-[18px] md:text-[22px] font-bold text-text-primary uppercase tracking-wide leading-tight">
              {active.heading}
            </h3>
            <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
              {active.description}
            </p>

            {active.recommendedProducts && active.recommendedProducts.length > 0 && (
              <div>
                <p className="text-[12px] font-bold uppercase tracking-widest text-text-muted mb-3">
                  Recommended Products
                </p>
                <ul className="space-y-2">
                  {active.recommendedProducts.map((p, pi) => (
                    <li key={pi}>
                      {p.link ? (
                        <Link
                          href={p.link}
                          className="inline-flex items-center gap-2 text-[14px] text-primary font-medium hover:text-primary-dark transition-colors group"
                        >
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                          {p.name}
                        </Link>
                      ) : (
                        <span className="text-[14px] text-text-secondary">{p.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2">
              <Link
                href={`/get-quote?solution=${encodeURIComponent(solution.slug)}&scenario=${encodeURIComponent(active.id)}`}
                className="inline-flex items-center gap-2 rounded-[5px] bg-primary px-6 py-3 text-[14px] font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 4. Customer Stories ─────────────────────────────────
function SolutionStories({ solution }: { solution: Solution }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-10 md:mb-14"
        >
          <h2 className="font-heading text-[24px] md:text-[36px] font-bold uppercase tracking-wide text-text-primary mb-3">
            Customer Stories
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl">
            For the past decade, InfinityX Global's complete collaboration solutions have helped
            organisations across India transform the way they work, teach, and communicate.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solution.customerStories!.map((story, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white border border-border rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {story.image && (
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-heading text-[15px] font-bold text-text-primary mb-1 uppercase tracking-wide">
                  {story.company}
                </h3>
                {story.location && (
                  <p className="text-[12px] text-primary font-medium mb-3">{story.location}</p>
                )}
                <p className="text-[13px] text-text-secondary leading-relaxed">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 5. CTA ───────────────────────────────────────────────
function SolutionCTA({ solution }: { solution: Solution }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-xl"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[28px] md:text-[38px] font-bold text-white mb-4 leading-tight"
          >
            Ready to transform your {solution.slug === 'enterprise' ? 'workplace' : 'institution'}?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[15px] text-white/80 leading-relaxed mb-8 max-w-sm"
          >
            Our solutions team will assess your space and recommend the right configuration.
            Response within 48 hours — guaranteed.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href={`/get-quote?solution=${encodeURIComponent(solution.slug)}`}
              className="inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-3 text-[14px] font-semibold text-primary hover:bg-surface transition-colors"
            >
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[5px] border border-white/50 px-7 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
