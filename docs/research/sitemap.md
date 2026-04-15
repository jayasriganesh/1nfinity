# Site Architecture — InfinityX Global (MAXHUB Clone)

**Source files:** tokens.json, components.md, stack.md, CLAUDE.md Site Structure  
**Date:** 2026-04-01  
**Build scope:** V1 only (IFP, Kiosks, CCTV)

---

## Route Map (Next.js 14 App Router)

```
app/
├── layout.tsx                           → Root layout (Navbar + Footer + Cookie Banner)
├── page.tsx                             → Homepage
├── about/
│   └── page.tsx                        → About InfinityX
├── contact/
│   └── page.tsx                        → Contact form
├── get-quote/
│   └── page.tsx                        → Get Quote form (separate from contact)
├── products/
│   ├── page.tsx                        → All products listing (category cards)
│   ├── interactive-flat-panels/
│   │   ├── page.tsx                    → IFP category page (product listing)
│   │   ├── series-a/
│   │   │   └── page.tsx                → Series A product page (PLACEHOLDER)
│   │   ├── series-b/
│   │   │   └── page.tsx                → Series B product page (PLACEHOLDER)
│   │   └── series-c/
│   │       └── page.tsx                → Series C product page (PLACEHOLDER)
│   ├── kiosks/
│   │   ├── page.tsx                    → Kiosks category page
│   │   └── ultra-slim-kiosk/
│   │       └── page.tsx                → Ultra Slim Kiosk product page
│   └── cctv/
│       ├── page.tsx                    → CCTV category page
│       ├── product-1/
│       │   └── page.tsx                → CCTV Product 1 (PLACEHOLDER)
│       └── product-2/
│           └── page.tsx                → CCTV Product 2 (PLACEHOLDER)
├── privacy-policy/
│   └── page.tsx                        → Privacy Policy
├── cookies/
│   └── page.tsx                        → Cookies Policy (optional V1)
└── not-found.tsx                       → 404 page
```

---

## Page Index (Build Priority Order)

| Priority | Route | Page Name | Source | Components Needed |
|---|---|---|---|---|
| **1** | `/` | Homepage | MAXHUB homepage clone | Navbar, Hero Carousel, Product Category Cards, Stats Strip, Tabbed Content (Solutions), Footer, Cookie Banner |
| **2** | `/products` | All Products Listing | MAXHUB /products/ | Navbar, Section Heading, Product Category Cards, Footer |
| **3** | `/products/interactive-flat-panels` | IFP Category Page | MAXHUB IFP category | Navbar, Section Heading, Product Listing Cards, Category Tab Nav (optional), Footer |
| **4** | `/products/interactive-flat-panels/series-a` | IFP Series A (Placeholder) | MAXHUB product page structure | Navbar, Product Hero, Section Heading, Get Quote CTA, Footer |
| 5 | `/products/kiosks` | Kiosks Category Page | MAXHUB structure | Navbar, Section Heading, Product Listing Cards, Footer |
| 6 | `/products/kiosks/ultra-slim-kiosk` | Ultra Slim Kiosk Product | MAXHUB product page | Navbar, Product Hero, Section Heading, Get Quote CTA, Footer |
| 7 | `/products/cctv` | CCTV Category Page | MAXHUB structure | Navbar, Section Heading, Product Listing Cards, Footer |
| 8 | `/products/cctv/product-1` | CCTV Product 1 (Placeholder) | MAXHUB product page | Navbar, Product Hero, Section Heading, Get Quote CTA, Footer |
| **9** | `/contact` | Contact Form | MAXHUB /contact_us/ | Navbar, Contact Form (Turnstile, file upload), Footer |
| **10** | `/get-quote` | Get Quote Form | Separate from contact | Navbar, Get Quote Form (product pre-fill), Footer |
| 11 | `/about` | About InfinityX | MAXHUB /about_maxhub/ | Navbar, Stats Strip, Section Heading, Timeline (optional), Footer |
| 12 | `/privacy-policy` | Privacy Policy | Static content page | Navbar, Footer |
| 13 | `/not-found` | 404 Page | Custom branded | Navbar, 404 Message, CTA to home, Footer |

**Total V1 pages:** 15 pages (13 content pages + layout + 404)

---

## Shared Components (built once, used everywhere)

