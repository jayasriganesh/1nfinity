# Component Specification — MAXHUB India Clone (InfinityX Global)

**Source audit:** `clone-audit_maxhub-india.md`  
**Extraction date:** 2026-04-01  
**Target site:** https://www.maxhub.com/in/  
**Clone for:** InfinityX Global (https://infinityxglobal.com)

**Exclusions:** Unified Communication, Capture System, Accessories categories — InfinityX does not sell these products.

---

## 01 — NAVBAR

**Observed class signature:** Root nav element (no specific class), `.navbar-brand` for logo  
**Confidence:** partially-observed (desktop structure observed, mobile variant requires browser verification)

### Structure

```html
<nav class="[sticky-top-class — requires verification]">
  <!-- Logo -->
  <div class="navbar-brand">
    <a href="/"><img src="[logo.svg]" alt="InfinityX Global" /></a>
  </div>
  
  <!-- Primary Navigation -->
  <ul class="[nav-list-class]">
    <li><a href="javascript:;" class="[dropdown-trigger]">Products</a>
      <!-- Dropdown menu (requires browser verification for structure) -->
    </li>
    <li><a href="javascript:;" class="[dropdown-trigger]">Solutions</a></li>
    <li><a href="javascript:;" class="[dropdown-trigger]">Support</a></li>
    <li><a href="javascript:;" class="[dropdown-trigger]">Explore</a></li>
  </ul>
  
  <!-- Utility Navigation -->
  <ul class="[utility-nav-class]">
    <li><a href="javascript:;" class="[search-trigger]">Search...</a></li>
    <li><a href="/contact" class="p h5-mb">Contact Sales</a></li>
  </ul>
</nav>
```

### Props / Variants

| Variant | Trigger | Observed Behavior | Source |
|---|---|---|---|
| Default | Page load | Horizontal layout, white text on dark/transparent bg (hero) | observed |
| Scrolled | On scroll | Sticky position (requires browser verification) | requires verification |
| Desktop | ≥1024px | Full horizontal nav with dropdowns | observed |
| Mobile | <768px | Hamburger menu (requires browser verification) | requires verification |

### States

- **Hover:** Link color changes (requires browser verification — likely #196fd2 brand blue)
- **Active link:** Background or underline indicator (requires browser verification)
- **Dropdown open:** Products/Solutions menus expand (requires browser verification for animation)
- **Mobile menu open:** Side drawer or overlay (requires browser verification)

### Content (InfinityX adaptation)

**Logo:** InfinityX Global logo (SVG + dark variant pending from client)

**Primary nav items:**
- Products (dropdown) → Interactive Flat Panels, LED Display, Commercial Display, Kiosks & Signage, CCTV & Security
- Solutions (dropdown) → Enterprise, Education (match MAXHUB structure)
- Support (link) → /support
- About (replaces "Explore") → /about

**Utility nav:**
- Search (optional V1 — can be deferred)
- Contact Sales → /contact (ghost button style: white border, transparent bg)

### Clone Notes

- **MAXHUB uses dropdown triggers with `javascript:;` hrefs** — replace with proper React state management for dropdowns
- **Region selector ("IN") not needed for InfinityX** — English only V1
- Desktop nav appears on transparent background over hero (white text), then likely switches to solid background on scroll
- Mobile hamburger menu structure not observed — design to match brand (likely slide-in drawer)

---

## 02 — HERO CAROUSEL

**Observed class signature:** `.c-banner.full-screen.scroll-listened` containing `.swiper.banner-swiper.swiper-initialized.swiper-horizontal`  
**Confidence:** observed (structure clear, animation timing requires verification)

### Structure

```html
<section class="c-banner full-screen">
  <div class="swiper banner-swiper">
    <div class="swiper-wrapper">
      <!-- Slide 1 -->
      <div class="swiper-slide">
        <img src="[hero-bg-1.jpg]" alt="Hero background" class="[bg-image-class]" />
        <div class="[text-overlay-container]">
          <h1 class="[hero-heading-class]">[Slide Heading]</h1>
          <p class="[hero-description-class]">[Slide Description]</p>
          <a href="[slide-cta-url]" class="p mb-h5">Learn More <span>[arrow-icon]</span></a>
        </div>
      </div>
      
      <!-- Repeat for each slide -->
    </div>
    
    <!-- Navigation controls -->
    <button class="[prev-button-class]">prev</button>
    <button class="[next-button-class]">next</button>
    
    <!-- Pagination dots (requires verification) -->
    <div class="swiper-pagination"></div>
  </div>
</section>
```

### Props / Variants

| Variant | Trigger | Observed Behavior | Source |
|---|---|---|---|
| Auto-play | Default | Carousel rotates slides (timing requires verification) | requires verification |
| Manual nav | User click | Prev/next arrows advance slides | observed |
| Pagination | User click | Dot indicators jump to slide (requires verification) | requires verification |

### States

- **Auto-play:** Slides rotate automatically (interval requires verification — likely 5-7 seconds)
- **Pause on hover:** Carousel pauses when user hovers (requires verification)
- **Manual override:** Auto-play stops after manual navigation (requires verification)

### Content (InfinityX adaptation)

**Slide count:** 4-6 slides (MAXHUB has 6)

**Slide 1 example (adapt from MAXHUB):**
- Heading: "Enterprise-Grade Interactive Displays"
- Description: "Transform your collaboration spaces with InfinityX smart display solutions"
- CTA: "Learn More" → /products/interactive-flat-panels

**Slide 2 example:**
- Heading: "4000+ Installations Across India"
- Description: "Trusted by enterprises, educational institutions, and government agencies"
- CTA: "Our Story" → /about

**Remaining slides:** Product showcases (LED, Kiosks, CCTV), case studies, certifications

### Clone Notes

- **Use Swiper.js React** (matches MAXHUB implementation, per audit recommendation)
- Full viewport height (`min-h-screen` or `h-screen` in Tailwind)
- Background images require client photography — use Unsplash placeholders until assets arrive
- Text overlay: white text (#FFFFFF) on dark gradient overlay (likely `bg-black/40` in Tailwind)
- CTA button: ghost variant (white border, transparent bg, white text) — specified in tokens.json
- Arrow icon: use Lucide React `ArrowRight` or `ChevronRight`

---

## 03 — PRODUCT CATEGORY CARDS

**Observed class signature:** `.img-box` and `.pic` classes for image containers  
**Confidence:** observed (hover effect inferred from dual images)

### Structure

```html
<div class="[category-grid-container — likely 3 columns desktop, 1 mobile]">
  <!-- Category Card -->
  <div class="[card-container]">
    <a href="/products/interactive-flat-panels">
      <div class="img-box">
        <img src="[category-img-default.jpg]" alt="Interactive Flat Panel" class="pic" />
        <img src="[category-img-hover.jpg]" alt="Interactive Flat Panel" class="pic [hover-class]" />
      </div>
      <p class="[category-label]">Interactive Flat Panel</p>
    </a>
  </div>
  
  <!-- Repeat for each category -->
</div>
```

### Props / Variants

| Variant | Trigger | Observed Behavior | Source |
|---|---|---|---|
| Default | Page load | Image 1 visible, category label below | observed |
| Hover | Mouse over | Image swap or zoom effect (dual `.pic` images suggest swap) | inferred from dual images |

### States

- **Hover:** Image swap animation (requires verification — likely crossfade or image 2 fades in)
- **Focus:** Keyboard navigation highlight (not observed — propose focus ring)

### Content (InfinityX categories)

**Homepage category cards (V1):**
1. Interactive Flat Panels → `/products/interactive-flat-panels`
2. LED Display → `/products/led-display`
3. Commercial Display → `/products/commercial-display`
4. Kiosks & Signage → `/products/kiosks`
5. CCTV & Security → `/products/cctv`

**SKIP (MAXHUB categories NOT in InfinityX scope):**
- ~~Unified Communication~~
- ~~Microsoft Teams Rooms~~
- ~~Capture System~~
- ~~Accessories~~
- Software (defer to post-trip change order)

### Clone Notes

- Dual image pattern suggests hover image swap — implement with CSS `group-hover` in Tailwind
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (responsive 3-column layout observed)
- Rounded corners on images: `rounded-md` (8px from tokens.json)
- Category label: centered below image, likely `.text-center.font-semibold.text-lg`
- Use client product category images or Unsplash placeholders (conference room, LED wall, kiosk, CCTV)

---

## 04 — PRODUCT LISTING CARDS

**Observed class signature:** Product image link + h4 heading + "Learn More" link  
**Confidence:** observed

### Structure

```html
<div class="[product-grid — 3 columns desktop]">
  <!-- Product Card -->
  <div class="[card-container]">
    <a href="/products/interactive-flat-panels/series-a">
      <img src="[product-image.jpg]" alt="Series A IFP" class="pic" />
    </a>
    <h4 class="[product-name-class]">Series A</h4>
    <p class="[product-description — observed empty in audit]">[Short description]</p>
    <a href="/products/interactive-flat-panels/series-a" class="[learn-more-link]">
      Learn More <span>[arrow-icon]</span>
    </a>
  </div>
  
  <!-- Repeat for each product -->
</div>
```

### Props / Variants

| Variant | Trigger | Observed Behavior | Source |
|---|---|---|---|
| Default | Page load | Product image, name, empty description, Learn More link | observed |
| Hover | Mouse over | Image zoom or card elevation (requires verification) | requires verification |

### States

- **Hover:** Card shadow increase or image zoom (requires verification)
- **Image hover:** Subtle zoom effect common in product cards

### Content (InfinityX products)

**Interactive Flat Panels (V1 — placeholder names until client provides):**
- Series A (placeholder) → `/products/interactive-flat-panels/series-a`
- Series B (placeholder) → `/products/interactive-flat-panels/series-b`
- Series C (placeholder) → `/products/interactive-flat-panels/series-c`

**Kiosks (V1):**
- Ultra Slim Kiosk → `/products/kiosks/ultra-slim-kiosk`

**CCTV (V1 — placeholder until client provides spec):**
- Product 1 (placeholder) → `/products/cctv/product-1`
- Product 2 (placeholder) → `/products/cctv/product-2`

**LED Display / Commercial Display (AFTER TRIP — change order):**
- Full catalogue from CLAUDE.md product list

### Clone Notes

- Empty `<p>` observed in audit — add short 1-line product description for SEO
- "Learn More" link: underline on hover, blue color (#196fd2)
- Arrow icon: Lucide `ArrowRight` or `ChevronRight`
- Product images: client to provide after trip — use Unsplash conference room/display placeholders
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 05 — SECTION HEADING + DESCRIPTION BLOCK

**Observed class signature:** `.title` (H2) + `.description` or paragraph  
**Confidence:** observed

### Structure

```html
<div class="[section-header-container — likely max-w-3xl mx-auto text-center]">
  <h2 class="title">[SECTION HEADING]</h2>
  <p class="description">[Section description paragraph explaining the category or feature]</p>
</div>
```

### Props / Variants

| Variant | Trigger | Usage | Source |
|---|---|---|---|
| Centered | Default | Product category pages, homepage sections | observed |
| With animation | On scroll | `.title.txt-anim` class for scroll-triggered animation | observed |

### States

- **Scroll animation:** Headings with `.txt-anim` class animate on scroll (requires verification for exact animation)

### Content (InfinityX examples)

**Interactive Flat Panels section:**
- Heading: "INTERACTIVE FLAT PANELS"
- Description: "Transform your meeting rooms and classrooms with InfinityX interactive displays. Integrating projector, whiteboard, and collaboration tools into one powerful solution."

**Kiosks section:**
- Heading: "KIOSKS & DIGITAL SIGNAGE"
- Description: "Engage customers and visitors with interactive kiosk solutions for retail, hospitality, and public spaces."

**About section (adapt MAXHUB stats text):**
- Heading: "ABOUT INFINITYX GLOBAL"
- Description: "Since 2014, InfinityX Global has delivered cutting-edge display solutions across India. With 4000+ installations and certifications including MSME, ISO, and GeM, we empower businesses and institutions with technology that enhances collaboration and productivity."

### Clone Notes

- Centered layout: `text-center max-w-3xl mx-auto`
- Heading: uppercase, likely `text-4xl font-semibold mb-4` (32px H2 from tokens)
- Description: `text-lg text-gray-600 leading-relaxed` (18px, secondary text color)
- Scroll animation: implement with Framer Motion or Intersection Observer

---

## 06 — FEATURE / CONTENT CAROUSEL

**Observed class signature:** Swiper carousel similar to hero — group labels "1 / 3", "2 / 3", "3 / 3"  
**Confidence:** observed (structure clear, animation requires verification)

### Structure

```html
<div class="swiper [feature-carousel-class]">
  <div class="swiper-wrapper">
    <!-- Slide 1 -->
    <div class="swiper-slide">
      <img src="[feature-bg.jpg]" alt="Feature background" class="[bg-class]" />
      <div class="[text-overlay]">
        <h2 class="title txt-anim h2">[Feature Heading]</h2>
        <p class="[feature-description]">[Product or feature name]</p>
        <a href="[feature-url]" class="[learn-more-link]">Learn More</a>
      </div>
    </div>
    
    <!-- 2-3 more slides -->
  </div>
  
  <button class="[prev-btn]">prev</button>
  <button class="[next-btn]">next</button>
</div>
```

### Props / Variants

| Variant | Usage | Source |
|---|---|---|
| 3-slide carousel | Homepage product showcases | observed |
| Manual navigation | Prev/next arrows, some disabled at edges | observed |

### States

- **Navigation disabled:** Prev button disabled on first slide, next disabled on last (observed in audit)
- **Auto-play:** Requires verification (likely enabled like hero carousel)

### Content (InfinityX examples)

**Commercial Display showcase carousel:**
- Slide 1: "ULTRA IMMERSIVE VISION" — "InfinityX Ultra-Wide Display Series" → product page
- Slide 2: "SMART COLLABORATION" — "Interactive LED Wall Solutions" → product page
- Slide 3: "CRYSTAL CLEAR DISPLAY" — "4K Commercial Display Series" → product page

**News/Awards carousel (defer to post-launch):**
- Use for: certifications, awards, client testimonials, case studies

### Clone Notes

- Smaller than hero carousel — likely `h-96` or `h-[500px]` height
- Same Swiper.js library as hero carousel for consistency
- Text overlay: white text on dark gradient
- Feature heading: uppercase, large (likely 3xl/4xl)

---

## 07 — TABBED CONTENT (Solutions Section)

**Observed class signature:** Tab titles with `.tab-title` class  
**Confidence:** observed (tab structure clear, switching animation requires verification)

### Structure

```html
<div class="[tabs-container]">
  <!-- Tab Navigation -->
  <div class="[tab-nav]">
    <button class="tab-title [active-class]">Enterprise</button>
    <button class="tab-title">Education</button>
    <a href="/solutions" class="[all-solutions-link]">All Solutions</a>
  </div>
  
  <!-- Tab Content Panels -->
  <div class="[tab-panels]">
    <!-- Enterprise Panel -->
    <div class="[tab-panel — active]">
      <h2 class="tab-title">Enterprise solutions</h2>
      <p>We offer easy-to-use, high-quality conferencing solutions for all room sizes.</p>
      <a href="/solutions/enterprise" class="[learn-more-link]">Learn More</a>
    </div>
    
    <!-- Education Panel -->
    <div class="[tab-panel — hidden]">
      <h2 class="tab-title">Education solutions</h2>
      <p>[Education description]</p>
      <a href="/solutions/education" class="[learn-more-link]">Learn More</a>
    </div>
  </div>
</div>
```

### Props / Variants

| Variant | Trigger | Source |
|---|---|---|---|
| Active tab | Button click | observed |
| Tab switch | Click alternate tab | requires verification for animation |

### States

- **Active tab:** Different background or underline (requires verification — likely brand blue #196fd2)
- **Tab switch animation:** Fade or slide transition (requires verification)

### Content (InfinityX)

**Enterprise tab:**
- Heading: "Enterprise Solutions"
- Description: "InfinityX delivers collaboration technology for boardrooms, conference spaces, and training centers. Our displays integrate seamlessly with your existing infrastructure."
- CTA: "Learn More" → `/solutions/enterprise`

**Education tab:**
- Heading: "Education Solutions"
- Description: "Transform classrooms into interactive learning environments. Our smart displays enhance student engagement and enable hybrid teaching."
- CTA: "Learn More" → `/solutions/education`

### Clone Notes

- Implement with React state (active tab index)
- Tab buttons: horizontal layout, likely underline or background highlight on active
- Tab panels: conditional rendering or CSS `hidden` class toggle
- Consider smooth height transition when switching tabs (Framer Motion `AnimatePresence`)

---

## 08 — STATS STRIP

**Observed class signature:** Generic divs containing stat number + label  
**Confidence:** observed

### Structure

```html
<div class="[stats-container — likely grid-cols-4 on desktop]">
  <!-- Stat 1 -->
  <div class="[stat-item]">
    <div class="[stat-number — large text]">6500+</div>
    <div class="[stat-label — smaller text]">Total Employees</div>
  </div>
  
  <!-- Repeat for 4 stats -->
</div>
```

### Props / Variants

| Layout | Breakpoint | Source |
|---|---|---|
| 4 columns | Desktop (≥1024px) | observed |
| 2 columns | Tablet (768-1023px) | proposed |
| 1 column | Mobile (<768px) | proposed |

### Content (InfinityX stats — from CLAUDE.md)

1. **4000+** — Installations
2. **2014** — Founded (or "12+ Years" as of 2026)
3. **MSME · ISO · GeM** — Certifications
4. **Pan India** — Coverage (or specific stat like "50+ Cities")

**Alternative stats (if client provides):**
- Total projects
- Enterprise clients
- Government installations
- Uptime/reliability percentage

### Clone Notes

- Stat number: very large text, bold — `text-5xl font-bold` or larger
- Stat label: smaller, secondary color — `text-sm text-gray-600 mt-2`
- Grid layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
- Background: likely dark section (footer bg #1c1c1d or primary blue #196fd2) with white text
- Consider count-up animation on scroll (react-countup library)

---

## 09 — FOOTER

**Observed class signature:** `<contentinfo>` tag  
**Confidence:** observed

### Structure

```html
<footer class="[footer-container — dark background #1c1c1d]">
  <!-- Top Section -->
  <div class="[footer-top]">
    <!-- Social Links -->
    <div class="[social-section]">
      <h2 class="fot-title">GET CONNECTED WITH US</h2>
      <div class="[social-icons]">
        <a href="[linkedin]"><img src="[linkedin-icon]" alt="LinkedIn" /></a>
        <a href="[facebook]"><img src="[facebook-icon]" alt="Facebook" /></a>
        <!-- No Twitter/YouTube for InfinityX V1 — client has no social media per CLAUDE.md -->
      </div>
    </div>
    
    <!-- Footer Navigation Columns -->
    <div class="[footer-columns-grid]">
      <!-- Company -->
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About InfinityX</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      
      <!-- Products -->
      <div>
        <h4>Products</h4>
        <ul>
          <li><a href="/products/interactive-flat-panels">Interactive Flat Panels</a></li>
          <li><a href="/products/kiosks">Kiosks</a></li>
          <li><a href="/products/cctv">CCTV</a></li>
        </ul>
      </div>
      
      <!-- Support -->
      <div>
        <h4>Support</h4>
        <ul>
          <li><a href="/support">Help Center</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Contact Information + Email Signup -->
    <div class="[contact-section]">
      <!-- Email Signup Form -->
      <form action="[email-signup-handler]" method="post">
        <input type="email" name="email" placeholder="Enter your E-mail Address" />
        <button type="submit" class="btn btn-default">SUBMIT</button>
      </form>
      
      <!-- Contact Info -->
      <div class="[contact-details]">
        <p><strong>Address:</strong></p>
        <p>[Client address — developer has it per CLAUDE.md]</p>
        
        <p><strong>Phone:</strong> 8228822849 / 9640778582</p>
        <p><strong>Email:</strong> contact@infinityxglobal.com</p>
        
        <p><strong>Business Hours:</strong></p>
        <p>Monday to Saturday, 09:30 AM - 06:30 PM</p>
      </div>
    </div>
  </div>
  
  <!-- Bottom Section -->
  <div class="[footer-bottom]">
    <a href="/privacy-policy">Privacy Policy</a>
    <span>|</span>
    <a href="/cookies">Cookies Policy</a>
    
    <p>©2025 InfinityX Global. All rights reserved.</p>
  </div>
</footer>
```

### Props / Variants

| Variant | Source |
|---|---|
| Desktop 4-column layout | proposed |
| Mobile stacked layout | proposed |

### States

- **Link hover:** Underline or color change to brand blue #196fd2

### Content (InfinityX adaptation)

**Email signup:** Use Nodemailer + Google Sheets logging (per CLAUDE.md stack decision)

**Contact information:**
- Phone: 8228822849 / 9640778582 (from CLAUDE.md)
- Email: contact@infinityxglobal.com (from CLAUDE.md)
- Address: [Developer has it — insert from client]
- GST: PENDING from Laxman sir (add when received)

**Social media:** 
- CLAUDE.md states "Social media: None — not V1"
- Either remove social section OR add placeholder links for future (LinkedIn / Facebook) but mark inactive

**Footer nav links:** Adapt to InfinityX sitemap (no Awards, News/Events, Customer Stories in V1)

### Clone Notes

- Dark background: `bg-[#1c1c1d]` from tokens.json
- White text: `text-white`
- Email form: style consistently with brand (ghost button or primary blue button)
- Form submission: server action in Next.js → Nodemailer → contact@infinityxglobal.com + Google Sheets
- Include Cloudflare Turnstile on email form (per CLAUDE.md security requirements)

---

## 10 — COOKIE CONSENT BANNER

**Observed class signature:** Generic overlay div  
**Confidence:** observed

### Structure

```html
<div class="[cookie-banner — fixed bottom overlay, z-50]">
  <div class="[banner-content]">
    <p>
      This site uses cookies to personalise your experience and analyse site traffic. 
      By clicking ACCEPT or continuing to browse the site, you are agreeing to our use of cookies. 
      See our <a href="/cookies">Cookies</a> and <a href="/privacy-policy">Privacy Policy</a> here.
    </p>
    
    <div class="[button-group]">
      <a href="javascript:;" class="[accept-btn]">Yes, accept all</a>
      <a href="javascript:;" class="[reject-btn]">No thanks, only essential cookies</a>
    </div>
    
    <button class="[close-btn]">[X icon]</button>
  </div>
</div>
```

### Props / Variants

| State | Trigger | Source |
|---|---|---|
| Visible | First visit (no cookie set) | observed |
| Dismissed | User clicks accept/reject or close | observed |

### States

- **Dismissed:** Banner hidden, cookie preference stored in localStorage or cookie

### Content (InfinityX)

Use MAXHUB copy verbatim — update links to InfinityX pages:
- Cookies Policy → `/cookies`
- Privacy Policy → `/privacy-policy`

### Clone Notes

- Fixed position: `fixed bottom-0 left-0 right-0 z-50`
- Dark background: `bg-gray-900` or `bg-black/80`
- White text: `text-white`
- Accept button: primary blue bg (#196fd2)
- Reject button: ghost variant (white border, transparent bg)
- Close button: top-right X icon (Lucide `X`)
- Store preference in localStorage: `cookie_consent: 'accepted' | 'rejected'`
- Hide banner if preference already set (check on page load)

---

## 11 — CATEGORY TAB NAVIGATION (Products Page)

**Observed class signature:** Icon-based navigation with paragraph labels  
**Confidence:** observed

### Structure

```html
<div class="[category-tabs — horizontal scroll on mobile]">
  <!-- Active Tab Example -->
  <button class="[tab-button — active]">
    <div class="[icon-container]">
      <img src="[icon-default.svg]" alt="Interactive Flat Panel" class="[icon]" />
      <img src="[icon-active.svg]" alt="Interactive Flat Panel" class="[icon-active — visible when active]" />
    </div>
    <p>Interactive Flat Panel</p>
  </button>
  
  <!-- Inactive Tab Example -->
  <button class="[tab-button]">
    <div class="[icon-container]">
      <img src="[led-icon.svg]" alt="LED Display" class="[icon]" />
    </div>
    <p>LED Display</p>
  </button>
  
  <!-- Repeat for each category -->
</div>
```

### Props / Variants

| Variant | Trigger | Source |
|---|---|---|
| Active tab | Button click | observed |
| Inactive tab | Default state | observed |

### States

- **Active:** Background highlight (likely brand blue #196fd2 or light blue tint) + icon swap to active version
- **Hover:** Subtle background color change

### Content (InfinityX categories — V1)

1. Interactive Flat Panel
2. LED Display
3. Commercial Display
4. Kiosks & Signage
5. CCTV & Security

**SKIP:**
- ~~Unified Communication~~
- ~~Microsoft Teams Rooms~~
- ~~Capture System~~
- ~~Accessories~~
- Software (defer)

### Clone Notes

- Horizontal layout: `flex overflow-x-auto` for mobile scroll
- Icons: use Lucide React icons or custom SVG icons for each category
- Dual icon pattern (default + active) observed — swap icons on active state
- Active state: `bg-blue-50 text-primary border-b-2 border-primary` (subtle background + bottom border)
- Mobile: horizontal scroll with snap-scroll for better UX
- Desktop: centered horizontal layout, all visible

---

## Component Build Priority (for /clone-plan)

Based on observed usage patterns and page dependencies:

**Phase 1 — Foundation (build first):**
1. Navbar (appears on all pages)
2. Footer (appears on all pages)
3. Section Heading + Description Block (reusable across pages)

**Phase 2 — Homepage:**
4. Hero Carousel (homepage centerpiece)
5. Product Category Cards (homepage + products page)
6. Stats Strip (homepage About section)
7. Feature/Content Carousel (homepage product showcases)
8. Tabbed Content (Solutions section)

**Phase 3 — Product Pages:**
9. Category Tab Navigation (products page)
10. Product Listing Cards (products page + category pages)

**Phase 4 — Utilities:**
11. Cookie Consent Banner (global overlay)

---

## Components NOT Needed (MAXHUB-specific, not in InfinityX scope)

- Partner Portal components
- Region selector dropdown
- Search modal/overlay (defer to V2)
- Unified Communication product cards
- Capture System product cards
- Accessories product cards
- Microsoft Teams Rooms branding elements

---

**End of Component Specification**
