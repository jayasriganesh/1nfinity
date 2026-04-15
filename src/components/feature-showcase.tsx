'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ShowcaseItem {
  /** Tab label */
  label: string
  /** Bold heading shown in left column */
  heading: string
  /** Short paragraph shown in left column */
  description: string
  /** Hero image URL — shown in right column */
  image?: string
  imageAlt?: string
  /** MP4 video URL — takes priority over image */
  video?: string
}

// ─── ShowcasePanel ────────────────────────────────────────────────────────────
// Wrapper: guards against empty lists so inner component can call hooks freely.

interface ShowcasePanelProps {
  items: ShowcaseItem[]
  className?: string
}

export function ShowcasePanel({ items, className }: ShowcasePanelProps) {
  if (!items.length) return null
  return <ShowcasePanelInner items={items} className={className} />
}

// ─── Inner ────────────────────────────────────────────────────────────────────
// All hooks called unconditionally — Rules of Hooks satisfied.

function ShowcasePanelInner({ items, className }: ShowcasePanelProps) {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(i => (i + 1) % items.length)
    }, 5000)
  }

  // Start auto-advance on mount, clear on unmount
  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  // Slide indicator to active tab's exact horizontal position
  useEffect(() => {
    const btn = tabRefs.current[active]
    if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth })
  }, [active])

  const goTo = (i: number) => { setActive(i); resetTimer() }
  const prev = () => { setActive(i => (i - 1 + items.length) % items.length); resetTimer() }
  const next = () => { setActive(i => (i + 1) % items.length); resetTimer() }

  return (
    <div className={cn('w-full', className)}>
      {/* ── Tab bar ─────────────────────────────────────────── */}
      <div className="relative overflow-x-auto scrollbar-hide border-b border-border">
        <ul className="flex items-stretch min-w-max" role="tablist">
          {items.map((item, i) => (
            <li key={i} role="presentation">
              <button
                ref={el => { tabRefs.current[i] = el }}
                role="tab"
                aria-selected={active === i}
                onClick={() => goTo(i)}
                className={cn(
                  'px-6 md:px-8 py-[14px] text-[13px] md:text-[14px] font-medium whitespace-nowrap transition-colors duration-150',
                  active === i
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Single underline — slides horizontally only */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-primary"
          animate={{ left: indicator.left, width: indicator.width }}
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        />
      </div>

      {/* ── Content panel ────────────────────────────────────── */}
      <div role="tabpanel" className="border border-t-0 border-border rounded-b-md overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px] md:min-h-[440px]"
          >
            {/* Left — Text */}
            <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 bg-[#f8f9fb]">
              <p className="text-[11px] font-bold tracking-[3.5px] uppercase text-primary mb-3">
                {items[active].label}
              </p>
              <h3 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold text-text-primary leading-tight mb-4">
                {items[active].heading}
              </h3>
              <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed max-w-[400px]">
                {items[active].description}
              </p>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-2 mt-8">
                <button
                  onClick={prev}
                  aria-label="Previous feature"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors duration-150"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next feature"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors duration-150"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[12px] text-text-muted ml-1 tabular-nums">
                  {active + 1} / {items.length}
                </span>
              </div>
            </div>

            {/* Right — Media */}
            <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden bg-[#111]">
              {items[active].video ? (
                <video
                  key={items[active].video}
                  src={items[active].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : items[active].image ? (
                <Image
                  src={items[active].image!}
                  alt={items[active].imageAlt ?? items[active].heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={active === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] to-[#0d1520]" />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── FeatureShowcase ──────────────────────────────────────────────────────────
// Standalone section wrapper — use on homepages, category pages, etc.

interface FeatureShowcaseProps {
  items: ShowcaseItem[]
  sectionTitle?: string
  className?: string
}

export function FeatureShowcase({ items, sectionTitle, className }: FeatureShowcaseProps) {
  if (!items.length) return null

  return (
    <section className={cn('py-16 md:py-24 bg-white', className)}>
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        {sectionTitle && (
          <h2 className="font-heading text-[22px] md:text-[32px] font-bold uppercase tracking-wide text-text-primary mb-8">
            {sectionTitle}
          </h2>
        )}
        <ShowcasePanel items={items} />
      </div>
    </section>
  )
}