### Global Layout Components
- **Navbar** — all pages (sticky header)
- **Footer** — all pages
- **Cookie Consent Banner** — global overlay (dismissed via localStorage)

### Reusable Sections
- **Section Heading + Description** — product pages, about, homepage sections
- **Stats Strip** — homepage, about page
- **Product Category Cards** — homepage, /products/ listing
- **Product Listing Cards** — all category pages (IFP, Kiosks, CCTV)

---

## Page-Specific Components

| Page | Unique Components | Copy Source |
|---|---|---|
| **Homepage** | Hero Carousel, Tabbed Content (Solutions), Feature Carousel (optional) | CLAUDE.md client facts + MAXHUB structure |
| **Products Listing** | Category Tab Navigation (optional) | CLAUDE.md product categories |
| **Category Pages** | Product grid layout (3 columns) | CLAUDE.md product catalogue |
| **Product Pages** | Product hero image, Specs table, Applications section, Get Quote form embed | PLACEHOLDER content (client fills after trip) |
| **Contact** | Contact form (Turnstile, Nodemailer, Sheets logging) | CLAUDE.md contact info |
| **Get Quote** | Quote form with product dropdown, file upload | CLAUDE.md product list |
| **About** | Company timeline (optional), Team section (optional) | CLAUDE.md client facts |
| **404** | Branded 404 message, search box (optional) | Custom copy |

---

## Component Dependency Map

```
Phase 1 — Design System Foundation
  └── tailwind.config.ts (tokens from tokens.json)
  └── globals.css (CSS custom properties)
  └── Google Fonts import (Open Sans)

Phase 2 — Atoms (no dependencies)
  └── Button (primary, ghost, outline variants)
  └── Badge (optional)
  └── Typography wrappers (H1, H2, H3, Body)
  └── Input, Textarea (shadcn/ui)
  └── Icon components (Lucide React)

Phase 3 — Molecules (depend on atoms)
  └── NavItem (dropdown trigger)
  └── ProductCard (category card with dual image hover)
  └── ProductListingCard (product card for category pages)
  └── StatItem (number + label)
  └── FormField (Input + Label + Error)

Phase 4 — Organisms (depend on molecules)
  └── Navbar (logo + nav items + utility nav + mobile menu)
  └── Footer (columns + contact info + social + legal)
  └── Hero Carousel (Swiper.js + text overlay + nav controls)
  └── Stats Strip (4-column grid of StatItems)
  └── Product Category Cards Grid (homepage + products listing)
  └── Product Listing Cards Grid (category pages)
  └── Section Heading (H2 + description block)
  └── Tabbed Content (Solutions section — Enterprise/Education tabs)
  └── Contact Form (fields + Turnstile + file upload + submit)
  └── Get Quote Form (fields + product dropdown + Turnstile)
  └── Cookie Banner (overlay + accept/reject buttons)

Phase 5 — Templates (page-level layouts)
  └── ProductPageTemplate (hero + specs + applications + quote CTA)
  └── CategoryPageTemplate (heading + product grid)
  └── FormPageTemplate (heading + form + sidebar info)

Phase 6 — Pages (assemble organisms into routes)
  └── Homepage (assemble: Hero + Stats + Categories + Solutions tabs + CTA)
  └── Products Listing (assemble: Heading + Category Cards)
  └── Category Pages (assemble: Heading + Product Grid)
  └── Product Pages (use ProductPageTemplate + PLACEHOLDER content)
  └── Contact (use FormPageTemplate + Contact Form)
  └── Get Quote (use FormPageTemplate + Quote Form)
  └── About (assemble: Heading + Stats + Timeline)
  └── Privacy Policy (static content)
  └── 404 (custom message + CTA)
```

---

## Navigation Structure (InfinityX V1)

### Primary Nav Items (Desktop)
1. **Products** (dropdown)
   - Interactive Flat Panels → `/products/interactive-flat-panels`
   - Kiosks & Signage → `/products/kiosks`
   - CCTV & Security → `/products/cctv`
   - View All Products → `/products`

2. **Solutions** (dropdown — optional V1, can defer)
   - Enterprise → `/solutions/enterprise` (AFTER TRIP)
   - Education → `/solutions/education` (AFTER TRIP)
   
3. **About** (direct link)
   - `/about`

