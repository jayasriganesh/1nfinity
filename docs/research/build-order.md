# Build Order — InfinityX Global (MAXHUB Clone)

**Source:** sitemap.md, pages.md, components.md, stack.md  
**Date:** 2026-04-01  
**Project:** https://github.com/jayasriganesh/infinityxglobal.git

This is the exact sequence for `/clone-build` to follow.  
Complete each item before moving to the next. Check off as done.

---

## Sprint 0 — Pre-Flight Checks

- [ ] Verify Next.js 14 boilerplate exists in repo
- [ ] Confirm TypeScript configured
- [ ] Confirm Tailwind CSS installed
- [ ] Confirm shadcn/ui initialized (`npx shadcn-ui@latest init`)
- [ ] Create `.env.example` file (never commit .env.local)

---

## Sprint 1 — Design System Foundation

**Goal:** Set up design tokens, fonts, and global styles. No UI components yet.

### 1.1 — Tailwind Config
- [ ] Open `tailwind.config.ts`
- [ ] Paste color extensions from `stack.md` (primary, secondary, text, border, footer, success, error)
- [ ] Paste typography scale extensions (fontSize with line-heights)
- [ ] Paste spacing extensions (container max-width, custom spacing)
- [ ] Paste border-radius scale (none, sm, md, lg, full)
- [ ] Paste box-shadow scale (sm, md, lg)
- [ ] Paste custom screens/breakpoints (xs, sm, md, lg, xl, 2xl)
- [ ] Test: Run `npm run dev`, verify no Tailwind errors

### 1.2 — Global CSS
- [ ] Open `app/globals.css`
- [ ] Add CSS custom properties from `tokens.json`:
  ```css
  :root {
    --color-primary: #196fd2;
    --color-primary-dark: #1559a8;
    --color-text-primary: #333333;
    /* ...etc from tokens.json */
  }
  ```
- [ ] Add base typography styles (body font-size, line-height, color)
- [ ] Test: Inspect page, verify CSS variables present

### 1.3 — Fonts
- [ ] Add Google Fonts import to `app/layout.tsx`:
  ```typescript
  import { Open_Sans } from 'next/font/google'
  
  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-sans',
  })
  ```
- [ ] Apply font variable to `<html>` or `<body>` className
- [ ] Test: Inspect page, verify Open Sans loads

### 1.4 — Install Animation Libraries
- [ ] Install Swiper.js: `npm install swiper`
- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Install Lucide React: `npm install lucide-react`
- [ ] Test: `npm run dev` with no errors

### 1.5 — Install Form Dependencies
- [ ] Install React Hook Form: `npm install react-hook-form`
- [ ] Install Zod: `npm install zod @hookform/resolvers`
- [ ] Install Turnstile: `npm install @marsidev/react-turnstile`
- [ ] Test: Dependencies install cleanly

### 1.6 — Environment Setup
- [ ] Create `.env.example` with placeholders:
  ```
  SMTP_HOST=smtp.hostinger.com
  SMTP_PORT=587
  SMTP_USER=contact@infinityxglobal.com
  SMTP_PASS=
  NEXT_PUBLIC_TURNSTILE_SITE_KEY=
  TURNSTILE_SECRET_KEY=
  GOOGLE_SHEETS_PRIVATE_KEY=
  GOOGLE_SHEETS_CLIENT_EMAIL=
  GOOGLE_SHEET_ID=
  NEXT_PUBLIC_GA_ID=
  NEXT_PUBLIC_SITE_URL=https://infinityxglobal.com
  ```
- [ ] Add `.env.local` to `.gitignore` (verify)

**Sprint 1 Complete:** Design system foundation ready. No visible UI yet.

---

## Sprint 2 — Atoms (Smallest Reusable Components)

**Goal:** Build shadcn/ui base components and custom atoms. Ref: `components.md`

### 2.1 — shadcn/ui Components
- [ ] Install Button: `npx shadcn-ui@latest add button`
- [ ] Install Input: `npx shadcn-ui@latest add input`
- [ ] Install Textarea: `npx shadcn-ui@latest add textarea`
- [ ] Install Form: `npx shadcn-ui@latest add form`
- [ ] Install Dropdown Menu: `npx shadcn-ui@latest add dropdown-menu`
- [ ] Install Tabs: `npx shadcn-ui@latest add tabs`
- [ ] Test: All components install to `components/ui/`

