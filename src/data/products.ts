// ─── Master Product Data ─────────────────────────────────────────────────────
// Single source of truth for all categories and products.
// Add/update products here — routes, metadata, and templates read from this file.

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Highlight {
  title: string
  image?: string
  description?: string
}

export interface FeatureCard {
  title: string
  description?: string
  image?: string
}

export interface FeatureGroup {
  /** Anchor id — also used as tab nav target */
  id?: string
  /** Tab label (only shown in tab nav if id is also set) */
  tabLabel?: string
  heading: string
  description?: string
  /** Full-bleed or split image */
  image?: string
  imageAlt?: string
  /** 'full' (default) | 'left' | 'right' */
  imagePosition?: 'full' | 'left' | 'right'
  /** Full-viewport (100vh) image shown between heading text and feature cards/showcase */
  sectionImage?: string
  sectionImageAlt?: string
  /** Section background: 'white' (default) | 'surface' | 'dark' */
  bgColor?: 'white' | 'surface' | 'dark'
  /** Feature cards inside this group */
  cards?: FeatureCard[]
  /**
   * Card rendering layout.
   * 'cards' (default) — image + title + description grid
   * 'showcase' — horizontal tab bar + split text/image panel (MAXHUB style)
   */
  layout?: 'cards' | 'showcase'
}

export interface SpecModel {
  name: string
  specs: Record<string, string>
}

export interface Scenario {
  title: string
  subtitle?: string
  description?: string
  image?: string
}

// ─── Legacy types (kept for backward compat during migration) ─────────────────
/** @deprecated Use FeatureGroup instead */
export interface FeatureSection {
  heading: string
  description: string
  image: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

/** @deprecated Use FeatureGroup cards with Lucide icon names instead */
export interface IconFeature {
  icon: string
  label: string
}

// ─── Product ─────────────────────────────────────────────────────────────────
export interface Product {
  slug: string
  name: string
  description: string
  /** Card image shown on /products/[category] listing */
  image: string
  tagline?: string
  /** Full-width hero image */
  heroImage?: string
  heroImageAlt?: string

  // ── Rich template data ──────────────────────────────────────────
  /** 3-5 key capability cards below the hero */
  highlights?: Highlight[]
  /** Feature sections — each may have a tab label, image, and cards */
  featureGroups?: FeatureGroup[]
  /** Use case / room scenario cards */
  scenarios?: Scenario[]
  /** Single-model spec table */
  specs?: Record<string, string>
  /** Multi-model spec comparison (tabs) */
  specModels?: SpecModel[]

