# Technology Stack Decision — MAXHUB India Clone (InfinityX Global)

**Source audit:** `clone-audit_maxhub-india.md`  
**Extraction date:** 2026-04-01  
**Target site:** https://www.maxhub.com/in/  
**Clone for:** InfinityX Global

---

## Target Site Stack (Observed from Audit)

| Signal | Observed Evidence | Inferred Stack |
|---|---|---|
| **Class patterns** | `.btn`, `.btn-default`, `.container`, `.navbar-brand`, `.dropdown-toggle` alongside custom BEM classes `.c-banner`, `.menu-container`, `.img-box` | Custom CSS framework with Bootstrap influence (inferred) — NOT Tailwind, NOT pure Bootstrap |
| **CSS framework** | No utility classes like `text-sm`, `px-4`, `bg-blue-500`. Custom classes: `.title`, `.description`, `.p`, `.mb-h3` | Custom CSS with semantic class names |
| **Script src domains** | `sgp-cstore-pub.maxhub.com`, `pi.pardot.com`, `www.googletagmanager.com`, `go.maxhub.com` | Custom CDN, Pardot marketing automation, Google Tag Manager |
| **Font loading** | Custom iconfont from CDN: `sgp-cstore-pub.maxhub.com/.../iconfont-v1.0.0.css`. No Google Fonts observed. | Custom font (NexaRegular) + icon font, self-hosted |
| **JavaScript libraries** | Class signatures: `.swiper`, `.swiper-initialized`, `.swiper-horizontal`, `.swiper-watch-progress` | **Swiper.js** carousel library (observed) |
| **Form handling** | Form action: `https://go.maxhub.com/l/963553/2023-06-01/44y2j` | Pardot form submission endpoint |
| **CDN pattern** | All assets from `sgp-cstore-pub.maxhub.com` | Self-hosted CDN (Singapore region) |
| **Meta tags** | `api-domain`: "/in/v1/api", `base-dir`: "/en/", `domain-name`: "in" | Custom backend API, multi-region site structure |
| **Viewport** | `width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no` | Mobile-first responsive, disables user scaling (not recommended for accessibility) |
| **Canonical** | Not present | Missing canonical tags (SEO gap) |

**Target site likely uses:** Custom-built site with Bootstrap-influenced CSS, Swiper.js for carousels, Pardot for marketing automation, custom backend API. Not a recognizable framework (WordPress, Webflow, etc.) — appears to be bespoke build. (inferred)

---

## Recommended Clone Stack (InfinityX Global)

Based on CLAUDE.md project requirements and audit complexity rating (Medium).

```
Framework:         Next.js 14 (App Router)
Language:          TypeScript
Styling:           Tailwind CSS v3
Component Library: shadcn/ui (headless UI primitives)
Carousel:          Swiper.js React (matches MAXHUB implementation)
Animation:         Framer Motion (for scroll animations, page transitions)
Icons:             Lucide React
Form Validation:   React Hook Form + Zod
Forms Security:    Cloudflare Turnstile (CAPTCHA replacement)
Email:             Nodemailer (SMTP via Hostinger)
Database/Logging:  Google Sheets API (form submission logging)
Fonts:             Google Fonts — Open Sans (replaces NexaRegular)
Hosting:           Vercel (free tier under client account)
CDN:               Cloudflare (free plan)
Analytics:         Google Analytics 4 + Google Search Console
Version Control:   GitHub (https://github.com/jayasriganesh/infinityxglobal.git)
```

---

## Stack Rationale

### Next.js 14 (App Router)
**Why:** 
- **SEO critical for B2B** — InfinityX targets enterprise buyers searching for "interactive flat panel India", "LED display solutions", "CCTV systems". Next.js SSR ensures all content is indexable.
- **Static generation for product pages** — Product catalogue pages can be pre-rendered at build time for maximum performance (Lighthouse 90+ mobile target per CLAUDE.md).
- **Server actions** — Simplifies form submission (contact form, get quote form) without separate API routes.
- **App Router** — Modern Next.js approach with React Server Components for optimal performance.

**Matches audit finding:** MAXHUB appears to use SSR (full HTML in initial response) — Next.js replicates this.

---

### TypeScript
**Why:**
- **Type safety** — Prevents runtime errors in form handling, API responses, component props.
- **Better DX** — IntelliSense for design tokens, component props, ensures consistency.
- **CLAUDE.md requirement** — Explicitly specified in project stack.

---

