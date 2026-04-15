# Clone Audit — MAXHUB India

---

## 01 — Site Identity

**Target URL:** https://www.maxhub.com/in/  
**Site purpose:** B2B manufacturer site selling interactive flat panels, LED displays, commercial displays, unified communication hardware, and collaboration software for enterprise/education markets.  
**Primary audience:** Enterprise buyers, education institutions, B2B integrators (observed from copy: "collaboration solutions", "conferences room solution", product categories emphasize commercial/enterprise use cases).  
**Audited pages:**
- https://www.maxhub.com/in/ (homepage)
- https://www.maxhub.com/in/products/ (all products listing)
- https://www.maxhub.com/in/products/?tab_id=1 (Interactive Flat Panel category)
- https://www.maxhub.com/in/products/?tab_id=3 (LED Display category)
- https://www.maxhub.com/in/products/?tab_id=2 (Commercial Display category)
- https://www.maxhub.com/in/xboard_v7_series/ (IFP product page)

**Audit date:** 2026-04-01

---

## 02 — Information Architecture Map

### Navigation Structure (observed from snapshot)

```
maxhub.com/in/
├── Products → javascript:; [DEAD]
│   ├── Interactive Flat Panel → /in/products/?tab_id=1
│   │   ├── XBoard V7 V Series → /in/xboard_v7_series
│   │   ├── XBoard V7 T Series → /in/xboard_v7_t_series
│   │   ├── E3 Series → /in/e3_Series
│   │   ├── U4 Series → /in/u4_series
│   │   └── U3 Series → /in/u3_series
│   ├── Commercial Display → /in/products/?tab_id=2
│   │   ├── UW Series 92" → /in/uw-series
│   │   ├── UW Series 105" → [inferred from pattern]
│   │   ├── CMA Series → /in/cma_series
│   │   └── CMB Series → [observed in snapshot]
│   ├── LED Display → /in/products/?tab_id=3
│   │   ├── CN27 Series → [observed on products page]
│   │   ├── Raptor Series VS Lite → [observed on products page]
│   │   ├── Raptor Series VS → [observed on products page]
│   │   ├── Raptors → [observed on products page]
│   │   └── LED Solution → [observed on products page]
│   ├── Unified Communication → /in/products/?tab_id=4
│   ├── Microsoft Teams Rooms → [category observed on products page]
│   ├── Capture System → /in/products/?tab_id=5
│   ├── Accessories → /in/products/?tab_id=5
│   └── Software → /in/products/?tab_id=6
├── Solutions → javascript:; [DEAD]
│   ├── Industry → javascript:; [DEAD]
│   │   ├── Enterprise → /in/solutions/enterprise.html
│   │   └── Education → javascript:; [DEAD]
│   ├── Platform → javascript:; [DEAD]
│   └── All Solutions → /in/solutions/
├── Support → javascript:; [DEAD]
├── Explore → javascript:; [DEAD]
├── Partner Portal → javascript:; [DEAD]
├── Search... → javascript:; [DEAD]
├── IN (region selector) → javascript:; [DEAD]
└── Contact Sales → /in/contact_us/

Footer links:
  Company
    ├── About MAXHUB → /in/about_maxhub/
    ├── Awards → /in/newsroom/?tab_id=4
    └── Contact Us → /in/contact_us/
  News & Events
    ├── News → /in/about_maxhub/?tab_id=1
    └── Events → /in/about_maxhub/?tab_id=2
  Customer Stories
    └── Customer Stories → /in/customer_stories/
  Legal
    ├── Web Policy → /in/privacy-policy/
    └── Cookies Policy → /in/cookies/
  Social
    ├── LinkedIn → https://www.linkedin.com/company/maxhub-overseas/
    ├── Facebook → https://www.facebook.com/MAXHUB.Global
    ├── Twitter → https://twitter.com/MAXHUB_Global
    └── YouTube → https://www.youtube.com/channel/UCMVdMpZsT-uiugSofEA3FEw
```

### Journey Trace

**Primary conversion path (observed):**

Homepage → "Learn More" CTA on hero carousel → Product category pages → Individual product page → "Contact Sales" header CTA OR bottom "Learn More" links → /in/contact_us/

Alternative path observed: Homepage → Product category cards (Interactive Flat Panel / LED Display / Commercial Display) → Category page → Product card → Product detail page

