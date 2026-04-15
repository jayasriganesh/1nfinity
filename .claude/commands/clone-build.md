---
name: clone-build
description: >
  Trigger this skill immediately when the user types /clone-build (with or without a target name).
  This is Stage 4 of the MWP Website Clone Pipeline — the code generation stage. It reads the
  Layer 3 reference files (tokens.json, components.md, stack.md, page-plan.md) and generates
  production-ready Next.js/TypeScript/Tailwind code for ONE component or page at a time following
  the build-order.md sequence. Uses the design-system-architect skill's component selection
  framework for animation decisions. Always generates complete, working code — no placeholders,
  no lorem ipsum, exact copy from the plan. Also trigger when user says "build the navbar",
  "code the hero", "generate the homepage", "start building", or "next component".
---

# /clone-build — Component & Page Code Generation (MWP Stage 4)

## Trigger
Activate when the user types `/clone-build` — optionally followed by a component or page name.

If no target specified: check `build-order.md` and build the next unchecked item.
If a target is specified: build exactly that component/page.

**Required Layer 3 inputs (from Stage 2 + 3):**
- `clone-extract_[domain]_tokens.json` → design system
- `clone-extract_[domain]_components.md` → component spec
- `clone-extract_[domain]_stack.md` → technology decisions
- `clone-plan_[domain]_pages.md` → copy and section specs
- `clone-plan_[domain]_build-order.md` → sequence

If any are missing, ask the user to run the missing upstream stage.

---

## Role — What This Stage Does
This is **MWP Stage 04_build**. One component or page per invocation.

You do not design. The design decisions are already made in the Layer 3 files.
You translate those decisions into exact, working code.

**One stage, one job (MWP principle):** Each `/clone-build` call produces one component or page.
The human reviews it before the next call. This is not a limitation — it is the review gate.

---

## Pre-Build Checklist (Run Every Time)

Before writing a single line of code:

1. Read the component spec from `components.md` for this target
2. Read the exact copy from `page-plan.md` for this target  
3. Read the token values from `tokens.json`
4. Read the stack choices from `stack.md`
5. Check `build-order.md` — confirm dependencies are already built

If a dependency isn't built yet, say so and ask: "Build [dependency] first?"

---

## Animation Decision Framework

Before choosing any animation, apply the three laws from design-system-architect:

**Law 1 — Purposeful, Not Decorative**
Every animation must answer YES to at least one:
- Directs attention to most important content?
- Reduces cognitive load visually?
- Confirms a user action?
- Establishes brand personality at a forgettable moment?

NO to all four → no animation. Plain is correct.

**Law 2 — One Showpiece Per Section**
Each section gets at most ONE hero animation. Supporting elements get subtle micro-interactions only.

**Law 3 — Brand Tone Governs Style**
| Brand Tone | Animation Style |
|---|---|
| Enterprise/B2B | Slow fades, precise transitions, subtle reveals |
| Tech/SaaS | Beam effects, spotlight, grid backgrounds, number tickers |
| Education | Blur fade, gentle parallax, progress indicators |
| Luxury | Smooth scroll, gradient shimmer, refined hover lifts |

**Animation library:** Use whatever `stack.md` specifies.

---

## Code Generation Rules (Non-Negotiable)

### Content Rules
- **ZERO lorem ipsum.** Every string comes from `page-plan.md` copy section
- **ZERO placeholder images.** Use observed CDN paths from audit, or `next/image` with proper dimensions
- **ZERO TODO comments.** Complete code only — every prop, every variant, every state

### Code Quality Rules
- TypeScript interfaces for all props
- Named exports for components, default export for pages
- All Tailwind classes from the token system — no arbitrary values unless from tokens.json
- `cn()` utility from shadcn for conditional classes
- `'use client'` directive only when genuinely needed (animations, state, events)
- Accessibility: `aria-label` on icon-only buttons, `alt` on all images, proper heading hierarchy
- Mobile-first: base classes are mobile, responsive modifiers are desktop

### File Structure
```
components/
  ui/           ← shadcn base components (do not modify)
  [name].tsx    ← custom components go here (Navbar, Hero, etc.)

app/
  page.tsx      ← Homepage
  [slug]/
    page.tsx    ← Other pages

lib/
  utils.ts      ← cn() and shared utilities
```

