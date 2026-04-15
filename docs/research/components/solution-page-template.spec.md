# SolutionPageTemplate Specification

## Overview
- **Target files:** `src/components/solution-page-template.tsx`, `src/data/solutions.ts`
- **Routes:** `src/app/solutions/[solution]/page.tsx`
- **Interaction model:** Click-driven tab switching for scenarios

## Page Topology (both Enterprise + Education share identical structure)
1. Hero Banner — full-bleed bg image, centered title + subtitle
2. Features Strip — 3 capability pillars
3. Solutions Section — heading + description + click-driven scenario tabs
4. Scenario Detail Panel — room layout image + product list (tab-switched)
5. CTA — Get consultation

## Extracted CSS Values (from getComputedStyle)

### Hero Banner
- Enterprise: height 335px, title font-size 36px, color #333, bg image on inner div
- Education: height 673px, title font-size 42px, color #fff (white on dark bg image)
- Title: font-weight 400, text-transform uppercase, line-height 54-63px
- Subtitle: font-size 14-18px, color #666 or #fff/80

### Solution Layout Section
- padding: 100px 0 80px
- Heading: font-size 28-32px, font-weight bold, uppercase, color #333
- Description: font-size 14-16px, color #666, max-width ~700px

### Scenario Tabs
- Tab bar: background #f5f5f5, border-bottom 2px
- Active tab: border-bottom color #196fd2, color #196fd2
- Tab item: padding 14-16px 20px, font-size 14px, font-weight 500

### Scenario Detail Panel
- Background: white, padding 40-60px 0
- Room image: aspect-ratio 16/9, full width or 60% with products on side

## Interaction Model
- CLICK-DRIVEN: clicking a tab shows its scenario content (room diagram + products)
- Transition: opacity fade 0.3s ease on panel switch
- Default: first tab active on load

## Assets (from live pages)
- Enterprise hero bg: https://sgp-cstore-pub.maxhub.com/maxhub_global_public/06d467a1d8204212af9485e18f1116d5
- Education hero bg: https://sgp-cstore-pub.maxhub.com/maxhub_global_public/7c457c2d1be64c8fb20b461639a2be7a
- Arrow icon img: https://sgp-cstore-pub.maxhub.com/maxhub_global_public/62fbbf2bbcd14d30b011feb969214e95
- Room diagram img: https://sgp-cstore-pub.maxhub.com/maxhub_global_public/04df0e859ca54be7bf7dc10d59bce47d

## Enterprise Content
### Hero: "BUSINESS SOLUTIONS" / "Meet. Move. Make."
### Features: Easy Deployment | Easy Operation | Easy Maintenance
### Scenarios:
- Huddle Room — 2-4 people, wireless BYOD
- Small Room — all-in-one hardware + software
- Medium Room — pre-configured with Zoom Room
- Large Room — enterprise AV integration
- Auditorium — large-scale presentations
- Open Space — flexible hot-desking

## Education Content
### Hero: "EDUCATION SOLUTIONS" / "Enable digital learning."
### Features: Digital Campus | Interactive Classroom | Remote Learning
### Scenarios:
- Intelligent Interactive Classroom — IFP + Smart Blackboard
- Group Collaboration Classroom — all-in-one hardware + software
- Lecture Capture Classroom — recording + hybrid teaching

## Responsive Behavior
- Desktop 1440px: hero full-bleed, scenario tabs horizontal strip, detail 2-col
- Tablet 768px: tabs wrap, detail stacks
- Mobile 390px: tabs scroll horizontal, full-width image, products below
