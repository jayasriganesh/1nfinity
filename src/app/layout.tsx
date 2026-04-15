import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "InfinityX Global — Collaboration Solutions for Enterprise & Education",
  description:
    "InfinityX Global delivers world-class AV integration and collaboration solutions across India. Interactive flat panels, kiosks, digital signage, and CCTV — for enterprise and education.",
  icons: {
    icon: "/seo/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