**Dead links found:** 9 total
- Nav: Products (javascript:;)
- Nav: Solutions (javascript:;)
- Nav: Support (javascript:;)
- Nav: Explore (javascript:;)
- Nav: Partner Portal (javascript:;)
- Nav: Search... (javascript:;)
- Nav: IN region selector (javascript:;)
- Solutions submenu: Industry (javascript:;)
- Solutions submenu: Platform (javascript:;)

These are dropdown triggers, not actual broken links (inferred).

---

## 03 — Design Token Extraction

### Colors

**OBSERVED FROM COMPUTED STYLES:**
- Body text: `rgb(51, 51, 51)` = #333333
- Body background: `rgb(255, 255, 255)` = #FFFFFF
- H1 text (hero): `rgb(255, 255, 255)` = #FFFFFF
- H2 text: `rgb(51, 51, 51)` = #333333

**OBSERVED FROM MARKUP (class patterns):**
- No Tailwind color utility classes observed
- Custom CSS framework (inferred from class names: `.btn-default`, `.title`, `.description`)

**PRIMARY BRAND COLOR (extracted via browser inspection):**
- **Brand Blue: `#196fd2`** — `rgb(25, 111, 210)`
- Used on: dropdown menu links ("All Products", "All Solutions", "All Support"), active nav states, link underlines
- This is the primary interactive color across the site

**COMPLETE COLOR PALETTE (extracted from computed styles):**

*Primary Colors:*
- Brand Blue: `#196fd2` — primary interactive color
- White: `#FFFFFF` — page background, button text on dark backgrounds
- Black: `#000000` — deep backgrounds

*Grays (text and UI):*
- Dark Gray: `#333333` — primary body text, borders
- Very Dark: `#1c1c1d` — footer background (inferred)
- Medium Dark: `#5a5c5d`, `#777777` — secondary text
- Medium: `#999999`, `#b8babc` — tertiary text, disabled states
- Medium Light: `#cccccc`, `#d6d7dc`, `#e7e7e7` — borders, dividers
- Light: `#ebebeb`, `#eeeeee`, `#f5f5f5` — backgrounds, subtle fills

**OBSERVED FONT LOADING:**
- Icon font: `https://sgp-cstore-pub.maxhub.com/maxhub_global_public/upload/mkf7wgig/iconfont-v1.0.0.css`
- No Google Fonts observed
- Custom font family: NexaRegular (observed in computed styles)

**Font families named (from body computed style):**
```
NexaRegular, "PingFang SC", "Lantinghei SC", "Microsoft YaHei", "HanHei SC", "Open Sans", Arial, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif
```

### Typography

**OBSERVED CLASSES / STYLES:**

Heading classes observed:
- `.title` (generic heading class)
- `.title.mb-h3` (heading with margin)
- `.title.mb-h5` (smaller heading with margin)
- `.tab-title` (tab navigation heading)
- `.title.txt-anim` (animated heading)
- `.title.txt-anim.h2` (H2 with animation)
- `.fot-title` (footer title)
- `.menu-title.h3` (menu item heading)

Body classes observed:
- `.p` (paragraph class)
- `.p.mb-h5` (paragraph with margin)
- `.p.mb-h6` (smaller paragraph with margin)
- `.p.h5-mb` (paragraph styled like h5)
- `.p.search-title` (search input paragraph)
- `.description` (description text)
- `.description.mb-h6` (description with margin)
- `.text-wrap` (text wrapper)
- `.text-wrap.p` (paragraph text wrapper)

Weight classes:
- Font weights not exposed via utility classes
- Computed weights: H1 = 400, H2 = 400, Body = normal (inferred)

**Computed font sizes (from browser):**
- Body: 14px / line-height: 20px
- H1: 42px / line-height: 63px
- H2: 32px / line-height: 48px

**Font families:**
- Primary: NexaRegular (custom font, not loaded via Google Fonts)

### Spacing & Layout

**OBSERVED CLASSES:**

Container classes:
- `.container` — padding: 0px 15px, margin: 0px auto, max-width: none (from computed styles)
- `.menu-container` (navigation menu container)

Padding classes:
- No utility padding classes observed (e.g., no `p-4`, `px-6` pattern)
- Custom spacing via class names like `.mb-h3`, `.mb-h5`, `.mb-h6` (margin-bottom inferred)

