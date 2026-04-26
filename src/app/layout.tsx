import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieBanner } from "@/components/CookieBanner";

const nexaRegular = localFont({
  src: "../../public/fonts/NexaRegular.woff2",
  variable: "--font-nexa-regular",
  weight: "400",
  style: "normal",
  display: "swap",
});

const nexaBold = localFont({
  src: "../../public/fonts/NexaBold.woff2",
  variable: "--font-nexa-bold",
  weight: "700",
  style: "normal",
  display: "swap",
});

const nexaBlack = localFont({
  src: "../../public/fonts/NexaBlack.woff2",
  variable: "--font-nexa-black",
  weight: "900",
  style: "normal",
  display: "swap",
});

const BASE_URL = "https://infinityxglobal.com";

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "InfinityX Global",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      description:
        "India's trusted system integration partner delivering high-performance IT infrastructure and intelligent display solutions since 2014. Interactive flat panels, kiosks, digital signage, LED video walls, and CCTV.",
      foundingDate: "2014",
      telephone: "+918228822849",
      email: "contact@infinityxglobal.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Interactive Flat Panels",
        "Digital Kiosks",
        "CCTV Security Systems",
        "LED Video Walls",
        "AV Integration",
        "Digital Signage",
        "IT Infrastructure",
        "Collaboration Technology",
      ],
      hasCredential: ["MSME Certified", "ISO Certified", "GeM Registered Vendor"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "InfinityX Global",
      url: BASE_URL,
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/products?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "InfinityX Global | Premier System Integration & Intelligent Display Solutions",
    template: "%s | InfinityX Global",
  },
  description:
    "Premier system integration partner delivering high-performance IT infrastructure and intelligent display solutions. Interactive flat panels, kiosks, LED video walls, and CCTV — trusted by enterprises and schools across India since 2014.",
  keywords: [
    "system integration India",
    "IT infrastructure solutions",
    "intelligent display solutions",
    "interactive flat panel India",
    "AV integration Hyderabad",
    "display solutions India",
    "digital kiosk India",
    "CCTV solutions India",
  ],
  icons: { icon: "/seo/favicon.ico" },
  openGraph: {
    siteName: "InfinityX Global",
    locale: "en_IN",
    type: "website",
    title: "InfinityX Global | Premier System Integration & Intelligent Display Solutions",
    description:
      "Premier system integration partner delivering high-performance IT infrastructure and intelligent display solutions. Interactive flat panels, kiosks, LED video walls, and CCTV across India.",
    url: BASE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "InfinityX Global" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfinityX Global | Premier System Integration & Intelligent Display Solutions",
    description:
      "Premier system integration partner delivering high-performance IT infrastructure and intelligent display solutions across India.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nexaRegular.variable} ${nexaBold.variable} ${nexaBlack.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans text-[#333333] bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
