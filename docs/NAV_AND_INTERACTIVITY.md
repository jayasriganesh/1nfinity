# Navigation & Interactivity Reference
# ─────────────────────────────────────────────────────────────
# RULE: Every time a new page, route, or interactive feature is
# added to this project, update this file in the same session.
# This is the single source of truth for all routing and UI state.
# ─────────────────────────────────────────────────────────────

## Current Route Map (complete as of 2026-04-09)

| Route                                          | Status  | Layout             | Page File                                     |
|------------------------------------------------|---------|--------------------|-----------------------------------------------|
| `/`                                            | ✅ Live  | inline (own navbar)| `src/app/page.tsx`                            |
| `/about`                                       | ✅ Live  | `(pages)/layout`   | `src/app/(pages)/about/page.tsx`              |
| `/blog`                                        | ✅ Shell | `(pages)/layout`   | `src/app/(pages)/blog/page.tsx`               |
| `/contact`                                     | ✅ Live  | `(pages)/layout`   | `src/app/(pages)/contact/page.tsx`            |
| `/get-quote`                                   | ✅ Live  | `(pages)/layout`   | `src/app/(pages)/get-quote/page.tsx`          |
| `/privacy-policy`                              | ✅ Live  | `(pages)/layout`   | `src/app/(pages)/privacy-policy/page.tsx`     |
| `/solutions`                                   | ✅ Live  | `solutions/layout` | `src/app/solutions/page.tsx`                  |
| `/solutions/enterprise`                        | ✅ Live  | `solutions/layout` | `src/app/solutions/[solution]/page.tsx`       |
| `/solutions/education`                         | ✅ Live  | `solutions/layout` | `src/app/solutions/[solution]/page.tsx`       |
| `/products`                                    | ✅ Live  | `products/layout`  | `src/app/products/page.tsx`                   |
| `/products/interactive-flat-panels`            | ✅ Live  | `products/layout`  | `src/app/products/[category]/page.tsx`        |
| `/products/interactive-flat-panels/series-a`   | ✅ Live  | `products/layout`  | `src/app/products/[category]/[product]/page.tsx` |
| `/products/interactive-flat-panels/series-b`   | ✅ Live  | `products/layout`  | `src/app/products/[category]/[product]/page.tsx` |
| `/products/interactive-flat-panels/series-c`   | ✅ Live  | `products/layout`  | `src/app/products/[category]/[product]/page.tsx` |
| `/products/kiosks`                             | ✅ Live  | `products/layout`  | `src/app/products/[category]/page.tsx`        |
| `/products/kiosks/ultra-slim-kiosk`            | ✅ Live  | `products/layout`  | `src/app/products/[category]/[product]/page.tsx` |
| `/products/cctv`                               | ✅ Live  | `products/layout`  | `src/app/products/[category]/page.tsx`        |
| `/products/cctv/dome-camera`                   | ✅ Live  | `products/layout`  | `src/app/products/[category]/[product]/page.tsx` |
| `/products/cctv/bullet-camera`                 | ✅ Live  | `products/layout`  | `src/app/products/[category]/[product]/page.tsx` |

### Routes planned (not yet built — add when ready)
| Route                    | Sprint | Notes                        |
|--------------------------|--------|------------------------------|
| `/search`                | 7      | Search results page          |
| `/not-found` (404)       | 10     | Branded 404 page             |

---

## Layout Architecture

```
src/app/layout.tsx               ← Root: fonts + globals only. NO navbar.
├── page.tsx                     ← Home: inline Navbar via section components
├── (pages)/layout.tsx           ← Shared: Navbar + Footer + pt-[80px]
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── get-quote/page.tsx
│   └── privacy-policy/page.tsx
├── products/layout.tsx          ← Products: Navbar + Footer + pt-[80px]
│   ├── page.tsx
│   └── [category]/
│       ├── page.tsx
│       └── [product]/page.tsx
└── solutions/layout.tsx         ← Solutions: Navbar + Footer + pt-[80px]
    ├── page.tsx
    └── [solution]/page.tsx
```

**When adding a new top-level route** (e.g. `/careers`):
1. Create `src/app/(pages)/careers/page.tsx` — it automatically inherits Navbar + Footer from `(pages)/layout.tsx`.
2. No new layout file needed unless it requires a different shell.

---

## Navbar (`src/components/navbar.tsx`)

### Interactive Features
| Feature          | State var       | Behaviour                                      |
|------------------|-----------------|------------------------------------------------|
| Search overlay   | `isSearchOpen`  | Slides over header on click, Enter → `/products?q=...` |
| Region dropdown  | `isRegionOpen`  | Toggles list of regions (IN/NP/LK/BT), outside-click closes |
| Mega menus       | `activeMegaMenu`| 150ms enter delay, 200ms leave delay           |
| Mobile menu      | `isMobileMenuOpen` | Full-screen overlay, body scroll locked      |
| Mobile accordion | `openAccordion` | One section open at a time                     |

### Desktop nav links → mega menu sections
| Label    | Mega menu component                                |
|----------|----------------------------------------------------|
| Products | `src/components/products-mega-menu.tsx`            |
| Solutions| `src/components/solutions-mega-menu.tsx`           |
| Support  | `src/components/support-mega-menu.tsx`             |
| Explore  | `src/components/explore-mega-menu.tsx`             |

### Key routes used in navbar
| Element         | Route                |
|-----------------|----------------------|
| Logo            | `/`                  |
| Contact Sales   | `/contact`           |
| Mobile CTA      | `/contact`           |