  // ── Legacy ─────────────────────────────────────────────────────
  overviewHeading?: string
  overviewDescription?: string
  featureSections?: FeatureSection[]
  iconFeatures?: IconFeature[]
  useCaseImages?: { image: string; alt: string }[]
}

export interface ProductCategory {
  slug: string
  name: string
  description: string
  /** Card image on /products listing */
  image: string
  imageHover?: string
  imageAlt: string
  /** Available in V1 build (false = placeholder, returns 404 in prod) */
  availableV1: boolean
  products: Product[]
}

// ─── V1 Categories ───────────────────────────────────────────────────────────

const interactiveFlatPanels: ProductCategory = {
  slug: 'interactive-flat-panels',
  name: 'Interactive Flat Panels',
  description:
    'Transform your meeting rooms and classrooms with InfinityX interactive displays — integrating display, whiteboard, and collaboration tools into one powerful solution.',
  image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
  imageHover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  imageAlt: 'Interactive flat panel display in conference room',
  availableV1: true,
  products: [
    {
      slug: 'series-a',
      name: 'InfinityX SmartClass Series A',
      description: 'Premium interactive display for enterprise boardrooms',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
      tagline:
        'Enjoy secure, seamless collaboration and superior video conferencing with our premium all-in-one interactive display.',
      heroImage:
        'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1600&h=900&fit=crop',
      heroImageAlt: 'Series A Interactive Flat Panel in modern conference room',

      highlights: [
        {
          title: 'AI-Powered Triple Camera',
          description: '50MP × 3 with auto-framing and speaker tracking',
          image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop',
        },
        {
          title: '20-Point Multi-Touch',
          description: 'Infrared touch with <2.5 ms response time',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
        {
          title: '4K Display, 90% NTSC',
          description: '3840×2160, 350 nits, zero-parallax tempered glass',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
        },
        {
          title: '16-Mic Array',
          description: 'AI noise cancellation, 0-15 m pick-up, audio fence',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
        },
        {
          title: 'Windows + Android Dual OS',
          description: 'MAXHUB OS 7.0 — seamless Teams, Zoom, Meet',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        // ── Camera ──────────────────────────────────────────────
        {
          id: 'camera',
          tabLabel: 'Camera',
          heading: 'Enhance Your Meeting Experience With Our Innovative AI-Powered Triple Lens System',
          description:
            'See everything, miss nothing. 50 MP cameras with 2× optical and 5× hybrid zoom, combined with AI-powered viewing options, ensure every participant is seen and heard, promoting dynamic and inclusive collaboration.',
          sectionImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'AI-powered triple lens camera system in a modern meeting room',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'Auto Framing',
              description:
                'Automatically adjusts to achieve the best angle based on the number of participants and their location, so it feels like a face-to-face interaction.',
              image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=900&fit=crop',
            },
            {
              title: 'Speaker Tracking',
              description:
                'Speaker-tracking technology locates the sound source in real-time, ensuring the speaker is always the centre of attention. Supports two active speakers with dual focus.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=900&fit=crop',
            },
            {
              title: 'Intelligent Focus',
              description:
                'Enables individual close-ups for multiple participants simultaneously, delivering an immersive in-person experience.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Video Fence',
              description:
                'Precisely control the camera\'s field of view, ensuring AI tracking and focus are only applied within the designated area.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
          ],
        },

        // ── Audio ────────────────────────────────────────────────
        {
          id: 'audio',
          tabLabel: 'Audio',
          heading: 'Hear and Be Heard',
          description:
            'A 16-microphone array with 180° pick-up range and 0–15 m reach ensures every voice in the room is captured — and every remote participant hears you clearly.',
          sectionImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop',
          sectionImageAlt: '16-microphone array capturing crystal-clear audio in a conference room',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'AI Noise Reduction',
              description:
                'ANC filters out background noise automatically — keyboard clicks, HVAC hum, and side conversations disappear so voices come through with clarity.',
              image:
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop',
            },
            {
              title: 'Audio Fence',
              description:
                'Define a virtual boundary that restricts microphone pick-up to only the participants inside the room, eliminating corridor noise.',
              image:
                'https://images.unsplash.com/photo-1497366816548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'AI Spatial Sound',
              description:
                '2.1-channel output (2×10W + 20W subwoofer) with AEC echo cancellation and AGC auto-gain ensures rich, balanced audio for all room sizes.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'Expansion Ready',
              description:
                'Connect optional expansion speakerphones via USB-C for extra-large rooms, ensuring every seat hears clearly without cable clutter.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },

        // ── Display ──────────────────────────────────────────────
        {
          id: 'display',
          tabLabel: 'Display',
          heading: 'Immerse Yourself in Crystal Clear Detail with 4K Display Technology',
          description:
            'With a 4K display four times more powerful than HD, every detail is brought to life with stunning clarity. 90% NTSC colour gamut and Delta E ≤ 1.5 colour accuracy deliver true-to-life visuals.',
          sectionImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&h=1080&fit=crop',
          sectionImageAlt: '4K display showcasing crystal-clear visuals in a bright office environment',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '90% NTSC Colour Gamut',
              description:
                'Wide colour coverage ensures presentations, videos, and design work look exactly as intended.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=900&fit=crop',
            },
            {
              title: 'Non-Glare Screen',
              description:
                '25% haze non-glare technology and zero-parallax 3 mm tempered glass eliminate reflections in any lighting condition.',
              image:
                'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&h=900&fit=crop',
            },
            {
              title: '50-Point Touch',
              description:
                'Infrared recognition with ±0.5 mm accuracy and ≤2.5 ms response — supports palm rejection, sharp erase, and multi-input recognition.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop',
            },
          ],
        },

        // ── Software ─────────────────────────────────────────────
        {
          id: 'software',
          tabLabel: 'Software',
          heading: 'All-In-One Windows-Based Interactive Flat Panel Powered by MAXHUB OS',
          description:
            'The Windows-based InfinityX SmartClass provides seamless compatibility with all major collaboration platforms — Teams, Zoom, Google Meet, and more — right out of the box.',
          sectionImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Teams and collaboration software running seamlessly on the interactive panel',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Instant Meeting Access',
              description:
                'Join Teams, Zoom, or Google Meet in one click. No cables, no adapters — just tap and start.',
              image:
                'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wireless Screen Share',
              description:
                'Share from any device via MAXHUB Share, Miracast, AirPlay, or Chromecast — up to 4 participants simultaneously.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Whiteboard',
              description:
                'One-click whiteboard with Windows Ink, palm rejection, and handwriting recognition. Save and share via QR code instantly.',
              image:
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop',
            },
            {
              title: 'BYOM Ready',
              description:
                'Bring-your-own-meeting: connect your laptop to use its camera and microphone while displaying on the 4K screen.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Huddle Room',
          subtitle: '2-4 People',
          description: 'Compact spaces with face-to-face or hybrid teams.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Small Meeting Room',
          subtitle: '4-8 People',
          description: 'Weekly stand-ups, client calls, and team reviews.',
          image:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
        },
        {
          title: 'Training Room',
          subtitle: 'Up to 20 People',
          description: 'Instructor-led sessions with multi-touch interaction.',
          image:
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: 'IFP-55',
          specs: {
            'Screen Size': '55 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'ADS',
            Brightness: '350 nits',
            'Contrast Ratio': '1200:1',
            'Response Time': '8 ms',
            Glass: 'Zero parallax 3 mm 9H tempered',
            'Colour Gamut': '90% NTSC',
            'Touch Technology': 'Infrared (50 points)',
            'Touch Accuracy': '±0.5 mm',
            'Touch Response': '≤2.5 ms',
            'Camera': '3× 50 MP (Panorama + Telephoto × 2)',
            'Camera Zoom': '2× optical + 5× digital',
            'Microphone': '16-mic array, 180°, 0–15 m',
            'Speaker': '2×10W + 20W subwoofer (2.1 ch)',
            'Operating System': 'MAXHUB OS 7.0 (Windows + Android)',
            'Connectivity': 'HDMI ×2, USB-C, USB 3.0 ×2, USB 2.0, RJ45, RS232',
            'Wireless': 'Wi-Fi 6 (802.11ax), Bluetooth 5.2',
            'IP Rating': 'IP5X',
            'Certification': 'IEC 62368-1, Energy Star',
            Warranty: '3 years',
          },
        },
        {
          name: 'IFP-65',
          specs: {
            'Screen Size': '65 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'VA',
            Brightness: '350 nits',
            'Contrast Ratio': '5000:1',
            'Response Time': '6.5 ms',
            Glass: 'Zero parallax 3 mm 9H tempered',
            'Colour Gamut': '90% NTSC',
            'Touch Technology': 'Infrared (50 points)',
            'Touch Accuracy': '±0.5 mm',
            'Touch Response': '≤2.5 ms',
            'Camera': '3× 50 MP (Panorama + Telephoto × 2)',
            'Camera Zoom': '2× optical + 5× digital',
            'Microphone': '16-mic array, 180°, 0–15 m',
            'Speaker': '2×10W + 20W subwoofer (2.1 ch)',
            'Operating System': 'MAXHUB OS 7.0 (Windows + Android)',
            'Connectivity': 'HDMI ×2, USB-C, USB 3.0 ×2, USB 2.0, RJ45, RS232',
            'Wireless': 'Wi-Fi 6 (802.11ax), Bluetooth 5.2',
            'IP Rating': 'IP5X',
            'Certification': 'IEC 62368-1, Energy Star',
            Warranty: '3 years',
          },
        },
        {
          name: 'IFP-75',
          specs: {
            'Screen Size': '75 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'VA',
            Brightness: '350 nits',
            'Contrast Ratio': '5000:1',
            'Response Time': '6.5 ms',
            Glass: 'Zero parallax 3 mm 9H tempered',
            'Colour Gamut': '90% NTSC',
            'Touch Technology': 'Infrared (50 points)',
            'Touch Accuracy': '±0.5 mm',
            'Touch Response': '≤2.5 ms',
            'Camera': '3× 50 MP (Panorama + Telephoto × 2)',
            'Camera Zoom': '2× optical + 5× digital',
            'Microphone': '16-mic array, 180°, 0–15 m',
            'Speaker': '2×10W + 20W subwoofer (2.1 ch)',
            'Operating System': 'MAXHUB OS 7.0 (Windows + Android)',
            'Connectivity': 'HDMI ×2, USB-C, USB 3.0 ×2, USB 2.0, RJ45, RS232',
            'Wireless': 'Wi-Fi 6 (802.11ax), Bluetooth 5.2',
            'IP Rating': 'IP5X',
            'Certification': 'IEC 62368-1, Energy Star',
            Warranty: '3 years',
          },
        },
        {
          name: 'IFP-86',
          specs: {
            'Screen Size': '86 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'IPS',
            Brightness: '350 nits',
            'Contrast Ratio': '1200:1',
            'Response Time': '8 ms',
            Glass: 'Zero parallax 3 mm 9H tempered',
            'Colour Gamut': '90% NTSC',
            'Touch Technology': 'Infrared (50 points)',
            'Touch Accuracy': '±0.5 mm',
            'Touch Response': '≤2.5 ms',
            'Camera': '3× 50 MP (Panorama + Telephoto × 2)',
            'Camera Zoom': '2× optical + 5× digital',
            'Microphone': '16-mic array, 180°, 0–15 m',
            'Speaker': '2×10W + 20W subwoofer (2.1 ch)',
            'Operating System': 'MAXHUB OS 7.0 (Windows + Android)',
            'Connectivity': 'HDMI ×2, USB-C, USB 3.0 ×2, USB 2.0, RJ45, RS232',
            'Wireless': 'Wi-Fi 6 (802.11ax), Bluetooth 5.2',
            'IP Rating': 'IP5X',
            'Certification': 'IEC 62368-1, Energy Star',
            Warranty: '3 years',
          },
        },
      ],
    },

    // ── Series B — Mid-range · Education + SMB ───────────────
    {
      slug: 'series-b',
      name: 'InfinityX SmartClass Series B',
      description: 'Versatile 4K interactive display for education and small meeting rooms',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
      tagline: 'Bring lessons and meetings to life with 4K clarity, responsive touch, and built-in collaboration tools.',
      heroImage:
        'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1600&h=900&fit=crop',
      heroImageAlt: 'InfinityX SmartClass Series B in classroom',

      highlights: [
        {
          title: '4K Ultra HD Display',
          description: '3840×2160 resolution with vivid colour accuracy',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
        },
        {
          title: '20-Point IR Touch',
          description: 'Smooth multi-touch for interactive lessons and collaboration',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
        {
          title: 'Wireless Screen Share',
          description: 'Mirror any device wirelessly in seconds — no cables',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
        {
          title: 'Built-in Android 11',
          description: 'Full-featured OS for apps, whiteboard, and content',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: '2-Year Warranty',
          description: 'Backed by InfinityX comprehensive support',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        // ── Display ──────────────────────────────────────────────
        {
          id: 'display',
          tabLabel: 'Display',
          heading: '4K Clarity Built for Every Learning Space',
          description:
            'A 3840×2160 panel with 350-nit brightness and 20-point infrared touch ensures every student sees the content clearly — and every hand on the screen is tracked precisely.',
          image:
            'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1400&h=600&fit=crop',
          imageAlt: '4K interactive display in classroom',
          bgColor: 'white',
          cards: [
            {
              title: '4K UHD Resolution',
              description:
                '3840×2160 delivers four times more detail than Full HD — maps, diagrams, and fine text remain sharp even on the largest screens.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
            },
            {
              title: 'Non-Glare IPS Panel',
              description:
                'Wide 178° viewing angle and anti-glare treatment ensure every student in the room sees consistent, reflection-free content.',
              image:
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
            },
            {
              title: '20-Point IR Touch',
              description:
                'Infrared multi-touch supports up to 20 simultaneous touch points with ±1 mm accuracy — ideal for group annotations and interactive exercises.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            },
            {
              title: '350 nits Brightness',
              description:
                'Comfortable brightness for a range of room lighting conditions — from blinds-open classrooms to dimmed conference rooms.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop',
            },
          ],
        },

        // ── Connectivity ─────────────────────────────────────────
        {
          id: 'connectivity',
          tabLabel: 'Connectivity',
          heading: 'Connect Any Device in Seconds',
          description:
            'HDMI 2.0, USB-C, USB 3.0, and built-in Wi-Fi 5 let teachers and students connect laptops, tablets, or phones in seconds — wired or wireless.',
          bgColor: 'surface',
          cards: [
            {
              title: 'HDMI 2.0 × 2',
              description:
                'Two HDMI inputs support simultaneous connection of a teaching PC and a student laptop for fast source switching.',
            },
            {
              title: 'USB-C One-Cable',
              description:
                'A single USB-C cable delivers video, audio, and 65W charging from a laptop — reducing desk clutter and setup time.',
            },
            {
              title: 'Wireless Screen Share',
              description:
                'Mirror any phone, tablet, or laptop wirelessly via Miracast or AirPlay — no dongle, no driver, no delay.',
            },
            {
              title: 'BYOM Ready',
              description:
                'Bring your own meeting: connect your laptop and use the Series B screen, speakers, and touch while your meeting app runs on your device.',
            },
          ],
        },

        // ── Software ─────────────────────────────────────────────
        {
          id: 'software',
          tabLabel: 'Software',
          heading: 'Android 11 Built-in. Whiteboard Ready.',
          description:
            'Android 11 ships pre-installed with a one-tap whiteboard, built-in annotation over any source, and compatibility with all major collaboration apps.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop',
          imageAlt: 'Whiteboard and collaboration software on interactive panel',
          imagePosition: 'right',
          bgColor: 'white',
          cards: [
            {
              title: 'One-Tap Whiteboard',
              description:
                'Launch an infinite digital whiteboard in one tap. Write, draw, insert images, and save or share with students via QR code.',
            },
            {
              title: 'Screen Annotation',
              description:
                'Annotate over any content — presentations, videos, or web pages — without switching apps. Annotations can be saved as images.',
            },
            {
              title: 'App Compatibility',
              description:
                'Run Google Classroom, Microsoft Teams, Zoom, or any Android app directly on the display without an external PC.',
            },
            {
              title: 'USB Content',
              description:
                'Plug in a USB drive to display PDFs, images, Word, Excel, or PowerPoint files instantly — no network required.',
            },
          ],
        },

        // ── Reliability ──────────────────────────────────────────
        {
          id: 'reliability',
          tabLabel: 'Reliability',
          heading: 'Built for Daily Classroom Use.',
          description:
            'Designed for the demands of daily teaching — a fanless build that runs cool and quiet, a tempered glass screen that resists scratches, and a 2-year warranty for peace of mind.',
          bgColor: 'dark',
          cards: [
            {
              title: '2-Year Warranty',
              description:
                'Comprehensive coverage for two years — parts, labour, and on-site support. Schools can plan deployments with confidence.',
            },
            {
              title: '9H Tempered Glass',
              description:
                'The touch surface is protected by hardened 9H tempered glass — resistant to daily marker cleaning, accidental knocks, and fingernail scratches.',
            },
            {
              title: 'Fanless Design',
              description:
                'Passively cooled — no fan noise to distract during lessons or presentations, and no filter maintenance required.',
            },
            {
              title: 'Energy-Saving Mode',
              description:
                'Auto standby and scheduled power-off reduce electricity costs. Complies with energy efficiency standards for institutional procurement.',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Classroom',
          subtitle: 'K-12 & Higher Education',
          description:
            'Interactive lessons, group annotation, and seamless video playback for engaged students from front row to back.',
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        },
        {
          title: 'Training Room',
          subtitle: 'Corporate & Vocational',
          description:
            'Instructor-led sessions with hands-on interaction — every trainee can annotate, contribute, and participate from the screen.',
          image:
            'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop',
        },
        {
          title: 'Small Meeting Room',
          subtitle: '4–8 People',
          description:
            'Weekly stand-ups, client calls, and team reviews — wireless sharing from any device and built-in video conferencing.',
          image:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: 'IFP-55',
          specs: {
            'Screen Size': '55 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'IPS',
            Brightness: '350 nits',
            'Contrast Ratio': '1200:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch Technology': 'Infrared multi-touch (20 points)',
            'Touch Accuracy': '±1 mm',
            Glass: '9H anti-scratch tempered glass',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A73, 2.0 GHz',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'HDMI 2.0 ×2, USB-C (65W PD), USB 3.0 ×3, RJ45',
            Wireless: 'Wi-Fi 5 (802.11ac), Bluetooth 4.2',
            Audio: 'Built-in 10W ×2 speakers',
            Power: '100–240V AC',
            Warranty: '2 years comprehensive',
          },
        },
        {
          name: 'IFP-65',
          specs: {
            'Screen Size': '65 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'IPS',
            Brightness: '350 nits',
            'Contrast Ratio': '1200:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch Technology': 'Infrared multi-touch (20 points)',
            'Touch Accuracy': '±1 mm',
            Glass: '9H anti-scratch tempered glass',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A73, 2.0 GHz',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'HDMI 2.0 ×2, USB-C (65W PD), USB 3.0 ×3, RJ45',
            Wireless: 'Wi-Fi 5 (802.11ac), Bluetooth 4.2',
            Audio: 'Built-in 10W ×2 speakers',
            Power: '100–240V AC',
            Warranty: '2 years comprehensive',
          },
        },
        {
          name: 'IFP-75',
          specs: {
            'Screen Size': '75 inches',
            Resolution: '3840 × 2160 (4K UHD)',
            'Panel Type': 'IPS',
            Brightness: '350 nits',
            'Contrast Ratio': '1200:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch Technology': 'Infrared multi-touch (20 points)',
            'Touch Accuracy': '±1 mm',
            Glass: '9H anti-scratch tempered glass',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A73, 2.0 GHz',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'HDMI 2.0 ×2, USB-C (65W PD), USB 3.0 ×3, RJ45',
            Wireless: 'Wi-Fi 5 (802.11ac), Bluetooth 4.2',
            Audio: 'Built-in 15W ×2 speakers',
            Power: '100–240V AC',
            Warranty: '2 years comprehensive',
          },
        },
      ],
    },

    // ── Series C — Entry · Budget Classroom ──────────────────
    {
      slug: 'series-c',
      name: 'InfinityX SmartClass Series C',
      description: 'Affordable Full HD interactive display for classrooms and training centres',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      tagline: 'Everything a classroom needs — plug in, power on, start teaching.',
      heroImage:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
      heroImageAlt: 'InfinityX SmartClass Series C in school classroom',

      highlights: [
        {
          title: 'Full HD 1080p Display',
          description: 'Sharp, clear visuals for every seat in the room',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
        },
        {
          title: '10-Point IR Touch',
          description: 'Multi-touch interaction for hands-on learning',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
        {
          title: 'Built-in Android 11',
          description: 'Whiteboard, apps, and content — all built in',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: 'HDMI × 2 Inputs',
          description: 'Connect a PC, laptop, or set-top box instantly',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
        {
          title: '1-Year Warranty',
          description: 'Comprehensive InfinityX support included',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        // ── Display ──────────────────────────────────────────────
        {
          id: 'display',
          tabLabel: 'Display',
          heading: 'Full HD Display for Every Classroom',
          description:
            '1920×1080 Full HD with 10-point infrared touch — clear enough for the last row, responsive enough for the youngest learners.',
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=600&fit=crop',
          imageAlt: 'Full HD interactive display in school classroom',
          bgColor: 'white',
          cards: [
            {
              title: 'Full HD 1080p',
              description:
                '1920×1080 resolution delivers sharp text, diagrams, and video — clearly visible from every seat without eye strain.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
            },
            {
              title: 'Anti-Glare Surface',
              description:
                'Treated panel reduces reflections from windows and overhead lights — students stay focused on the content, not the glare.',
              image:
                'https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&h=400&fit=crop',
            },
            {
              title: '10-Point IR Touch',
              description:
                'Infrared multi-touch supports 10 simultaneous inputs — group writing, collaborative drawing, and interactive quizzes.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            },
            {
              title: '300 nits Brightness',
              description:
                'Optimised for typical classroom lighting — bright enough to be visible with blinds partially open.',
              image:
                'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
            },
          ],
        },

        // ── Software ─────────────────────────────────────────────
        {
          id: 'software',
          tabLabel: 'Software',
          heading: 'Simple. Reliable. Ready to Teach.',
          description:
            'Android 11 is pre-loaded with a built-in whiteboard, screen annotation, and support for USB content — no PC needed for most lessons.',
          bgColor: 'surface',
          cards: [
            {
              title: 'Built-in Whiteboard',
              description:
                'A full-featured digital whiteboard is one tap away — write, draw, insert images, and save lessons as files or QR codes.',
            },
            {
              title: 'Screen Annotation',
              description:
                'Draw over presentations, web pages, or video with the stylus or finger. Save annotations without interrupting the lesson flow.',
            },
            {
              title: 'USB Content Playback',
              description:
                'Display PDFs, Office files, images, and videos directly from a USB drive — no internet, no login, no friction.',
            },
            {
              title: 'HDMI Source Switching',
              description:
                'Switch between the Android OS and an external PC or laptop via HDMI in one tap — seamless transitions during class.',
            },
          ],
        },

        // ── Value ────────────────────────────────────────────────
        {
          id: 'value',
          tabLabel: 'Value',
          heading: 'Maximum Value. Minimum Complexity.',
          description:
            'The Series C is built for institutions that need reliable interactive displays at scale — easy to deploy, easy to maintain, and covered by InfinityX warranty support.',
          bgColor: 'dark',
          cards: [
            {
              title: 'Plug-and-Play Setup',
              description:
                'Out of the box in minutes — mount, power on, and connect. No specialist installer or IT configuration required for basic classroom use.',
            },
            {
              title: 'Low Maintenance',
              description:
                'Fanless passive cooling with no moving parts and no consumables — reducing ongoing maintenance costs for schools and institutions.',
            },
            {
              title: 'Energy Efficient',
              description:
                'Auto standby and scheduled shutdown reduce power consumption — important for institutions managing large display deployments.',
            },
            {
              title: '1-Year Warranty',
              description:
                'Backed by InfinityX comprehensive support — parts and labour covered, with on-site service available across India.',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Classroom',
          subtitle: 'Primary & Secondary Schools',
          description:
            'Daily lessons, interactive exercises, and media playback for engaged learning from pre-school to secondary level.',
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        },
        {
          title: 'Computer Lab',
          subtitle: 'Training & IT Rooms',
          description:
            'Step-by-step software demonstrations and coding lessons displayed on a shared screen for the whole class to follow.',
          image:
            'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Library & Study Room',
          subtitle: 'Information & Resource Centres',
          description:
            'Display schedules, announcements, and interactive resources in a shared space — without a dedicated PC.',
          image:
            'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: 'IFP-55',
          specs: {
            'Screen Size': '55 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS',
            Brightness: '300 nits',
            'Contrast Ratio': '1000:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch Technology': 'Infrared multi-touch (10 points)',
            'Touch Accuracy': '±2 mm',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A55, 1.6 GHz',
            Memory: '2 GB RAM / 16 GB eMMC',
            Connectivity: 'HDMI 1.4 ×2, USB 2.0 ×3',
            Audio: 'Built-in 8W ×2 speakers',
            Power: '100–240V AC',
            Warranty: '1 year comprehensive',
          },
        },
        {
          name: 'IFP-65',
          specs: {
            'Screen Size': '65 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS',
            Brightness: '300 nits',
            'Contrast Ratio': '1000:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch Technology': 'Infrared multi-touch (10 points)',
            'Touch Accuracy': '±2 mm',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A55, 1.6 GHz',
            Memory: '2 GB RAM / 16 GB eMMC',
            Connectivity: 'HDMI 1.4 ×2, USB 2.0 ×3',
            Audio: 'Built-in 8W ×2 speakers',
            Power: '100–240V AC',
            Warranty: '1 year comprehensive',
          },
        },
      ],
    },
  ],
}

const kiosks: ProductCategory = {
  slug: 'kiosks',
  name: 'Kiosks & Signage',
  description:
    'Engage customers and visitors with interactive kiosk solutions for retail, hospitality, healthcare, and public spaces. Available in touch and non-touch variants.',
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  imageHover: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
  imageAlt: 'Digital kiosk and signage display',
  availableV1: true,
  products: [
    {
      slug: 'ultra-slim-kiosk',
      name: 'Ultra Slim Kiosk',
      description: 'Touch and non-touch variants in 32", 43", 55", 65" sizes for retail, hospitality, healthcare, and public spaces.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tagline: 'Your perfect solution for captivating digital signage and engaging customer interactions.',
      heroImage:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop',
      heroImageAlt: 'Ultra Slim Kiosk in retail environment',

      highlights: [
        {
          title: '500 nits High Brightness',
          description: 'Vivid visuals even in bright ambient environments',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
        },
        {
          title: '10-Point Capacitive Touch',
          description: 'Smooth, responsive interaction for every customer',
          image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=300&fit=crop',
        },
        {
          title: '16/7 Always-On Operation',
          description: 'Commercial-grade reliability for high-traffic spaces',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'Android 11 Built-in',
          description: 'Flexible content management and app deployment',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: 'Portrait & Landscape Ready',
          description: 'Dual-orientation design for any installation',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        // ── Display ──────────────────────────────────────────────
        {
          id: 'display',
          tabLabel: 'Display',
          heading: 'Professional-Grade Display, Calibrated for Public Spaces',
          description:
            'Vivid 500-nit IPS panels deliver accurate, consistent visuals from every angle — indoors or in bright-ambient environments. Built for content that commands attention.',
          image:
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1400&h=600&fit=crop',
          imageAlt: 'High-brightness kiosk display panel',
          bgColor: 'white',
          cards: [
            {
              title: 'Anti-Glare Glass',
              description:
                'Treated front panel reduces reflections in brightly lit lobbies, retail floors, and outdoor-facing windows.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
            },
            {
              title: 'True IPS Colour',
              description:
                'Wide 178° viewing angle and accurate sRGB reproduction ensure your content looks the same from every direction.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            },
            {
              title: '500 nits Brightness',
              description:
                'Commercial-grade brightness that cuts through ambient light in busy retail and hospitality environments.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            },
            {
              title: 'Full HD Resolution',
              description:
                '1920×1080 native resolution renders crisp text, sharp product images, and smooth video at any size.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
            },
          ],
        },

        // ── Touch ────────────────────────────────────────────────
        {
          id: 'touch',
          tabLabel: 'Touch',
          heading: 'Responsive Touch. Every Tap, Every Time.',
          description:
            '10-point projected capacitive touch with less than 5 ms response time delivers the smooth, intuitive interaction your customers expect. Works reliably with gloves and a stylus.',
          image:
            'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1400&h=600&fit=crop',
          imageAlt: 'Capacitive touch interaction on kiosk screen',
          bgColor: 'surface',
          cards: [
            {
              title: '10-Point Multi-Touch',
              description:
                'Full gesture support — pinch, swipe, zoom — for engaging, app-like customer experiences.',
            },
            {
              title: '<5 ms Response Time',
              description:
                'Near-zero latency ensures every interaction feels immediate and natural, reducing customer frustration at the screen.',
            },
            {
              title: 'Glove & Stylus Support',
              description:
                'Works reliably with gloved hands in healthcare and food-service environments, or with a capacitive stylus.',
            },
            {
              title: 'Durable Touch Surface',
              description:
                'Hardened 4H anti-scratch surface rated for millions of touch cycles in high-traffic public deployments.',
            },
          ],
        },

        // ── Reliability ──────────────────────────────────────────
        {
          id: 'reliability',
          tabLabel: 'Reliability',
          heading: 'Enduring Performance. Engineered to Keep Running.',
          description:
            'High-traffic public spaces demand hardware that never lets you down. The Ultra Slim Kiosk is rated for 16/7 continuous operation with IP43-rated front protection and intelligent thermal management.',
          bgColor: 'dark',
          cards: [
            {
              title: '16/7 Continuous Operation',
              description:
                'Rated for extended commercial operation — ideal for retail, transit, and hospitality environments that run from opening to close.',
            },
            {
              title: 'IP43 Front Protection',
              description:
                'Front panel sealed against dust ingress and splashing water — built for busy lobbies, food courts, and public concourses.',
            },
            {
              title: 'Intelligent Thermal Control',
              description:
                'Active thermal management prevents throttling and overheating, maintaining consistent brightness and performance throughout the day.',
            },
            {
              title: 'Auto-Recovery Boot',
              description:
                'Watchdog timer and auto-reboot system ensure the kiosk recovers automatically from unexpected software hangs — no on-site intervention needed.',
            },
          ],
        },

        // ── Software ─────────────────────────────────────────────
        {
          id: 'software',
          tabLabel: 'Software',
          heading: 'Android 11. Deploy Content. Manage Remotely.',
          description:
            'Powered by Android 11, the Ultra Slim Kiosk supports custom apps, content scheduling, and remote device management — whether you operate one screen or a nationwide network.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop',
          imageAlt: 'Content management dashboard for kiosk',
          imagePosition: 'right',
          bgColor: 'surface',
          cards: [
            {
              title: 'CAST CMS Compatible',
              description:
                'Pair with InfinityX CAST CMS for multi-zone content scheduling, remote management, and real-time updates across your display network.',
            },
            {
              title: 'Custom App Support',
              description:
                'Sideload proprietary apps or deploy from the Play Store. Kiosk lockdown mode restricts end-users to your approved application only.',
            },
            {
              title: 'Remote Device Management',
              description:
                'Monitor uptime, push content updates, reboot remotely, and receive alerts — all from a centralised web dashboard.',
            },
            {
              title: 'Scheduled Content',
              description:
                'Set dayparting schedules to display different content at different times — morning menus, afternoon promotions, evening entertainment.',
            },
          ],
        },

        // ── Form Factor ──────────────────────────────────────────
        {
          id: 'form-factor',
          tabLabel: 'Form Factor',
          heading: 'Slim Profile. Every Placement. Zero Compromise.',
          description:
            'The ultra-slim design and VESA-compatible mounting make the Ultra Slim Kiosk at home in any installation — wall-mounted in a lobby, standing in a retail aisle, or built into a custom fixture.',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop',
          imageAlt: 'Ultra slim kiosk in various mounting configurations',
          bgColor: 'white',
          cards: [
            {
              title: 'Wall Mount',
              description:
                'Standard VESA pattern enables direct wall mounting in corridors, retail walls, and waiting-area installations.',
            },
            {
              title: 'Floor Stand',
              description:
                'Optional floor stand positions the screen at optimal eye-level height — ideal for freestanding retail and wayfinding deployments.',
            },
            {
              title: 'Portrait & Landscape',
              description:
                'Rotate between portrait and landscape orientation to match your content layout and physical installation constraints.',
            },
            {
              title: 'Custom Integration',
              description:
                'Panel-only configuration available for embedding into custom kiosk enclosures, countertop builds, and furniture installations.',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Retail',
          subtitle: 'Stores & Shopping Malls',
          description:
            'Product showcases, promotional content, interactive catalogues, and wayfinding in high-traffic retail environments.',
          image:
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Hospitality',
          subtitle: 'Hotels & Restaurants',
          description:
            'Self-check-in kiosks, digital menus, concierge information, and event displays for seamless guest experiences.',
          image:
            'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
        },
        {
          title: 'Healthcare',
          subtitle: 'Hospitals & Clinics',
          description:
            'Queue management, patient wayfinding, appointment check-in, and health information displays.',
          image:
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
        },
        {
          title: 'Corporate',
          subtitle: 'Offices & Lobbies',
          description:
            'Visitor registration, room booking displays, internal communications, and brand showcases at reception.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Education',
          subtitle: 'Campuses & Schools',
          description:
            'Campus maps, event notices, timetable displays, and interactive notice boards for students and staff.',
          image:
            'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Transportation',
          subtitle: 'Airports & Stations',
          description:
            'Flight and transit schedules, ticketing, wayfinding, and emergency broadcast displays.',
          image:
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: 'USK-32"',
          specs: {
            'Screen Size': '32 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '500 nits',
            'Contrast Ratio': '1000:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Touch Response': '<5 ms',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A55, 1.8 GHz',
            Memory: '2 GB RAM / 16 GB eMMC',
            Connectivity: 'HDMI 1.4, USB 2.0 ×2, RJ45',
            WiFi: '802.11 b/g/n (2.4 GHz)',
            'IP Rating': 'IP43 (front panel)',
            Power: '12V DC, 35W max',
            Orientation: 'Portrait / Landscape',
            Mounting: 'VESA 100×100 mm',
            Dimensions: '732 × 435 × 38 mm',
            Weight: '5.2 kg (panel only)',
            Warranty: '1 year comprehensive',
          },
        },
        {
          name: 'USK-43"',
          specs: {
            'Screen Size': '43 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '500 nits',
            'Contrast Ratio': '1000:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Touch Response': '<5 ms',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A55, 1.8 GHz',
            Memory: '2 GB RAM / 16 GB eMMC',
            Connectivity: 'HDMI 1.4, USB 2.0 ×2, RJ45',
            WiFi: '802.11 b/g/n (2.4 GHz)',
            'IP Rating': 'IP43 (front panel)',
            Power: '12V DC, 55W max',
            Orientation: 'Portrait / Landscape',
            Mounting: 'VESA 200×200 mm',
            Dimensions: '977 × 566 × 38 mm',
            Weight: '8.4 kg (panel only)',
            Warranty: '1 year comprehensive',
          },
        },
        {
          name: 'USK-55"',
          specs: {
            'Screen Size': '55 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '500 nits',
            'Contrast Ratio': '1000:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Touch Response': '<5 ms',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A55, 1.8 GHz',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'HDMI 1.4, USB 2.0 ×3, RJ45',
            WiFi: '802.11 b/g/n/ac (2.4 / 5 GHz)',
            'IP Rating': 'IP43 (front panel)',
            Power: '12V DC, 80W max',
            Orientation: 'Portrait / Landscape',
            Mounting: 'VESA 400×400 mm',
            Dimensions: '1246 × 713 × 38 mm',
            Weight: '13.5 kg (panel only)',
            Warranty: '1 year comprehensive',
          },
        },
        {
          name: 'USK-65"',
          specs: {
            'Screen Size': '65 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '500 nits',
            'Contrast Ratio': '1000:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Touch Response': '<5 ms',
            'Operating System': 'Android 11',
            Processor: 'Quad-core ARM Cortex-A55, 1.8 GHz',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'HDMI 1.4, USB 2.0 ×3, RJ45',
            WiFi: '802.11 b/g/n/ac (2.4 / 5 GHz)',
            'IP Rating': 'IP43 (front panel)',
            Power: '12V DC, 100W max',
            Orientation: 'Portrait / Landscape',
            Mounting: 'VESA 400×400 mm',
            Dimensions: '1467 × 843 × 40 mm',
            Weight: '18.2 kg (panel only)',
            Warranty: '1 year comprehensive',
          },
        },
      ],
    },
  ],
}

const cctv: ProductCategory = {
  slug: 'cctv',
  name: 'CCTV & Security',
  description:
    'Comprehensive surveillance systems for enterprise, retail, and residential applications — 24/7 monitoring, remote access, and intelligent analytics.',
  image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
  imageHover: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
  imageAlt: 'CCTV security camera system',
  availableV1: true,
  products: [
    // ── Product 1 — IP Camera System ─────────────────────────
    {
      slug: 'product-1',
      name: 'IP Camera System',
      description: 'HD network cameras with night vision, weatherproof housing, and remote monitoring for commercial and enterprise deployments.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      tagline: 'See everything. Miss nothing. Protect what matters.',
      heroImage:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=900&fit=crop',
      heroImageAlt: 'IP security camera mounted outdoors',

      highlights: [
        {
          title: 'Full HD Recording',
          description: 'Crisp 2MP/4MP footage for reliable evidence and monitoring',
          image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop',
        },
        {
          title: 'IR Night Vision',
          description: 'Clear footage in total darkness up to 30 m',
          image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop',
        },
        {
          title: 'Remote Live View',
          description: 'Monitor from any device, anywhere in the world',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: 'Weatherproof Housing',
          description: 'IP66-rated for indoor and outdoor installation',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        // ── Image Quality ────────────────────────────────────────
        {
          id: 'image-quality',
          tabLabel: 'Image Quality',
          heading: 'Crystal-Clear HD Footage, Day and Night',
          description:
            'Full HD 1080p and 4MP sensors with wide dynamic range capture clear, usable footage in any lighting condition — from bright sunlit entrances to pitch-dark warehouses.',
          image:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&h=600&fit=crop',
          imageAlt: 'HD IP security camera capturing clear footage',
          bgColor: 'white',
          cards: [
            {
              title: '2MP / 4MP Resolution',
              description:
                'Choose Full HD (1080p) or 4MP super HD — enough detail to identify faces, licence plates, and incidents clearly.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
            },
            {
              title: 'IR Night Vision',
              description:
                'Infrared illuminators provide clear black-and-white footage in complete darkness up to 30 m — no separate lighting required.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
            },
            {
              title: 'Wide Dynamic Range',
              description:
                'WDR technology balances bright and dark areas in the same frame — ideal for entrances with a bright exterior and dark interior.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
            },
            {
              title: 'Smart Motion Detection',
              description:
                'AI-based motion detection distinguishes people and vehicles from background movement — reducing false alarms significantly.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
            },
          ],
        },

        // ── Remote Access ────────────────────────────────────────
        {
          id: 'remote-access',
          tabLabel: 'Remote Access',
          heading: 'Monitor Anywhere, Any Time',
          description:
            'Live view, playback, and alerts accessible from any smartphone, tablet, or computer — giving you complete visibility of your site without being on-site.',
          bgColor: 'surface',
          cards: [
            {
              title: 'Mobile App',
              description:
                'View live feeds, play back recordings, and receive instant alerts on iOS or Android — your site in your pocket.',
            },
            {
              title: 'Multi-Camera Live Wall',
              description:
                'View all cameras simultaneously on a single screen — ideal for security desks, control rooms, and retail back-offices.',
            },
            {
              title: 'Instant Alerts',
              description:
                'Push notifications for motion detection, tamper alerts, and camera offline events — respond immediately to incidents.',
            },
            {
              title: 'Cloud Backup',
              description:
                'Optional cloud recording ensures footage is preserved even if local storage is tampered with or damaged.',
            },
          ],
        },

        // ── Installation ─────────────────────────────────────────
        {
          id: 'installation',
          tabLabel: 'Installation',
          heading: 'Simple Installation. Scalable System.',
          description:
            'PoE (Power over Ethernet) eliminates separate power runs. VESA and pole mounts cover every location — from ceiling-mounted domes to wall-mounted bullets and perimeter poles.',
          bgColor: 'dark',
          cards: [
            {
              title: 'PoE Support',
              description:
                'A single Ethernet cable carries both data and power — eliminating separate power cabling and reducing installation cost.',
            },
            {
              title: 'IP66 Weatherproof',
              description:
                'Sealed housing rated IP66 for complete dust protection and resistance to heavy rain — suitable for all outdoor locations.',
            },
            {
              title: 'Flexible Mounting',
              description:
                'Ceiling dome, wall bullet, and pole mount variants with adjustable viewing angles for any installation point.',
            },
            {
              title: 'Expandable Network',
              description:
                'Add cameras to the same NVR as your site grows — no need to replace the recording system when expanding coverage.',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Retail',
          subtitle: 'Stores & Supermarkets',
          description:
            'Monitor entrances, aisles, and cash points. Deter shoplifting and resolve disputes with clear HD evidence.',
          image:
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Office',
          subtitle: 'Corporate Buildings',
          description:
            'Secure lobbies, parking areas, server rooms, and perimeters with a scalable IP camera network.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Warehouse',
          subtitle: 'Logistics & Storage',
          description:
            'Wide-area coverage for large indoor spaces with night vision and motion-triggered alerts for after-hours activity.',
          image:
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        Resolution: '2MP (1080p) / 4MP — contact for model details',
        'Night Vision': 'IR up to 30 m',
        'Dynamic Range': 'Wide Dynamic Range (WDR)',
        'Motion Detection': 'AI-based person & vehicle detection',
        'Weather Rating': 'IP66 (outdoor models)',
        Power: 'PoE (IEEE 802.3af) / 12V DC',
        Compression: 'H.265 / H.264',
        'Storage Interface': 'NVR / NAS / Cloud',
        'Remote Access': 'iOS & Android app, web browser',
        Warranty: '1 year — full specs confirmed after client consultation',
      },
    },

    // ── Product 2 — NVR Recording System ─────────────────────
    {
      slug: 'product-2',
      name: 'NVR Recording System',
      description: 'Multi-channel network video recorder with H.265 compression, HDD storage, and centralised management for complete site surveillance.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
      tagline: 'Centralised, intelligent recording for every camera on your site.',
      heroImage:
        'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1600&h=900&fit=crop',
      heroImageAlt: 'Network video recorder unit for CCTV system',

      highlights: [
        {
          title: '8 / 16-Channel Recording',
          description: 'Scale from small sites to large enterprise deployments',
          image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop',
        },
        {
          title: '24/7 Continuous Recording',
          description: 'Always-on recording with scheduled and motion modes',
          image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop',
        },
        {
          title: 'Smart Playback',
          description: 'Find incidents in minutes with intelligent search',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: 'Up to 8TB Storage',
          description: 'Expandable HDD capacity for long-term retention',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        // ── Recording ────────────────────────────────────────────
        {
          id: 'recording',
          tabLabel: 'Recording',
          heading: '24/7 Multi-Channel Recording. Always On.',
          description:
            'Record up to 16 IP cameras simultaneously in H.265 — continuously, on schedule, or triggered by motion. Footage is stored locally with automatic loop recording when storage is full.',
          image:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1400&h=600&fit=crop',
          imageAlt: 'NVR recording system with multiple camera feeds',
          bgColor: 'white',
          cards: [
            {
              title: '8 / 16 Channels',
              description:
                'Available in 8-channel and 16-channel models — cover a small office or a large warehouse from a single NVR unit.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
            },
            {
              title: 'H.265 Compression',
              description:
                'H.265 encoding reduces file size by up to 50% compared to H.264 — storing more footage on the same HDD without sacrificing quality.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
            },
            {
              title: 'Continuous & Motion Recording',
              description:
                'Choose 24/7 continuous, scheduled, or motion-triggered recording — or combine modes to balance storage efficiency with coverage.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
            },
            {
              title: 'Auto Loop Recording',
              description:
                'When storage is full, the NVR automatically overwrites the oldest footage — ensuring continuous recording with no manual intervention.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
            },
          ],
        },

        // ── Management ───────────────────────────────────────────
        {
          id: 'management',
          tabLabel: 'Management',
          heading: 'Centralised Management for Your Entire Site',
          description:
            'A single interface for live monitoring, playback, export, and user access control — accessible from the NVR screen, a PC, or a smartphone.',
          bgColor: 'surface',
          cards: [
            {
              title: 'Multi-Camera Live Wall',
              description:
                'View all channels simultaneously in a split-screen layout — 4, 8, or 16 feeds at once on any connected monitor.',
            },
            {
              title: 'Smart Playback',
              description:
                'Search recordings by time, date, channel, or motion events. Jump to incidents in seconds without scrubbing through hours of footage.',
            },
            {
              title: 'User Access Control',
              description:
                'Create operator accounts with channel-level permissions — security staff see their zone, managers see everything.',
            },
            {
              title: 'Remote Access',
              description:
                'View live feeds and play back recordings remotely via the mobile app or web browser — from anywhere with an internet connection.',
            },
          ],
        },

        // ── Storage ──────────────────────────────────────────────
        {
          id: 'storage',
          tabLabel: 'Storage',
          heading: 'Reliable Storage. Smart Compression.',
          description:
            'Up to 8TB of internal HDD storage with H.265+ compression maximises retention periods — keeping weeks of footage available without expensive cloud subscriptions.',
          bgColor: 'dark',
          cards: [
            {
              title: 'Up to 8TB HDD',
              description:
                'Internal hard drive bay accommodates up to 8TB — keeping months of footage on-site for review, export, and compliance.',
            },
            {
              title: 'H.265+ Smart Encoding',
              description:
                'H.265+ reduces bitrate for static scenes, further extending storage life without any visible reduction in recorded quality.',
            },
            {
              title: 'USB Export',
              description:
                'Export specific footage clips to a USB drive for evidence submission, insurance claims, or management review.',
            },
            {
              title: 'Cloud Backup Ready',
              description:
                'Optional cloud backup sends critical recordings off-site — protecting footage even if the NVR is stolen or damaged.',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Retail',
          subtitle: 'Stores & Shopping Centres',
          description:
            'Record all cameras across the store with smart playback to investigate incidents quickly and generate reports for insurance.',
          image:
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Warehouse & Logistics',
          subtitle: 'Storage & Distribution',
          description:
            'Monitor loading docks, storage areas, and perimeters 24/7 with high-capacity storage for long retention periods.',
          image:
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
        },
        {
          title: 'Residential Complex',
          subtitle: 'Apartments & Gated Communities',
          description:
            'Manage cameras across entrances, car parks, and common areas from a single NVR with remote access for the security team.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        Channels: '8-channel / 16-channel — contact for model details',
        'Video Input': 'IP cameras (PoE switch required)',
        Compression: 'H.265+ / H.265 / H.264',
        'Recording Resolution': 'Up to 4MP per channel',
        'Storage Capacity': 'Up to 8TB (internal HDD)',
        'Playback': 'Smart search by time, channel, motion event',
        'Remote Access': 'iOS & Android app, web browser (IE/Chrome)',
        'Export': 'USB flash drive',
        'User Accounts': 'Multi-level access control',
        Warranty: '1 year — full specs confirmed after client consultation',
      },
    },
  ],
}

// ─── After-Trip Placeholder Categories ───────────────────────────────────────
const commercialDisplay: ProductCategory = {
  slug: 'commercial-display',
  name: 'Commercial Display',
  description: 'Professional monitors, mirror TVs, canvas TVs, and specialty displays.',
  image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
  imageAlt: 'Commercial display screens',
  availableV1: false,
  products: [],
}

const ledDisplay: ProductCategory = {
  slug: 'led-display',
  name: 'LED Display',
  description: 'COB LED video walls, transparent LED, all-in-one LED, and outdoor LED solutions.',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  imageAlt: 'LED video wall display',
  availableV1: false,
  products: [],
}

const software: ProductCategory = {
  slug: 'software',
  name: 'Software',
  description: 'CAST CMS — web-based content management for multi-zone displays.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  imageAlt: 'CAST CMS software interface',
  availableV1: false,
  products: [],
}

const accessories: ProductCategory = {
  slug: 'accessories',
  name: 'Accessories',
  description: 'Premium mounts, interactive pens, cables, and peripheral devices to complete your InfinityX display setup.',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  imageAlt: 'Display accessories and peripherals',
  availableV1: false,
  products: [],
}

const unifiedCommunication: ProductCategory = {
  slug: 'unified-communication',
  name: 'Unified Communication',
  description: 'All-in-one video conferencing and collaboration systems for hybrid meeting rooms — seamless Teams, Zoom, and Meet integration.',
  image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
  imageAlt: 'Unified communication and video conferencing',
  availableV1: false,
  products: [],
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export const productCategories: ProductCategory[] = [
  interactiveFlatPanels,
  kiosks,
  cctv,
  commercialDisplay,
  ledDisplay,
  accessories,
  unifiedCommunication,
  software,
]

export const v1Categories = productCategories.filter((c) => c.availableV1)

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug)
}

export function getProductBySlug(
  categorySlug: string,
  productSlug: string
): { category: ProductCategory; product: Product } | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  const product = category.products.find((p) => p.slug === productSlug)
  if (!product) return undefined
  return { category, product }
}

// ─── Search Index ─────────────────────────────────────────────────────────────

export interface SearchItem {
  name: string
  /** Shown as secondary label — e.g. category name or "Category" */
  subtitle: string
  href: string
  type: 'category' | 'product'
}

/**
 * Flat list of every searchable item derived from productCategories.
 * Built once at module load — no runtime cost.
 */
export const searchIndex: SearchItem[] = productCategories.flatMap((cat) => [
  {
    name: cat.name,
    subtitle: 'Browse Category',
    href: `/products/${cat.slug}`,
    type: 'category',
  },
  ...cat.products.map((p): SearchItem => ({
    name: p.name,
    subtitle: cat.name,
    href: `/products/${cat.slug}/${p.slug}`,
    type: 'product',
  })),
])
