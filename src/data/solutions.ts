// ─── Solutions Data ───────────────────────────────────────────────────────────
// Powers /solutions/[solution] dynamic routes.
// Template: SolutionPageTemplate — cloned from MAXHUB solutions pages.

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SolutionFeature {
  title: string
  description: string
  icon?: string // Lucide icon name
}

export interface SolutionScenario {
  id: string
  tabLabel: string
  heading: string
  description: string
  image?: string
  imageAlt?: string
  /** Recommended products for this scenario */
  recommendedProducts?: {
    name: string
    image?: string
    link?: string
  }[]
}

export interface CustomerStory {
  company: string
  location?: string
  quote?: string
  description: string
  image?: string
  logo?: string
}

export interface Solution {
  slug: string
  name: string
  tagline: string
  heroImage: string
  heroImageAlt?: string
  /** White text on dark hero (Education) vs dark text on light hero (Enterprise) */
  heroDark?: boolean

  overviewHeading: string
  overviewDescription: string

  /** 3 feature pillars */
  features: SolutionFeature[]

  /** Click-driven scenario tabs */
  scenarios: SolutionScenario[]

  /** Customer stories / case studies */
  customerStories?: CustomerStory[]
}

// ─── Enterprise ───────────────────────────────────────────────────────────────

const enterprise: Solution = {
  slug: 'enterprise',
  name: 'Business Solutions',
  tagline: 'Meet. Move. Make.',
  heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&h=600&fit=crop',
  heroImageAlt: 'Modern enterprise conference room with interactive display',
  heroDark: false,

  overviewHeading: 'Solutions for Business',
  overviewDescription:
    'Over the past decade, InfinityX Global\'s corporate solutions have dramatically improved team collaboration experiences across India. We offer easy-to-use, high-quality conferencing solutions for all room sizes — from 2-person huddle spaces to 500-seat auditoriums.',

  features: [
    {
      title: 'Easy Deployment',
      description: 'All-in-one hardware. Wall-mounted or floor-standing. PoE or Wi-Fi connection. Up and running in under an hour.',
      icon: 'Zap',
    },
    {
      title: 'Easy Operation',
      description: 'Familiar meeting OS with one-touch join for Teams, Zoom, and Meet. Wireless sharing from any device, no dongle required.',
      icon: 'Monitor',
    },
    {
      title: 'Easy Maintenance',
      description: 'OTA firmware updates, remote device management, and proactive monitoring via CAST CMS — zero downtime IT.',
      icon: 'Settings',
    },
  ],

  scenarios: [
    {
      id: 'huddle',
      tabLabel: 'Huddle Room',
      heading: 'Huddle Room Conference Solution',
      description:
        'Create a wireless BYOD environment with fewer cables and even more features. Perfect for 2–4 person quick catch-ups and daily stand-ups. InfinityX IFP Series A with built-in camera, mic array, and one-touch meeting join.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop',
      imageAlt: 'Huddle room with interactive display',
      recommendedProducts: [
        { name: 'IFP Series A (55")', link: '/products/interactive-flat-panels/series-a' },
        { name: 'IFP Series B (55")', link: '/products/interactive-flat-panels/series-b' },
      ],
    },
    {
      id: 'small-room',
      tabLabel: 'Small Room',
      heading: 'Small Room Conference Solution',
      description:
        'An all-in-one hardware and software offering for 4–8 person meeting rooms. Pre-certified for Microsoft Teams and Zoom Rooms. The 65" IFP with AI auto-framing ensures everyone on the call sees the full room.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop',
      imageAlt: 'Small conference room setup',
      recommendedProducts: [
        { name: 'IFP Series A (65")', link: '/products/interactive-flat-panels/series-a' },
        { name: 'IFP Series B (65")', link: '/products/interactive-flat-panels/series-b' },
      ],
    },
    {
      id: 'medium-room',
      tabLabel: 'Medium Room',
      heading: 'Medium Room Conference Solution',
      description:
        'Pre-configured for Zoom Rooms and Microsoft Teams Rooms. The 75" IFP with 16-mic array ensures every voice at the 10-person table is picked up clearly. Dual-screen support for content sharing and video simultaneously.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=675&fit=crop',
      imageAlt: 'Medium conference room with dual displays',
      recommendedProducts: [
        { name: 'IFP Series A (75")', link: '/products/interactive-flat-panels/series-a' },
        { name: 'Ultra Slim Kiosk (43")', link: '/products/kiosks/ultra-slim-kiosk' },
      ],
    },
    {
      id: 'large-room',
      tabLabel: 'Large Room',
      heading: 'Large Room Conference Solution',
      description:
        'Enterprise AV integration for 20+ person boardrooms. The 86" IFP paired with the expansion speakerphone system and Video Fence technology ensures the entire room is covered — from the front row to the back wall.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=675&fit=crop',
      imageAlt: 'Large boardroom with 86-inch display',
      recommendedProducts: [
        { name: 'IFP Series A (86")', link: '/products/interactive-flat-panels/series-a' },
      ],
    },
    {
      id: 'open-space',
      tabLabel: 'Open Space',
      heading: 'Open Space Collaboration Solution',
      description:
        'Flexible zones for hot-desking, innovation labs, and open-plan offices. Digital signage kiosks display room availability, company announcements, and wayfinding — keeping your open space organised and on-brand.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop',
      imageAlt: 'Open plan office with digital signage',
      recommendedProducts: [
        { name: 'Ultra Slim Kiosk (43")', link: '/products/kiosks/ultra-slim-kiosk' },
        { name: 'IFP Series B (55")', link: '/products/interactive-flat-panels/series-b' },
      ],
    },
  ],

  customerStories: [
    {
      company: 'Leading IT Services Firm',
      location: 'Hyderabad, India',
      description:
        'Upgraded 40 conference rooms across 3 campuses with IFP Series A. Teams meeting join time dropped from 4 minutes to under 20 seconds.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
    },
    {
      company: 'State Government Office',
      location: 'Vijayawada, India',
      description:
        'GeM procurement of 120 units for district offices. Complete deployment including training and 3-year on-site support.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop',
    },
    {
      company: 'Manufacturing Conglomerate',
      location: 'Pune, India',
      description:
        'Factory floor digital signage across 8 plants using Ultra Slim Kiosks. Real-time production dashboards and safety announcements.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop',
    },
  ],
}

