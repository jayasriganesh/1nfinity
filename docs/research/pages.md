# Page-by-Page Build Plan — InfinityX Global

**Source:** sitemap.md, components.md, CLAUDE.md  
**Date:** 2026-04-01

---

## PAGE: Homepage (`/`)

**Build priority:** 1  
**Estimated complexity:** High  
**Template:** Custom homepage layout

### Section Breakdown

| # | Section | Component | Copy Source | Animation | Confidence |
|---|---|---|---|---|---|
| 1 | Navigation | Navbar | Products, Solutions (defer), About, Contact Sales | Sticky on scroll | High |
| 2 | Hero Carousel | Hero Carousel (Swiper.js) | 4-6 slides (see copy below) | Auto-play, fade transition | Medium |
| 3 | Product Categories | Product Category Cards Grid | IFP, Kiosks, CCTV (V1 only) | Hover image swap | High |
| 4 | About Section | Section Heading + Stats Strip | CLAUDE.md client facts | Number ticker on scroll | High |
| 5 | Solutions Tabs | Tabbed Content | Enterprise / Education (placeholder) | Tab switch fade | Medium |
| 6 | CTA Band | CTASection | "Get a Quote Today" CTA | None | High |
| 7 | Footer | Footer | Contact info, product links, legal | None | High |
| 8 | Cookie Banner | Cookie Consent | MAXHUB copy adapted | Slide up from bottom | High |

**Confidence note:** Hero carousel auto-play timing and Solutions tab content require decisions.

### Exact Copy for This Page

**Hero Carousel Slides (4-6 slides, adapt from MAXHUB):**

**Slide 1:**
- Heading: "Enterprise-Grade Interactive Displays"
- Subheading: "Transform your collaboration spaces with InfinityX smart display solutions for boardrooms, conference centers, and classrooms."
- CTA: "Explore Products" → `/products`
- Background: Conference room with interactive display (Unsplash placeholder)

**Slide 2:**
- Heading: "4000+ Installations Across India"
- Subheading: "Trusted by enterprises, educational institutions, and government agencies since 2014."
- CTA: "Our Story" → `/about`
- Background: Team/office image or installation photo

**Slide 3:**
- Heading: "Complete Display Solutions Portfolio"
- Subheading: "From interactive flat panels to LED video walls, kiosks, and CCTV — we deliver technology that works."
- CTA: "View All Products" → `/products`
- Background: Product showcase collage

**Slide 4:**
- Heading: "MSME · ISO · GeM Certified"
- Subheading: "Quality you can trust. Compliance you can count on."
- CTA: "Get Quote" → `/get-quote`
- Background: Certification badges or professional setting

**Slide 5 (optional):**
- Heading: "Expand Your Reach"
- Subheading: "Pan-India service network with expansion into Nepal, Sri Lanka, UAE, and Africa."
- CTA: "Contact Sales" → `/contact`
- Background: Map or global connectivity visual

**Product Category Cards (3 cards for V1):**
1. **Interactive Flat Panels**
   - Image: Conference room IFP (placeholder)
   - Link: `/products/interactive-flat-panels`
   
2. **Kiosks & Signage**
   - Image: Retail kiosk or digital signage (placeholder)
   - Link: `/products/kiosks`
   
3. **CCTV & Security**
   - Image: Security camera or monitoring setup (placeholder)
   - Link: `/products/cctv`

**About Section:**
- Heading: "ABOUT INFINITYX GLOBAL"
- Description: "Since 2014, InfinityX Global has delivered cutting-edge display solutions across India. With 4000+ installations and certifications including MSME, ISO, and GeM, we empower businesses and institutions with technology that enhances collaboration and productivity."

**Stats Strip (4 stats):**
1. **4000+** — Installations
2. **2014** — Founded (or "12+ Years Excellence")
3. **MSME · ISO · GeM** — Certifications
4. **Pan India** — Service Network

**Solutions Tabs (PLACEHOLDER — fill after trip):**

