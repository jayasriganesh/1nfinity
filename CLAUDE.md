# InfinityX Global — Clone Project State
# ─────────────────────────────────────────────────────────────
# USE: /clone-master. Tick done items. Save end of session.
# ─────────────────────────────────────────────────────────────

## Status
Phase:    PHASE 4 — Build (Sprints 1-5 + Nav fixes done)
Done:     Nav fix — dead links fixed, search + region selector live, 7 pages built
Next:     /clone-build Sprint 6 (Product Page Templates)
Blocked:  None
Date:     2026-04-09

## Navigation Reference (READ EVERY SESSION)
Routes, interactive features, mega menu, footer links, new-page checklist:
  → docs/NAV_AND_INTERACTIVITY.md

RULE: New page/feature added → update that file same session. No href="#" ever.

## Session Summary (2026-04-02)
**Built:**
✅ Sprint 4.3 — Stats Strip (count-up animation, world map bg)
✅ Sprint 4.4 — CTA Section (Get Quote + Contact Sales)
✅ Sprint 5.1 — Homepage Assembly (all sections in app/page.tsx)
✅ Unified Mega Menu — 4 desktop sections (Products/Solutions/Support/Explore) · 12-col grid · preview panels
✅ Mobile Navigation — full-screen overlay, accordion, search, quick links, language selector
✅ Device/Accessory Grid — split-view homepage section
✅ Software Ecosystem — CAST CMS section with gradient treatment
✅ Build clean (zero errors, zero warnings)

**Prior (2026-04-01):**
✅ Sprint 1 — Design System Foundation
✅ Sprint 2 — Atoms (shadcn/ui)
✅ Sprint 3 — Shared Organisms (Navbar + Footer)
✅ Sprint 4.1 — Hero Carousel
✅ Sprint 4.2 — Product Category Cards

**Homepage (top→bottom):**
1. Navbar (mega menu desktop / full-screen overlay mobile)
2. Hero Carousel (4 slides, Swiper.js, auto-play)
3. Product Category Cards (IFP, Kiosks, CCTV)
4. Device/Accessory Grid (split-view)
5. Software Ecosystem (CAST CMS)
6. Stats Strip (count-up + world map)
7. CTA Section (Get Quote + Contact Sales)
8. Footer (contact info, email signup)

**Next:** /clone-build

## Project
Target:   https://www.maxhub.com/in/
Client:   InfinityX Global
Site:     https://infinityxglobal.com
Repo:     https://github.com/jayasriganesh/infinityxglobal.git
Start:    28-03-26
Deadline: 25-04-26 (4 weeks)
Stack:    Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · Vercel
Path:     D:\infinityxglobal-claude\

## Session Rules
- ONE session = ONE goal (one component, one phase step)
- No re-discussing locked decisions
- Check Phase Completion checklist before building
- Update this file end of session
- Browser audit: claude --mcp-server playwright
- All other: plain claude

## Decisions Locked (never re-discuss)
- Hosting:   Vercel free (client account)
- Email:     Hostinger Premium — NEVER touch MX records
- DNS + CDN: Cloudflare free
- SMTP:      smtp.hostinger.com:587 STARTTLS
- Forms:     Cloudflare Turnstile + Nodemailer + Google Sheets logging
- Analytics: GA4 + Google Search Console
- CMS:       Dropped V1 — quote Phase 2
- Admin:     Dropped V1 — quote separately
- Language:  English only V1
- Perf:      Lighthouse 90+ mobile
- Images:    Real client photos + Unsplash until assets arrive
- Pricing:   All contact-for-pricing — no fixed prices V1
- Agents:    Single focused sessions — no parallel agents

## Scope V1 (Locked — ₹30,000 fixed)
IN:
  Website clone (MAXHUB India structure)
  Product pages — IFP (priority) + Kiosks + CCTV + Display Solutions catalogue
  Contact form + Get Quote form (separate)
  File attachments on forms (RFQ docs)
  Mobile responsive (320 / 768 / 1024 / 1440)
  404 page · GA4 · Privacy policy
  Cloudflare + Vercel deployment
  Handover package (README + credentials + .env.example)