### Tailwind CSS v3
**Why:**
- **Rapid styling** — Utility-first approach allows quick implementation of MAXHUB's visual design.
- **Design token integration** — All colors, spacing, typography from `tokens.json` map directly to Tailwind config.
- **Audit contrast** — MAXHUB uses custom CSS framework. Tailwind provides same control but with faster development and smaller bundle (PurgeCSS removes unused styles).
- **Mobile-first** — Tailwind's responsive prefix system (`md:`, `lg:`) matches CLAUDE.md breakpoints (320 / 768 / 1024 / 1440).

**CLAUDE.md requirement:** Explicitly specified in project stack.

---

### shadcn/ui
**Why:**
- **Headless, customizable** — Unlike component libraries that force a look, shadcn/ui provides unstyled primitives we can style to match MAXHUB exactly.
- **Copy-paste components** — Button, Form, Dropdown, Tabs, Dialog components copy into project (not installed as dependency) — full control.
- **Tailwind-native** — Built for Tailwind CSS, uses same design token system.
- **Accessibility** — Built on Radix UI primitives (WCAG compliant out of the box).

**CLAUDE.md requirement:** Explicitly specified in project stack.

**Components from shadcn/ui:**
- Button (primary, ghost, outline variants)
- Form + Input + Textarea (contact forms)
- Dropdown Menu (navbar Products/Solutions dropdowns)
- Tabs (Solutions section tabbed content)
- Dialog (future: mobile menu overlay)
- Sheet (future: mobile drawer menu)

---

### Swiper.js React
**Why:**
- **Matches audit** — MAXHUB uses Swiper.js for hero carousel and feature carousels. Observed class signatures: `.swiper`, `.swiper-horizontal`, `.banner-swiper`.
- **Feature-rich** — Auto-play, navigation arrows, pagination dots, touch/swipe gestures, keyboard navigation.
- **React integration** — `swiper/react` package provides React components (`<Swiper>`, `<SwiperSlide>`).
- **Mobile-optimized** — Touch gestures work out of the box (critical for mobile traffic).

**Alternative considered:** Embla Carousel (lighter weight) — rejected because Swiper.js is battle-tested and matches target site exactly.

---

### Framer Motion
**Why:**
- **Scroll animations** — MAXHUB uses `.txt-anim` class for animated headings. Framer Motion's `whileInView` provides smooth scroll-triggered animations.
- **Page transitions** — Smooth transitions between pages (fade, slide) enhance UX.
- **Component animations** — Hover effects, tab switching, mobile menu animations.
- **Performance** — Uses CSS transforms (GPU-accelerated), doesn't block main thread.

**Audit gap:** Exact animation properties not extracted (requires browser verification). Framer Motion allows easy prototyping to match brand feel.

---

### Lucide React
**Why:**
- **Icon consistency** — MAXHUB uses custom icon font. Lucide provides 1000+ icons in consistent style.
- **Tree-shakeable** — Only icons used are bundled (unlike Font Awesome which loads all icons).
- **React components** — `<ArrowRight />`, `<Menu />`, `<X />` — clean API.
- **Matches MAXHUB arrows** — "Learn More" links use right arrow icon — Lucide `ArrowRight` or `ChevronRight`.

---

### React Hook Form + Zod
**Why:**
- **Form validation** — Contact form and Get Quote form need client-side validation before submission.
- **Type-safe schemas** — Zod schemas define form structure, TypeScript infers types automatically.
- **Performance** — React Hook Form uses uncontrolled inputs (fewer re-renders than Formik).
- **Error handling** — Built-in error state management, field-level validation.

**CLAUDE.md requirement:** Forms must have validation + Cloudflare Turnstile (security).

---

### Cloudflare Turnstile
**Why:**
- **CAPTCHA replacement** — CLAUDE.md specifies Turnstile on all forms (Contact, Get Quote, Email Signup).
- **Better UX** — No "click all traffic lights" frustration — invisible challenge for most users.
- **Free tier** — 1M requests/month free (sufficient for B2B site traffic).
- **Privacy-focused** — No personal data collected (unlike reCAPTCHA).

**Integration:** `@marsidev/react-turnstile` React component.

---

### Nodemailer (SMTP via Hostinger)
**Why:**
- **CLAUDE.md requirement** — Email via Hostinger Premium. SMTP: `smtp.hostinger.com:587 STARTTLS`.
- **Server-side email** — Next.js server actions call Nodemailer to send emails.
- **Dual destination** — Send to `contact@infinityxglobal.com` + log to Google Sheets.
- **Attachment support** — Get Quote form allows file uploads (PDF/DOC, max 10MB) — Nodemailer handles attachments.

**Alternative considered:** Resend, SendGrid — rejected because client already has Hostinger email (no additional cost).

---