*Enterprise Tab:*
- Heading: "Enterprise Solutions"
- Description: "InfinityX delivers collaboration technology for boardrooms, conference spaces, and training centers. Our displays integrate seamlessly with your existing infrastructure for Microsoft Teams, Zoom, and hybrid work environments."
- CTA: "Learn More" → `/solutions/enterprise` (AFTER TRIP)

*Education Tab:*
- Heading: "Education Solutions"
- Description: "Transform classrooms into interactive learning environments. Our smart displays enhance student engagement and enable hybrid teaching with tools designed for educators."
- CTA: "Learn More" → `/solutions/education` (AFTER TRIP)

**CTA Band:**
- Heading: "Ready to Upgrade Your Display Solutions?"
- Subheading: "Get a custom quote for your project. Our team responds within 48 hours."
- CTA Primary: "Get Quote" → `/get-quote`
- CTA Secondary: "Contact Sales" → `/contact`

**Footer:**
- Tagline: "©2025 InfinityX Global. All rights reserved."
- Contact: Phone: 8228822849 / 9640778582, Email: contact@infinityxglobal.com
- Address: [Developer has it — insert from client]
- Hours: Monday to Saturday, 09:30 AM - 06:30 PM

**Cookie Banner:**
- Copy: "This site uses cookies to personalise your experience and analyse site traffic. By clicking ACCEPT or continuing to browse the site, you are agreeing to our use of cookies. See our Cookies and Privacy Policy here."
- CTA Accept: "Yes, accept all"
- CTA Reject: "No thanks, only essential cookies"

### Open Questions Before Building

- [x] **Hero carousel slide count:** 4-6 slides? → **Decision: 4 slides minimum, 6 maximum**
- [ ] **Solutions tabs:** Include on homepage V1 or defer? → **Recommendation: Include with placeholder copy**
- [ ] **Feature carousel:** Add product showcase carousel below categories? → **Recommendation: Defer to focus on product pages**
- [x] **Stats:** Use "Founded 2014" or "12+ Years"? → **Decision: Use "2014 — Founded" for credibility**

---

## PAGE: All Products Listing (`/products`)

**Build priority:** 2  
**Estimated complexity:** Medium  
**Template:** Category listing page

### Section Breakdown

| # | Section | Component | Copy Source | Animation | Confidence |
|---|---|---|---|---|---|
| 1 | Navigation | Navbar | Same as homepage | Sticky | High |
| 2 | Page Header | Section Heading | "Our Products" + description | None | High |
| 3 | Category Cards | Product Category Cards Grid | Same 3 cards as homepage | Hover effect | High |
| 4 | Footer | Footer | Same as homepage | None | High |

### Exact Copy for This Page

**Page Heading:**
- H1: "OUR PRODUCTS"
- Description: "InfinityX Global offers a comprehensive range of display solutions for enterprise, education, retail, and government sectors. Explore our complete product portfolio below."

**Category Cards:** Same as homepage (IFP, Kiosks, CCTV)

### Open Questions Before Building

- [ ] **Category Tab Navigation:** Add MAXHUB-style icon tabs above cards? → **Recommendation: Optional — simpler grid is cleaner**

---

## PAGE: Interactive Flat Panels Category (`/products/interactive-flat-panels`)

**Build priority:** 3  
**Estimated complexity:** Medium  
**Template:** Category page with product grid

### Section Breakdown

| # | Section | Component | Copy Source | Animation | Confidence |
|---|---|---|---|---|---|
| 1 | Navigation | Navbar | Same as homepage | Sticky | High |
| 2 | Category Header | Section Heading | IFP description | None | High |
| 3 | Product Grid | Product Listing Cards | 3 series (Series A/B/C placeholders) | Hover card lift | High |
| 4 | Footer | Footer | Same as homepage | None | High |

### Exact Copy for This Page

**Category Heading:**
- H1: "INTERACTIVE FLAT PANELS"
- Description: "Transform your meeting rooms and classrooms with InfinityX interactive displays. Integrating projector, whiteboard, and collaboration tools into one powerful solution. Available in multiple sizes and configurations to fit any space."

