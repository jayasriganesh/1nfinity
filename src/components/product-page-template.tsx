'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Product, FeatureGroup, SpecModel, Highlight } from '@/data/products'
import { ShowcasePanel } from '@/components/feature-showcase'

// ─── Helpers ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})

// ─── Props ────────────────────────────────────────────────
interface ProductPageTemplateProps {
  product: Product
  categoryName: string
  categorySlug: string
}

// ─── Root ─────────────────────────────────────────────────
export function ProductPageTemplate({ product, categoryName: _categoryName, categorySlug }: ProductPageTemplateProps) {
  const quoteUrl = `/get-quote?product=${encodeURIComponent(product.slug)}&category=${encodeURIComponent(categorySlug)}`
  const [activeTab, setActiveTab] = useState<string>('')
  const tabNavRef = useRef<HTMLDivElement>(null)
  const [tabNavStuck, setTabNavStuck] = useState(false)

  // Build tab list from featureGroups that have tabLabel + id
  const tabs = (product.featureGroups ?? [])
    .filter(g => g.id && g.tabLabel)
    .map(g => ({ id: g.id!, label: g.tabLabel! }))

  // Sticky tab nav scroll detection
  useEffect(() => {
    const nav = tabNavRef.current
    if (!nav) return
    const observer = new IntersectionObserver(
      ([entry]) => setTabNavStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    )
    const sentinel = document.createElement('div')
    nav.before(sentinel)
    observer.observe(sentinel)
    return () => { observer.disconnect(); sentinel.remove() }
  }, [])

  // Highlight active tab on scroll
  useEffect(() => {
    if (!tabs.length) return
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) setActiveTab(visible.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    tabs.forEach(t => {
      const el = document.getElementById(t.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [tabs])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = tabNavRef.current?.offsetHeight ?? 0
    window.scrollTo({ top: el.offsetTop - offset - 80, behavior: 'smooth' })
  }

  return (
    <div className="bg-white">
      {/* 1 ── Hero ─────────────────────────────────────────── */}
      <ProductHero product={product} quoteUrl={quoteUrl} />

      {/* 2 ── Sticky Tab Nav ────────────────────────────────── */}
      {tabs.length > 0 && (
        <div
          ref={tabNavRef}
          className={cn(
            'sticky top-[80px] z-30 bg-[#f5f5f5] border-b border-border transition-shadow duration-300',
            tabNavStuck && 'shadow-md'
          )}
        >
          <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
            <ul className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
              {tabs.map(tab => (
                <li key={tab.id}>
                  <button
                    onClick={() => scrollTo(tab.id)}
                    className={cn(
                      'relative px-5 py-[15px] text-[13px] font-medium whitespace-nowrap transition-colors duration-200',
                      activeTab === tab.id
                        ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary'
                        : 'text-text-secondary hover:text-primary'
                    )}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 3 ── Highlights Strip ──────────────────────────────── */}
      {product.highlights && product.highlights.length > 0 && (
        <ProductHighlights highlights={product.highlights} />
      )}

      {/* 4 ── Feature Groups ────────────────────────────────── */}
      {(product.featureGroups ?? []).map((group, i) => (
        <ProductFeatureGroup
          key={group.id ?? i}
          group={group}
          index={i}
          quoteUrl={quoteUrl}
        />
      ))}

      {/* 5 ── Scenarios (Use Cases) ─────────────────────────── */}
      {product.scenarios && product.scenarios.length > 0 && (
        <ProductScenarios scenarios={product.scenarios} />
      )}

      {/* 6 ── Specs ─────────────────────────────────────────── */}
      {(product.specModels?.length || Object.keys(product.specs ?? {}).length > 0) && (
        <ProductSpecs
          specs={product.specs}
          specModels={product.specModels}
          productName={product.name}
        />
      )}

      {/* 7 ── Get Quote CTA ─────────────────────────────────── */}
      <ProductCTA productName={product.name} quoteUrl={quoteUrl} />
    </div>
  )
}

// ─── 1. Hero ──────────────────────────────────────────────
function ProductHero({ product, quoteUrl }: { product: Product; quoteUrl: string }) {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background image */}
      {product.heroImage && (
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={product.heroImageAlt ?? product.name}
            fill
            className="object-cover opacity-70"
            sizes="100vw"
            priority
          />
        </div>
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-maxhub px-4 md:px-[15px] py-20 md:py-28">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-[32px] md:text-[44px] lg:text-[52px] font-bold text-white leading-tight mb-5 tracking-tight"
          >
            {product.name}
          </motion.h1>
          {product.tagline && (
            <motion.p
              variants={fadeUp}
              className="text-[15px] md:text-[17px] text-white/85 leading-relaxed mb-8 max-w-sm"
            >
              {product.tagline}
            </motion.p>
          )}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-[5px] bg-primary px-7 py-3 text-[14px] font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 rounded-[5px] border border-white/60 px-7 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              Explore <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 2. Highlights Strip ──────────────────────────────────
function ProductHighlights({ highlights }: { highlights: Highlight[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="highlights" className="py-14 md:py-20 bg-white border-b border-border">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        <motion.div
          ref={ref}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={cn(
            'grid gap-6',
            highlights.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
            highlights.length === 4 ? 'grid-cols-2 lg:grid-cols-4' :
            'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
          )}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col items-center text-center gap-4 p-6 rounded-md bg-surface hover:bg-white hover:shadow-md transition-all duration-300 cursor-default"
            >
              {h.image && (
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={h.image}
                    alt={h.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              )}
              <p className="text-[13px] md:text-[14px] font-semibold text-text-primary leading-snug">
                {h.title}
              </p>
              {h.description && (
                <p className="text-[12px] text-text-secondary leading-relaxed">
                  {h.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 3. Feature Group ─────────────────────────────────────
function ProductFeatureGroup({
  group,
  index: _index,
  quoteUrl: _quoteUrl,
}: {
  group: FeatureGroup
  index: number
  quoteUrl: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const bg = group.bgColor === 'surface' ? 'bg-[#f5f5f5]' : group.bgColor === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
  const dark = group.bgColor === 'dark'
  const hasSectionImage = !!group.sectionImage

  return (
    <section
      id={group.id}
      ref={ref}
      className={cn(hasSectionImage ? '' : 'py-16 md:py-24', bg)}
    >
      {/* Heading block */}
      <div className={cn(
        'mx-auto w-full max-w-maxhub px-4 md:px-[15px]',
        hasSectionImage ? 'pt-16 md:pt-24' : ''
      )}>
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-10 md:mb-14"
        >
          {group.heading && (
            <motion.h2
              variants={fadeUp}
              className={cn(
                'font-heading text-[22px] md:text-[32px] lg:text-[38px] font-bold uppercase tracking-wide leading-tight mb-4',
                dark ? 'text-white' : 'text-text-primary'
              )}
            >
              {group.heading}
            </motion.h2>
          )}
          {group.description && (
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-[15px] md:text-[17px] leading-relaxed max-w-2xl',
                dark ? 'text-white/75' : 'text-text-secondary'
              )}
            >
              {group.description}
            </motion.p>
          )}
        </motion.div>

        {/* Section image — full-width or split (existing behaviour) */}
        {group.image && group.imagePosition !== 'left' && group.imagePosition !== 'right' && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative w-full aspect-[16/7] overflow-hidden rounded-md mb-10 md:mb-14"
          >
            <Image
              src={group.image}
              alt={group.imageAlt ?? group.heading}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1230px"
            />
          </motion.div>
        )}

        {/* Split layout (text left/right + image) */}
        {group.image && (group.imagePosition === 'left' || group.imagePosition === 'right') && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 md:mb-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={cn(group.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1')}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src={group.image}
                  alt={group.imageAlt ?? group.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={cn('space-y-4', group.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2')}
            >
              <h3 className={cn('font-heading text-[22px] md:text-[30px] font-bold uppercase tracking-wide leading-tight', dark ? 'text-white' : 'text-text-primary')}>
                {group.heading}
              </h3>
              {group.description && (
                <p className={cn('text-[15px] leading-relaxed', dark ? 'text-white/75' : 'text-text-secondary')}>
                  {group.description}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>

      {/* Full-viewport section image — edge-to-edge, 100vh */}
      {hasSectionImage && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative w-full h-screen overflow-hidden"
        >
          <Image
            src={group.sectionImage!}
            alt={group.sectionImageAlt ?? group.heading ?? ''}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* Feature cards — showcase (tabbed) or default grid */}
      {group.cards && group.cards.length > 0 && (
        <div className={cn(
          'mx-auto w-full max-w-maxhub px-4 md:px-[15px]',
          hasSectionImage ? 'pt-10 md:pt-14 pb-16 md:pb-24' : ''
        )}>
          {group.layout === 'showcase' ? (
            <div>
              <ShowcasePanel
                items={group.cards.map(card => ({
                  label: card.title,
                  heading: card.title,
                  description: card.description ?? '',
                  image: card.image,
                }))}
              />
            </div>
          ) : (
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={cn(
                'grid gap-4 md:gap-6',
                group.cards.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                group.cards.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
                group.cards.length >= 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                'grid-cols-1 sm:grid-cols-2'
              )}
            >
              {group.cards.map((card, ci) => (
                <motion.div
                  key={ci}
                  variants={fadeUp}
                  className={cn(
                    'rounded-md overflow-hidden border transition-shadow duration-300 hover:shadow-md',
                    dark ? 'border-white/10 bg-white/5' : 'border-border bg-white'
                  )}
                >
                  {card.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  )}
                  <div className="p-5 md:p-6">
                    <h4 className={cn(
                      'font-heading text-[14px] md:text-[15px] font-bold uppercase tracking-wide mb-2',
                      dark ? 'text-white' : 'text-text-primary'
                    )}>
                      {card.title}
                    </h4>
                    {card.description && (
                      <p className={cn('text-[13px] leading-relaxed', dark ? 'text-white/65' : 'text-text-secondary')}>
                        {card.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </section>
  )
}

// ─── 4. Scenarios ─────────────────────────────────────────
function ProductScenarios({ scenarios }: { scenarios: NonNullable<Product['scenarios']> }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-10 md:mb-14"
        >
          <h2 className="font-heading text-[22px] md:text-[32px] font-bold uppercase tracking-wide text-text-primary">
            Ideal For Your Space
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {scenarios.map((scene, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-md bg-white border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {scene.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-heading text-[15px] font-bold text-text-primary mb-1 uppercase tracking-wide">
                  {scene.title}
                </h3>
                {scene.subtitle && (
                  <p className="text-[13px] text-primary font-medium mb-2">{scene.subtitle}</p>
                )}
                {scene.description && (
                  <p className="text-[13px] text-text-secondary leading-relaxed">{scene.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 5. Specs Table ───────────────────────────────────────
function ProductSpecs({
  specs,
  specModels,
  productName: _productName,
}: {
  specs?: Record<string, string>
  specModels?: SpecModel[]
  productName: string
}) {
  const [activeModel, setActiveModel] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  const hasModels = specModels && specModels.length > 1

  // Build rows: union of all keys across all models
  const allKeys = hasModels
    ? [...new Set(specModels!.flatMap(m => Object.keys(m.specs)))]
    : Object.keys(specs ?? {})

  return (
    <section ref={ref} id="specifications" className="py-16 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-maxhub px-4 md:px-[15px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-8"
        >
          <h2 className="font-heading text-[22px] md:text-[32px] font-bold uppercase tracking-wide text-text-primary mb-2">
            Specifications
          </h2>
        </motion.div>

        {/* Model switcher tabs */}
        {hasModels && (
          <div className="flex gap-1 mb-6 border-b border-border">
            {specModels!.map((model, i) => (
              <button
                key={i}
                onClick={() => setActiveModel(i)}
                className={cn(
                  'px-5 py-3 text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px',
                  activeModel === i
                    ? 'border-primary text-primary'
                    : 'border-transparent text-text-secondary hover:text-primary'
                )}
              >
                {model.name}
              </button>
            ))}
          </div>
        )}

        {/* Specs table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="overflow-hidden rounded-md border border-border"
        >
          <table className="w-full text-[13px] md:text-[14px]">
            <tbody className="divide-y divide-border">
              {allKeys.map((key, i) => {
                const value = hasModels
                  ? specModels![activeModel].specs[key] ?? '—'
                  : (specs ?? {})[key] ?? '—'
                return (
                  <tr
                    key={i}
                    className={cn(
                      'transition-colors duration-150 hover:bg-surface',
                      i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                    )}
                  >
                    <td className="w-[40%] px-5 py-4 font-semibold text-text-primary align-top border-r border-border">
                      {key}
                    </td>
                    <td className="px-5 py-4 text-text-secondary leading-relaxed">{value}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 6. Get Quote CTA ─────────────────────────────────────
function ProductCTA({ productName, quoteUrl }: { productName: string; quoteUrl: string }) {
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
            Interested in {productName}?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[15px] text-white/80 leading-relaxed mb-8 max-w-sm"
          >
            Contact our team for pricing, availability, and custom configurations.
            We respond within 48 hours.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-3 text-[14px] font-semibold text-primary hover:bg-surface transition-colors"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
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