---

## Component Template

For every component, produce this exact structure:

```tsx
// components/[name].tsx
'use client' // only if needed

import { [shadcn imports] } from '@/components/ui/[...]'
import { [animation imports] } from '[library]'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface [Name]Props {
  // explicit props — no any, no implicit
}

// ─── Component ────────────────────────────────────────────
export function [Name]({ ... }: [Name]Props) {
  return (
    // exact copy strings from page-plan.md
    // token classes from tokens.json
    // animation components from stack.md
  )
}

// ─── Sub-components (if needed) ───────────────────────────
function [SubComponent]() { ... }
```

---

## Per-Component Guidance

### NAVBAR
```tsx
// Use: Aceternity FloatingNav OR shadcn NavigationMenu
// Mobile: shadcn Sheet for drawer
// Copy: exact nav items from components.md
// Behavior: hide on scroll down, show on scroll up (requires 'use client')
// Variants: transparent on hero → solid on scroll
```

### HERO
```tsx
// Background: ONE of the following based on brand tone from stack.md:
//   Dark brand → Background Beams or Spotlight (Aceternity)
//   Light brand → Grid and Dot Backgrounds or plain
// Headline: if rotating concepts → Flip Words (Aceternity)
//           if reveal on load → Text Generate Effect
//           if single statement → plain with font-size from tokens
// CTA: Moving Border (Aceternity) for primary — shadcn Button ghost for secondary
// Sub: exact text from page-plan.md — never write new copy
```

### STATS STRIP
```tsx
// ALWAYS use NumberTicker (Magic UI) — counts up on scroll
// Layout: dark background strip, 3-4 column grid
// Copy: exact stat figures + labels from page-plan.md
// No additional animation — moving numbers are enough
```

### FEATURE CARDS
```tsx
// ≤4 cards → 3D Card Effect (Aceternity)
// 4–8 cards → Blur Fade stagger (Magic UI)
// Cards with content reveal → Card Hover Effect (Aceternity)
// Never: multiple competing animations on the same card grid
```

### LOGO STRIP
```tsx
// <8 logos → Static row, greyscale → color on hover
// 8+ logos → Marquee (Magic UI) infinite scroll
// Always: actual logo names/alt text from audit, not generic placeholders
```

### CONTACT FORM
```tsx
// Base: shadcn Form + Input + Select + Textarea
// Container: Border Beam (Magic UI) around the form card
// Fields: exact <input> types from audit components.md
// Submit: exact CTA text from page-plan.md
// Background: plain or subtle Grid and Dot — no competing animation
```

### FOOTER
```tsx
// Plain dark footer — NO animation (MWP/design-system-architect rule)
// Exact link groups and text from components.md
// Copyright: exact text from audit
```

---

## Output Format

### For a COMPONENT build:

Produce the complete `.tsx` file.

Then:
```
Save to: /mnt/user-data/outputs/[name].tsx
```
Call `present_files` with the file.

Post a 3-line chat summary:
- What was built + what Layer 3 files drove the decisions
- Any copy strings that were missing from the plan (flagged for human review)
- The next item in `build-order.md` to build

---

### For a PAGE build:

Produce the complete `page.tsx` that assembles the organisms.

```tsx
// app/[route]/page.tsx
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
// ... all section imports

export default function [PageName]Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* sections in exact order from page-plan.md */}
      <Footer />
    </main>
  )
}
```

Save + present + summary.

---

## After Every Build — Human Review Gate

After delivering the file, always prompt:

> **[Component name] built.**
>
> Before continuing — check:
> - Does the copy match what's on the target site?
> - Any visual discrepancy from the component spec?
> - Any token that needs adjusting?
>
> Edit the file directly, then run `/clone-build` for the next item,
> or `/clone-build [specific name]` to jump to a specific component.

---

## Build State Tracking

After each successful build, mentally track what's been built.
When the user runs `/clone-build` with no argument, announce:

> "Next in build-order.md: **[item name]**. Building now…"

If the user wants to see current progress:
> "Built so far: [list]. Remaining: [list]."