**Product Listing Cards (3 products — PLACEHOLDER names):**

1. **Series A**
   - Image: IFP product photo (placeholder)
   - Short Description: "Premium interactive display for enterprise boardrooms"
   - CTA: "Learn More" → `/products/interactive-flat-panels/series-a`
   
2. **Series B**
   - Image: IFP product photo (placeholder)
   - Short Description: "Versatile solution for education and small meeting rooms"
   - CTA: "Learn More" → `/products/interactive-flat-panels/series-b`
   
3. **Series C**
   - Image: IFP product photo (placeholder)
   - Short Description: "Budget-friendly option for classrooms and training centers"
   - CTA: "Learn More" → `/products/interactive-flat-panels/series-c`

**Note:** Client will provide actual series names, sizes (3 series × 3 sizes per CLAUDE.md), and specs after trip.

### Open Questions Before Building

- [ ] **Product count:** 3 series or 9 products (3 series × 3 sizes)? → **Recommendation: 3 series pages, sizes listed on each series page**
- [ ] **Grid layout:** 3 columns or 2 columns? → **Recommendation: 3 columns desktop (matches MAXHUB), 1 mobile**

---

## PAGE: IFP Series A Product (`/products/interactive-flat-panels/series-a`)

**Build priority:** 4  
**Estimated complexity:** Medium  
**Template:** Product page template

### Section Breakdown

| # | Section | Component | Copy Source | Animation | Confidence |
|---|---|---|---|---|---|
| 1 | Navigation | Navbar | Same as homepage | Sticky | High |
| 2 | Product Hero | Product Hero Image + Title | PLACEHOLDER | None | High |
| 3 | Key Features | Section Heading + Feature List | PLACEHOLDER | Scroll fade-in | Medium |
| 4 | Specifications | Specs Table | PLACEHOLDER | None | High |
| 5 | Applications | Section Heading + Use Cases | PLACEHOLDER | None | Medium |
| 6 | Get Quote CTA | Get Quote Form Embed or CTA | Pre-fill product name | None | High |
| 7 | Footer | Footer | Same as homepage | None | High |

### Exact Copy for This Page (PLACEHOLDER — client fills after trip)

**Product Hero:**
- H1: "Series A Interactive Flat Panel"
- Tagline: "Premium collaboration display for enterprise boardrooms"
- Image: Product photo (placeholder — use generic IFP image)

**Key Features (PLACEHOLDER):**
- H2: "Key Features"
- List:
  - 4K Ultra HD resolution for crystal-clear visuals
  - Multi-touch capability (up to 20 touch points)
  - Built-in wireless screen sharing
  - Compatible with Microsoft Teams, Zoom, Google Meet
  - Android-based operating system
  - HDMI, USB-C, and wireless connectivity

**Specifications Table (PLACEHOLDER):**
| Spec | Value |
|---|---|
| Screen Sizes | 55", 65", 75", 86" |
| Resolution | 3840 × 2160 (4K UHD) |
| Touch Technology | Infrared multi-touch |
| Brightness | 400 nits |
| Contrast Ratio | 5000:1 |
| Operating System | Android 11 |
| Connectivity | HDMI 2.0, USB-C, WiFi, Bluetooth |
| Warranty | 3 years |

**Applications (PLACEHOLDER):**
- H2: "Perfect For"
- Use Cases:
  - Corporate boardrooms and executive meeting spaces
  - Training centers and conference facilities
  - Huddle rooms and collaborative workspaces
  - Hybrid work environments with remote participants

**Get Quote CTA:**
- Heading: "Interested in Series A?"
- Description: "Contact our team for pricing, availability, and custom configurations."
- CTA: "Get Quote" → `/get-quote?product=series-a` (pre-fill product name)

**Note:** All PLACEHOLDER content will be replaced when client provides product details, images, and specs after trip.

### Open Questions Before Building