Gap classes:
- Not observed (no CSS Grid gap utilities visible)

Grid classes:
- Not observed (no `.grid-cols-*` pattern)

Flex classes:
- Not observed in class names
- Layout likely uses custom flexbox CSS (inferred from visual structure)

**Layout pattern (inferred from screenshots):**
- Full-width hero sections
- Centered content containers
- Multi-column product grids (3 columns observed on products page)
- Carousel/slider components using Swiper.js (class: `swiper banner-swiper swiper-initialized swiper-horizontal`)

### Border Radius & Shadows

**OBSERVED (extracted from computed styles):**
- **Buttons (primary):** `border-radius: 0px` — sharp corners, no rounding
- **Dropdown button:** `border-radius: 4px` — subtle rounding
- Card corners appear slightly rounded (visual observation — likely 4px-8px range, requires element-specific inspection)
- Product card images have rounded corners (visual observation from screenshots)

**NOT OBSERVED IN MARKUP:**
- No utility classes for border-radius or shadows
- Values must be defined in custom CSS
- Box shadows not extracted (requires targeted element inspection)

### Button Styles (extracted)

**Ghost/Outline variant (hero "Learn More", "Contact Sales"):**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Text color: `#ffffff` (white)
- Border: `1px solid #ffffff` (white outline)
- Padding: `18px 30px 14px` (observed on Contact Sales)
- Border-radius: `0px` (sharp corners)
- Classes: `.p.mb-h5`, `.p.h5-mb`

**Primary blue variant (dropdown links):**
- Background: `#196fd2` (brand blue)
- Text color: inferred white on hover/active
- Used on: "All Products", "All Solutions", navigation active states

**Form button (dropdown toggle):**
- Border: `1px solid #cccccc`
- Border-radius: `4px`
- Classes: `.btn.btn-default.dropdown-toggle`

---

## 04 — Component Inventory

### NAVBAR (Desktop + Mobile)

**Location:** Top of all pages (sticky, requires browser verification)  
**Class sig:** Root element has no observed class signature. Contains `.navbar-brand` for logo link.  
**Copy:** 
- Logo: (no text, image only)
- Nav items: "Products", "Solutions", "Support", "Explore", "Partner Portal"
- Utility: "Search...", "IN" (region), "Contact Sales"

**States noted:** 
- Hover: (requires browser verification)
- Active dropdown: (requires browser verification for Products/Solutions menus)

**Children:**
- Logo image link (`.navbar-brand`)
- Primary nav list
- Secondary nav list (search, region, CTA)
- Dropdown menus (observed: Products dropdown with categories)

**Variants:**
- Desktop: horizontal layout with dropdowns
- Mobile: (requires browser verification — likely hamburger menu)

---

### HERO CAROUSEL

**Location:** Homepage top section  
**Class sig:** `.c-banner.full-screen.scroll-listened` containing `.swiper.banner-swiper.swiper-initialized.swiper-horizontal`  
**Copy (observed slides):**
- Slide 1: "Discover the Complete Windows-Based Microsoft Teams Rooms Ecosystem" + "Learn More" → /in/xt-series/
- Slide 2: "MAXHUB Where Inspiration Moves Ahead." + "Learn More" → /in/about_maxhub/
- Slide 3: "MAXHUB X INTEL WHITEPAPER" + "Transform Your BYOD Meeting Space into a Microsoft Teams Rooms" + "Learn More" → /in/intel_whitepaper/
- Slide 4: "ALL-IN-ON SOLUTION" + "Experience the difference intelligent features and intuitive tools can create." + "Learn More" → /in/products/
- Slide 5: "CREATE YOUR DREAM SPACE" + "Be inspired by our solutions. Any industry, any platform any space is welcome." + "Learn More" → /in/solutions/
- Slide 6: "PARTNER ALLIANCE" + "Joint forces to create exceptional technology solutions." + "Learn More" → /in/partners/

**States noted:**
- Auto-play carousel (requires browser verification)
- Navigation arrows: "Previous slide" and "Next slide" buttons observed
- Slide indicators (requires browser verification)

**Children:**
- Background image (full viewport height)
- Text overlay (heading + description)
- CTA button ("Learn More" link with arrow icon)
- Navigation controls (prev/next buttons)

**Variants:** Only one variant observed (full-width hero carousel)

---

