/**
 * Unified Layout System
 * ──────────────────────────────────────────────────────────────
 * Consistent spacing, grid, and layout tokens used across all sections
 */

// ─── Spacing Scale ────────────────────────────────────────────
export const spacing = {
  section: {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
    xl: 'py-24 lg:py-40',
  },
  container: {
    // Full-width containers (edge-to-edge backgrounds)
    fullWidth: 'w-full',

    // Constrained content within full-width sections
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',

    // Legacy container-custom (will be deprecated)
    legacy: 'container-custom',
  },
  gap: {
    xs: 'gap-3',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
}

// ─── Grid System ──────────────────────────────────────────────
export const grid = {
  // Standard responsive grids
  cols2: 'grid grid-cols-1 lg:grid-cols-2',
  cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  cols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',

  // Masonry with intentional proportions - mobile-first, disciplined
  masonry: {
    // Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px]',
    // Card size variants (col-span × row-span)
    sizes: {
      small: 'col-span-1 row-span-1',           // 1:1 - square
      medium: 'col-span-1 row-span-2',          // 1:2 - tall
      large: 'md:col-span-2 md:row-span-2',     // 2:2 - featured (tablet+)
      tall: 'col-span-1 row-span-2',            // 1:2 - vertical
      hero: 'md:col-span-2 row-span-1',         // 2:1 - wide (tablet+)
    },
  },

  // Split layouts (sidebar + content)
  split: {
    sidebar: 'grid grid-cols-1 lg:grid-cols-[280px_1fr]',
    sidebarWide: 'grid grid-cols-1 lg:grid-cols-[320px_1fr]',
    sidebarNarrow: 'grid grid-cols-1 lg:grid-cols-[240px_1fr]',
  },
}

// ─── Card Treatments ──────────────────────────────────────────
export const card = {
  base: 'rounded-xl overflow-hidden transition-all duration-500',
  elevated: 'bg-white shadow-md hover:shadow-2xl',
  glass: 'bg-white/60 backdrop-blur-sm border border-white/60 shadow-lg',
  outlined: 'bg-white border-2 border-gray-200 hover:border-primary',
  gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100',
}

// ─── Typography Hierarchy ─────────────────────────────────────
export const typography = {
  display: 'text-4xl lg:text-6xl font-bold tracking-tight',
  h1: 'text-3xl lg:text-5xl font-bold',
  h2: 'text-2xl lg:text-4xl font-bold',
  h3: 'text-xl lg:text-2xl font-semibold',
  h4: 'text-lg lg:text-xl font-semibold',
  body: 'text-base lg:text-lg',
  bodySmall: 'text-sm lg:text-base',
  caption: 'text-xs lg:text-sm uppercase tracking-wider',
}

// ─── Section Backgrounds ──────────────────────────────────────
export const backgrounds = {
  white: 'bg-white',
  subtle: 'bg-gradient-to-b from-gray-50 to-white',
  primary: 'bg-gradient-to-br from-primary via-primary-dark to-primary',
  accent: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  elevated: 'bg-gradient-to-b from-white via-gray-50/50 to-white',
}

// ─── Interaction States ───────────────────────────────────────
export const interactions = {
  hoverScale: 'hover:scale-[1.02] active:scale-[0.98]',
  hoverLift: 'hover:-translate-y-1 active:translate-y-0',
  hoverGlow: 'hover:shadow-xl hover:shadow-primary/10',
  smoothTransition: 'transition-all duration-300 ease-out',
  slowTransition: 'transition-all duration-500 ease-out',
}

// ─── Transition Elements ──────────────────────────────────────
export const transitions = {
  divider: 'h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent',
  spacer: 'h-12 lg:h-20',
  gradientOverlay: 'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
}