### Google Sheets API (Form Logging)
**Why:**
- **CLAUDE.md requirement** — All form submissions logged to Google Sheets (backup + analytics).
- **Simple CRM** — Client can view leads in spreadsheet without admin panel (admin panel dropped from V1).
- **No database needed** — Sheets acts as lightweight database for form data.
- **Easy export** — Client can export leads to CSV for CRM import.

**Implementation:** `googleapis` npm package, service account authentication.

---

### Google Fonts — Open Sans
**Why:**
- **Replaces NexaRegular** — Audit observed NexaRegular (custom licensed font, not available). Open Sans is in MAXHUB's fallback stack: `"Open Sans", Arial, sans-serif`.
- **Similar appearance** — Both are clean geometric sans-serifs with excellent readability.
- **Free, open-source** — No licensing issues.
- **Google Fonts CDN** — Fast global delivery, automatic font subsetting.

**Weights needed:** 400 (regular), 600 (semibold), 700 (bold)

**Alternative considered:** Inter, Nunito Sans — rejected because Open Sans is explicitly in MAXHUB's fallback stack (closest match).

---

### Vercel
**Why:**
- **CLAUDE.md requirement** — Hosting on Vercel free tier under client account.
- **Next.js optimized** — Built by Vercel, zero-config deployment.
- **Global CDN** — Edge network ensures fast load times across India (primary market) and expansion markets (Nepal, Sri Lanka, UAE per CLAUDE.md).
- **Automatic HTTPS** — SSL certificates auto-provisioned.
- **Preview deployments** — Every git push creates preview URL for client review.

**DNS:** Cloudflare handles DNS, Vercel handles hosting (A record → 76.76.21.21 per CLAUDE.md).

---

### Cloudflare (Free Plan)
**Why:**
- **CLAUDE.md requirement** — CDN + DNS via Cloudflare free plan.
- **DDoS protection** — Free tier includes basic DDoS mitigation.
- **CDN caching** — Static assets cached globally (reduces Vercel bandwidth).
- **Email routing** — Can set up email forwarding (if needed beyond Hostinger).
- **Analytics** — Basic web analytics included (supplement to GA4).

**Critical:** NEVER touch MX records (email stays on Hostinger per CLAUDE.md).

---

## Tailwind Config Extensions

Based on extracted tokens from `tokens.json`, add to `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#196fd2',
          dark: '#1559a8',
        },
        secondary: '#333333',
        background: '#FFFFFF',
        surface: {
          DEFAULT: '#F5F5F5',
          alt: '#EBEBEB',
        },
        text: {
          primary: '#333333',
          secondary: '#777777',
          muted: '#999999',
          disabled: '#B8BABC',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: '#CCCCCC',
          light: '#E7E7E7',
        },
        footer: '#1C1C1D',
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'sans-serif'],
        display: ['Open Sans', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['32px', '48px'],  // H2 size
        '5xl': ['42px', '63px'],  // H1 size (hero)
        '6xl': ['48px', '1'],
      },
      spacing: {
        // Extends default Tailwind spacing (already 8px-based)
        // Custom values from audit:
        '15': '60px',  // Container padding: 15px observed
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        container: '1280px',  // Observed container max-width
      },
      screens: {
        // CLAUDE.md specifies: 320 / 768 / 1024 / 1440
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## File Structure (Next.js 14 App Router)

```
infinityxglobal-claude/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── products/
│   │   ├── page.tsx            # All products listing
│   │   ├── interactive-flat-panels/
│   │   │   ├── page.tsx        # IFP category page
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx    # Individual IFP product page
│   │   ├── led-display/
│   │   ├── commercial-display/
│   │   ├── kiosks/
│   │   └── cctv/
│   ├── solutions/
│   │   ├── page.tsx
│   │   ├── enterprise/
│   │   └── education/
│   ├── contact/
│   │   └── page.tsx            # Contact form
│   ├── get-quote/
│   │   └── page.tsx            # Get Quote form (separate)
│   ├── privacy-policy/
│   ├── cookies/
│   └── not-found.tsx           # 404 page
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero-carousel.tsx
│   ├── product-category-cards.tsx
│   ├── product-listing-cards.tsx
│   ├── stats-strip.tsx
│   ├── section-heading.tsx
│   ├── feature-carousel.tsx
│   ├── tabbed-content.tsx
│   ├── cookie-banner.tsx
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── form.tsx
│       ├── dropdown-menu.tsx
│       └── tabs.tsx
├── lib/
│   ├── email.ts                # Nodemailer setup
│   ├── sheets.ts               # Google Sheets API
│   └── utils.ts                # cn() helper for Tailwind
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── docs/
│   └── research/               # Layer 3 files (this extraction)
│       ├── clone-audit_maxhub-india.md
│       ├── tokens.json
│       ├── components.md
│       └── stack.md
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── .env.local                  # Never commit (secrets)
```

---

## Environment Variables (.env.local)

Never commit this file. Create `.env.example` for handover.

```bash
# Hostinger SMTP (for Nodemailer)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=contact@infinityxglobal.com
SMTP_PASS=[client-provided]

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=[from Cloudflare dashboard]
TURNSTILE_SECRET_KEY=[from Cloudflare dashboard]