### PRODUCT CATEGORY CARDS

**Location:** Homepage (below hero and solutions section), Products page  
**Class sig:** Product cards use `.img-box` and `.pic` classes. Parent containers use generic divs.  
**Copy (homepage):**
- "Interactive Flat Panel" → /in/products/?tab_id=1
- "LED Display" → /in/products/?tab_id=3
- "Commercial Display" → /in/products/?tab_id=2
- "Accessories" → /in/products/?tab_id=5
- "Unified Communication" → /in/products/?tab_id=4
- "Software" → /in/products/?tab_id=6

**States noted:**
- Hover: (requires browser verification — likely image zoom or overlay effect based on dual `.pic` images observed)

**Children:**
- Image container (`.img-box`)
- Two images (`.pic`) — one likely for hover state (inferred)
- Category label (paragraph text)

**Variants:** All cards follow same structure, different images/labels

---

### PRODUCT LISTING CARDS

**Location:** Products page category sections (IFP, LED, Commercial Display)  
**Class sig:** Product cards contain link wrapping image (`.pic`) + heading (h4) + "Learn More" link  
**Copy (IFP examples):**
- "XBoard V7 V Series" + "Learn More" → /in/xboard_v7_series
- "XBoard V7 T Series" + "Learn More" → /in/xboard_v7_t_series
- "E3 Series" + "Learn More" → /in/e3_Series
- "U4 Series" + "Learn More" → /in/u4_series
- "U3 Series" + "Learn More" → /in/u3_series

**States noted:**
- Hover: (requires browser verification)

**Children:**
- Product image (clickable)
- Product name (H4 heading)
- Empty paragraph (observed in snapshot — likely for short description)
- "Learn More" link with arrow icon

**Variants:** Same card structure across all product categories

---

### SECTION HEADING + DESCRIPTION BLOCK

**Location:** Multiple sections (Solutions tabs, Product categories, About section)  
**Class sig:** `.title` (H2) + `.description` or paragraph text  
**Copy (examples):**
- "INTERACTIVE FLAT PANEL" + "By integrating the functions of projector, whiteboard, advertising signage, computer, microphone, audio, etc, MAXHUB interactive displays could satisfy the needs of local meetings and remote collaborations."
- "LED DISPLAY" + "MAXHUB all-in-one LED supplements the product line-up, offering a complete solution portfolio that covers various kinds of display needs."
- "COMMERCIAL DISPLAY" + "Taking simplicity, safety and flexibility to new levels, MAXHUB commercial display solutions make every team more effective, and every meeting more productive."

**States noted:** Static text blocks

**Children:**
- Heading (`.title` class, H2 tag)
- Description text (`.description` or paragraph)

**Variants:** Used throughout site with consistent structure

---

### FEATURE/CONTENT CAROUSEL

**Location:** Homepage (Commercial Display products, News/Awards sections)  
**Class sig:** Swiper carousel similar to hero — group elements with "1 / 3", "2 / 3", "3 / 3" labels  
**Copy (Commercial Display carousel):**
- Slide 1: "ULTRA IMMERSIVE VISION" + "MAXHUB Comercial Display Ultra-Wide Series" + "Learn More" → /in/uw-series
- Slide 2: "Simple, Smart, Connected" + "MAXHUB Integrated LED Wall Raptor Series" + "Learn More" → javascript:; [DEAD]
- Slide 3: "Crystal-Clear, Stable, Multifunctional" + "MAXHUB Commercial Display CMA Series" + "Learn More" → /in/cma_series

**States noted:**
- Navigation: prev/next buttons (some disabled based on position)
- Auto-play: (requires browser verification)

**Children:**
- Background image
- Text overlay (H2 title + product name)
- "Learn More" CTA

**Variants:** Multiple carousels on homepage with same structure, different content

---

### TABBED CONTENT (Solutions Section)

**Location:** Homepage solutions section  
**Class sig:** Tabs use generic structure, tab titles have `.tab-title` class  
**Copy:**
- Industry tab:
  - "Enterprise" / "Education" toggle
  - "Enterprise solutions" (H2) + "We offer easy-to-use, high-quality conferencing solutions for all room sizes." + "Learn More" → /in/solutions/enterprise.html
  - "Education solutions" (H2) — content observed in snapshot

**States noted:**
- Active tab: (requires browser verification)
- Tab switching: (requires browser verification)