OUT (change order):
  Admin CMS · Analytics dashboard · Partner portal · Multilingual
  Blog CMS (shell only) · Careers CMS (static form only)
  WhatsApp Business button (TBD after trip)
  Product brochure PDF downloads (TBD after assets)
  Own-brand display launch page (confidential — mid-2026)

## Client Facts (Verified — questionnaire 28-03-26)
Founded:      2014
Installs:     4000+
Certs:        MSME, ISO, GeM
Channel partners: DO NOT DISPLAY
Govt projects:    DO NOT DISPLAY
Case studies:     DO NOT DISPLAY
Contact:      Mahesh Rekapalli — CEO — 9666305689
Approval:     Mahesh Rekapalli
Phone:        8228822849 / 9640778582
Email:        contact@infinityxglobal.com
Forms →:      contact@infinityxglobal.com
GST:          PENDING — Laxman sir
Address:      Developer has it
Social:       None — not V1
WhatsApp:     TBD after trip — change order
SLA:          48hr max

## Competitors (SEO)
BenQ · MAXHUB · Newline · EyeRIS · Sensus

## Expansion Markets (SEO)
Current: Pan India
Target:  Nepal · Sri Lanka · Bhutan · Saudi Arabia / UAE · Africa

## Product Catalogue (confirmed by client)
V1 priority: IFP (3 series × 3 sizes — spec pending) · Kiosks · CCTV
After trip:  All display products below (change order — additional billing)
Pricing:     ALL contact-for-pricing — no exceptions

### Category A — LED Video Walls
- COB LED Video Wall               P0.9–P1.87 · 2K/4K/8K
- Transparent LED Video Wall       indoor P1.9–P3.9 IP45 · outdoor P3.9–P15.6 IP65
- All-in-One LED Display           120/138/150/169 inches · Android OS
- Scape Indoor LED Wall            P0.7–P4 · 100K hr
- Scape Outdoor LED Wall           P2.5–P10 · IP65 · 100K hr
- 3D Anamorphic Active LED Wall    indoor P1.2–P1.4 · outdoor P2.5–P8
- Scape Flexible / Curved Indoor
- LCD Video Wall                   55 inch · bezel 0.88/1.78/3.5mm

### Category B — Kiosks & Standees
- Ultra Slim Kiosk Touch/Non-Touch  32/43/55/65 inches · Android ← V1
- Dual Side Hanging Kiosk           37/43 inches
- Dual Side Standing Kiosk          55 inches
- A-Frame Standee                   32/43/55 inches
- Outdoor High Brightness Display   43/55/65/75 inches · IP65
- Health Kiosk                      75 health checkups

### Category C — Specialty Displays
- Waterproof Mirror TV              custom · IP65 · 4K · anti-fog
- Interactive Smart Mirror TV       24–98 inches · capacitive touch
- Customized Touch Table            32/43/55 inches · Android/Windows
- Holographic Display               24–86 inches
- Flat Wall Display                 24–55 inches
- Digi Board                        32–65 inches · airports/govt
- Smart Frame                       21.5 inches
- Professional Monitors             24–110 inches · 400 nits
- Pane                              P2.5 · cascade · <35kg
- LED Cubes                         P1.8 & P2.5 · 100K hr
- Square TV                         33 inches
- Canvas TV                         43 inches · digital painting
- Lift & Learn Solution             sensor-based
- Stitch Television                 24/32 inches · leather framing
- Cast Television                   24/32 inches · metal framing
- Cascade Display                   24/32 inches

### Category D — Software
- CAST CMS                          web-based · multi-zone · 24/7

### CCTV
- Confirmed in scope · spec PENDING after trip

## Site Structure & URLs (MAXHUB nav → InfinityX mapping)

### Navigation Structure
MAXHUB India nav:
  Products → Interactive Flat Panel · Commercial Display · LED Display
           · Unified Communication · Capture System · Accessories · Software

InfinityX nav:
  Products → Interactive Flat Panels   [V1]
           → Commercial Display        [AFTER TRIP]
           → LED Display               [AFTER TRIP]
           → Kiosks & Signage          [V1]
           → CCTV & Security           [V1]
           → Software (CAST CMS)       [AFTER TRIP]

### URL Structure by Category

