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
          sectionImage:
            'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&h=1080&fit=crop',
          sectionImageAlt: '4K interactive display in classroom',
          bgColor: 'white',
          layout: 'showcase',
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
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Multiple devices connecting wirelessly to an interactive display',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'HDMI 2.0 × 2',
              description:
                'Two HDMI inputs support simultaneous connection of a teaching PC and a student laptop for fast source switching.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'USB-C One-Cable',
              description:
                'A single USB-C cable delivers video, audio, and 65W charging from a laptop — reducing desk clutter and setup time.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wireless Screen Share',
              description:
                'Mirror any phone, tablet, or laptop wirelessly via Miracast or AirPlay — no dongle, no driver, no delay.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop',
            },
            {
              title: 'BYOM Ready',
              description:
                'Bring your own meeting: connect your laptop and use the Series B screen, speakers, and touch while your meeting app runs on your device.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Whiteboard and collaboration software on interactive panel',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'One-Tap Whiteboard',
              description:
                'Launch an infinite digital whiteboard in one tap. Write, draw, insert images, and save or share with students via QR code.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Screen Annotation',
              description:
                'Annotate over any content — presentations, videos, or web pages — without switching apps. Annotations can be saved as images.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=900&fit=crop',
            },
            {
              title: 'App Compatibility',
              description:
                'Run Google Classroom, Microsoft Teams, Zoom, or any Android app directly on the display without an external PC.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'USB Content',
              description:
                'Plug in a USB drive to display PDFs, images, Word, Excel, or PowerPoint files instantly — no network required.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Durable interactive display in school classroom',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '2-Year Warranty',
              description:
                'Comprehensive coverage for two years — parts, labour, and on-site support. Schools can plan deployments with confidence.',
              image:
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop',
            },
            {
              title: '9H Tempered Glass',
              description:
                'The touch surface is protected by hardened 9H tempered glass — resistant to daily marker cleaning, accidental knocks, and fingernail scratches.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop',
            },
            {
              title: 'Fanless Design',
              description:
                'Passively cooled — no fan noise to distract during lessons or presentations, and no filter maintenance required.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Energy-Saving Mode',
              description:
                'Auto standby and scheduled power-off reduce electricity costs. Complies with energy efficiency standards for institutional procurement.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Full HD interactive display in school classroom',
          bgColor: 'white',
          layout: 'showcase',
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
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Whiteboard and teaching software on classroom interactive panel',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Built-in Whiteboard',
              description:
                'A full-featured digital whiteboard is one tap away — write, draw, insert images, and save lessons as files or QR codes.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Screen Annotation',
              description:
                'Draw over presentations, web pages, or video with the stylus or finger. Save annotations without interrupting the lesson flow.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=900&fit=crop',
            },
            {
              title: 'USB Content Playback',
              description:
                'Display PDFs, Office files, images, and videos directly from a USB drive — no internet, no login, no friction.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'HDMI Source Switching',
              description:
                'Switch between the Android OS and an external PC or laptop via HDMI in one tap — seamless transitions during class.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Reliable interactive display in school environment',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'Plug-and-Play Setup',
              description:
                'Out of the box in minutes — mount, power on, and connect. No specialist installer or IT configuration required for basic classroom use.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=900&fit=crop',
            },
            {
              title: 'Low Maintenance',
              description:
                'Fanless passive cooling with no moving parts and no consumables — reducing ongoing maintenance costs for schools and institutions.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Energy Efficient',
              description:
                'Auto standby and scheduled shutdown reduce power consumption — important for institutions managing large display deployments.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: '1-Year Warranty',
              description:
                'Backed by InfinityX comprehensive support — parts and labour covered, with on-site service available across India.',
              image:
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'High-brightness kiosk display panel in public space',
          bgColor: 'white',
          layout: 'showcase',
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
          sectionImage:
            'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Capacitive touch interaction on kiosk screen',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: '10-Point Multi-Touch',
              description:
                'Full gesture support — pinch, swipe, zoom — for engaging, app-like customer experiences.',
              image:
                'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&h=900&fit=crop',
            },
            {
              title: '<5 ms Response Time',
              description:
                'Near-zero latency ensures every interaction feels immediate and natural, reducing customer frustration at the screen.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop',
            },
            {
              title: 'Glove & Stylus Support',
              description:
                'Works reliably with gloved hands in healthcare and food-service environments, or with a capacitive stylus.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop',
            },
            {
              title: 'Durable Touch Surface',
              description:
                'Hardened 4H anti-scratch surface rated for millions of touch cycles in high-traffic public deployments.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Commercial kiosk display running in a busy public space',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '16/7 Continuous Operation',
              description:
                'Rated for extended commercial operation — ideal for retail, transit, and hospitality environments that run from opening to close.',
              image:
                'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=900&fit=crop',
            },
            {
              title: 'IP43 Front Protection',
              description:
                'Front panel sealed against dust ingress and splashing water — built for busy lobbies, food courts, and public concourses.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Intelligent Thermal Control',
              description:
                'Active thermal management prevents throttling and overheating, maintaining consistent brightness and performance throughout the day.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop',
            },
            {
              title: 'Auto-Recovery Boot',
              description:
                'Watchdog timer and auto-reboot system ensure the kiosk recovers automatically from unexpected software hangs — no on-site intervention needed.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Content management dashboard for kiosk network',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'CAST CMS Compatible',
              description:
                'Pair with InfinityX CAST CMS for multi-zone content scheduling, remote management, and real-time updates across your display network.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Custom App Support',
              description:
                'Sideload proprietary apps or deploy from the Play Store. Kiosk lockdown mode restricts end-users to your approved application only.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Remote Device Management',
              description:
                'Monitor uptime, push content updates, reboot remotely, and receive alerts — all from a centralised web dashboard.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Scheduled Content',
              description:
                'Set dayparting schedules to display different content at different times — morning menus, afternoon promotions, evening entertainment.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Ultra slim kiosk mounted in retail environment',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'Wall Mount',
              description:
                'Standard VESA pattern enables direct wall mounting in corridors, retail walls, and waiting-area installations.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Floor Stand',
              description:
                'Optional floor stand positions the screen at optimal eye-level height — ideal for freestanding retail and wayfinding deployments.',
              image:
                'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=900&fit=crop',
            },
            {
              title: 'Portrait & Landscape',
              description:
                'Rotate between portrait and landscape orientation to match your content layout and physical installation constraints.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop',
            },
            {
              title: 'Custom Integration',
              description:
                'Panel-only configuration available for embedding into custom kiosk enclosures, countertop builds, and furniture installations.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'HD IP security camera capturing clear footage outdoors',
          bgColor: 'white',
          layout: 'showcase',
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
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Remote security monitoring on mobile devices and computers',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Mobile App',
              description:
                'View live feeds, play back recordings, and receive instant alerts on iOS or Android — your site in your pocket.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Multi-Camera Live Wall',
              description:
                'View all cameras simultaneously on a single screen — ideal for security desks, control rooms, and retail back-offices.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=900&fit=crop',
            },
            {
              title: 'Instant Alerts',
              description:
                'Push notifications for motion detection, tamper alerts, and camera offline events — respond immediately to incidents.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=900&fit=crop',
            },
            {
              title: 'Cloud Backup',
              description:
                'Optional cloud recording ensures footage is preserved even if local storage is tampered with or damaged.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Security camera installation on building exterior',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'PoE Support',
              description:
                'A single Ethernet cable carries both data and power — eliminating separate power cabling and reducing installation cost.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=900&fit=crop',
            },
            {
              title: 'IP66 Weatherproof',
              description:
                'Sealed housing rated IP66 for complete dust protection and resistance to heavy rain — suitable for all outdoor locations.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=900&fit=crop',
            },
            {
              title: 'Flexible Mounting',
              description:
                'Ceiling dome, wall bullet, and pole mount variants with adjustable viewing angles for any installation point.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Expandable Network',
              description:
                'Add cameras to the same NVR as your site grows — no need to replace the recording system when expanding coverage.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'NVR recording system with multiple camera feeds',
          bgColor: 'white',
          layout: 'showcase',
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
          sectionImage:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Security management dashboard showing multiple camera feeds',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Multi-Camera Live Wall',
              description:
                'View all channels simultaneously in a split-screen layout — 4, 8, or 16 feeds at once on any connected monitor.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=900&fit=crop',
            },
            {
              title: 'Smart Playback',
              description:
                'Search recordings by time, date, channel, or motion events. Jump to incidents in seconds without scrubbing through hours of footage.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=900&fit=crop',
            },
            {
              title: 'User Access Control',
              description:
                'Create operator accounts with channel-level permissions — security staff see their zone, managers see everything.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Remote Access',
              description:
                'View live feeds and play back recordings remotely via the mobile app or web browser — from anywhere with an internet connection.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
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
          sectionImage:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'NVR storage system with hard drive capacity',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'Up to 8TB HDD',
              description:
                'Internal hard drive bay accommodates up to 8TB — keeping months of footage on-site for review, export, and compliance.',
              image:
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=900&fit=crop',
            },
            {
              title: 'H.265+ Smart Encoding',
              description:
                'H.265+ reduces bitrate for static scenes, further extending storage life without any visible reduction in recorded quality.',
              image:
                'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=900&fit=crop',
            },
            {
              title: 'USB Export',
              description:
                'Export specific footage clips to a USB drive for evidence submission, insurance claims, or management review.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Cloud Backup Ready',
              description:
                'Optional cloud backup sends critical recordings off-site — protecting footage even if the NVR is stolen or damaged.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
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
  availableV1: true,
  products: [
    // ── Professional Monitors ──────────────────────────────────────────
    {
      slug: 'professional-monitors',
      name: 'Professional Monitors',
      description:
        'Commercial-grade IPS monitors from 24" to 110" — 400 nits, 4K UHD, and 24/7 rated for control rooms, hospitality, retail, and healthcare environments.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      tagline: 'Professional-grade clarity. Built for continuous commercial operation.',
      heroImage:
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&h=900&fit=crop',
      heroImageAlt: 'Professional monitors in a command centre environment',

      highlights: [
        {
          title: '400 nits Brightness',
          description: 'Vivid, consistent visuals in bright ambient environments',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
        },
        {
          title: '4K UHD Resolution',
          description: 'Sharp, detailed content at any size from 24" to 110"',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: '178° IPS Viewing Angle',
          description: 'Accurate colour from every angle in any installation',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
        {
          title: '24/7 Commercial Rated',
          description: 'Engineered for continuous operation in high-demand spaces',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'display',
          tabLabel: 'Display Quality',
          heading: 'Commercial Clarity. Every Pixel, Every Hour.',
          description:
            'InfinityX Professional Monitors deliver 400-nit IPS panels with 4K UHD resolution — engineered to look accurate and consistent across multi-screen arrays, control room walls, and large-format signage installations.',
          sectionImage:
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Professional monitor display quality close-up',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '4K UHD Resolution',
              description:
                '3840×2160 native resolution renders crisp detail for surveillance feeds, data dashboards, and marketing content at any scale.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: '400 nits Brightness',
              description:
                'Commercial-grade luminance cuts through ambient light in open-plan offices, retail floors, and daylight-facing installations.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wide Colour Gamut',
              description:
                '95% DCI-P3 colour coverage ensures accurate brand colours and lifelike image reproduction for retail and hospitality use.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Ultra-Narrow Bezel',
              description:
                '3.5 mm bezel on all four sides enables near-seamless video wall arrays with minimal visual interruption between panels.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'connectivity',
          tabLabel: 'Connectivity',
          heading: 'Every Signal. Every Source.',
          description:
            'Multiple inputs including HDMI 2.0, DisplayPort 1.4, and USB-C with power delivery ensure professional monitors integrate seamlessly into any AV infrastructure — new or legacy.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Monitor connectivity ports and cable management',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'HDMI 2.0 × 2',
              description:
                'Dual HDMI 2.0 inputs support 4K@60Hz from media players, PCs, and set-top boxes simultaneously.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'DisplayPort 1.4',
              description:
                'High-bandwidth DP1.4 input supports 4K@120Hz and multi-monitor daisy-chain configurations for control room arrays.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'USB-C with 90W PD',
              description:
                'Single-cable connection carries video, data, and power — ideal for laptop-driven digital signage and presentation setups.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=900&fit=crop',
            },
            {
              title: 'RS-232 / LAN Control',
              description:
                'RS-232 and RJ45 interfaces enable centralised power scheduling, input switching, and monitoring across large display networks.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'durability',
          tabLabel: 'Durability',
          heading: 'Rated for 24/7. Engineered to Endure.',
          description:
            'Every InfinityX Professional Monitor is rated for 24/7 continuous operation and validated through 50,000-hour panel life testing — delivering reliable performance across the most demanding commercial environments.',
          sectionImage:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Professional monitors running in 24/7 control room',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: '24/7 Continuous Operation',
              description: 'Validated for round-the-clock use in control rooms, lobbies, and public signage deployments.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
            },
            {
              title: '50,000-Hour Panel Life',
              description: 'Backlight rated for 50,000 hours at full brightness — over 5 years of continuous operation.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
            },
            {
              title: 'Auto Brightness Control',
              description: 'Ambient light sensor adjusts brightness automatically to reduce eye strain and extend panel lifespan.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Command & Control',
          subtitle: 'Control Rooms & NOCs',
          description:
            'Multi-screen arrays with 24/7 operation for network operations centres, security monitoring, and traffic management rooms.',
          image:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
        },
        {
          title: 'Hospitality',
          subtitle: 'Hotels & Restaurants',
          description:
            'In-room entertainment, lobby displays, digital menus, and meeting room signage for premium guest experiences.',
          image:
            'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
        },
        {
          title: 'Retail',
          subtitle: 'Stores & Showrooms',
          description:
            'Product showcases, promotional video walls, and point-of-sale displays that drive engagement and sales.',
          image:
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Healthcare',
          subtitle: 'Hospitals & Clinics',
          description:
            'Patient information displays, wayfinding, queue management, and clinical workstation monitors.',
          image:
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        'Available Sizes': '24" / 32" / 43" / 55" / 65" / 75" / 86" / 98" / 110"',
        'Panel Type': 'IPS LCD',
        Resolution: '4K UHD (3840 × 2160)',
        Brightness: '400 nits (typical)',
        'Contrast Ratio': '1200:1',
        'Viewing Angle': '178° H / 178° V',
        'Colour Gamut': '95% DCI-P3',
        'Bezel Width': '3.5 mm (all sides)',
        Inputs: 'HDMI 2.0 ×2, DisplayPort 1.4, USB-C (90W PD), VGA',
        'Control Interface': 'RS-232, RJ45 (LAN), IR',
        'Operating Hours': '24/7',
        'Panel Lifespan': '50,000 hours',
        'Operating Temp': '0°C – 40°C',
        Orientation: 'Landscape / Portrait',
        Mounting: 'VESA 200×200 to 800×400 mm',
        Warranty: '3 years',
      },
    },

    // ── Waterproof Mirror TV ───────────────────────────────────────────
    {
      slug: 'waterproof-mirror-tv',
      name: 'Waterproof Mirror TV',
      description:
        'IP65-rated 4K mirror television with anti-fog glass — transforms any bathroom, spa, pool, or outdoor space into a premium entertainment and information display.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
      tagline: 'The luxury display that survives water, steam, and the outdoors.',
      heroImage:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&h=900&fit=crop',
      heroImageAlt: 'Waterproof mirror TV installed in luxury bathroom',

      highlights: [
        {
          title: 'IP65 Waterproof',
          description: 'Fully sealed against water jets, steam, and humidity',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
        },
        {
          title: 'Anti-Fog Glass',
          description: 'Heated front panel prevents condensation in steam rooms',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
        {
          title: '4K UHD Display',
          description: 'Crystal-clear 3840×2160 picture even as a mirror finish',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'Custom Frame Options',
          description: 'Stainless steel, chrome, and gold finish options available',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'waterproofing',
          tabLabel: 'Waterproofing',
          heading: 'IP65. Sealed for Water. Freed for Anywhere.',
          description:
            'The InfinityX Waterproof Mirror TV carries a full IP65 ingress protection rating — sealed against dust and sustained water jets from any direction. Designed for bathrooms, steam rooms, pool decks, and outdoor installations that would destroy a standard display.',
          sectionImage:
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Waterproof mirror TV in wet room environment',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'IP65 Full Seal',
              description:
                'Dust-tight and protected against water jets from any direction — safe for direct shower spray, steam rooms, and rain exposure.',
              image:
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=900&fit=crop',
            },
            {
              title: 'Anti-Fog Heated Glass',
              description:
                'Integrated front-panel heating circuit prevents condensation from forming on the mirror surface in steam rooms and humid bathrooms.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Sealed Stainless Enclosure',
              description:
                'Marine-grade stainless steel rear enclosure resists corrosion from humidity, salt air, and cleaning chemicals.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Outdoor UV Resistance',
              description:
                'UV-stable coating prevents panel degradation in outdoor pool and garden installations exposed to direct sunlight.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'display',
          tabLabel: 'Display',
          heading: 'Mirror-Finish. 4K Clarity. Zero Compromise.',
          description:
            'When off, it reflects like a premium mirror. When on, the 4K UHD panel delivers sharp, vivid content that cuts through the mirror coating — giving you a seamless, luxurious display that disappears into your interior design.',
          sectionImage:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Mirror TV transitioning from mirror to display',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: '4K UHD Resolution',
              description:
                '3840×2160 panel delivers exceptional picture quality that remains sharp and vivid through the reflective mirror coating.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'High Transparency Mirror',
              description:
                '50% light-transmission mirror coating reflects your space when off and shows full-brightness content when on.',
              image:
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=900&fit=crop',
            },
            {
              title: '700 nits Brightness',
              description:
                'High-brightness panel compensates for the mirror coating, ensuring vivid colour and legible text in bright bathroom environments.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Invisible When Off',
              description:
                'Mirror finish matches standard bathroom mirrors — guests see a premium mirror, not a screen, until the display activates.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'design',
          tabLabel: 'Design',
          heading: 'Custom Frames. Any Interior.',
          description:
            'Available in a range of premium frame finishes — brushed stainless, polished chrome, matte black, and rose gold — the InfinityX Mirror TV integrates seamlessly into luxury hotel bathrooms, residential en-suites, and spa interiors.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Mirror TV with custom frame in luxury interior',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'Brushed Stainless Frame',
              description: 'Contemporary satin finish matches modern bathroom fixtures and fittings.',
              image:
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
            },
            {
              title: 'Frameless Option',
              description: 'Edge-to-edge mirror with no visible frame for a fully flush, seamless wall installation.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            },
            {
              title: 'Custom Size Available',
              description: 'Factory-cut to any dimension for bespoke installations in residential and luxury hospitality projects.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Luxury Hotels',
          subtitle: 'En-Suites & Spa Bathrooms',
          description:
            'Premium in-room entertainment in hotel bathrooms — guests watch content, check weather, and browse hotel services from the mirror.',
          image:
            'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
        },
        {
          title: 'Spas & Wellness',
          subtitle: 'Steam Rooms & Treatment Areas',
          description:
            'Ambient content, relaxation videos, and wellness information display in high-humidity spa and steam environments.',
          image:
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
        },
        {
          title: 'Residential',
          subtitle: 'Home Bathrooms & En-Suites',
          description:
            'Smart home integration — news, weather, and mirror-finish aesthetics for luxury residential bathrooms.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Outdoor & Pool',
          subtitle: 'Pool Decks & Alfresco Areas',
          description:
            'IP65 outdoor-rated installation beside pools, in garden pavilions, and on covered terraces for year-round entertainment.',
          image:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        'Available Sizes': 'Custom (standard 32" / 43" / 55" / 65")',
        'IP Rating': 'IP65 (dust-tight + water-jet proof)',
        'Panel Type': 'IPS LCD with mirror coating',
        Resolution: '4K UHD (3840 × 2160)',
        Brightness: '700 nits (compensated for mirror coating)',
        'Mirror Transmission': '50% light transmission',
        'Anti-Fog': 'Integrated heated front glass',
        'Frame Options': 'Brushed stainless / Chrome / Matte black / Frameless',
        'Enclosure Material': 'Marine-grade stainless steel (rear)',
        'Operating Temperature': '-10°C – 50°C',
        'Operating Humidity': 'Up to 95% RH (non-condensing)',
        Inputs: 'HDMI 2.0, USB, Composite (waterproof cable glands)',
        'Smart Platform': 'Android 11 (optional) or panel-only',
        Mounting: 'Flush wall mount (included)',
        Warranty: '2 years',
      },
    },

    // ── Digital Standee ────────────────────────────────────────────────
    {
      slug: 'digital-standee',
      name: 'Digital Standee',
      description:
        'Ultra-slim A-frame digital standee in 32", 43", and 55" — high-brightness Android-powered signage for retail, events, hospitality, and corporate environments.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tagline: 'Slim. Bright. Connected. Stand out wherever you stand.',
      heroImage:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop',
      heroImageAlt: 'Digital standee in retail store entrance',

      highlights: [
        {
          title: 'Ultra-Slim 25 mm Profile',
          description: 'Barely visible edge — all screen, no bulk',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        },
        {
          title: '700 nits Brightness',
          description: 'Vivid visuals in brightly lit retail and event spaces',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
        },
        {
          title: 'Android 11 Built-in',
          description: 'Schedule content, run apps, manage remotely',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: 'Dual-Sided Option',
          description: 'Back-to-back screens for double the audience reach',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'display',
          tabLabel: 'Display',
          heading: 'High Brightness. Every Lighting Condition.',
          description:
            'The InfinityX Digital Standee delivers 700 nits of commercial brightness through a 10-point capacitive IPS panel — designed to cut through ambient light in busy retail floors, event spaces, and brightly lit lobbies.',
          sectionImage:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Digital standee display in bright retail environment',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '700 nits Brightness',
              description:
                'Commercial-grade luminance ensures your content is vivid and legible even under direct overhead lighting or near shop windows.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=900&fit=crop',
            },
            {
              title: '10-Point Touch (Optional)',
              description:
                'Available with or without touch — the capacitive touch variant supports interactive product browsers, wayfinding, and self-service kiosk apps.',
              image:
                'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&h=900&fit=crop',
            },
            {
              title: 'Full HD IPS Panel',
              description:
                '1920×1080 Full HD with 178° viewing angle — accurate colour from every direction for high-traffic aisle and floor installations.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'Portrait Native',
              description:
                'Designed for portrait orientation — content fills the full screen without awkward black bars or rotation workarounds.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'software',
          tabLabel: 'Software',
          heading: 'Android 11. Schedule. Manage. Update.',
          description:
            'Built-in Android 11 lets you deploy content from anywhere — push promotional videos, schedule dayparting playlists, and monitor device health across your entire standee network from a single web dashboard.',
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Content management dashboard for digital standee network',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'CAST CMS Compatible',
              description:
                'Pair with InfinityX CAST CMS for multi-zone content scheduling, remote management, and real-time updates across your standee network.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'Dayparting Schedules',
              description:
                'Display different content at different times — morning arrivals, lunchtime promotions, evening events — all pre-scheduled.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Remote Device Management',
              description:
                'Monitor uptime, update content, reboot devices, and receive health alerts from a central cloud dashboard — no on-site visits needed.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop',
            },
            {
              title: 'App Sideload Support',
              description:
                'Deploy proprietary apps or kiosk lockdown configurations — restrict end-users to your approved application only.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'form-factor',
          tabLabel: 'Form Factor',
          heading: '25 mm Slim. A-Frame Stable. Dual-Sided Ready.',
          description:
            'At just 25 mm deep, the InfinityX Digital Standee disappears into your space while the weighted A-frame base keeps it rock-solid in high-footfall environments. Available in single and dual-sided configurations.',
          sectionImage:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Ultra-slim digital standee profile view',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'Ultra-Slim 25 mm',
              description: 'Less than an inch deep — blends into retail environments without blocking sightlines or occupying valuable floor space.',
              image:
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            },
            {
              title: 'Weighted A-Frame Base',
              description: 'Low-centre-of-gravity cast base resists accidental tipping in high-traffic aisles and event walkways.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            },
            {
              title: 'Dual-Sided Configuration',
              description: 'Back-to-back dual-screen option doubles your audience reach — front and rear messaging from a single unit.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Retail',
          subtitle: 'Stores & Shopping Malls',
          description:
            'Aisle-end promotional displays, new arrival showcases, and directional signage that drive in-store engagement.',
          image:
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Events',
          subtitle: 'Exhibitions & Conferences',
          description:
            'Portable, impactful branding and information displays for trade shows, launches, and temporary activations.',
          image:
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        },
        {
          title: 'Hospitality',
          subtitle: 'Hotels & Restaurants',
          description:
            'Welcome screens, menu boards, event schedules, and wayfinding standees for lobbies, corridors, and restaurant entrances.',
          image:
            'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
        },
        {
          title: 'Corporate',
          subtitle: 'Offices & Lobbies',
          description:
            'Visitor welcome screens, meeting room directories, company news, and internal communication displays at reception.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: 'DS-32"',
          specs: {
            'Screen Size': '32 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '700 nits',
            'Contrast Ratio': '1200:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Operating System': 'Android 11',
            Processor: 'Quad-core, 1.8 GHz',
            Memory: '2 GB RAM / 16 GB eMMC',
            Connectivity: 'HDMI, USB ×2, RJ45, WiFi 2.4/5 GHz',
            'Operating Hours': '16/7',
            Orientation: 'Portrait (native)',
            'Panel Depth': '25 mm',
            'Base Type': 'Weighted A-frame (aluminium)',
            Dimensions: '740 × 445 × 25 mm (panel)',
            Weight: '6.5 kg (panel + base)',
            Warranty: '1 year',
          },
        },
        {
          name: 'DS-43"',
          specs: {
            'Screen Size': '43 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '700 nits',
            'Contrast Ratio': '1200:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Operating System': 'Android 11',
            Processor: 'Quad-core, 1.8 GHz',
            Memory: '2 GB RAM / 16 GB eMMC',
            Connectivity: 'HDMI, USB ×2, RJ45, WiFi 2.4/5 GHz',
            'Operating Hours': '16/7',
            Orientation: 'Portrait (native)',
            'Panel Depth': '25 mm',
            'Base Type': 'Weighted A-frame (aluminium)',
            Dimensions: '1010 × 580 × 25 mm (panel)',
            Weight: '10.8 kg (panel + base)',
            Warranty: '1 year',
          },
        },
        {
          name: 'DS-55"',
          specs: {
            'Screen Size': '55 inches',
            Resolution: '1920 × 1080 (Full HD)',
            'Panel Type': 'IPS LCD',
            Brightness: '700 nits',
            'Contrast Ratio': '1200:1',
            'Viewing Angle': '178° H / 178° V',
            'Touch (optional)': '10-point projected capacitive',
            'Operating System': 'Android 11',
            Processor: 'Quad-core, 1.8 GHz',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'HDMI, USB ×3, RJ45, WiFi 2.4/5 GHz',
            'Operating Hours': '16/7',
            Orientation: 'Portrait (native)',
            'Panel Depth': '25 mm',
            'Base Type': 'Weighted A-frame (aluminium)',
            Dimensions: '1260 × 720 × 25 mm (panel)',
            Weight: '16.2 kg (panel + base)',
            Warranty: '1 year',
          },
        },
      ],
    },
  ],
}

const ledDisplay: ProductCategory = {
  slug: 'led-display',
  name: 'LED Display',
  description: 'COB LED video walls, transparent LED, all-in-one LED, and outdoor LED solutions.',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  imageAlt: 'LED video wall display',
  availableV1: true,
  products: [
    // ── COB LED Video Wall ─────────────────────────────────────────────
    {
      slug: 'cob-led-video-wall',
      name: 'COB LED Video Wall',
      description:
        'Micro-pitch COB LED video walls from P0.9 to P1.87 — delivering 2K, 4K, and 8K seamless display solutions for command centres, broadcast studios, and flagship retail.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tagline: 'Micro-pitch COB technology. 2K / 4K / 8K. Seamless from any angle.',
      heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop',
      heroImageAlt: 'COB LED video wall in control room environment',

      highlights: [
        {
          title: 'P0.9 – P1.87 Micro-Pitch',
          description: 'Ultra-fine pixel pitch for close-viewing clarity in any environment',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: '2K / 4K / 8K Resolution',
          description: 'Scale to any resolution — from single walls to multi-bay arrays',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
        },
        {
          title: 'Seamless Borderless Display',
          description: 'Zero-gap tile joining creates a truly uninterrupted image surface',
          image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
        },
        {
          title: '100,000-Hour Lifespan',
          description: 'COB encapsulation delivers industry-leading durability and consistency',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'image-quality',
          tabLabel: 'Image Quality',
          heading: 'COB Technology. Pixel-Perfect at Any Distance.',
          description:
            'Chip-on-Board (COB) encapsulation places the LED chips directly onto the PCB without individual packaging — eliminating the reflective gaps between pixels that cause glare on traditional SMD walls. The result is a smoother, more uniform image surface that looks stunning from any viewing distance.',
          sectionImage:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'COB LED video wall image quality close-up',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'P0.9 – P1.87 Pixel Pitch',
              description:
                'Ultra-fine pitch options allow close-range viewing without visible pixel structure — ideal for command centres and broadcast studios.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: '8K Resolution Support',
              description:
                'Scale to 2K, 4K, or 8K across modular tile arrays — resolution grows with your wall size, not against it.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: '178° Wide Viewing Angle',
              description:
                'COB surface provides consistent colour and brightness across the full 178° viewing cone — no sweet spot required.',
              image:
                'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=900&fit=crop',
            },
            {
              title: 'Anti-Glare Surface',
              description:
                'Matte COB surface eliminates the specular reflections common on SMD walls — accurate colour reproduction in any lighting.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'installation',
          tabLabel: 'Installation',
          heading: 'Modular Tiles. Any Shape. Any Size.',
          description:
            'Each COB LED panel tile is independently serviceable from the front — no need to dismantle the entire wall for maintenance. Tiles lock together with sub-millimetre precision to create perfectly seamless joints at any scale.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'COB LED video wall modular installation',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Front-Access Servicing',
              description:
                'Individual tiles detach from the front face — maintenance and panel replacement without dismantling the wall structure.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Magnetic Tile Locking',
              description:
                'High-precision magnetic connectors align tiles to ±0.1 mm tolerance — seamless joints guaranteed at every panel boundary.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'Custom Aspect Ratios',
              description:
                'Build to any width × height — standard 16:9, ultra-wide, portrait, L-shape, or fully custom configurations.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Lightweight Tile Design',
              description:
                'Each tile weighs under 8 kg — reduces structural load and simplifies mounting on partition walls and mobile frames.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'reliability',
          tabLabel: 'Reliability',
          heading: '100,000 Hours. No Maintenance Surprises.',
          description:
            'COB encapsulation protects every LED chip inside a solid epoxy layer — shielding against dust, moisture, and physical impact. Combined with intelligent thermal management, InfinityX COB walls are rated for 100,000 hours of continuous operation.',
          sectionImage:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'COB LED wall reliability and long-term operation',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: '100,000-Hour Panel Life',
              description: 'Rated for over 11 years of continuous 24/7 operation — lowest total cost of ownership in the LED wall category.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            },
            {
              title: 'COB Dust & Impact Protection',
              description: 'Solid epoxy encapsulation makes each tile resistant to dust ingress and accidental touch — no exposed LED chips.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
            },
            {
              title: 'Intelligent Thermal Management',
              description: 'Active airflow design maintains optimal LED junction temperature, preventing brightness degradation over time.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            },
            {
              title: 'Redundant Power Supply',
              description: 'Dual power supply units with automatic failover ensure uninterrupted operation in 24/7 mission-critical environments.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Command & Control',
          subtitle: 'Control Rooms & NOCs',
          description:
            'Mission-critical data visualisation walls for network operations centres, security monitoring, and traffic management facilities.',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
        },
        {
          title: 'Broadcast & Media',
          subtitle: 'Studios & Production Suites',
          description:
            'Virtual production backdrops, news studio video walls, and live event LED screens with broadcast-grade colour accuracy.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        },
        {
          title: 'Retail Flagship',
          subtitle: 'Stores & Brand Experiences',
          description:
            'Immersive brand storytelling walls at retail entrances, product showcases, and experiential marketing installations.',
          image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Auditoriums',
          subtitle: 'Conference Halls & Event Venues',
          description:
            'Large-format presentation walls for corporate auditoriums, conference centres, and multi-purpose event spaces.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        'Pixel Pitch Range': 'P0.9 / P1.25 / P1.56 / P1.87',
        Technology: 'COB (Chip-on-Board)',
        'Max Resolution': '8K (scalable via tile array)',
        'Panel Brightness': '600 – 1200 nits (pitch-dependent)',
        'Contrast Ratio': '5000:1',
        'Viewing Angle': '178° H / 178° V',
        'Refresh Rate': '3840 Hz',
        'Grey Scale': '16-bit',
        'Colour Gamut': '>100% sRGB / 90% DCI-P3',
        'Tile Size': '600 × 337.5 mm (standard)',
        'Tile Weight': '<8 kg per tile',
        'Panel Joining': 'Magnetic, ±0.1 mm precision',
        'Servicing': 'Front-access, tool-free tile removal',
        'IP Rating': 'IP30 (indoor)',
        'Operating Hours': '24/7',
        'Lifespan': '100,000 hours',
        'Operating Temp': '0°C – 40°C',
        Warranty: '3 years',
      },
    },

    // ── Transparent LED ────────────────────────────────────────────────
    {
      slug: 'transparent-led',
      name: 'Transparent LED',
      description:
        'See-through LED display tiles with up to 80% light transparency — indoor P1.9–P3.9 (IP45) and outdoor P3.9–P15.6 (IP65) for retail windows, architecture, and landmark installations.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      tagline: 'See-through display. Vivid content. Zero obstruction.',
      heroImage:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=900&fit=crop',
      heroImageAlt: 'Transparent LED display on glass facade',

      highlights: [
        {
          title: 'Up to 80% Transparency',
          description: 'Glass-like see-through surface maintains natural light and views',
          image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
        },
        {
          title: 'Indoor & Outdoor Rated',
          description: 'IP45 indoor and IP65 outdoor variants for any installation',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'Lightweight Tile System',
          description: 'Thin aluminium frame tiles attach directly to glass without scaffolding',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
        {
          title: '4K Content Ready',
          description: 'Supports 4K video playback via integrated media processor',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'transparency',
          tabLabel: 'Transparency',
          heading: 'Display Without Blocking the View.',
          description:
            'InfinityX Transparent LED uses a micro-strip LED design where visible LED components occupy less than 20% of the tile surface area — leaving up to 80% clear for natural light transmission and unobstructed views behind the display.',
          sectionImage:
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Transparent LED display on building facade showing through effect',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'Up to 80% Light Transmission',
              description:
                'Micro-strip LED rows are separated by clear gaps — maintaining natural light flow into the building and outward views from inside.',
              image:
                'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=900&fit=crop',
            },
            {
              title: 'No Structural Modification',
              description:
                'Tiles attach to existing glass facades and curtain walls via adhesive or clamp system — no drilling, no permits for glass replacement.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Day and Night Visibility',
              description:
                'High-brightness LEDs ensure content is vivid under direct sunlight while the transparent surface blends into the glass at night.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'Minimal Visual Footprint',
              description:
                'Ultra-thin 10 mm tile profile and slender aluminium frame are nearly invisible from street level — content appears to float on glass.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'indoor-outdoor',
          tabLabel: 'Indoor & Outdoor',
          heading: 'One Platform. Any Environment.',
          description:
            'InfinityX Transparent LED is available in two variants purpose-built for their environments — an indoor version optimised for retail windows and atriums, and a fully weatherproofed outdoor version for building facades and landmark architectural installations.',
          sectionImage:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Transparent LED indoor retail window and outdoor building installation',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Indoor P1.9 – P3.9 (IP45)',
              description:
                'Fine-pitch indoor tiles rated IP45 for dust and splash protection — designed for retail showrooms, atriums, and glass partitions.',
              image:
                'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=900&fit=crop',
            },
            {
              title: 'Outdoor P3.9 – P15.6 (IP65)',
              description:
                'Fully weatherproof IP65 outdoor tiles rated for rain, humidity, and UV exposure — suitable for building facades and open-air installations.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: '5500 nits Outdoor Brightness',
              description:
                'Outdoor variant delivers 5500 nits — vivid content visibility under direct sunlight on south-facing building facades.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Shared Control Platform',
              description:
                'Both indoor and outdoor variants use the same media processor and CAST CMS software — unified management across your portfolio.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'installation',
          tabLabel: 'Installation',
          heading: 'Glass-Mount. Frame-Mount. Any Facade.',
          description:
            'InfinityX Transparent LED tiles support multiple mounting methods — adhesive film directly on glass, mechanical clamp on curtain wall frames, or free-standing aluminium grid structures — giving architects and integrators full flexibility.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Transparent LED installation on glass facade',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'Direct Glass Adhesive',
              description: 'Tiles bond directly to existing glass surfaces — no frame, no drilling, minimal installation time.',
              image:
                'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
            },
            {
              title: 'Curtain Wall Clamp',
              description: 'Mechanical clamp system attaches to standard curtain wall aluminium profiles without modifying the glass.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            },
            {
              title: 'Freestanding Grid Frame',
              description: 'Aluminium grid structure supports tiles independently of the building — for partition walls and interior installations.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Retail Windows',
          subtitle: 'Storefronts & Shopping Malls',
          description:
            'Transform shop windows into dynamic advertising surfaces — display promotions while customers see through to the store interior.',
          image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
        {
          title: 'Architecture',
          subtitle: 'Building Facades & Landmarks',
          description:
            'Turn building exteriors into media surfaces — brand activations, public art, and architectural lighting effects on glass facades.',
          image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
        },
        {
          title: 'Museums & Galleries',
          subtitle: 'Cultural Institutions',
          description:
            'Overlay digital content on glass exhibition cases and partition walls without compromising natural light or sightlines.',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Stadiums & Arenas',
          subtitle: 'Sports & Entertainment Venues',
          description:
            'Transparent perimeter and balustrade LED displays that maintain audience sightlines while delivering advertising and live match data.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: 'Indoor',
          specs: {
            'Pixel Pitch': 'P1.9 / P2.5 / P3.9',
            'IP Rating': 'IP45',
            'Transparency': 'Up to 75%',
            'Brightness': '1500 – 2500 nits',
            'Tile Size': '1000 × 500 mm (standard)',
            'Tile Thickness': '10 mm',
            'Tile Weight': '<6 kg per tile',
            'Viewing Angle': '140° H / 140° V',
            'Max Resolution': '4K (scalable)',
            'Operating Hours': '16/7',
            'Lifespan': '80,000 hours',
            'Operating Temp': '0°C – 40°C',
            'Mounting': 'Glass adhesive / curtain wall clamp',
            Warranty: '2 years',
          },
        },
        {
          name: 'Outdoor',
          specs: {
            'Pixel Pitch': 'P3.9 / P7.8 / P10.4 / P15.6',
            'IP Rating': 'IP65',
            'Transparency': 'Up to 80%',
            'Brightness': '4000 – 5500 nits',
            'Tile Size': '1000 × 500 mm (standard)',
            'Tile Thickness': '12 mm',
            'Tile Weight': '<7 kg per tile',
            'Viewing Angle': '140° H / 140° V',
            'Max Resolution': '4K (scalable)',
            'Operating Hours': '24/7',
            'Lifespan': '100,000 hours',
            'Operating Temp': '-20°C – 50°C',
            'Mounting': 'Curtain wall clamp / freestanding frame',
            Warranty: '3 years',
          },
        },
      ],
    },

    // ── All-in-One LED ─────────────────────────────────────────────────
    {
      slug: 'all-in-one-led',
      name: 'All-in-One LED',
      description:
        'Self-contained LED display panels in 120", 138", 150", and 169" — built-in Android OS, integrated media player, and zero-cabling setup for auditoriums, boardrooms, and flagship lobbies.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
      tagline: 'Giant screen. Built-in Android. Zero complexity.',
      heroImage:
        'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1600&h=900&fit=crop',
      heroImageAlt: 'All-in-one LED display in large auditorium',

      highlights: [
        {
          title: '120" to 169" Sizes',
          description: 'Four giant-screen sizes for every large-space application',
          image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop',
        },
        {
          title: 'Android OS Built-in',
          description: 'No external media player — content management from the screen itself',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        },
        {
          title: '4K UHD Native',
          description: 'Full 3840×2160 resolution across the entire display surface',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'Single-Cable Setup',
          description: 'Power-only connection — WiFi content delivery, no AV rack needed',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'display',
          tabLabel: 'Display',
          heading: 'Room-Filling LED. 4K. Every Seat Gets a Great View.',
          description:
            'InfinityX All-in-One LED combines fine-pitch LED technology with a factory-integrated cabinet — arriving pre-calibrated, pre-assembled, and ready to display. The 4K UHD surface delivers consistent brightness and colour from the front row to the back of the largest rooms.',
          sectionImage:
            'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'All-in-one LED display in large conference hall',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '4K UHD Resolution',
              description:
                '3840×2160 native resolution across every size from 120" to 169" — crisp, detail-rich content at any scale.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: '600 nits Brightness',
              description:
                'Commercial-grade brightness delivers vivid presentations in lit conference rooms and partially daylit auditoriums.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=900&fit=crop',
            },
            {
              title: '160° Wide Viewing Angle',
              description:
                'Consistent image quality from side seats and steep upward viewing angles — every seat in the room gets an accurate picture.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Pre-Calibrated Factory',
              description:
                'Each unit arrives with delta E < 2 colour uniformity calibrated across the entire surface — no on-site calibration required.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'software',
          tabLabel: 'Software',
          heading: 'Android Built-in. Content Ready in Minutes.',
          description:
            'Built-in Android OS with integrated media player eliminates the need for external playback hardware. Connect via WiFi, load content to the CAST CMS, and your 169" LED screen is publishing content in minutes — not hours.',
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'All-in-one LED content management interface',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Android 11 OS',
              description:
                'Full Android platform supports custom apps, streaming players, presentation software, and CAST CMS for scheduled content.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
            },
            {
              title: 'CAST CMS Compatible',
              description:
                'InfinityX CAST CMS enables multi-zone layouts, content scheduling, and remote device management from a central web dashboard.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wireless Content Push',
              description:
                'WiFi 6 built-in — push updates from any device on the same network without touching the screen.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'HDMI / USB-C Input',
              description:
                'External laptop or playback device connects via HDMI 2.0 or USB-C — instant switchover between built-in and external sources.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'installation',
          tabLabel: 'Installation',
          heading: 'One Screen. One Cable. Done.',
          description:
            'The all-in-one integrated cabinet ships fully assembled and pre-tested — just mount it, connect power, and turn it on. No AV rack, no media player, no signal distribution — a single mains cable is all that is needed on day one.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'All-in-one LED installation process',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'Pre-Assembled Cabinet',
              description: 'Arrives as a complete unit — no on-site LED tile assembly, no calibration delays, ready to mount immediately.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            },
            {
              title: 'Power-Only Connection',
              description: 'Single mains power cable is the only external connection required — all signal and control is handled internally or over WiFi.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
            },
            {
              title: 'Wall & Stand Mount',
              description: 'Compatible with heavy-duty wall brackets and optional mobile floor stand for flexible permanent or temporary installations.',
              image:
                'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Auditoriums',
          subtitle: 'Conference Halls & Event Venues',
          description:
            'Commanding main-stage display for corporate events, product launches, AGMs, and large-audience presentations.',
          image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop',
        },
        {
          title: 'Boardrooms',
          subtitle: 'Executive Meeting Rooms',
          description:
            'Replace projector screens with a permanent, always-on LED display that delivers perfect image quality with no warm-up time.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Lobbies',
          subtitle: 'Corporate & Hotel Entrances',
          description:
            'Landmark brand displays in reception areas — welcome messages, brand content, and live information on a truly giant canvas.',
          image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
        },
        {
          title: 'Retail Flagship',
          subtitle: 'Flagship Stores & Showrooms',
          description:
            'Floor-to-ceiling LED displays for immersive brand storytelling and product showcase in premium retail environments.',
          image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
        },
      ],

      specModels: [
        {
          name: '120"',
          specs: {
            'Screen Size': '120 inches (diagonal)',
            'Pixel Pitch': 'P1.56',
            Resolution: '4K UHD (3840 × 2160)',
            Brightness: '600 nits',
            'Contrast Ratio': '4000:1',
            'Viewing Angle': '160° H / 160° V',
            'Operating System': 'Android 11',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'WiFi 6, HDMI 2.0 ×2, USB-C, RJ45',
            'Operating Hours': '16/7',
            'Lifespan': '100,000 hours',
            'Cabinet': 'All-in-one, pre-assembled',
            Dimensions: '2661 × 1499 mm (approx.)',
            Weight: '85 kg',
            Warranty: '3 years',
          },
        },
        {
          name: '138"',
          specs: {
            'Screen Size': '138 inches (diagonal)',
            'Pixel Pitch': 'P1.56',
            Resolution: '4K UHD (3840 × 2160)',
            Brightness: '600 nits',
            'Contrast Ratio': '4000:1',
            'Viewing Angle': '160° H / 160° V',
            'Operating System': 'Android 11',
            Memory: '4 GB RAM / 32 GB eMMC',
            Connectivity: 'WiFi 6, HDMI 2.0 ×2, USB-C, RJ45',
            'Operating Hours': '16/7',
            'Lifespan': '100,000 hours',
            'Cabinet': 'All-in-one, pre-assembled',
            Dimensions: '3059 × 1722 mm (approx.)',
            Weight: '112 kg',
            Warranty: '3 years',
          },
        },
        {
          name: '150"',
          specs: {
            'Screen Size': '150 inches (diagonal)',
            'Pixel Pitch': 'P1.87',
            Resolution: '4K UHD (3840 × 2160)',
            Brightness: '600 nits',
            'Contrast Ratio': '4000:1',
            'Viewing Angle': '160° H / 160° V',
            'Operating System': 'Android 11',
            Memory: '4 GB RAM / 64 GB eMMC',
            Connectivity: 'WiFi 6, HDMI 2.0 ×2, USB-C, RJ45',
            'Operating Hours': '16/7',
            'Lifespan': '100,000 hours',
            'Cabinet': 'All-in-one, pre-assembled',
            Dimensions: '3325 × 1872 mm (approx.)',
            Weight: '138 kg',
            Warranty: '3 years',
          },
        },
        {
          name: '169"',
          specs: {
            'Screen Size': '169 inches (diagonal)',
            'Pixel Pitch': 'P1.87',
            Resolution: '4K UHD (3840 × 2160)',
            Brightness: '600 nits',
            'Contrast Ratio': '4000:1',
            'Viewing Angle': '160° H / 160° V',
            'Operating System': 'Android 11',
            Memory: '8 GB RAM / 64 GB eMMC',
            Connectivity: 'WiFi 6, HDMI 2.0 ×2, USB-C, RJ45',
            'Operating Hours': '16/7',
            'Lifespan': '100,000 hours',
            'Cabinet': 'All-in-one, pre-assembled',
            Dimensions: '3747 × 2108 mm (approx.)',
            Weight: '175 kg',
            Warranty: '3 years',
          },
        },
      ],
    },

    // ── Outdoor LED ────────────────────────────────────────────────────
    {
      slug: 'outdoor-led',
      name: 'Outdoor LED',
      description:
        'IP65-rated outdoor LED display solutions from P2.5 to P10 — 6000 nits daylight-visible brightness, 100,000-hour lifespan for building facades, stadiums, transport hubs, and outdoor advertising.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      tagline: 'Weatherproof. Daylight-visible. Built for the outdoors.',
      heroImage:
        'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop',
      heroImageAlt: 'Outdoor LED display on building facade in daylight',

      highlights: [
        {
          title: 'IP65 Fully Weatherproof',
          description: 'Dust-tight and waterproof — survives monsoon, heat, and dust storms',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
        },
        {
          title: '6000 nits Brightness',
          description: 'Vivid, readable content under direct midday sunlight',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'P2.5 – P10 Pixel Pitch',
          description: 'Fine-pitch to wide-pitch options for any viewing distance',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
        },
        {
          title: '100,000-Hour Lifespan',
          description: 'Built for years of continuous outdoor operation with no fading',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'weather',
          tabLabel: 'Weather Protection',
          heading: 'IP65. Rain, Dust, Heat — All Handled.',
          description:
            'Every InfinityX Outdoor LED cabinet carries a full IP65 ingress protection rating — sealed against dust and sustained water jets from any direction. Marine-grade aluminium enclosures and corrosion-resistant hardware ensure the display performs reliably through monsoon season, coastal salt air, and desert dust storms.',
          sectionImage:
            'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Outdoor LED display in rain and adverse weather conditions',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'IP65 Full Weatherproof',
              description:
                'Dust-tight enclosure and water-jet protection means no weather event — monsoon, sandstorm, or snow — can interrupt your display.',
              image:
                'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=900&fit=crop',
            },
            {
              title: 'Marine-Grade Aluminium Cabinet',
              description:
                'Anodised aluminium housing resists corrosion from coastal salt air and humidity — suitable for seafront and rooftop installations.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Active Thermal Control',
              description:
                'Front-to-back forced airflow and intelligent fan management maintain safe LED operating temperature in 50°C ambient environments.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Lightning Protection',
              description:
                'Integrated surge protection and earth bonding points on every cabinet protect the display from nearby lightning strikes.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'brightness',
          tabLabel: 'Brightness',
          heading: '6000 nits. Visible Under Any Sun.',
          description:
            'InfinityX Outdoor LED delivers up to 6000 nits of luminance — engineered to remain fully legible under direct midday sun on south-facing facades. An automatic ambient light sensor adjusts brightness dynamically, reducing power consumption by up to 40% after dark.',
          sectionImage:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Outdoor LED display in direct sunlight showing high brightness',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: '6000 nits Peak Brightness',
              description:
                'Industry-leading luminance ensures your content cuts through direct sun glare on even the brightest outdoor sites.',
              image:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop',
            },
            {
              title: 'Auto Brightness Sensor',
              description:
                'Built-in ambient light sensor reduces brightness automatically at dusk and dawn — optimal visibility with minimum power draw.',
              image:
                'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wide Colour Temperature',
              description:
                'Supports 2700K–10000K colour temperature adjustment — match the warmth of evening street lighting or the coolness of overcast daylight.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Energy-Efficient Driver',
              description:
                'High-efficiency LED drivers reduce power consumption by 30% vs previous generation at equivalent brightness.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'content',
          tabLabel: 'Content Management',
          heading: 'Manage from Anywhere. Display Everything.',
          description:
            'InfinityX Outdoor LED integrates with CAST CMS for remote content scheduling, real-time updates, and multi-site management — push content to a single screen or an entire outdoor network from a central web dashboard.',
          sectionImage:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Remote content management for outdoor LED network',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'CAST CMS Remote Management',
              description: 'Schedule playlists, push emergency content, and monitor screen health across every outdoor site from a single browser.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            },
            {
              title: 'Dayparting & Scheduling',
              description: 'Automate content changes by time of day — morning commuter content, daytime brand, evening entertainment.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
            },
            {
              title: '4G / LAN Connectivity',
              description: 'Integrated 4G modem option enables remote management on sites without fixed network infrastructure.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Outdoor Advertising',
          subtitle: 'Billboards & OOH Media',
          description:
            'High-brightness digital billboards for roadside, transit, and urban advertising — replace static prints with dynamic, remotely updated content.',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Stadiums & Arenas',
          subtitle: 'Sports & Entertainment',
          description:
            'Perimeter boards, scoreboard displays, and sponsor LED panels for sports stadiums, racing circuits, and entertainment arenas.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
        },
        {
          title: 'Transport Hubs',
          subtitle: 'Airports, Stations & Bus Depots',
          description:
            'Departure boards, wayfinding, advertising, and emergency information displays for transport hubs with 24/7 operational requirements.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Building Facades',
          subtitle: 'Corporate & Commercial Buildings',
          description:
            'Transform building exteriors into dynamic brand canvases — architectural LED media facades for corporate headquarters and commercial properties.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        'Pixel Pitch Range': 'P2.5 / P4 / P5 / P6 / P8 / P10',
        'IP Rating': 'IP65 (full weatherproof)',
        'Brightness': 'Up to 6000 nits',
        'Contrast Ratio': '5000:1',
        'Viewing Angle': '140° H / 140° V',
        'Refresh Rate': '1920 Hz',
        'Colour Gamut': '>95% DCI-P3',
        'Cabinet Material': 'Marine-grade anodised aluminium',
        'Cabinet Size': '960 × 960 mm (standard module)',
        'Cabinet Weight': '<22 kg per module',
        'Servicing': 'Front-access, tool-free',
        'Connectivity': 'RJ45 (LAN), optional 4G modem',
        'Power': 'Max 800W per cabinet',
        'Operating Temp': '-20°C – 50°C',
        'Operating Humidity': '10% – 95% RH',
        'Lifespan': '100,000 hours',
        'Operating Hours': '24/7',
        Warranty: '3 years',
      },
    },
  ],
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
  availableV1: true,
  products: [
    // ── Interactive Stylus ─────────────────────────────────────────────
    {
      slug: 'stylus',
      name: 'Interactive Stylus',
      description:
        'Precision dual-tip stylus with 8192 pressure levels for seamless writing and annotation on InfinityX Interactive Flat Panels.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      tagline: 'Write naturally. Annotate precisely. Create without limits.',
      heroImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&h=900&fit=crop',
      heroImageAlt: 'Interactive stylus pen for IFP panels',

      highlights: [
        {
          title: '8192 Pressure Levels',
          description: 'Capture every nuance from a light sketch to a bold line',
          image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop',
        },
        {
          title: 'Palm Rejection',
          description: 'Write naturally with your hand resting on the screen',
          image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop',
        },
        {
          title: 'Dual-Tip Design',
          description: 'Fine writing tip on one end, eraser on the other',
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
        },
        {
          title: 'Magnetic Snap',
          description: 'Attaches securely to the IFP bezel when not in use',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'writing',
          tabLabel: 'Writing',
          heading: 'Natural Writing. Zero Lag. Full Expression.',
          description:
            'The InfinityX Interactive Stylus responds to every stroke with sub-millisecond precision, supporting 8192 pressure levels so your writing feels as natural on the panel as it does on paper.',
          sectionImage:
            'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Stylus writing on interactive flat panel',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '8192 Pressure Levels',
              description:
                'Fine pressure sensitivity captures the difference between a thin annotation and a thick marker stroke — ideal for teachers, designers, and presenters alike.',
              image:
                'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&h=900&fit=crop',
            },
            {
              title: '<3 ms Latency',
              description:
                'Near-zero lag means your writing appears exactly when you expect it — no smearing, no delay, no frustration.',
              image:
                'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1200&h=900&fit=crop',
            },
            {
              title: 'Palm Rejection',
              description:
                'Advanced palm rejection technology lets you rest your hand naturally on the screen while writing — no accidental marks.',
              image:
                'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=900&fit=crop',
            },
            {
              title: 'Tilt Recognition',
              description:
                'Tilt the stylus for shading effects and broad strokes — perfect for whiteboard-style visual presentations.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'design',
          tabLabel: 'Design',
          heading: 'Dual-Tip. Magnetic. Always Ready.',
          description:
            "Engineered for the classroom and the boardroom, the stylus features a precision writing tip and a built-in eraser — plus a magnetic attachment strip so it's always where you need it.",
          sectionImage:
            'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Stylus attached magnetically to IFP bezel',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'Fine Writing Tip',
              description:
                '1.5 mm replaceable tip delivers precise lines for detailed annotations, diagrams, and mathematical notation.',
              image:
                'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&h=900&fit=crop',
            },
            {
              title: 'Built-in Eraser',
              description:
                'Flip the stylus to erase — the eraser end responds instantly with the same pressure sensitivity as the writing tip.',
              image:
                'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1200&h=900&fit=crop',
            },
            {
              title: 'Magnetic Bezel Clip',
              description:
                'Strong neodymium magnet snaps the stylus to the IFP panel frame — no dongles, no caps, no searching.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'No Charging Required',
              description:
                'Passive EMR technology means the stylus never needs charging, batteries, or pairing — just pick it up and write.',
              image:
                'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'compatibility',
          tabLabel: 'Compatibility',
          heading: 'Works With Every InfinityX IFP.',
          description:
            'The InfinityX Interactive Stylus is designed to work seamlessly with all InfinityX Interactive Flat Panel series — including InfinityX SmartClass education panels and professional display panels.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Stylus used across multiple InfinityX IFP models',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'InfinityX SmartClass Series',
              description: 'Full pressure and tilt support on all SmartClass education IFP models.',
              image:
                'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
            },
            {
              title: 'Professional Series IFP',
              description: 'Compatible with InfinityX Pro and commercial IFP display panels.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            },
            {
              title: 'Software Annotation',
              description:
                'Works with InfinityX whiteboard software and leading third-party annotation apps.',
              image:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Education',
          subtitle: 'Classrooms & Lecture Halls',
          description:
            'Teachers annotate lessons, students take notes, and collaborative whiteboard sessions come to life with natural, paper-like writing.',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Corporate',
          subtitle: 'Meeting Rooms & Boardrooms',
          description:
            'Annotate presentations in real time, mark up documents, and capture whiteboard sessions for instant sharing.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Design & Creative',
          subtitle: 'Studios & Design Teams',
          description:
            'Sketch concepts, mark up technical drawings, and iterate on visual ideas with precision pressure sensitivity.',
          image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=400&fit=crop',
        },
        {
          title: 'Training',
          subtitle: 'Workshops & Training Centres',
          description:
            'Trainers demonstrate processes, diagram workflows, and guide hands-on sessions with clear, legible pen input.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        Technology: 'Passive EMR (Electromagnetic Resonance)',
        'Pressure Levels': '8192',
        'Tip Size': '1.5 mm (replaceable)',
        Latency: '<3 ms',
        'Tilt Angle': 'Up to 60°',
        Eraser: 'Built-in (top end)',
        'Palm Rejection': 'Yes',
        'Power Source': 'No battery required (passive)',
        Attachment: 'Magnetic bezel clip',
        'Compatible Panels': 'All InfinityX IFP series (65", 75", 86", 98")',
        Dimensions: '175 × 12 × 12 mm',
        Weight: '22 g',
        Colour: 'Matte Black / White',
        Warranty: '1 year',
      },
    },

    // ── Mobile Floor Stand ─────────────────────────────────────────────
    {
      slug: 'floor-stand',
      name: 'Mobile Floor Stand',
      description:
        'Height-adjustable aluminium floor stand with 360° locking castors — designed for InfinityX IFP panels from 65" to 98".',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      tagline: 'Move it. Position it. Lock it. Present anywhere.',
      heroImage:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
      heroImageAlt: 'Mobile floor stand with IFP panel in conference room',

      highlights: [
        {
          title: '360° Locking Castors',
          description: 'Roll freely, then lock in place with a single tap',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        },
        {
          title: '900–1500 mm Height Range',
          description: 'Precise height adjustment for any user or space',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
        {
          title: 'Up to 120 kg Load',
          description: 'Rated for the largest 98" commercial IFP panels',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
        },
        {
          title: 'Integrated Cable Management',
          description: 'Conceals all cables inside the stand column',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'mobility',
          tabLabel: 'Mobility',
          heading: 'Roll In. Lock Down. Present.',
          description:
            'Four heavy-duty 75 mm dual-wheel castors with individual brakes let you reposition the stand in seconds — then lock it firmly in place for a stable, shake-free presentation surface.',
          sectionImage:
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Mobile floor stand being rolled into position',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: '360° Rotating Castors',
              description:
                'All four wheels rotate 360° independently — navigate corridors, doorways, and tight spaces without lifting.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop',
            },
            {
              title: 'Dual-Lock Brake System',
              description:
                'Each castor locks both rotation and rolling with a single foot press — the panel stays rock-solid during use.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wide Wheelbase',
              description:
                'Reinforced base spreads load evenly across all four wheels, preventing tipping even with the heaviest 98" panels.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Tool-Free Height Adjust',
              description:
                'Gas-assist column adjusts from 900 mm to 1500 mm with one hand — set optimal viewing height in seconds.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'build',
          tabLabel: 'Build Quality',
          heading: 'Aluminium Alloy. Built to Last.',
          description:
            'Aircraft-grade aluminium alloy construction keeps weight low without compromising structural integrity. The stand is rated for continuous commercial use in education, corporate, and hospitality environments.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Heavy-duty aluminium floor stand column detail',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: '120 kg Load Capacity',
              description:
                'Tested and rated for displays up to 120 kg — compatible with InfinityX IFP panels from 65" to 98".',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Anti-Tip Safety Anchor',
              description:
                'Optional wall-safety-tether attachment point for installations where building codes require anti-tip measures.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Cable Management Channel',
              description:
                'Dedicated internal cable conduit routes HDMI, USB, and power cables from panel to base — hidden from view.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
            {
              title: 'VESA Universal Bracket',
              description:
                'Adjustable VESA mounting plate fits 200×200 mm through 800×600 mm patterns — supports virtually all InfinityX panel models.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'compatibility',
          tabLabel: 'Compatibility',
          heading: 'Fits Every InfinityX IFP Panel.',
          description:
            'The adjustable VESA mounting plate and generous height range make this stand compatible with all InfinityX Interactive Flat Panel models from 65" through 98".',
          sectionImage:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Floor stand with InfinityX IFP panel mounted',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: '65" IFP Panels',
              description: 'Supports all InfinityX 65-inch interactive flat panel models.',
              image:
                'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
            },
            {
              title: '75" & 86" IFP Panels',
              description: 'Full support for mid-size InfinityX classroom and boardroom panels.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            },
            {
              title: '98" IFP Panels',
              description: 'Heavy-duty rated for InfinityX 98-inch flagship panel installations.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Education',
          subtitle: 'Classrooms & Lecture Halls',
          description:
            'Move the IFP panel between classrooms, position it for optimal student viewing, and lock it in place for interactive lessons.',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Corporate',
          subtitle: 'Meeting Rooms & Huddle Spaces',
          description:
            'Wheel the panel into any meeting room, adjust height to match the presenter, and remove it when the space is needed for something else.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Events & Trade Shows',
          subtitle: 'Exhibitions & Conferences',
          description:
            'Portable display solution for exhibitions, road shows, product launches, and temporary installations.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        },
        {
          title: 'Hospitality',
          subtitle: 'Hotels & Event Spaces',
          description:
            'Deploy interactive displays in lobbies and event spaces with no permanent installation required.',
          image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        'VESA Compatibility': '200×200 mm to 800×600 mm',
        'Max Display Size': '98 inches',
        'Load Capacity': '120 kg',
        'Height Range': '900 mm – 1500 mm (floor to panel bottom)',
        'Height Adjustment': 'Gas-assist, tool-free',
        Castors: '4 × 75 mm dual-wheel, 360° rotation',
        'Castor Brakes': 'Individual foot-lock on all 4 wheels',
        'Column Material': 'Aircraft-grade aluminium alloy',
        'Base Material': 'Steel with powder-coat finish',
        'Cable Management': 'Internal conduit, top-to-base routing',
        'Anti-Tip Anchor': 'Optional wall-tether attachment point',
        'Stand Dimensions': '480 × 480 × 1600 mm (approx.)',
        'Stand Weight': '18 kg',
        Colour: 'Matte Black / Silver',
        Warranty: '1 year',
      },
    },

    // ── Interactive Board ──────────────────────────────────────────────
    {
      slug: 'interactive-board',
      name: 'Interactive Board',
      description:
        'Slim magnetic writing board companion for IFP panels — dual-surface dry-erase and digital pen input for hybrid teaching and collaboration.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      tagline: 'Write more. Present better. Collaborate everywhere.',
      heroImage:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
      heroImageAlt: 'Interactive whiteboard in classroom collaboration session',

      highlights: [
        {
          title: 'Dual-Surface Writing',
          description: 'Dry-erase marker side and digital pen surface in one board',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        },
        {
          title: 'Magnetic Whiteboard',
          description: 'Attach documents, printouts, and visual aids with magnets',
          image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop',
        },
        {
          title: 'IFP Side-Mount Kit',
          description: 'Mounts beside any InfinityX IFP to extend writing space',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        },
        {
          title: 'Anti-Ghost Surface',
          description: 'Nano-coated surface erases completely — no ghost marks',
          image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop',
        },
      ],

      featureGroups: [
        {
          id: 'surface',
          tabLabel: 'Surface',
          heading: 'Write Freely. Erase Completely.',
          description:
            'The premium nano-coated dry-erase surface accepts all standard whiteboard markers and erases cleanly without ghost marks — even after weeks of heavy use.',
          sectionImage:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Writing on interactive board dry-erase surface',
          bgColor: 'white',
          layout: 'showcase',
          cards: [
            {
              title: 'Anti-Ghost Nano Coating',
              description:
                'Engineered surface prevents marker pigment from bonding — wipe clean every time with no residue or staining.',
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop',
            },
            {
              title: 'All-Marker Compatible',
              description:
                'Works with any standard dry-erase marker brand — no proprietary consumables required.',
              image:
                'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1200&h=900&fit=crop',
            },
            {
              title: 'Magnetic Surface',
              description:
                'Strong magnetic layer holds printed documents, flashcards, diagrams, and teaching materials for visual displays.',
              image:
                'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&h=900&fit=crop',
            },
            {
              title: 'Scratch-Resistant Enamel',
              description:
                'Porcelain enamel-over-steel surface is rated for 100,000+ erase cycles without degradation — designed for decades of use.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'integration',
          tabLabel: 'Integration',
          heading: 'Extend Your IFP. Every Session.',
          description:
            'The InfinityX Interactive Board mounts directly beside any InfinityX IFP panel using the included side-mount bracket — creating a seamless hybrid teaching or presentation wall with both digital and analogue writing space.',
          sectionImage:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Interactive board mounted beside IFP panel',
          bgColor: 'surface',
          layout: 'showcase',
          cards: [
            {
              title: 'IFP Side-Mount Bracket',
              description:
                'Included bracket attaches the board flush to the left or right side of any InfinityX IFP without tools.',
              image:
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop',
            },
            {
              title: 'Wall Mount Option',
              description:
                'Also available as a standalone wall-mounted board for rooms without an IFP — uses standard keyhole mounting.',
              image:
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop',
            },
            {
              title: 'Mobile Stand Compatible',
              description:
                'Pairs with the InfinityX Mobile Floor Stand for a fully portable analogue-and-digital presentation system.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=900&fit=crop',
            },
            {
              title: 'Multiple Size Options',
              description:
                'Available in widths from 900 mm to 2400 mm to match the scale of your IFP panel and room.',
              image:
                'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=900&fit=crop',
            },
          ],
        },
        {
          id: 'build',
          tabLabel: 'Build Quality',
          heading: 'Classroom-Grade. Built for Daily Use.',
          description:
            'Aluminium-framed with rounded safety corners and a reinforced steel backing, the InfinityX Interactive Board is built to withstand daily classroom use for years.',
          sectionImage:
            'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1920&h=1080&fit=crop',
          sectionImageAlt: 'Close-up of interactive board aluminium frame',
          bgColor: 'white',
          layout: 'cards',
          cards: [
            {
              title: 'Aluminium Alloy Frame',
              description:
                'Lightweight, corrosion-resistant frame with brushed finish and rounded safety corners.',
              image:
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
            },
            {
              title: 'Steel-Backed Panel',
              description:
                'Rigid steel backing prevents warping and provides the magnetic layer for document attachment.',
              image:
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
            },
            {
              title: '100,000+ Erase Cycles',
              description:
                'Porcelain enamel surface rated for over 100,000 erase cycles — outlasts standard painted boards.',
              image:
                'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=400&fit=crop',
            },
          ],
        },
      ],

      scenarios: [
        {
          title: 'Education',
          subtitle: 'Classrooms & Training Rooms',
          description:
            'Extend IFP teaching space with side-by-side analogue writing — teachers use both digital and whiteboard surfaces in the same lesson.',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
        },
        {
          title: 'Corporate',
          subtitle: 'Brainstorming & Strategy Sessions',
          description:
            'Capture ideas on the whiteboard while referencing content on the IFP — essential for strategy workshops and collaborative planning.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        },
        {
          title: 'Training',
          subtitle: 'Workshops & Skill Sessions',
          description:
            'Trainers keep step-by-step process diagrams on the board while walking through digital examples on the panel.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        },
        {
          title: 'Design Reviews',
          subtitle: 'Creative & Technical Teams',
          description:
            'Sketch rough concepts on the board, photograph them, and import into the IFP panel for digital refinement.',
          image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=400&fit=crop',
        },
      ],

      specs: {
        'Surface Type': 'Porcelain enamel-over-steel (dry-erase + magnetic)',
        'Erase Cycle Rating': '100,000+ cycles (porcelain enamel)',
        'Marker Compatibility': 'All standard dry-erase markers',
        'Magnetic Strength': 'Holds up to 4 A4 sheets (50 g)',
        'Frame Material': 'Anodised aluminium alloy',
        Backing: 'Cold-rolled steel',
        Mounting: 'IFP side-mount bracket (included) + keyhole wall mount',
        'Available Widths': '900 mm / 1200 mm / 1500 mm / 1800 mm / 2400 mm',
        Height: '1200 mm (standard)',
        Depth: '18 mm (frame)',
        'Weight (1200 mm)': '8.5 kg',
        'Corner Type': 'Rounded safety corners (R20)',
        Colour: 'White surface / Silver frame',
        Warranty: '5 years (surface) / 1 year (frame)',
      },
    },
  ],
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