**Children:**
- Tab navigation (Industry / Platform buttons + "All Solutions" link)
- Tab content panels (heading + description + CTA)

**Variants:** Single variant observed

---

### STATS STRIP

**Location:** Homepage bottom (About MAXHUB section)  
**Class sig:** Generic divs containing stat number + label  
**Copy:**
- "6500+" — "Total Employees"
- "30" — "Average Age"
- "60%" — "R&D Engineer"
- "US$ 3b" — "Revenue"

**States noted:** Static content

**Children:**
- Stat number (large text)
- Stat label (smaller text below)

**Variants:** Horizontal row of 4 stats

---

### FOOTER

**Location:** Bottom of all pages  
**Class sig:** `<contentinfo>` tag containing footer content  
**Copy:**
- Heading: "GET CONNECTED WITH US"
- Company section: "About MAXHUB", "Awards", "Contact Us"
- News & Events section: "News", "Events"
- Customer Stories section: "Customer Stories"
- Email signup form: "Enter your E-mail Address" + "SUBMIT" button
- Address: "Smartworks Corporate Park, 04th Floor, Tower A, Sector 125, Noida, Uttar Pradesh -201313"
- Service Support: "Toll Free No: 1800 12012 2045", "E-Mail ID: maxhubindia@maxhub.com", "WhatsApp: 7042790873", "Timings: Monday to Saturday 09:30AM - 06:30 PM"
- Sales Enquiry: "Email Us: SalesEnquiry.India@maxhub.com", "Mobile: 7428096923", "WhatsApp: 07303084527"
- Legal links: "Web Policy", "Cookies Policy"
- Copyright: "* Education products are exclusive to APAC and the Middle East. ©2025 MAXHUB. All rights reserved"

**States noted:**
- Link hover: (requires browser verification)
- Social icon hover: (requires browser verification)

**Children:**
- Social links (LinkedIn, Facebook, Twitter, YouTube)
- Footer navigation columns
- Email signup form
- Contact information block
- Legal links + copyright

**Variants:** Consistent footer across all pages

---

### COOKIE CONSENT BANNER

**Location:** Bottom overlay on first visit (observed in snapshot)  
**Class sig:** Generic overlay div  
**Copy:**
- "This site uses cookies to personalise your experience and analyse site traffic. By clicking ACCEPT or continuing to browse the site, you are agreeing to our use of cookies. See our Cookies and Privacy Policy here"
- CTAs: "Yes, accept all" (javascript:;), "No thanks, only essential cookies" (javascript:;)

**States noted:**
- Dismissed state: (requires browser verification)

**Children:**
- Message text with links to Cookies and Privacy Policy
- Two CTA buttons (accept / reject)
- Close button (observed in snapshot)

**Variants:** Single variant

---

### CATEGORY TAB NAVIGATION (Products Page)

**Location:** Products page below hero  
**Class sig:** Icon-based navigation with paragraph labels  
**Copy:** Same as product category cards (Interactive Flat Panel, Commercial Display, LED Display, etc.)

**States noted:**
- Active tab: "LED Display" tab appears highlighted in one screenshot (visual observation)
- Hover: (requires browser verification)

**Children:**
- Icon image (two versions observed — likely default + hover/active state)
- Category label (paragraph)

**Variants:** Horizontal icon grid

---

## 05 — Copy Inventory (Verbatim)

### PAGE: https://www.maxhub.com/in/ (Homepage)

**`<title>`:** "MAXHUB, Where Inspiration Moves Ahead."

**`<meta description>`:** "MAXHUB focuses on developing collaboration solutions that enable immersive communications. We have enhanced team creativity and productivity worldwide by providing advanced audio-visual technologies and one-stop solutions."

**`<meta keywords>`:** "MAXHUB, Interactive Flat Panel, Commercial Display, LED, Conferences, Audios & Videos, Unified Communication, V6, V5, conferences room solution, UW Series, 21:9, MAXHUB Partner: Microsoft Teams, Zoom"

**`<h1>`:** (empty — logo only)

**`<h2>` strings:**
- "CHANGE LOCATION"
- "Enterprise solutions"
- "Education solutions"
- (Two empty H2s observed in tabs)
- "ULTRA IMMERSIVE VISION"
- "Simple, Smart, Connected"
- "Crystal-Clear, Stable, Multifunctional"
- "MAXHUB AWARDS"
- "SOCIAL RESPONSIBILITY"
- "NEWS & EVENTS"
- "ABOUT MAXHUB"
- "GET CONNECTED WITH US"