#### Category 1 — Interactive Flat Panels [V1]
/products/interactive-flat-panels/              category landing
/products/interactive-flat-panels/[series-1]/   placeholder (names pending)
/products/interactive-flat-panels/[series-2]/   placeholder
/products/interactive-flat-panels/[series-3]/   placeholder

Placeholder: Series A/B/C → swap after trip. Ref: MAXHUB V6 Classic/ViewPro/Transcend.

#### Category 2 — Commercial Display [AFTER TRIP]
/products/commercial-display/professional-monitors/
/products/commercial-display/flat-wall-display/
/products/commercial-display/square-tv/
/products/commercial-display/canvas-tv/
/products/commercial-display/digi-board/
/products/commercial-display/smart-frame/
/products/commercial-display/waterproof-mirror-tv/
/products/commercial-display/interactive-smart-mirror-tv/
/products/commercial-display/stitch-television/
/products/commercial-display/cast-television/

#### Category 3 — LED Display [AFTER TRIP]
/products/led-display/                          category landing
/products/led-display/cob-led-video-wall/
/products/led-display/transparent-led-video-wall/
/products/led-display/all-in-one-led/
/products/led-display/scape-indoor/
/products/led-display/scape-outdoor/
/products/led-display/scape-flexible-curved/
/products/led-display/3d-anamorphic-led-wall/
/products/led-display/lcd-video-wall/
/products/led-display/led-cubes/
/products/led-display/pane/
/products/led-display/cascade-display/

#### Category 4 — Kiosks & Signage [V1 + AFTER TRIP]
/products/kiosks/                               category landing
/products/kiosks/ultra-slim-kiosk/              [V1] Touch + Non-Touch · 32/43/55/65"
/products/kiosks/dual-side-hanging-kiosk/       [AFTER TRIP]
/products/kiosks/dual-side-standing-kiosk/      [AFTER TRIP]
/products/kiosks/a-frame-standee/               [AFTER TRIP]
/products/kiosks/outdoor-high-brightness-display/ [AFTER TRIP]
/products/kiosks/health-kiosk/                  [AFTER TRIP]
/products/kiosks/holographic-display/           [AFTER TRIP]
/products/kiosks/customized-touch-table/        [AFTER TRIP]
/products/kiosks/lift-and-learn/                [AFTER TRIP]

#### Category 5 — CCTV & Security [V1]
/products/cctv/                                 category landing
/products/cctv/[product-1]/                     spec PENDING (build placeholder)
/products/cctv/[product-2]/                     spec PENDING (build placeholder)

#### Category 6 — Software [AFTER TRIP]
/products/software/                             category landing
/products/software/cast-cms/                    CAST CMS page

### Page Count Summary
V1:
  /products/ (all products listing)
  IFP:    4 pages (category + 3 series)
  Kiosks: 2 pages (category + 1 product)
  CCTV:   3 pages (category + 2 products)
  ─────────────────────────────────────
  Total V1: ~9 product pages

After trip:
  Commercial Display:  10 pages
  LED Display:         12 pages
  Kiosks remaining:     9 pages
  Software:             2 pages
  ─────────────────────────────────────
  Additional: ~33 pages

GRAND TOTAL: ~42 product pages

### URL Slug Rules
- Lowercase, hyphenated
- No special chars
- Category first: /products/[category]/[product]/
- Series: /products/interactive-flat-panels/[series-name]/
- No query strings for products

### Product Page Build Notes
1. /products/ → category cards (mirrors MAXHUB nav dropdown)
2. Category pages: image + name + brief spec + Get Quote CTA
3. Product page: hero → key specs → applications → Get Quote form
4. IFP: placeholder Series A/B/C → client fills after trip
5. CCTV: generic surveillance content → client fills after trip
6. "Get Quote" every product page → /get-quote?product=name pre-filled
7. No pricing — all contact-for-pricing

## Infrastructure Checklist
- [x] GitHub repo — https://github.com/jayasriganesh/infinityxglobal.git
- [x] Next.js 14 boilerplate initialized
- [x] Tailwind CSS + shadcn/ui installed
- [x] .claude/commands/ — all 6 slash commands in place
- [x] .claude/settings.json configured
- [x] CLAUDE.md placed in project root
- [x] Playwright MCP server installed (@playwright/mcp@latest)
- [ ] Cloudflare account created (friend — weekend)
- [ ] DNS records verified in Cloudflare
- [ ] DMARC updated to p=quarantine
- [ ] Nameservers switched at registrar
- [ ] Email tested post-migration
- [ ] Vercel account created (client email)
- [ ] Vercel connected to GitHub repo
- [ ] Domain connected in Vercel
- [ ] A record → 76.76.21.21 in Cloudflare