### 2.2 — Button Variants
- [ ] Open `components/ui/button.tsx`
- [ ] Verify variants exist: default, secondary, ghost, outline, link
- [ ] Customize ghost variant to match MAXHUB (white border, transparent bg)
  - Border: `border border-white`
  - Text: `text-white`
  - Hover: `hover:bg-white/10`
- [ ] Test: Create test page with all button variants

### 2.3 — Typography Components (optional — can use Tailwind directly)
- [ ] Create `components/ui/typography.tsx` (optional)
- [ ] Export H1, H2, H3, Body wrappers with consistent styling
- [ ] Or skip and use Tailwind classes directly (`text-5xl`, `text-4xl`, etc.)

### 2.4 — Icon Setup
- [ ] Verify Lucide React installed
- [ ] Test import: `import { ArrowRight, Menu, X } from 'lucide-react'`
- [ ] Create icon usage guide comment in code

**Sprint 2 Complete:** Atom components ready for use in organisms.

---

## Sprint 3 — Shared Organisms (Build Once, Use Everywhere)

**Goal:** Build Navbar, Footer, Cookie Banner. Ref: `components.md` sections 01, 09, 10

### 3.1 — Navbar Component
- [ ] Create `components/navbar.tsx`
- [ ] Structure:
  - Logo (link to `/`)
  - Desktop nav (Products dropdown, Solutions dropdown, About link)
  - Utility nav (Contact Sales CTA button — ghost variant)
  - Mobile menu (hamburger icon, drawer/sheet component)
- [ ] Products dropdown menu items:
  - Interactive Flat Panels → `/products/interactive-flat-panels`
  - Kiosks & Signage → `/products/kiosks`
  - CCTV & Security → `/products/cctv`
  - View All Products → `/products`
- [ ] Solutions dropdown (optional — can defer):
  - Enterprise → `/solutions/enterprise`
  - Education → `/solutions/education`
- [ ] Styling: Transparent on hero, solid background on scroll (requires scroll listener)
- [ ] Mobile: Hamburger menu with Sheet component (shadcn/ui)
- [ ] Test: Navbar renders on test page, dropdowns work, mobile menu toggles

### 3.2 — Footer Component
- [ ] Create `components/footer.tsx`
- [ ] Structure (4-column layout desktop, stacked mobile):
  - **Column 1:** Heading "GET CONNECTED WITH US", Social links (LinkedIn, Facebook — or omit per CLAUDE.md)
  - **Column 2:** Company links (About InfinityX, Contact Us)
  - **Column 3:** Products links (Interactive Flat Panels, Kiosks, CCTV)
  - **Column 4:** Contact info (Phone, Email, Address, Hours)
- [ ] Email signup form (optional — can defer):
  - Input field + Submit button
  - Server action → Nodemailer
- [ ] Bottom bar: Privacy Policy | Cookies Policy | Copyright
- [ ] Styling: Dark background (`bg-[#1C1C1D]`), white text
- [ ] Copy from `pages.md` footer section
- [ ] Test: Footer renders on test page, links work

### 3.3 — Cookie Consent Banner
- [ ] Create `components/cookie-banner.tsx`
- [ ] Structure:
  - Fixed bottom overlay (`fixed bottom-0 left-0 right-0 z-50`)
  - Message with links to /cookies and /privacy-policy
  - Accept button (primary blue) + Reject button (ghost)
  - Close button (X icon)
- [ ] State: Show on first visit, hide after accept/reject
- [ ] localStorage: Save preference (`cookie_consent: 'accepted' | 'rejected'`)
- [ ] Copy from `pages.md` cookie banner section
- [ ] Styling: Dark background (`bg-gray-900`), white text
- [ ] Test: Banner appears, accept/reject works, preference persists

**Sprint 3 Complete:** Navbar, Footer, Cookie Banner ready. Can be added to `app/layout.tsx` global layout.