// ─── Education ────────────────────────────────────────────────────────────────

const education: Solution = {
  slug: 'education',
  name: 'Education Solutions',
  tagline: 'Enable digital learning.',
  heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=700&fit=crop',
  heroImageAlt: 'Modern smart classroom with interactive flat panel',
  heroDark: true,

  overviewHeading: 'Solutions for Education',
  overviewDescription:
    'InfinityX Global education solutions cover every scene — from pre-class preparation to in-class teaching and post-class evaluation. Through interactive flat panels and smart displays, we enhance teaching effectiveness and inspire student creativity across K-12, higher education, and professional training institutions.',

  features: [
    {
      title: 'Interactive Teaching',
      description: 'Annotate over any content, split-screen multi-source display, and one-click whiteboard — designed for the modern educator.',
      icon: 'PenTool',
    },
    {
      title: 'Hybrid-Ready',
      description: 'Built-in AI camera with auto-framing and 16-mic array ensures remote students see and hear everything happening in the room.',
      icon: 'Video',
    },
    {
      title: 'Easy to Manage',
      description: 'OTA updates, remote power scheduling, and CAST CMS for digital notice boards across campus — all from one dashboard.',
      icon: 'LayoutDashboard',
    },
  ],

  scenarios: [
    {
      id: 'interactive-classroom',
      tabLabel: 'Interactive Classroom',
      heading: 'Intelligent Interactive Classroom',
      description:
        'Classrooms equipped with an Interactive Flat Panel and Smart Whiteboard enable interactive, seminar, and collaborative teaching to stimulate student creativity. Teachers annotate, drag, split-screen, and launch apps directly on the display.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=675&fit=crop',
      imageAlt: 'Interactive classroom with smart display',
      recommendedProducts: [
        { name: 'IFP Series A (75")', link: '/products/interactive-flat-panels/series-a' },
        { name: 'IFP Series B (65")', link: '/products/interactive-flat-panels/series-b' },
      ],
    },
    {
      id: 'group-collaboration',
      tabLabel: 'Group Collaboration',
      heading: 'Group Collaboration Classroom',
      description:
        'All-in-one hardware and software for project-based learning. Students gather around IFP units in small groups — each panel acts as a shared digital workspace. Content can be pushed to all panels simultaneously for whole-class review.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=675&fit=crop',
      imageAlt: 'Students collaborating around interactive displays',
      recommendedProducts: [
        { name: 'IFP Series B (55")', link: '/products/interactive-flat-panels/series-b' },
        { name: 'IFP Series C (55")', link: '/products/interactive-flat-panels/series-c' },
      ],
    },
    {
      id: 'lecture-capture',
      tabLabel: 'Lecture Capture',
      heading: 'Lecture Capture Classroom',
      description:
        'Classrooms equipped with recording capabilities, an interactive panel, and Smart Blackboard — achieving hybrid teaching and course resource capture. Recorded sessions are saved locally or pushed to your LMS automatically.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop',
      imageAlt: 'Lecture capture system in university classroom',
      recommendedProducts: [
        { name: 'IFP Series A (86")', link: '/products/interactive-flat-panels/series-a' },
      ],
    },
  ],

  customerStories: [
    {
      company: 'Private Engineering College',
      location: 'Hyderabad, India',
      description:
        'Installed IFP Series A in 80 classrooms. Faculty adoption reached 95% within 2 weeks. Student engagement scores improved significantly.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
    },
    {
      company: 'CBSE School Chain',
      location: 'Pan India (12 campuses)',
      description:
        'Standardised on IFP Series B across all campuses. Centralised management via CAST CMS means IT can push updates to all 96 panels from a single dashboard.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    },
    {
      company: 'University Training Centre',
      location: 'Visakhapatnam, India',
      description:
        'Lecture Capture Classroom setup enabled hybrid delivery during exam season — 300 concurrent remote students with zero complaints about audio quality.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    },
  ],
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export const solutions: Solution[] = [enterprise, education]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