## Content Checklist
- [x] Questionnaire signed (28-03-26)
- [x] Full product catalogue received (PDF)
- [x] Logo exists — SVG + dark variant (not received yet)
- [ ] Logo files received
- [ ] IFP series names + exact sizes
- [ ] Product images (after trip)
- [ ] Product spec sheets (after trip)
- [ ] CCTV details (after trip)
- [ ] GST number (Laxman sir)
- [ ] Privacy policy document
- [ ] Testimonials (3–5 · name + company + designation)
- [ ] Brochure PDF decision (after trip)

## Phase Completion
- [ ] Phase 0 — Infrastructure + DNS
- [x] Phase 1 — /clone-audit https://www.maxhub.com/in/
- [x] Phase 2 — /clone-extract
- [x] Phase 3 — /clone-plan
- [ ] Phase 4 — /clone-build
- [ ] Phase 5 — SEO + Performance
- [ ] Phase 6 — /clone-qa

## Session Start Prompts

### Phase 4 — /clone-build (active)
Run /clone-build — ONE SPRINT AT A TIME.
Read CLAUDE.md Build Progress checklist. Read docs/research/tokens.json + build-order.md.
After each sprint: commit, update CLAUDE.md, stop. Next session: resume from next unchecked sprint.

### Phase 6 — /clone-qa (future · use: claude --mcp-server playwright)
Run /clone-qa. Read docs/research/clone-audit_maxhub-india.md (original audit).
Output → docs/research/qa-report.md. Update CLAUDE.md — tick Phase 6 complete.

## Build Progress (Phase 4)
Sprint 1 — Foundation
  - [x] Next.js 14 + TypeScript + Tailwind + shadcn init
  - [x] tailwind.config.ts — tokens from audit
  - [x] globals.css — CSS variables from audit
  - [x] Fonts installed (Open Sans 400/600/700)
  - [x] Animation libraries installed (Swiper.js, Framer Motion)
  - [x] Form dependencies installed (React Hook Form, Zod, Turnstile)
  - [x] .env.example created

Sprint 2 — Atoms
  - [x] Button (primary / secondary / ghost) — ghost variant customized for MAXHUB
  - [x] Input, Textarea, Label components installed
  - [x] Dropdown Menu, Tabs components installed
  - [x] Lucide React icons verified (ArrowRight, Menu, X, Phone, Mail)
  - [x] Test page created (/test-components) — all components working

Sprint 3 — Shared Organisms
  - [x] Navbar (desktop + mobile) — transparent on hero, solid on scroll, mobile drawer
  - [x] Footer — 4-column layout, contact info, email signup, certifications badge

Sprint 4 — Homepage Sections
  - [x] Hero Carousel (Swiper.js, 4 slides, auto-play 5s, pagination + nav arrows)
  - [x] Product category cards (3 cards: IFP, Kiosks, CCTV — dual image hover effect)
  - [x] Stats strip (Founded 2014 · 4000+ Installs · MSME · ISO · GeM)
  - [x] CTA section

Sprint 5 — Homepage Assembly
  - [x] app/page.tsx assembled
  - [ ] Responsive test (320 / 768 / 1024 / 1440)