---

## Sprint 4 — Homepage Organisms (Section-Specific Components)

**Goal:** Build homepage-specific components. Ref: `components.md` sections 02-08, `pages.md` homepage

### 4.1 — Hero Carousel
- [ ] Create `components/hero-carousel.tsx`
- [ ] Install Swiper React: `import { Swiper, SwiperSlide } from 'swiper/react'`
- [ ] Import Swiper CSS: `import 'swiper/css'`
- [ ] Structure:
  - Swiper container with 4-6 slides
  - Each slide: Background image + Text overlay + CTA button
  - Navigation arrows (prev/next)
  - Pagination dots (optional)
- [ ] Swiper config:
  - Auto-play: `autoplay={{ delay: 5000 }}`
  - Loop: `loop={true}`
  - Speed: `speed={800}`
- [ ] Slide content from `pages.md` homepage hero carousel section
- [ ] Styling: Full viewport height (`min-h-screen`), text overlay with gradient
- [ ] CTA button: Ghost variant (white border, white text)
- [ ] Test: Carousel auto-plays, nav arrows work, responsive

### 4.2 — Product Category Cards Grid
- [ ] Create `components/product-category-cards.tsx`
- [ ] Structure:
  - Grid container (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)
  - Each card: Image (dual image for hover effect) + Category label + Link
- [ ] Cards (3 for V1):
  - Interactive Flat Panels
  - Kiosks & Signage
  - CCTV & Security
- [ ] Hover effect: Image swap (use Framer Motion or CSS group-hover)
- [ ] Images: Use Unsplash placeholders until client provides
- [ ] Test: Cards render, hover effect works, links navigate

