# Future Lookout — InfinityX Global

Notes, decisions, and context for future sessions and the clone integration step.

---

## Dynamic Product Routing System (completed 2026-04-09)

### What was built
Replaced all hardcoded static product routes with a fully dynamic, data-driven system.

**Deleted (static routes that blocked dynamic routing):**
- `src/app/products/interactive-flat-panels/page.tsx`
- `src/app/products/interactive-flat-panels/series-a/page.tsx`
- `src/app/products/kiosks/page.tsx`
- `src/app/products/cctv/page.tsx`

**Created:**
| File | Purpose |
|---|---|
| `src/data/products.ts` | Single source of truth — all categories and products |
| `src/app/products/layout.tsx` | Navbar + Footer wrapper for all `/products/*` pages |
| `src/app/products/[category]/page.tsx` | Dynamic category listing page |
| `src/app/products/[category]/[product]/page.tsx` | Dynamic product detail page |
| `src/components/category-page-template.tsx` | Reusable category template (clone target) |

**Updated:**
- `src/app/products/page.tsx` — reads from data file instead of hardcoded arrays
- `src/components/products-mega-menu.tsx` — links updated to InfinityX slugs (removed MAXHUB/Teams references)

---

## Clone Integration — What to Do Next

When running `/clone-build` with the Playwright MCP server:

1. **Target page to clone:** A MAXHUB India product category page (e.g. `https://www.maxhub.com/in/interactive-flat-panel/`)
2. **Component to replace:** `src/components/category-page-template.tsx`
   - The props interface must stay intact: `{ category: ProductCategory }`
   - Only the JSX/markup changes — data wiring and routes are already set
3. **Product detail template:** `src/components/product-page-template.tsx`
   - May also be updated with the cloned design
   - Props interface must stay intact (see the file for the full interface)

### Clone command prep checklist
- [x] Dynamic routes in place
- [x] Data file populated (IFP Series A/B/C, Ultra Slim Kiosk, CCTV placeholders)
- [x] Navbar mega menu links corrected
- [x] TypeScript compiles clean (zero errors)
- [x] `.next` cache cleared (fresh compile on next `npm run dev`)
- [ ] Clone the category page design
- [ ] Clone the product detail page design (if different from current)
- [ ] Swap placeholder Unsplash images with real client assets (after trip)

---

## Data File — How to Add Products

All products live in `src/data/products.ts`. To add a new product:

```ts
// Inside the relevant category's `products` array:
{
  slug: 'your-product-slug',         // becomes the URL: /products/[category]/[slug]
  name: 'Product Display Name',
  description: 'Short description for category listing card',
  image: '/images/products/...',     // card image
  tagline: 'One-line hero tagline',
  heroImage: '/images/products/...', // hero section image
  specs: {
    'Screen Size': '55"',
    // ...
  },
}
```

To add an entirely new category, add a new `ProductCategory` entry to the `productCategories` array. Set `availableV1: true` when ready to launch — the dynamic route returns 404 until then.

---

## After-Trip Changes Required

When client returns from business trip:

- [ ] Replace Series A/B/C placeholder names with real IFP series names
- [ ] Add real product images to `public/images/products/`
- [ ] Fill in CCTV product 1 and 2 details (`src/data/products.ts`)
- [ ] Set `availableV1: true` for Commercial Display, LED Display, Software when pages are ready
- [ ] Update IFP spec sheets with exact figures provided by client

---

## Known Issues / Watch Points

- **Hydration mismatch warning** on first load — caused by a browser extension (Bitwarden or similar) injecting `bis_register` attributes into the `<body>`. Not a code issue, safe to ignore in development.
- **Turbopack cache** was deleted due to an internal Turbopack error. First load after a clean `.next` delete will be slower (~5–10s). Normal after that.
- **LCP warning** — `https://images.unsplash.com/...` hero image needs `loading="eager"` or `priority` on the `<Image>` component once real images are in place.
- **`/products/commercial-display`** and other after-trip categories return 404 intentionally (`availableV1: false`). Do not change until the pages are ready.

---

## Route Map (V1)

```
/products                                        → category grid (3 cards)
/products/interactive-flat-panels                → IFP listing (Series A/B/C)
/products/interactive-flat-panels/series-a       → Series A product detail
/products/interactive-flat-panels/series-b       → Series B product detail
/products/interactive-flat-panels/series-c       → Series C product detail
/products/kiosks                                 → Kiosks listing
/products/kiosks/ultra-slim-kiosk                → Ultra Slim Kiosk detail
/products/cctv                                   → CCTV listing
/products/cctv/product-1                         → CCTV Product 1 (placeholder)
/products/cctv/product-2                         → CCTV Product 2 (placeholder)
/products/commercial-display                     → 404 (after trip)
/products/led-display                            → 404 (after trip)
/products/software                               → 404 (after trip)
```