- [ ] **Specs table:** Use accordion (collapsible sections) or all visible? → **Recommendation: All visible, better for SEO**
- [ ] **Gallery:** Include product image gallery (multiple angles)? → **Recommendation: Yes, 3-5 images when client provides**
- [ ] **Related products:** Show other series at bottom? → **Recommendation: Yes, simple "See Also" section**

---

## PAGE: Kiosks Category (`/products/kiosks`)

**Build priority:** 5  
**Estimated complexity:** Low  
**Template:** Category page (same as IFP)

### Section Breakdown

Same structure as IFP category page.

### Exact Copy for This Page

**Category Heading:**
- H1: "KIOSKS & DIGITAL SIGNAGE"
- Description: "Engage customers and visitors with interactive kiosk solutions for retail, hospitality, healthcare, and public spaces. Available in touch and non-touch variants with custom branding options."

**Product Listing Cards (1 product V1, more after trip):**

1. **Ultra Slim Kiosk**
   - Image: Kiosk product photo (placeholder)
   - Short Description: "Touch and non-touch variants in 32", 43", 55", 65" sizes"
   - CTA: "Learn More" → `/products/kiosks/ultra-slim-kiosk`

**Note:** Additional kiosk products (Dual Side Hanging, Health Kiosk, etc.) deferred to post-trip change order.

---

## PAGE: Ultra Slim Kiosk Product (`/products/kiosks/ultra-slim-kiosk`)

**Build priority:** 6  
**Estimated complexity:** Medium  
**Template:** Product page template (same as IFP)

### Exact Copy for This Page

**Product Hero:**
- H1: "Ultra Slim Kiosk"
- Tagline: "Sleek digital signage and interactive kiosk for any environment"
- Variants: "Available in touch and non-touch configurations"

**Key Features:**
- Android-based operating system
- Portrait or landscape orientation
- Slim profile design (wall-mount or floor stand)
- Available sizes: 32", 43", 55", 65"
- Remote content management
- 24/7 operation capable

**Specifications:**
| Spec | Value |
|---|---|
| Screen Sizes | 32", 43", 55", 65" |
| Touch Technology | Capacitive multi-touch (touch variant) |
| Brightness | 350-500 nits (size-dependent) |
| Operating System | Android 9.0 or higher |
| Mounting | Wall-mount or floor stand (optional) |
| Connectivity | WiFi, Ethernet, USB |
| Warranty | 2 years |

**Applications:**
- Retail stores and shopping malls
- Hotel lobbies and reception areas
- Corporate offices and building directories
- Healthcare facilities (patient information, wayfinding)
- Government offices and service centers

---

## PAGE: CCTV Category (`/products/cctv`)

**Build priority:** 7  
**Estimated complexity:** Low  
**Template:** Category page

### Exact Copy for This Page (PLACEHOLDER — client spec pending)

**Category Heading:**
- H1: "CCTV & SECURITY SOLUTIONS"
- Description: "Comprehensive surveillance systems for enterprise, retail, and residential applications. Our CCTV solutions provide 24/7 monitoring, remote access, and intelligent analytics."

**Product Listing Cards (2 products PLACEHOLDER):**

1. **Product 1**
   - Image: CCTV camera (placeholder)
   - Short Description: "[Spec pending from client]"
   - CTA: "Learn More" → `/products/cctv/product-1`
   
2. **Product 2**
   - Image: CCTV system (placeholder)
   - Short Description: "[Spec pending from client]"
   - CTA: "Learn More" → `/products/cctv/product-2`

**Note:** Client will provide CCTV product names, specs, and details after trip.

---

## PAGE: Contact (`/contact`)

**Build priority:** 9  
**Estimated complexity:** Medium  
**Template:** Form page with sidebar

### Section Breakdown

| # | Section | Component | Copy Source | Animation | Confidence |
|---|---|---|---|---|---|
| 1 | Navigation | Navbar | Same as homepage | Sticky | High |
| 2 | Page Header | Section Heading | Contact info | None | High |
| 3 | Contact Form | Contact Form Component | Fields below | None | High |
| 4 | Sidebar Info | Contact Details | CLAUDE.md | None | High |
| 5 | Footer | Footer | Same as homepage | None | High |