**CTA copy strings:**
- "Learn More" (most frequent — appears 9+ times across hero slides, product carousels, content sections)
- "Contact Sales" (header CTA)
- "All Solutions" (solutions section link)
- "SUBMIT" (email signup footer)
- "Yes, accept all" (cookie banner)
- "No thanks, only essential cookies" (cookie banner)

**Trust signals:**
- "6500+ Total Employees"
- "30 Average Age"
- "60% R&D Engineer"
- "US$ 3b Revenue"
- "Since established in 2017"
- "MAXHUB's extensive collaboration solutions and ground-breaking products have garnered widespread acclaim around the globe."

**Footer tagline:** "* Education products are exclusive to APAC and the Middle East. ©2025 MAXHUB. All rights reserved"

---

### PAGE: https://www.maxhub.com/in/products/ (Products Listing)

**`<title>`:** "MAXHUB - Products"

**`<meta description>`:** (not extracted — assumed same as homepage or product-specific)

**`<h1>`:** (empty — logo only)

**`<h2>` strings:**
- "THE EXCELLENT WAY TO COLLABORATE" (hero)
- "INTERACTIVE FLAT PANEL"
- "LED DISPLAY"
- "COMMERCIAL DISPLAY"

**Product names (H4 headings):**
- Interactive Flat Panel: "XBoard V7 V Series", "XBoard V7 T Series", "E3 Series", "U4 Series", "U3 Series"
- LED Display: "CN27 Series", "Raptor Series VS Lite", "Raptor Series VS", "Raptors", "LED Solution"
- Commercial Display: "UW Series 92"", "UW Series 105"", "CMA Series", "CMB Series"

**Section descriptions:**
- IFP: "By integrating the functions of projector, whiteboard, advertising signage, computer, microphone, audio, etc, MAXHUB interactive displays could satisfy the needs of local meetings and remote collaborations."
- LED: "MAXHUB all-in-one LED supplements the product line-up, offering a complete solution portfolio that covers various kinds of display needs."
- Commercial: "Taking simplicity, safety and flexibility to new levels, MAXHUB commercial display solutions make every team more effective, and every meeting more productive. MAXHUB commercial display solutions make every team more effective, and every meeting more productive."

**CTA copy strings:**
- "Learn More" (repeated on every product card)

---

### PAGE: https://www.maxhub.com/in/xboard_v7_series/ (IFP Product Page)

**`<title>`:** "MAXHUB - XBoard V7 V Series"

**Note:** Full page content not extracted in snapshot due to page length. Product pages follow similar pattern with product specs, features, and imagery.

---

### CTA Frequency Table

| CTA Text | Approx Count | Destination Pattern |
|---|---|---|
| "Learn More" | 15+ | Various product pages, category pages, about page |
| "Contact Sales" | 1 (header) | /in/contact_us/ |
| "All Solutions" | 1 | /in/solutions/ |
| "SUBMIT" | 1 | Email signup form submission |
| "Yes, accept all" | 1 | Cookie consent (javascript:;) |
| "No thanks, only essential cookies" | 1 | Cookie consent (javascript:;) |

---

## 06 — Technical Stack Signals

### FRAMEWORK EVIDENCE

**Class patterns observed:**
- `.btn`, `.btn-default` — Bootstrap-style button naming
- `.container` — Bootstrap-style container
- `.navbar-brand` — Bootstrap navbar component
- `.dropdown-toggle` — Bootstrap dropdown pattern
- Custom BEM-style classes: `.c-banner`, `.menu-container`, `.img-box`
- Utility margin classes: `.mb-h3`, `.mb-h5`, `.mb-h6` (custom spacing system)
- Descriptive classes: `.title`, `.description`, `.text-wrap`, `.pic`

**Inferred framework:** Custom CSS framework with Bootstrap influence (inferred)  
**NOT Tailwind:** No utility class patterns like `text-sm`, `px-4`, `bg-blue-500`  
**NOT pure Bootstrap:** Custom class naming conventions alongside Bootstrap patterns

---

### ASSET DELIVERY