Sprint 5.5 — Navigation & Interactivity Fixes (2026-04-09)
  - [x] Navbar: functional search overlay (input → /products?q=...)
  - [x] Navbar: region dropdown (IN/NP/LK/BT)
  - [x] Navbar: Contact Sales → /contact
  - [x] Navbar: mobile nav cleaned to V1-only routes
  - [x] Footer: all href="#" → real routes
  - [x] Footer: InfinityX Global contact info
  - [x] Footer: newsletter form with success state
  - [x] solutions-mega-menu: /microsoft-teams + /zoom → /solutions/enterprise
  - [x] support-mega-menu: all /support/* → /contact, InfinityX contact info
  - [x] explore-mega-menu: /case-studies → /about, /events → /blog
  - [x] HeroBanner: all 6 slide btnHref updated to real routes
  - [x] SolutionsSection: all href="#" → real routes
  - [x] NewsAwards: all href="#" → real routes
  - [x] Created /about (story, stats, certifications#awards)
  - [x] Created /contact (form with success state)
  - [x] Created /get-quote (detailed form with success state)
  - [x] Created /blog (shell)
  - [x] Created /privacy-policy (full policy with #cookies)
  - [x] Created /solutions (index listing enterprise + education)
  - [x] Created docs/NAV_AND_INTERACTIVITY.md (living reference)

Sprint 6 — Product Templates
  - [ ] IFP product template
  - [ ] Kiosk product template
  - [ ] Generic display template
  - [ ] CCTV template

Sprint 7 — Content Pages
  - [ ] /products
  - [ ] /about
  - [ ] /contact
  - [ ] /get-quote
  - [ ] /blog (static shell)
  - [ ] /careers (static form)
  - [ ] /privacy-policy
  - [ ] /not-found

Sprint 8 — Forms + Functions
  - [ ] Contact form + server action
  - [ ] Get Quote form (separate)
  - [ ] File attachment (PDF/DOC max 10MB)
  - [ ] Cloudflare Turnstile on all forms
  - [ ] Nodemailer → contact@infinityxglobal.com
  - [ ] Google Sheets logging
  - [ ] Rate limiting

Sprint 9 — SEO
  - [ ] generateMetadata() per page
  - [ ] JSON-LD Organization schema
  - [ ] JSON-LD Product schema
  - [ ] sitemap.xml
  - [ ] robots.txt
  - [ ] GA4 integration
  - [ ] Search Console verified
  - [ ] Alt text all images
  - [ ] OG images per page

Sprint 10 — Polish
  - [ ] 404 page (branded)
  - [ ] 500 error page
  - [ ] Cookie consent banner
  - [ ] Loading states / skeletons
  - [ ] Security headers (next.config.mjs)

## Security Checklist
- [x] .gitignore in place
- [ ] .env.local created (never commit)
- [ ] .env.example created (commit — no secrets)
- [ ] Security headers in next.config.mjs
- [ ] Turnstile on all forms
- [ ] Server-side validation on all inputs
- [ ] Rate limiting on server actions
- [ ] TypeScript strict mode ON

## Research Files
Phase 1:  docs/research/clone-audit_maxhub-india.md
Phase 2:  docs/research/tokens.json
          docs/research/components.md
          docs/research/stack.md
Phase 3:  docs/research/sitemap.md
          docs/research/pages.md
          docs/research/build-order.md
Phase 6:  docs/research/qa-report.md

## Handover Checklist (Week 4)
- [ ] GitHub repo transferred to client account
- [ ] .env.example complete
- [ ] README.md written
- [ ] Credentials document (Vercel + Cloudflare + GA4 + Turnstile)
- [ ] Phase 2 quote (CMS / admin panel)
- [ ] Client walkthrough with Mahesh Rekapalli

## DNS Reference — NEVER TOUCH MX RECORDS
A      @        →  76.76.21.21           (Vercel — after first deploy)
CNAME  www      →  cname.vercel-dns.com  (Vercel)
MX     @ pri 5  →  mx1.hostinger.com     (NEVER CHANGE)
MX     @ pri 10 →  mx2.hostinger.com     (NEVER CHANGE)
SMTP            →  smtp.hostinger.com:587 STARTTLS

## Change Order Tracker
- [ ] WhatsApp Business button — TBD after trip
- [ ] Product brochure downloads — TBD after assets
- [ ] 30+ display product pages (from PDF) — after trip
- [ ] Own-brand display launch page — CONFIDENTIAL · mid-2026

## Notes
- Client on trip — returning end of month with product details + images
- Display products from PDF confirmed in scope — added after trip as change order
- CCTV confirmed — spec pending
- InfinityX SmartClass = education IFP product name
- Own display mid-2026 — CONFIDENTIAL — not V1
- Clock: 28-03-26 (both parties signed)
- Logo: client has SVG + dark variant — chase before trip ends
- Friend: Cloudflare + Vercel — available weekend