### Exact Copy for This Page

**Page Heading:**
- H1: "CONTACT SALES"
- Description: "Get in touch with our team for product inquiries, quotes, or technical support. We respond to all inquiries within 48 hours."

**Contact Form Fields:**
- Full Name (required)
- Email (required)
- Phone (required)
- Company Name (optional)
- Subject (required, dropdown: General Inquiry, Product Quote, Technical Support, Partnership)
- Message (required, textarea)
- File Upload (optional, max 10MB, PDF/DOC/DOCX — for RFQ documents)
- Cloudflare Turnstile (required)
- Submit Button: "Send Message"

**Form Submission:**
- Server action → Nodemailer → contact@infinityxglobal.com
- Also log to Google Sheets (backup)
- Success message: "Thank you! We've received your message and will respond within 48 hours."
- Error handling: Display field-level validation errors

**Sidebar Contact Info:**
- **Phone:** 8228822849 / 9640778582
- **Email:** contact@infinityxglobal.com
- **Address:** [Client address — developer has it]
- **Business Hours:** Monday to Saturday, 09:30 AM - 06:30 PM
- **Response Time:** Within 48 hours

### Open Questions Before Building

- [ ] **Google Maps embed:** Include map with office location? → **Recommendation: Yes, if client provides address**
- [ ] **Live chat:** Add live chat widget (WhatsApp Business)? → **Recommendation: Defer per CLAUDE.md "TBD after trip"**

---

## PAGE: Get Quote (`/get-quote`)

**Build priority:** 10  
**Estimated complexity:** Medium  
**Template:** Form page (similar to Contact)

### Exact Copy for This Page

**Page Heading:**
- H1: "GET A QUOTE"
- Description: "Request a custom quote for your project. Provide details below and our team will send you a detailed proposal within 48 hours."

**Get Quote Form Fields:**
- Full Name (required)
- Email (required)
- Phone (required)
- Company Name (required)
- **Product of Interest (required, dropdown):**
  - Interactive Flat Panel - Series A
  - Interactive Flat Panel - Series B
  - Interactive Flat Panel - Series C
  - Kiosks - Ultra Slim Kiosk
  - CCTV & Security Solutions
  - Other (please specify in message)
- Quantity (required, number input)
- Project Type (dropdown: New Installation, Replacement, Upgrade, Bulk Order)
- Budget Range (dropdown: Under ₹1L, ₹1L-5L, ₹5L-10L, ₹10L-25L, ₹25L+, Contact for Pricing)
- Project Timeline (dropdown: Immediate, Within 1 Month, 1-3 Months, 3-6 Months, Planning Stage)
- Message / Requirements (required, textarea)
- File Upload (optional, max 10MB — for project briefs, floor plans, RFQ documents)
- Cloudflare Turnstile (required)
- Submit Button: "Request Quote"

**Form Submission:** Same as contact form (Nodemailer + Sheets logging)

**Sidebar Info:**
- **Why Request a Quote?**
  - Custom pricing based on volume and configuration
  - Detailed product specifications and comparison
  - Installation and training support included
  - Extended warranty options available
  - Financing options for bulk orders

---

## PAGE: About (`/about`)

**Build priority:** 11  
**Estimated complexity:** Medium  
**Template:** Content page with sections

### Section Breakdown

| # | Section | Component | Copy Source | Animation | Confidence |
|---|---|---|---|---|---|
| 1 | Navigation | Navbar | Same as homepage | Sticky | High |
| 2 | About Header | Section Heading + Hero Image | CLAUDE.md client facts | None | High |
| 3 | Company Stats | Stats Strip | Same as homepage | Number ticker | High |
| 4 | Our Story | Section Heading + Text | CLAUDE.md | Scroll fade-in | Medium |
| 5 | Certifications | Badge Grid | MSME, ISO, GeM | None | High |
| 6 | Markets Served | Section Heading + Map/List | CLAUDE.md expansion markets | None | Medium |
| 7 | CTA | CTA Section | "Partner with Us" | None | High |
| 8 | Footer | Footer | Same as homepage | None | High |

