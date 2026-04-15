'use client'

import { ProductsMegaMenu } from '@/components/products-mega-menu'
import { SolutionsMegaMenu } from '@/components/solutions-mega-menu'
import { SupportMegaMenu } from '@/components/support-mega-menu'
import { ExploreMegaMenu } from '@/components/explore-mega-menu'

// ─── Types ────────────────────────────────────────────────
interface UnifiedMegaMenuProps {
  section: 'products' | 'solutions' | 'support' | 'explore'
  onClose?: () => void
}

// ─── Component ────────────────────────────────────────────
/**
 * Unified Mega Menu Router
 * Routes each navigation section to its dedicated MAXHUB-style mega menu component
 * All menus share the same layout pattern: sidebar (20%) + full-height preview (80%)
 */
export function UnifiedMegaMenu({ section, onClose }: UnifiedMegaMenuProps) {
  // Route to dedicated mega menu components (MAXHUB-style layout)
  if (section === 'products') {
    return <ProductsMegaMenu onClose={onClose} />
  }

  if (section === 'solutions') {
    return <SolutionsMegaMenu onClose={onClose} />
  }

  if (section === 'support') {
    return <SupportMegaMenu onClose={onClose} />
  }

  if (section === 'explore') {
    return <ExploreMegaMenu onClose={onClose} />
  }

  // Fallback - should never reach here
  return null
}