# Google Sheets API (form logging)
GOOGLE_SHEETS_PRIVATE_KEY=[service account key]
GOOGLE_SHEETS_CLIENT_EMAIL=[service account email]
GOOGLE_SHEET_ID=[spreadsheet ID for form submissions]

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL (for metadata)
NEXT_PUBLIC_SITE_URL=https://infinityxglobal.com
```

---

## Dependencies (package.json)

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    
    "swiper": "^11.0.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.300.0",
    
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    
    "@marsidev/react-turnstile": "^0.5.0",
    
    "nodemailer": "^6.9.0",
    "googleapis": "^128.0.0",
    
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/nodemailer": "^6.4.0",
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## Performance Optimizations

**CLAUDE.md target:** Lighthouse 90+ mobile

### Image Optimization
- Use Next.js `<Image>` component (automatic WebP conversion, lazy loading, responsive srcsets)
- Set explicit width/height to prevent CLS (Cumulative Layout Shift)
- Priority loading for hero image: `priority={true}`

### Font Optimization
- Google Fonts with `&display=swap` to prevent FOIT (Flash of Invisible Text)
- Preconnect to fonts.googleapis.com: `<link rel="preconnect" href="https://fonts.googleapis.com" />`

### Code Splitting
- Dynamic imports for heavy components (carousel): `const Swiper = dynamic(() => import('./swiper'))`
- Route-based splitting (automatic with Next.js App Router)

### Caching Strategy
- Static pages (product pages): ISR (Incremental Static Regeneration) with 1-hour revalidation
- Dynamic pages (contact form): SSR
- Cloudflare CDN caches static assets (CSS, JS, images) at edge

---

## Security Measures

### Form Security
- Cloudflare Turnstile on all forms (Contact, Get Quote, Email Signup)
- Server-side validation with Zod schemas
- Rate limiting: max 5 form submissions per IP per hour (implement with Vercel Edge Config or Upstash Redis)
- File upload sanitization: check MIME type, max 10MB, allow only PDF/DOC/DOCX

### Headers (next.config.mjs)
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
  ]
}
```

### Environment Variables
- Never commit `.env.local`
- Use Vercel environment variables dashboard for production secrets
- Separate keys for development/production

---

## Layer 3 Files Produced

These files are now **stable reference material** for downstream stages (`/clone-plan`, `/clone-build`, `/clone-qa`).

| File | Purpose | Used By |
|---|---|---|
| `tokens.json` | Design system tokens (colors, typography, spacing, shadows) | `/clone-build` — all component styling |
| `components.md` | Component specifications (structure, states, content) | `/clone-build` — component implementation |
| `stack.md` | Technology decisions and configuration | `/clone-build` — setup, dependencies, deployment |

**Do not regenerate these files per-page.** If design decisions change, edit the source files directly.

---

## Gap Analysis — Proposed vs Observed

| Token/Decision | Status | Reasoning |
|---|---|---|
| **Primary blue #196fd2** | ✅ Observed | Extracted via browser inspection |
| **Complete gray palette** | ✅ Observed | 9 gray shades extracted from computed styles |
| **Button styles** | ✅ Observed | Ghost variant padding, border-radius extracted |
| **Open Sans font** | ⚠️ Proposed | NexaRegular unavailable — Open Sans from MAXHUB fallback stack |
| **Typography scale** | ⚠️ Partial | Body/H1/H2 observed, intermediate sizes proposed |
| **Spacing scale** | ⚠️ Proposed | `.mb-h3` classes observed but values not extracted — using Tailwind default 8px base |
| **Border radius (cards)** | ⚠️ Proposed | Visual observation suggests 4-8px, exact value requires inspection |
| **Box shadows** | ⚠️ Proposed | Shadows observed visually, exact CSS values not extracted |
| **Animation timing** | ⚠️ Proposed | Carousel auto-play, scroll animations observed, timing requires verification |
| **Success/error colors** | ⚠️ Proposed | Not in audit — standard green/red for form validation |

**Confidence rating:** ~75% observed, 25% proposed to fill audit gaps.

---

**End of Stack Specification**