### Exact Copy for This Page

**About Header:**
- H1: "ABOUT INFINITYX GLOBAL"
- Tagline: "Where Innovation Meets Excellence in Display Technology"
- Hero Image: Team photo or office (placeholder)

**Our Story:**
- H2: "Our Story"
- Copy: "Founded in 2014, InfinityX Global has grown to become a trusted name in display solutions across India. With over 4000 successful installations in enterprise, education, government, and retail sectors, we deliver technology that transforms how teams collaborate and communicate.

Our commitment to quality and customer success has earned us certifications including MSME, ISO, and GeM registration. We serve clients across India and are expanding into Nepal, Sri Lanka, Bhutan, UAE, Saudi Arabia, and Africa.

From interactive flat panels to LED video walls, kiosks, and CCTV systems, every InfinityX solution is backed by expert installation, training, and ongoing support."

**Stats Strip:** Same 4 stats as homepage

**Certifications:**
- MSME Registered
- ISO Certified
- GeM Registered
- [Display as badge grid]

**Markets Served:**
- H2: "Markets Served"
- Current: Pan-India (with 50+ cities coverage)
- Expanding: Nepal, Sri Lanka, Bhutan, Saudi Arabia, UAE, Africa

**CTA:**
- Heading: "Partner With Us"
- Description: "Join 4000+ satisfied customers who trust InfinityX for their display solutions."
- CTA: "Get Started" → `/get-quote`

---

## PAGE: Privacy Policy (`/privacy-policy`)

**Build priority:** 12  
**Estimated complexity:** Low  
**Template:** Static content page

### Exact Copy for This Page

**Note:** Client to provide privacy policy content. If not provided, use standard template covering:
- Information we collect (contact forms, cookies, analytics)
- How we use information (respond to inquiries, improve services)
- Data security (Cloudflare, encrypted forms)
- Third-party services (Google Analytics, Google Sheets)
- Contact for privacy questions

---

## PAGE: 404 Not Found (`/not-found.tsx`)

**Build priority:** 13  
**Estimated complexity:** Low  
**Template:** Error page

### Exact Copy for This Page

**404 Message:**
- H1: "Page Not Found"
- Subheading: "The page you're looking for doesn't exist or has been moved."
- CTA Primary: "Go to Homepage" → `/`
- CTA Secondary: "View Products" → `/products`
- Optional: Search box (if search is implemented)

**Visual:** Branded 404 illustration or icon (Lucide `FileQuestion` or custom illustration)

---

## Component Reuse Matrix

| Component | Pages Used On | Build Once? |
|---|---|---|
| Navbar | All pages | ✅ Global |
| Footer | All pages | ✅ Global |
| Cookie Banner | All pages (overlay) | ✅ Global |
| Section Heading | Homepage, All products, Categories, About, Forms | ✅ Reusable |
| Stats Strip | Homepage, About | ✅ Reusable |
| Product Category Cards | Homepage, Products listing | ✅ Reusable |
| Product Listing Cards | All category pages | ✅ Reusable |
| Hero Carousel | Homepage only | ❌ Page-specific |
| Tabbed Content | Homepage only | ❌ Page-specific |
| Contact Form | Contact page only | ❌ Page-specific (but template-based) |
| Get Quote Form | Get Quote page only | ❌ Page-specific (but template-based) |

---

## Copy Placeholders — Client Input Needed

| Page | What's Missing | Priority |
|---|---|---|
| IFP Series A/B/C | Product names, specs, images, sizes | **High** — After trip |
| CCTV Products | Product names, specs, images | **High** — After trip |
| About | Team photo, office photo | Medium |
| Contact | Office address (developer has it) | **High** |
| All Product Pages | Professional product photography | **High** — After trip |

---

**End of Page Plans**
