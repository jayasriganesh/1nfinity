'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Building2, GraduationCap, ShoppingCart, Landmark, SlidersHorizontal, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Section, SectionHeader } from '@/components/layout/section'
import { Card } from '@/components/layout/card'
import { spacing, grid } from '@/lib/layout-system'

// ─── Types ────────────────────────────────────────────────
interface ProductShowcaseProps {
  className?: string
}

interface Category {
  id: string
  label: string
  icon: React.ElementType
}

interface Product {
  name: string
  category: string[]
  industries: string[]
  href: string
  image: string
  imageAlt: string
  size: 'small' | 'medium' | 'large' | 'tall' | 'hero'
  featured?: boolean
}

// ─── Component ────────────────────────────────────────────
export function ProductShowcase({ className }: ProductShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [filterType, setFilterType] = useState<'industry' | 'category'>('industry')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  // Industry filters
  const industries: Category[] = [
    { id: 'all', label: 'All Industries', icon: Building2 },
    { id: 'enterprise', label: 'Enterprise', icon: Building2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'retail', label: 'Retail', icon: ShoppingCart },
    { id: 'government', label: 'Government', icon: Landmark },
  ]

  // Category filters
  const categories: Category[] = [
    { id: 'all', label: 'All Products', icon: Building2 },
    { id: 'ifp', label: 'Interactive Displays', icon: Building2 },
    { id: 'kiosks', label: 'Kiosks & Signage', icon: Building2 },
    { id: 'security', label: 'Security & CCTV', icon: Building2 },
    { id: 'led', label: 'LED Displays', icon: Building2 },
  ]

  // Products with disciplined masonry layout
  const products: Product[] = [
    {
      name: 'Interactive Flat Panels',
      category: ['ifp'],
      industries: ['enterprise', 'education', 'government'],
      href: '/products/interactive-flat-panels',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80',
      imageAlt: 'Interactive flat panel in modern conference room',
      size: 'large', // 2x2 featured (tablet+)
      featured: true,
    },
    {
      name: 'Ultra Slim Kiosks',
      category: ['kiosks'],
      industries: ['retail', 'enterprise'],
      href: '/products/kiosks/ultra-slim-kiosk',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      imageAlt: 'Modern digital kiosk',
      size: 'small', // 1x1
    },
    {
      name: 'LED Video Walls',
      category: ['led'],
      industries: ['enterprise', 'retail'],
      href: '/products/led-display',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80',
      imageAlt: 'Large LED video wall display',
      size: 'small', // 1x1
    },
    {
      name: 'CCTV Security Systems',
      category: ['security'],
      industries: ['enterprise', 'retail', 'government'],
      href: '/products/cctv',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      imageAlt: 'Advanced CCTV camera system',
      size: 'small', // 1x1
    },
    {
      name: 'Education IFP Solutions',
      category: ['ifp'],
      industries: ['education'],
      href: '/products/interactive-flat-panels',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      imageAlt: 'Interactive display for classroom',
      size: 'small', // 1x1
    },
    {
      name: 'Digital Signage',
      category: ['kiosks'],
      industries: ['retail', 'enterprise'],
      href: '/products/kiosks',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
      imageAlt: 'Digital signage displays',
      size: 'small', // 1x1
    },
  ]

  // Filter logic
  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true

    if (filterType === 'industry') {
      return product.industries.includes(activeFilter)
    } else {
      return product.category.includes(activeFilter)
    }
  })

  const activeFilters = filterType === 'industry' ? industries : categories

  // Filter UI Component (reused in desktop sidebar and mobile modal)
  const FilterUI = ({ onClose }: { onClose?: () => void }) => (
    <>
      {/* Close button for mobile */}
      {onClose && (
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h3 className="text-lg font-bold">Filters</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Filter Type Toggle */}
      <div className="flex gap-2 p-1 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50">
        <button
          onClick={() => {
            setFilterType('industry')
            setActiveFilter('all')
            onClose?.()
          }}
          className={cn(
            'flex-1 px-4 py-2.5 text-sm font-semibold rounded-md',
            'transition-all duration-300 ease-out',
            filterType === 'industry'
              ? 'bg-primary text-white shadow-md'
              : 'text-text-secondary hover:text-text-primary'
          )}
        >
          By Industry
        </button>
        <button
          onClick={() => {
            setFilterType('category')
            setActiveFilter('all')
            onClose?.()
          }}
          className={cn(
            'flex-1 px-4 py-2.5 text-sm font-semibold rounded-md',
            'transition-all duration-300 ease-out',
            filterType === 'category'
              ? 'bg-primary text-white shadow-md'
              : 'text-text-secondary hover:text-text-primary'
          )}
        >
          By Category
        </button>
      </div>

      {/* Filter Options */}
      <nav className="space-y-2 mt-6">
        {activeFilters.map((filter) => {
          const Icon = filter.icon
          const isActive = activeFilter === filter.id

          return (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id)
                onClose?.()
              }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left',
                'transition-all duration-300 ease-out group',
                'hover:-translate-y-0.5 active:translate-y-0',
                isActive
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 scale-[1.02]'
                  : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-text-primary hover:scale-[1.01] hover:shadow-md'
              )}
            >
              <Icon className={cn(
                'h-5 w-5 transition-all duration-300 ease-out',
                'group-hover:scale-125 group-hover:rotate-12',
                isActive ? 'text-white' : 'text-primary'
              )} />
              <span className="font-semibold text-sm transition-all duration-300 group-hover:translate-x-0.5">
                {filter.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Results Count with Animation */}
      <div className="pt-4 mt-4">
        <p className="text-sm text-text-secondary flex items-baseline gap-1.5">
          <motion.span
            key={filteredProducts.length}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-primary"
          >
            {filteredProducts.length}
          </motion.span>
          <span>solution{filteredProducts.length !== 1 ? 's' : ''} found</span>
        </p>
      </div>
    </>
  )

  return (
    <Section size="lg" background="elevated" withTransition className={className}>
      <SectionHeader
        title="Discover Our Solutions"
        subtitle="Professional display technology tailored for your industry"
      />

      {/* Mobile Filter Button - visible on mobile/tablet, hidden on desktop */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl font-semibold text-text-primary hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filter Solutions</span>
          <span className="ml-auto bg-primary text-white text-sm px-2.5 py-0.5 rounded-full">
            {filteredProducts.length}
          </span>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Modal */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto p-6 lg:hidden border-t border-gray-200/50"
            >
              <FilterUI onClose={() => setMobileFilterOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content Area - full-width on mobile, split-layout on desktop */}
      <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
        {/* Desktop Sidebar - hidden on mobile/tablet, visible on desktop */}
        <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200/50 p-6 hover:shadow-lg transition-all duration-300"
          >
            <FilterUI />
          </motion.div>
        </aside>

        {/* Masonry Grid - full-width on mobile, constrained on desktop */}
        <div className="w-full">
          <div className={cn(grid.masonry.container, spacing.gap.md)}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={`${product.href}-${product.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={grid.masonry.sizes[product.size]}
                >
                  <Card
                    title={product.name}
                    href={product.href}
                    image={product.image}
                    imageAlt={product.imageAlt}
                    badge={product.featured ? 'Featured' : undefined}
                    size={product.size}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* View All CTA with Rich Interaction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-16"
      >
        <Link
          href="/products"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 active:scale-95"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-[-4px]">
            View All Products
          </span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </motion.div>
    </Section>
  )
}