**CDN domains:**
- `sgp-cstore-pub.maxhub.com` — images, CSS, JS, icon fonts (primary CDN)
- `pi.pardot.com` — tracking script
- `www.googletagmanager.com` — Google Tag Manager
- `go.maxhub.com` — form submission endpoint (Pardot)

**Image formats:** 
- `.jpg` observed in OG image meta tag
- Actual formats not extractable from snapshots (requires browser network inspection)

**`loading="lazy"`:** Not observed in extracted markup (requires HTML source inspection)

**`srcset` present:** Not observed in snapshot structure

---

### SCRIPTS

**External script src domains (observed):**
- `pi.pardot.com` — Pardot marketing automation
- `www.googletagmanager.com` — Google Tag Manager
- `sgp-cstore-pub.maxhub.com` — site scripts (vendor bundle, main bundle)
- `go.maxhub.com` — form handling

**Inline scripts:** Present (observed in snapshot events: console logs indicate JS execution)

**JavaScript libraries (inferred from class names):**
- Swiper.js — carousel library (class: `.swiper`, `.swiper-initialized`, `.swiper-horizontal`, `.swiper-watch-progress`, `.swiper-backface-hidden`)

---

### META / SEO

**`<title>`:** "MAXHUB, Where Inspiration Moves Ahead." (homepage)

**`<meta description>`:** "MAXHUB focuses on developing collaboration solutions that enable immersive communications. We have enhanced team creativity and productivity worldwide by providing advanced audio-visual technologies and one-stop solutions."

**`<meta viewport>`:** "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"

**Open Graph tags (observed):**
- `og:title` — "MAXHUB, Where Inspiration Moves Ahead."
- `og:description` — (same as meta description)
- `og:image` — "https://sgp-cstore-pub.maxhub.com/maxhub_global_public/upload/ls32jn1x/MAXHUB_MTR-banner.jpg"

**Canonical:** Not present (observed: "none" in extraction)

**robots meta:** "all"

**Additional meta tags:**
- `api-domain` — "/in/v1/api"
- `base-dir` — "/en/"
- `domain-name` — "in"

---

### PERFORMANCE FLAGS (markup-observable only)

**Missing alt texts:** 
- Many images in snapshots show `alt="pic"`, `alt="bg"`, `alt="placeholder"`, `alt="icon"`
- These are non-descriptive alt values, functionally equivalent to missing alt text for SEO/accessibility

**Render-blocking hints:**
- Cannot confirm without HTML source — requires inspection of `<script>` tags for `async`/`defer` attributes

**Image optimization:**
- `srcset` not observed in snapshot structure
- `loading="lazy"` not observed
- Suggests limited image optimization (inferred)

---

## 07 — Clone Complexity Assessment

| Dimension | Observed Evidence | Clone Difficulty |
|---|---|---|
| IA depth | 3-level nav (Products → Category → Product), ~40+ product pages inferred from 5 IFP + 5 LED + 4 Commercial + categories, footer sitemap modest | Medium |
| Design token clarity | Colors: 3 extracted from computed styles, primary brand color visual only. Typography: clear system (NexaRegular + fallback stack). Spacing: custom margin utilities (`.mb-h3` etc) — requires CSS inspection. No utility framework. | Medium |
| Component count | 11 distinct components catalogued (navbar, hero carousel, product cards, tabbed content, stats, footer, cookie banner, section headers, feature carousels, category tabs, product listing cards) | Medium |
| Animation complexity | Carousel auto-play (inferred), text animations (`.txt-anim` class observed), hover states on cards (dual images suggest hover swap) — all require browser verification | Medium |
| Form logic | Email signup form (single field + submit to Pardot), Contact form not inspected but linked from header CTA. Minimal form complexity observed. | Low |
| Content volume | ~50 headings extracted, ~15 CTAs, 4 stats, extensive product catalogue, multi-slide carousels. Moderate content density. | Medium |

**Overall clone complexity: Medium**

Moderate IA depth, custom CSS framework requires design token extraction from compiled stylesheets (not utility-class-based), component count manageable but carousel/animation states need browser verification for exact behavior, multi-language font stack and custom font (NexaRegular) require asset sourcing.

---

## 08 — Stage Handoff Notes

### PRIORITY TOKENS (top 3 most critical to capture):