### Mobile nav items (V1 only — DO NOT add non-V1 routes here)
```
Products  → /products/interactive-flat-panels
           /products/kiosks
           /products/cctv
           /products
Solutions → /solutions/enterprise
           /solutions/education
           /solutions
Support   → /contact?subject=support
           /get-quote
Explore   → /about
           /blog
           /privacy-policy
Contact Us → /contact
```

**When adding a new product category** (e.g. `/products/commercial-display`):
- Add to `mobileNavItems.Products.dropdown` in `navbar.tsx`
- Add to `products-mega-menu.tsx`

**When adding a new solution** (e.g. `/solutions/government`):
- Add to `mobileNavItems.Solutions.dropdown` in `navbar.tsx`
- Add to `solutions-mega-menu.tsx` (industry or platform list)
- Add to `solutions` array in `src/data/solutions.ts`

---

## Mega Menus

### products-mega-menu.tsx
Routes: All V1 product category and product pages. Coming-soon categories link to `/products`.

### solutions-mega-menu.tsx
| Item             | Route                    |
|------------------|--------------------------|
| Enterprise       | `/solutions/enterprise`  |
| Education        | `/solutions/education`   |
| Microsoft Teams  | `/solutions/enterprise`  |
| Zoom Rooms       | `/solutions/enterprise`  |
| All Solutions    | `/solutions`             |

### support-mega-menu.tsx
All items route to `/contact?subject=...` for V1 (no dedicated support pages yet).
Contact: `8228822849` / `9640778582` / `contact@infinityxglobal.com`

### explore-mega-menu.tsx
| Item                   | Route            |
|------------------------|------------------|
| About Us               | `/about`         |
| Certifications & Awards| `/about#awards`  |
| Contact Us             | `/contact`       |
| News & Events          | `/blog`          |
| Privacy Policy         | `/privacy-policy`|

---

## Footer (`src/components/Footer.tsx`)

### Interactive features
| Feature       | State var     | Behaviour                                      |
|---------------|---------------|------------------------------------------------|
| Newsletter    | `subscribed`  | Shows success state after submit (no backend V1)|

### Link map
| Section    | Links                                                          |
|------------|----------------------------------------------------------------|
| Company    | `/about`, `/about#awards`, `/contact`, `/privacy-policy`      |
| Products   | `/products/interactive-flat-panels`, `/products/kiosks`, `/products/cctv`, `/products` |
| Solutions  | `/solutions/enterprise`, `/solutions/education`, `/get-quote`, `/blog` |
| Bottom bar | `/privacy-policy`, `/privacy-policy#cookies`                  |

### Contact info (InfinityX Global)
- Phone: 8228822849 / 9640778582
- Email: contact@infinityxglobal.com
- Hours: Monday–Saturday, 09:30AM–06:30PM IST

---

## Homepage Components with links

| Component              | File                                         | Links to                                      |
|------------------------|----------------------------------------------|-----------------------------------------------|
| HeroBanner             | `src/components/HeroBanner.tsx`              | `/solutions/enterprise`, `/about`, `/products/interactive-flat-panels`, `/get-quote`, `/solutions`, `/contact?subject=partner` |
| SolutionsSection       | `src/components/SolutionsSection.tsx`        | `/solutions/enterprise`, `/solutions/education`, `/solutions` |
| NewsAwards             | `src/components/NewsAwards.tsx`              | `/about#awards`, `/about`, `/blog`            |
| ProductSeries          | `src/components/ProductSeries.tsx`           | (check when editing)                          |
| DisplaySeries          | `src/components/DisplaySeries.tsx`           | (check when editing)                          |
| AboutMaxhub            | `src/components/AboutMaxhub.tsx`             | (check when editing)                          |

---

## Forms

| Form          | File                                                      | Backend status |
|---------------|-----------------------------------------------------------|----------------|
| Contact form  | `src/app/(pages)/contact/ContactForm.tsx`                 | V1: success state mock only. Wire to server action in Sprint 8. |
| Quote form    | `src/app/(pages)/get-quote/QuoteForm.tsx`                 | V1: success state mock only. Wire to server action in Sprint 8. |
| Newsletter    | inside `src/components/Footer.tsx`                        | V1: success state mock only. Wire in Sprint 8. |

---

## Checklist: Adding a New Page

When you add any new page to this project, do ALL of the following in the same session:

- [ ] Create the page file in the correct folder (use `(pages)/` for new top-level pages)
- [ ] Add the route to the **Route Map** table above
- [ ] If it belongs in the navbar: add to `mobileNavItems` in `navbar.tsx`
- [ ] If it belongs in a mega menu: add to the relevant `*-mega-menu.tsx`
- [ ] If it belongs in the footer: add to the relevant footer section
- [ ] If it's a product category: add to `src/data/products.ts` and `products-mega-menu.tsx`
- [ ] If it's a solution: add to `src/data/solutions.ts`, `solutions-mega-menu.tsx`, and `/solutions` index
- [ ] Run `npm run build` and confirm zero errors before ending the session
- [ ] Update the route table in this file

## Checklist: Adding a New Interactive Feature

- [ ] Document the state variable name and behaviour in the relevant section above
- [ ] Confirm it does not introduce dead-end states (every action leads somewhere)
- [ ] Test at mobile (390px) and desktop (1440px)
- [ ] Update this file

---

## Dead-link Policy

**No `href="#"` is ever acceptable in production code.**
Every link must route to a real page, a real anchor, a `tel:`, `mailto:`, or an explicit `/contact?subject=...` for features not yet built.
If a destination page doesn't exist yet, create a stub before shipping the link.