4. **Contact Sales** (CTA button — ghost variant)
   - `/contact`

### Mobile Nav (Hamburger Menu)
- Same structure, vertical stacked menu
- Dropdowns expand inline (accordion pattern)

### Footer Nav
- **Company:** About InfinityX, Contact Us
- **Products:** Interactive Flat Panels, Kiosks, CCTV
- **Support:** Help Center (optional), Privacy Policy
- **Legal:** Privacy Policy, Cookies Policy (optional)

---

## URL Slug Mapping (MAXHUB → InfinityX)

| MAXHUB URL Pattern | InfinityX V1 URL | Status |
|---|---|---|
| `/in/products/?tab_id=1` | `/products/interactive-flat-panels` | ✅ V1 |
| `/in/xboard_v7_series` | `/products/interactive-flat-panels/series-a` | ✅ V1 (PLACEHOLDER) |
| `/in/products/?tab_id=4` | ~~Unified Communication~~ | ❌ SKIP (not in scope) |
| `/in/products/?tab_id=5` | ~~Accessories~~ | ❌ SKIP (not in scope) |
| `/in/products/?tab_id=6` | `/products/software/cast-cms` | 🔶 AFTER TRIP |
| `/in/solutions/enterprise.html` | `/solutions/enterprise` | 🔶 AFTER TRIP |
| `/in/contact_us/` | `/contact` | ✅ V1 |
| `/in/about_maxhub/` | `/about` | ✅ V1 |

---

## Deferred to Post-Trip (Change Order)

These pages are **not in V1 build** but will be added after client trip:

### Commercial Display (10 pages)
- `/products/commercial-display/` (category)
- `/products/commercial-display/professional-monitors/`
- `/products/commercial-display/waterproof-mirror-tv/`
- ...and 8 more products

### LED Display (12 pages)
- `/products/led-display/` (category)
- `/products/led-display/cob-led-video-wall/`
- `/products/led-display/transparent-led-video-wall/`
- ...and 10 more products

### Additional Kiosks (9 pages)
- `/products/kiosks/dual-side-hanging-kiosk/`
- `/products/kiosks/health-kiosk/`
- ...and 7 more products

### Software (2 pages)
- `/products/software/` (category)
- `/products/software/cast-cms/`

### Solutions (2 pages)
- `/solutions/enterprise`
- `/solutions/education`

**Total deferred:** ~35 pages (change order billing)

---

## Open Questions for Human Review

1. **Solutions section on homepage:** Include Enterprise/Education tabs (per MAXHUB) or defer entirely to post-trip?
   - **Recommendation:** Include tabs with placeholder copy — sets up structure for later content fill.

2. **Category Tab Navigation on /products/:** MAXHUB uses icon-based category tabs. Include in V1?
   - **Recommendation:** Optional — can use simpler category cards grid instead.

3. **Feature Carousel on homepage:** MAXHUB has product showcase carousel. Include in V1 with placeholder products?
   - **Recommendation:** Optional — can defer to focus on core product pages first.

4. **Search functionality:** MAXHUB has search trigger in nav. Build in V1?
   - **Recommendation:** Defer to V2 — not in CLAUDE.md V1 scope.

5. **Blog/Careers pages:** CLAUDE.md mentions "Blog CMS (shell page only)" and "Careers CMS (static form only)".
   - **Recommendation:** Defer to post-launch — focus on product pages first.

---

## Component Build Confidence Levels

| Component | Confidence | Reason |
|---|---|---|
| Navbar | **High** | Structure observed, mobile menu requires implementation decision |
| Footer | **High** | Fully observed in audit |
| Hero Carousel | **Medium** | Swiper.js observed, auto-play timing requires decision |
| Stats Strip | **High** | Structure observed, copy from CLAUDE.md |
| Product Category Cards | **High** | Dual-image hover pattern observed |
| Product Listing Cards | **High** | Structure observed |
| Section Heading | **High** | Simple component, observed |
| Tabbed Content | **Medium** | Structure observed, tab switching animation requires decision |
| Contact Form | **Medium** | Fields not observed in audit — design based on typical B2B form |
| Get Quote Form | **Medium** | Separate from contact, product dropdown + file upload |
| Cookie Banner | **High** | Copy observed, styling straightforward |

---

**End of Site Architecture**