### 4.3 — Stats Strip
- [ ] Create `components/stats-strip.tsx`
- [ ] Structure:
  - Grid container (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`)
  - Each stat: Large number + Label below
- [ ] Stats from `pages.md` homepage (4 stats):
  - 4000+ — Installations
  - 2014 — Founded
  - MSME · ISO · GeM — Certifications
  - Pan India — Service Network
- [ ] Styling: Large bold number (`text-5xl font-bold`), smaller label (`text-sm text-gray-600`)
- [ ] Optional: Count-up animation on scroll (react-countup or Framer Motion)
- [ ] Test: Stats render, layout responsive

### 4.4 — Section Heading Component
- [ ] Create `components/section-heading.tsx`
- [ ] Props: `heading` (string), `description` (string), `centered` (boolean)
- [ ] Structure:
  - H2 with uppercase styling (`text-4xl font-semibold uppercase`)
  - Description paragraph below (`text-lg text-gray-600 leading-relaxed`)
- [ ] Layout: Centered (`text-center max-w-3xl mx-auto`) or left-aligned
- [ ] Test: Component renders with different props

### 4.5 — Tabbed Content (Solutions Section)
- [ ] Create `components/tabbed-content-solutions.tsx`
- [ ] Use shadcn/ui Tabs component
- [ ] Structure:
  - Tab triggers: Enterprise | Education
  - Tab content panels: Heading + Description + CTA link
- [ ] Content from `pages.md` homepage Solutions tabs section
- [ ] Styling: Active tab highlighted (brand blue border-bottom)
- [ ] Test: Tab switching works, content updates

### 4.6 — CTA Section (optional — or inline on homepage)
- [ ] Create `components/cta-section.tsx` (optional)
- [ ] Structure: Centered heading + subheading + 2 CTA buttons
- [ ] Content from `pages.md` homepage CTA band
- [ ] Styling: Full-width section, contrasting background (brand blue or dark gray)
- [ ] Test: CTAs link to /get-quote and /contact

**Sprint 4 Complete:** All homepage organisms ready.

---

## Sprint 5 — Homepage Assembly

**Goal:** Assemble homepage from Sprint 3 + Sprint 4 components. Ref: `pages.md` homepage

### 5.1 — Root Layout
- [ ] Open `app/layout.tsx`
- [ ] Add Navbar component (at top)
- [ ] Add Footer component (at bottom)
- [ ] Add Cookie Banner component (global overlay)
- [ ] Wrap children with layout structure
- [ ] Test: Navbar and Footer appear on all pages

### 5.2 — Homepage Assembly
- [ ] Open `app/page.tsx`
- [ ] Import all homepage components
- [ ] Assemble sections in order:
  1. Hero Carousel (full viewport)
  2. Product Category Cards (section with heading)
  3. About Section (Section Heading + Stats Strip)
  4. Tabbed Content (Solutions section)
  5. CTA Section (Get Quote CTA)
- [ ] Add Section Heading components where needed
- [ ] Copy from `pages.md` homepage section
- [ ] Test: Homepage renders all sections, scroll works, responsive

### 5.3 — Responsive Testing
- [ ] Test at 320px (mobile)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (desktop)
- [ ] Test at 1440px (wide desktop)
- [ ] Fix any layout issues

**Sprint 5 Complete:** Homepage fully functional.

---

## Sprint 6 — Product Pages Components

**Goal:** Build product-specific components. Ref: `components.md` sections 03, 04, 11

### 6.1 — Product Listing Card Component
- [ ] Create `components/product-listing-card.tsx`
- [ ] Props: `image`, `name`, `description`, `href`
- [ ] Structure:
  - Image (clickable)
  - Product name (H4)
  - Short description (paragraph)
  - "Learn More" link with arrow icon
- [ ] Hover effect: Card shadow increase or subtle lift
- [ ] Test: Card renders, links work

### 6.2 — Category Tab Navigation (optional)
- [ ] Create `components/category-tab-nav.tsx` (optional)
- [ ] Structure: Horizontal icon-based tabs (MAXHUB style)
- [ ] Icons: Lucide icons for each category
- [ ] Active state: Highlighted background + border
- [ ] Test: Tabs switch categories, active state works
- [ ] Note: Can use simpler category cards grid instead

**Sprint 6 Complete:** Product page components ready.

---

## Sprint 7 — Product Pages Assembly

**Goal:** Build product listing and category pages. Ref: `pages.md` products, categories

### 7.1 — All Products Listing Page
- [ ] Create `app/products/page.tsx`
- [ ] Add Section Heading: "OUR PRODUCTS" + description
- [ ] Add Product Category Cards grid (same component as homepage)
- [ ] Copy from `pages.md` products listing page
- [ ] Test: Page renders, cards link to categories

### 7.2 — IFP Category Page
- [ ] Create `app/products/interactive-flat-panels/page.tsx`
- [ ] Add Section Heading: "INTERACTIVE FLAT PANELS" + description
- [ ] Add Product Listing Cards grid (3 products: Series A/B/C placeholders)
- [ ] Copy from `pages.md` IFP category page
- [ ] Images: Use Unsplash placeholders (conference room displays)
- [ ] Test: Page renders, cards link to product pages

### 7.3 — Kiosks Category Page
- [ ] Create `app/products/kiosks/page.tsx`
- [ ] Add Section Heading: "KIOSKS & DIGITAL SIGNAGE" + description
- [ ] Add Product Listing Cards grid (1 product: Ultra Slim Kiosk)
- [ ] Copy from `pages.md` kiosks category page
- [ ] Test: Page renders

### 7.4 — CCTV Category Page
- [ ] Create `app/products/cctv/page.tsx`
- [ ] Add Section Heading: "CCTV & SECURITY SOLUTIONS" + description
- [ ] Add Product Listing Cards grid (2 products: PLACEHOLDER)
- [ ] Copy from `pages.md` CCTV category page
- [ ] Test: Page renders

**Sprint 7 Complete:** All category pages functional.

---

## Sprint 8 — Product Detail Pages Template

**Goal:** Build product page template and individual product pages. Ref: `pages.md` product pages

### 8.1 — Product Page Template Component
- [ ] Create `components/product-page-template.tsx`
- [ ] Props: `title`, `tagline`, `image`, `features`, `specs`, `applications`
- [ ] Structure:
  - Product hero (image + title + tagline)
  - Key features section (Section Heading + list)
  - Specifications table
  - Applications section (Section Heading + use cases)
  - Get Quote CTA (button linking to /get-quote with product name pre-filled)
- [ ] Styling: Clean layout, table styling, responsive
- [ ] Test: Template renders with sample data

### 8.2 — IFP Series A Product Page
- [ ] Create `app/products/interactive-flat-panels/series-a/page.tsx`
- [ ] Use Product Page Template
- [ ] Content: PLACEHOLDER from `pages.md` IFP Series A section
- [ ] Add note: "Content pending from client — fill after trip"
- [ ] Test: Page renders with placeholder content

### 8.3 — IFP Series B & C Product Pages
- [ ] Create `app/products/interactive-flat-panels/series-b/page.tsx`
- [ ] Create `app/products/interactive-flat-panels/series-c/page.tsx`
- [ ] Use same template with different placeholder names
- [ ] Test: Pages render

### 8.4 — Ultra Slim Kiosk Product Page
- [ ] Create `app/products/kiosks/ultra-slim-kiosk/page.tsx`
- [ ] Use Product Page Template
- [ ] Content from `pages.md` Ultra Slim Kiosk section
- [ ] Test: Page renders

### 8.5 — CCTV Product Pages (Placeholders)
- [ ] Create `app/products/cctv/product-1/page.tsx`
- [ ] Create `app/products/cctv/product-2/page.tsx`
- [ ] Use template with PLACEHOLDER content
- [ ] Add note: "Spec pending from client"
- [ ] Test: Pages render

**Sprint 8 Complete:** All V1 product pages functional (with placeholder content where needed).

---

## Sprint 9 — Forms (Contact & Get Quote)

**Goal:** Build contact and quote forms with validation and submission. Ref: `pages.md` contact, get-quote

### 9.1 — Form Server Actions Setup
- [ ] Create `lib/email.ts` for Nodemailer setup
- [ ] Configure SMTP (Hostinger):
  ```typescript
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false, // STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  ```
- [ ] Create `lib/sheets.ts` for Google Sheets API setup
- [ ] Test: Send test email (local development)

### 9.2 — Contact Form Component
- [ ] Create `app/contact/page.tsx`
- [ ] Form fields from `pages.md` contact page:
  - Full Name, Email, Phone, Company (optional), Subject dropdown, Message, File upload
- [ ] Use React Hook Form + Zod validation
- [ ] Add Cloudflare Turnstile component
- [ ] Server action: Submit → Nodemailer + Google Sheets
- [ ] Success/error states
- [ ] Test: Form submits, email received, Sheets log updated

### 9.3 — Get Quote Form Component
- [ ] Create `app/get-quote/page.tsx`
- [ ] Form fields from `pages.md` get-quote page:
  - Full Name, Email, Phone, Company, Product dropdown, Quantity, Project Type, Budget, Timeline, Message, File upload
- [ ] Product dropdown: Populate from product list (IFP Series A/B/C, Kiosks, CCTV)
- [ ] Use React Hook Form + Zod validation
- [ ] Add Cloudflare Turnstile
- [ ] Server action: Submit → Nodemailer + Google Sheets
- [ ] Pre-fill product if URL param present: `/get-quote?product=series-a`
- [ ] Test: Form submits, product pre-fills, email received

### 9.4 — File Upload Handling
- [ ] Validate file type (PDF, DOC, DOCX only)
- [ ] Validate file size (max 10MB)
- [ ] Handle file in server action (attach to email)
- [ ] Test: File uploads work, large files rejected

**Sprint 9 Complete:** Contact and Get Quote forms fully functional with email + Sheets logging.

---

## Sprint 10 — Content Pages (About, Privacy, 404)

**Goal:** Build remaining content pages. Ref: `pages.md` about, privacy, 404

### 10.1 — About Page
- [ ] Create `app/about/page.tsx`
- [ ] Sections from `pages.md` about page:
  - About header (Section Heading + hero image placeholder)
  - Stats Strip (same component as homepage)
  - Our Story (Section Heading + text)
  - Certifications (badge grid: MSME, ISO, GeM)
  - Markets Served (Section Heading + list)
  - CTA (Partner With Us)
- [ ] Copy from `pages.md` about section
- [ ] Test: Page renders, responsive

### 10.2 — Privacy Policy Page
- [ ] Create `app/privacy-policy/page.tsx`
- [ ] Add placeholder content or standard template
- [ ] Note: "Client to provide final privacy policy text"
- [ ] Test: Page renders

### 10.3 — Cookies Policy Page (optional)
- [ ] Create `app/cookies/page.tsx` (optional for V1)
- [ ] Add placeholder content
- [ ] Or defer to post-launch

### 10.4 — 404 Page
- [ ] Create `app/not-found.tsx`
- [ ] Structure from `pages.md` 404 section:
  - H1: "Page Not Found"
  - Subheading: "The page you're looking for doesn't exist..."
  - CTA: "Go to Homepage" + "View Products"
- [ ] Icon: Lucide `FileQuestion` or custom illustration
- [ ] Test: Navigate to non-existent URL, 404 renders

**Sprint 10 Complete:** All content pages functional.

---

## Sprint 11 — SEO & Metadata

**Goal:** Add metadata, schema, sitemap, robots.txt. Ref: CLAUDE.md SEO requirements

### 11.1 — Page Metadata
- [ ] Add `generateMetadata()` to each page:
  - Title: "[Page Name] | InfinityX Global"
  - Description: From `pages.md` page descriptions
  - OG tags: og:title, og:description, og:image
  - Twitter tags (optional)
- [ ] Homepage metadata:
  - Title: "InfinityX Global | Interactive Displays, Kiosks, CCTV Solutions"
  - Description: From `pages.md` homepage
- [ ] Product page metadata:
  - Dynamic title with product name
  - Description from product short description
- [ ] Test: Inspect `<head>`, verify metadata present

### 11.2 — JSON-LD Schema
- [ ] Add Organization schema to root layout:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InfinityX Global",
    "url": "https://infinityxglobal.com",
    "logo": "https://infinityxglobal.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8228822849",
      "contactType": "Sales"
    }
  }
  ```
- [ ] Add Product schema to product pages (use `generateMetadata`)
- [ ] Test: Validate schema with Google Rich Results Test

### 11.3 — Sitemap.xml
- [ ] Create `app/sitemap.ts`:
  ```typescript
  export default function sitemap() {
    return [
      { url: 'https://infinityxglobal.com', lastModified: new Date() },
      { url: 'https://infinityxglobal.com/products', lastModified: new Date() },
      // ... all pages
    ]
  }
  ```
- [ ] Test: Visit `/sitemap.xml`, verify all URLs present

### 11.4 — Robots.txt
- [ ] Create `app/robots.ts`:
  ```typescript
  export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://infinityxglobal.com/sitemap.xml',
    }
  }
  ```
- [ ] Test: Visit `/robots.txt`, verify correct

### 11.5 — Google Analytics
- [ ] Add GA4 script to `app/layout.tsx`:
  ```typescript
  <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
  <Script id="google-analytics">
    {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
  </Script>
  ```
- [ ] Add GA_ID to .env.example
- [ ] Test: GA fires pageviews (check Network tab)

**Sprint 11 Complete:** SEO fully implemented.

---

## Sprint 12 — Performance Optimization

**Goal:** Lighthouse 90+ mobile per CLAUDE.md requirements

### 12.1 — Image Optimization
- [ ] Replace all `<img>` with Next.js `<Image>` component
- [ ] Add width/height to all images (prevent CLS)
- [ ] Hero image: `priority={true}` for LCP
- [ ] Other images: `loading="lazy"` (default)
- [ ] Test: Lighthouse CLS score

### 12.2 — Font Optimization
- [ ] Verify Google Fonts uses `&display=swap`
- [ ] Preconnect to fonts.googleapis.com in layout:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  ```
- [ ] Test: No font FOIT (Flash of Invisible Text)

### 12.3 — Code Splitting
- [ ] Dynamic import for Swiper: `const Swiper = dynamic(() => import('./swiper'))`
- [ ] Dynamic import for heavy components (if any)
- [ ] Test: Check bundle size in build output

### 12.4 — Security Headers
- [ ] Add headers to `next.config.mjs` (from `stack.md`):
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy
- [ ] Test: Inspect response headers

### 12.5 — Lighthouse Audit
- [ ] Run Lighthouse on homepage (mobile)
- [ ] Run Lighthouse on product page
- [ ] Run Lighthouse on contact form
- [ ] Target scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100
- [ ] Fix any issues flagged
- [ ] Re-test until all scores meet targets

**Sprint 12 Complete:** Performance optimized, Lighthouse scores 90+.

---

## Sprint 13 — Final QA & Polish

**Goal:** Cross-browser testing, bug fixes, final review

### 13.1 — Cross-Browser Testing
- [ ] Test in Chrome (desktop + mobile)
- [ ] Test in Firefox
- [ ] Test in Safari (desktop + iOS)
- [ ] Test in Edge
- [ ] Fix any browser-specific issues

### 13.2 — Responsive Testing (All Pages)
- [ ] Test all pages at 320px (iPhone SE)
- [ ] Test all pages at 768px (tablet)
- [ ] Test all pages at 1024px (desktop)
- [ ] Test all pages at 1440px (wide desktop)
- [ ] Fix any layout breakages

### 13.3 — Form Testing
- [ ] Test contact form: valid submission
- [ ] Test contact form: validation errors
- [ ] Test contact form: file upload (valid + invalid)
- [ ] Test contact form: Turnstile challenge
- [ ] Test get-quote form: all fields
- [ ] Test get-quote form: product pre-fill from URL
- [ ] Verify emails received at contact@infinityxglobal.com
- [ ] Verify Google Sheets logging works

### 13.4 — Navigation Testing
- [ ] Test all navbar links work
- [ ] Test all footer links work
- [ ] Test all product category cards link correctly
- [ ] Test all product listing cards link correctly
- [ ] Test all CTAs link to correct pages
- [ ] Test mobile menu opens/closes
- [ ] Test dropdowns work (desktop)

### 13.5 — Content Review
- [ ] Proofread all copy for typos
- [ ] Verify all PLACEHOLDER content is marked clearly
- [ ] Verify all images have proper alt text
- [ ] Verify all links have descriptive anchor text
- [ ] Check for any broken links (404s)

### 13.6 — Accessibility Audit
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Focus indicators visible on all focusable elements
- [ ] Screen reader test (basic — read headlines, links, buttons)
- [ ] Color contrast passes WCAG AA (use browser DevTools)
- [ ] All images have alt text
- [ ] Forms have proper labels

**Sprint 13 Complete:** Site fully tested and polished.

---

## Sprint 14 — Deployment Preparation

**Goal:** Prepare for Vercel deployment

### 14.1 — Environment Variables Setup
- [ ] Create Vercel project (link to GitHub repo)
- [ ] Add all environment variables to Vercel dashboard:
  - SMTP credentials (Hostinger)
  - Turnstile keys (Cloudflare)
  - Google Sheets API credentials
  - GA4 tracking ID
  - Site URL
- [ ] Test environment variables load correctly

### 14.2 — Build Test
- [ ] Run production build locally: `npm run build`
- [ ] Fix any build errors
- [ ] Run production server locally: `npm start`
- [ ] Test production build works

### 14.3 — Vercel Deployment
- [ ] Push to main branch
- [ ] Verify Vercel auto-deploys
- [ ] Check deployment logs for errors
- [ ] Visit preview URL, test site works

### 14.4 — Domain Setup
- [ ] Add domain to Vercel: infinityxglobal.com
- [ ] Get Vercel DNS settings (A record: 76.76.21.21)
- [ ] Wait for friend to configure Cloudflare DNS (weekend per CLAUDE.md)
- [ ] Verify domain resolves
- [ ] Test SSL certificate (should auto-provision)

### 14.5 — Final Production Test
- [ ] Test all pages on production URL
- [ ] Test forms submit on production
- [ ] Test emails arrive at contact@infinityxglobal.com
- [ ] Test Google Sheets logging on production
- [ ] Test Analytics fires on production

**Sprint 14 Complete:** Site deployed to production.

---

## Sprint 15 — Handover Package

**Goal:** Prepare handover materials for client

### 15.1 — Documentation
- [ ] Write README.md:
  - Project overview
  - Tech stack
  - Getting started (install, dev server, build)
  - Environment variables guide
  - Deployment guide
- [ ] Create credentials document:
  - Vercel account access
  - Cloudflare dashboard access
  - Google Analytics access
  - Google Sheets access
  - Email access (if applicable)
- [ ] Create content update guide:
  - How to add new products
  - How to update pricing (contact-for-pricing only)
  - How to update company info
  - How to update images

### 15.2 — Cleanup
- [ ] Remove any test/debug code
- [ ] Remove console.logs
- [ ] Verify .env.local not committed
- [ ] Verify .env.example is complete and accurate
- [ ] Final git commit: "feat: v1 complete — ready for handover"

### 15.3 — Client Walkthrough Prep
- [ ] Schedule walkthrough with Mahesh Rekapalli (CEO)
- [ ] Prepare demo script (show all features)
- [ ] Prepare Q&A for common questions
- [ ] Document items pending from client:
  - Logo files (SVG + dark variant)
  - IFP series names + exact sizes
  - Product images (after trip)
  - Product spec sheets (after trip)
  - CCTV details (after trip)
  - GST number (from Laxman sir)
  - Office address (developer has it)
  - Privacy policy document

**Sprint 15 Complete:** Handover package ready.

---

## Sprint 16 — Post-Trip Content Fill (Change Order)

**Goal:** After client trip, add remaining product content

### 16.1 — Product Content Update
- [ ] Replace IFP placeholder names (Series A/B/C) with real names
- [ ] Add real product images to all IFP pages
- [ ] Add real specs to all IFP pages
- [ ] Add real CCTV product names + details
- [ ] Add CCTV images + specs

### 16.2 — Additional Product Pages (Change Order)
- [ ] Add Commercial Display category + 10 products
- [ ] Add LED Display category + 12 products
- [ ] Add remaining Kiosk products (9 products)
- [ ] Add Software category + CAST CMS page
- [ ] Add Solutions pages (Enterprise, Education)

### 16.3 — Final QA After Content Fill
- [ ] Re-test all updated product pages
- [ ] Re-run Lighthouse audits
- [ ] Re-deploy to production

**Sprint 16 Complete:** Full product catalogue live.

---

## Build Order Summary

| Sprint | Deliverable | Estimated Time |
|---|---|---|
| 0 | Pre-flight checks | 30 min |
| 1 | Design system foundation | 2 hours |
| 2 | Atoms (shadcn/ui components) | 1 hour |
| 3 | Shared organisms (Navbar, Footer, Cookie Banner) | 4 hours |
| 4 | Homepage organisms (Hero, Stats, Tabs, etc.) | 6 hours |
| 5 | Homepage assembly | 2 hours |
| 6 | Product page components | 2 hours |
| 7 | Product pages assembly (categories) | 3 hours |
| 8 | Product detail pages template | 4 hours |
| 9 | Forms (Contact, Get Quote) | 6 hours |
| 10 | Content pages (About, Privacy, 404) | 3 hours |
| 11 | SEO & metadata | 3 hours |
| 12 | Performance optimization | 4 hours |
| 13 | Final QA & polish | 4 hours |
| 14 | Deployment | 2 hours |
| 15 | Handover package | 2 hours |
| **Total V1** | | **~48 hours** |
| 16 | Post-trip content fill (change order) | +20 hours |

---

## Critical Path Dependencies

**Cannot start until complete:**
- Sprint 2 depends on Sprint 1 (design tokens must exist first)
- Sprint 3 depends on Sprint 2 (organisms need atoms)
- Sprint 5 depends on Sprints 3+4 (homepage needs all components)
- Sprint 9 depends on Sprint 1 (forms need environment setup)
- Sprint 14 depends on Sprints 1-13 (deployment needs complete site)

**Can run in parallel:**
- Sprints 6-8 (product pages) can overlap with Sprint 10 (content pages)
- Sprint 11 (SEO) can run alongside Sprint 12 (performance)

---

**End of Build Order**