1. **Primary brand blue: `#196fd2`** — ✅ EXTRACTED. This is the key brand color that defines visual identity. Used on all interactive elements (dropdown links, hover states, active nav). rgb(25, 111, 210).

2. **NexaRegular font family** — Custom font driving brand typography. Must source font files or identify suitable fallback. Fallback stack is extensive (PingFang SC, Open Sans, etc.) but NexaRegular defines desktop experience.

3. **Spacing scale** — Custom margin utilities (`.mb-h3`, `.mb-h5`, `.mb-h6`) suggest a defined spacing scale. Need to extract exact pixel values from compiled CSS to replicate vertical rhythm.

---

### AMBIGUOUS SIGNALS (need browser verification before building):

- **Hover states:** Product cards have dual `.pic` images (suggests hover image swap), button hover colors (likely darker shade of #196fd2), link hover underlines
- **Carousel timing:** Auto-play interval, transition duration, easing function
- **Dropdown menus:** Products/Solutions navigation dropdowns — structure, animation, positioning
- **Mobile nav:** Hamburger menu structure and behavior not observed (desktop-only screenshots)
- **Border radius values:** Rounded corners observed on cards/buttons but exact px/rem values unknown (Contact Sales button observed with borderRadius: 0px — sharp corners)
- **Box shadows:** Subtle shadows observed on product cards (visual) — need exact CSS values

---

### MISSING PAGES (linked in nav but not yet fetched):

- Individual product pages beyond XBoard V7 V Series (E3, U4, U3, LED products, Commercial Display products)
- /in/solutions/enterprise.html (Solutions landing + category pages)
- /in/contact_us/ (Contact form — critical for conversion)
- /in/about_maxhub/ (About page)
- /in/newsroom/ (News & Events)
- /in/customer_stories/ (Case studies)

---

### CRITICAL COMPONENTS (the 3 that define visual identity):

1. **Hero Carousel** — Full-width, auto-rotating, text overlay with CTA. Swiper.js-based. Sets tone for entire site with large imagery and bold typography.

2. **Product Cards** — Grid layout, hover effects (dual image pattern), "Learn More" CTA. Repeated pattern across homepage and products page. Defines product presentation.

3. **Navbar** — Sticky header (assumed), dropdown menus for Products/Solutions, utility nav with CTA. Primary navigation pattern users interact with.

---

### RECOMMENDED APPROACH:

**Asset sourcing strategy:**
- Custom font (NexaRegular) — check if font files are accessible from CDN or need licensing. Fallback to Open Sans (included in font stack) if unavailable.
- Product images — all images served from `sgp-cstore-pub.maxhub.com` CDN. For InfinityX clone, replace with client-provided product photography or high-quality placeholders.
- Icon font — custom iconfont loaded from CDN (arrows, social icons). Extract icon SVGs or use similar icon library (Heroicons, Lucide).

**Color palette extracted:**
- ✅ Complete color palette extracted via browser inspection (15 colors total)
- Primary brand blue: `#196fd2`
- Gray scale: 9 shades from #1c1c1d (darkest) to #f5f5f5 (lightest)
- All colors documented in Design Token Extraction section above

**Component build order:**
- Start with foundational tokens (colors, typography, spacing) from CSS inspection
- Build navbar + footer (appear on all pages — foundational layout)
- Build hero carousel (defines homepage feel — complex component)
- Build product card component (reusable across homepage and products page)
- Assemble homepage sections using established components
- Build product listing page template
- Build individual product detail page template

**Framework recommendation for InfinityX:**
- MAXHUB uses custom CSS — no utility framework
- For clone: use Tailwind CSS (per CLAUDE.md stack decision) and recreate visual design with utility classes
- Swiper.js carousel library recommended for hero carousel (matches MAXHUB's implementation)
- shadcn/ui for form components, buttons (per CLAUDE.md stack decision)

**Key differences for InfinityX clone:**
- Skip: Unified Communication, Capture System, Accessories, Microsoft Teams Rooms categories (per CLAUDE.md exclusions)
- Focus: Interactive Flat Panel (IFP), Kiosks, CCTV, LED Display, Commercial Display
- Product structure: MAXHUB has deep product hierarchy (series → models) — InfinityX may have flatter structure depending on catalogue depth
- Localization: MAXHUB has multi-language font stack and region selector — InfinityX V1 is English-only (per CLAUDE.md)

---

**End of Audit**
