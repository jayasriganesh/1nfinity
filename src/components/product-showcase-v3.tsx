'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Section } from '@/components/layout/section'
import { Card } from '@/components/layout/card'
import { spacing, grid } from '@/lib/layout-system'

// ─── Types ────────────────────────────────────────────────
interface ProductShowcaseProps {
  className?: string
}

interface Category {
  id: string
  label: string
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
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false)

  // Industry filters
  const industries: Category[] = [
    { id: 'all', label: 'All Solutions' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'education', label: 'Education' },
    { id: 'retail', label: 'Retail' },
    { id: 'government', label: 'Government' },
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
      size: 'large',
      featured: true,
    },
    {
      name: 'Ultra Slim Kiosks',
      category: ['kiosks'],
      industries: ['retail', 'enterprise'],
      href: '/products/kiosks/ultra-slim-kiosk',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      imageAlt: 'Modern digital kiosk',
      size: 'small',
    },
    {
      name: 'LED Video Walls',
      category: ['led'],
      industries: ['enterprise', 'retail'],
      href: '/products/led-display',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80',
      imageAlt: 'Large LED video wall display',
      size: 'small',
    },
    {
      name: 'CCTV Security Systems',
      category: ['security'],
      industries: ['enterprise', 'retail', 'government'],
      href: '/products/cctv',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      imageAlt: 'Advanced CCTV camera system',
      size: 'small',
    },
    {
      name: 'Education IFP Solutions',
      category: ['ifp'],
      industries: ['education'],
      href: '/products/interactive-flat-panels',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      imageAlt: 'Interactive display for classroom',
      size: 'small',
    },
    {
      name: 'Digital Signage',
      category: ['kiosks'],
      industries: ['retail', 'enterprise'],
      href: '/products/kiosks',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
      imageAlt: 'Digital signage displays',
      size: 'small',
    },
  ]

  // Filter logic
  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true
    return product.industries.includes(activeFilter)
  })

  const activeFilterLabel = industries.find(f => f.id === activeFilter)?.label || 'All Solutions'

  return (
    <Section size="xl" background="white" className={className}>
      {/* Section Header */}
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight text-gray-900">
          Discover Our Solutions
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Professional display technology engineered for enterprise, education, and government
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700">{activeFilterLabel}</span>
            <ChevronDown className={cn(
              'h-4 w-4 text-gray-500 transition-transform',
              filterDropdownOpen && 'rotate-180'
            )} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {filterDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10"
              >
                {industries.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id)
                      setFilterDropdownOpen(false)
                    }}
                    className={cn(
                      'w-full text-left px-4 py-3 text-sm transition-colors',
                      'hover:bg-gray-50',
                      activeFilter === filter.id
                        ? 'bg-gray-100 font-semibold text-gray-900'
                        : 'text-gray-700'
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{filteredProducts.length}</span> solutions
        </div>
      </div>

      {/* Products Grid */}
      <div className={cn(grid.masonry.container, spacing.gap.lg)}>
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={`${product.href}-${product.name}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
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

      {/* View All CTA */}
      <div className="text-center mt-16 lg:mt-20">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors group"
        >
          <span>View All Products</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  )
}
