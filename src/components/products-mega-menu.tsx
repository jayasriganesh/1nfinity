"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductsMegaMenuProps {
  onClose?: () => void;
}

interface CategoryItem {
  label: string;
  href: string;
  subCategories?: { label: string; href: string }[];
  series?: { label: string; href: string }[];
  image?: string;
  allLabel?: string;
  allHref?: string;
}

export function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ifp");

  const featured = [
    { label: "Get Quote", href: "/get-quote" },
    { label: "Contact Sales", href: "/contact" },
  ];

  const categories: CategoryItem[] = [
    {
      label: "Interactive Flat Panels",
      href: "/products/interactive-flat-panels",
      series: [
        { label: "Series A", href: "/products/interactive-flat-panels/series-a" },
        { label: "Series B", href: "/products/interactive-flat-panels/series-b" },
        { label: "Series C", href: "/products/interactive-flat-panels/series-c" },
      ],
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
      allLabel: "All Interactive Flat Panels",
      allHref: "/products/interactive-flat-panels",
    },
    {
      label: "Commercial Display",
      href: "/products/commercial-display",
      subCategories: [
        { label: "Kiosks & Signage",         href: "/products/kiosks" },
        { label: "Professional Monitors",     href: "/products/commercial-display/professional-monitors" },
        { label: "Mirror TV",                 href: "/products/commercial-display/waterproof-mirror-tv" },
        { label: "Digital Standees",          href: "/products/commercial-display/digital-standee" },
      ],
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",
      allLabel: "All Commercial Display",
      allHref: "/products/commercial-display",
    },
    {
      label: "LED Display",
      href: "/products/led-display",
      subCategories: [
        { label: "COB LED Video Wall",        href: "/products/led-display/cob-led-video-wall" },
        { label: "Transparent LED",           href: "/products/led-display/transparent-led" },
        { label: "All-in-One LED",            href: "/products/led-display/all-in-one-led" },
        { label: "Outdoor LED",               href: "/products/led-display/outdoor-led" },
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      allLabel: "All LED Display",
      allHref: "/products/led-display",
    },
    {
      label: "Accessories",
      href: "/products/accessories",
      subCategories: [
        { label: "Stylus",                    href: "/products/accessories/stylus" },
        { label: "Stands",                    href: "/products/accessories/floor-stand" },
        { label: "Boards",                    href: "/products/accessories/interactive-board" },
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      allLabel: "View Accessories",
      allHref: "/products",
    },
    {
      label: "Unified Communication",
      href: "/products/unified-communication",
      subCategories: [
        { label: "CCTV",                      href: "/products/cctv" },
      ],
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
      allLabel: "View UC Products",
      allHref: "/products",
    },
    {
      label: "Software (CAST CMS)",
      href: "/products/software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      allLabel: "Learn More",
      allHref: "/products/software",
    },
  ];

  const activeCat = categories.find((_, i) =>
    i === 0 && activeCategory === "ifp" ? true :
    categories[i].label.toLowerCase().replace(/\s+/g, "-") === activeCategory
  ) || categories[0];

  const getCatKey = (cat: CategoryItem, i: number) =>
    i === 0 ? "ifp" : cat.label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-[1230px] px-[15px]">
        <div className="flex min-h-[500px]">
          {/* Left Sidebar — Categories */}
          <div className="w-[280px] flex-shrink-0 border-r border-[#e5e5e5] py-8 pr-6">
            {/* Featured */}
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Featured</h3>
            <div className="space-y-1 mb-8">
              {featured.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[#999]">&gt;</span>
                </Link>
              ))}
            </div>

            {/* Products */}
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Products</h3>
            <div className="space-y-1">
              {categories.map((cat, i) => {
                const key = getCatKey(cat, i);
                return (
                  <button
                    key={cat.label}
                    onMouseEnter={() => setActiveCategory(key)}
                    onClick={() => setActiveCategory(key)}
                    className={cn(
                      "w-full flex items-center justify-between py-2 font-sans text-[14px] transition-colors text-left",
                      activeCategory === key
                        ? "text-[#196FD2]"
                        : "text-[#333] hover:text-[#196FD2]"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span className={activeCategory === key ? "text-[#196FD2]" : "text-[#999]"}>&gt;</span>
                  </button>
                );
              })}
              <Link
                href="/products"
                onClick={onClose}
                className="block py-2 font-sans text-[14px] text-[#196FD2] hover:underline mt-2"
              >
                All Products
              </Link>
            </div>
          </div>

          {/* Middle — Sub-categories & Series */}
          <div className="flex-1 flex py-8">
            {/* Sub-categories column */}
            {activeCat.subCategories && activeCat.subCategories.length > 0 && (
              <div className="flex-1 px-8 border-r border-[#e5e5e5]">
                <div className="space-y-2">
                  {activeCat.subCategories.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                    >
                      <span>{sub.label}</span>
                      <span className="text-[#196FD2]">&gt;</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Series column */}
            {activeCat.series && activeCat.series.length > 0 && (
              <div className="flex-1 px-8 border-r border-[#e5e5e5]">
                <div className="space-y-2">
                  {activeCat.series.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                    >
                      <span>{s.label}</span>
                      <span className="text-[#196FD2]">&gt;</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — Product Image Preview */}
          <div className="w-[300px] flex-shrink-0 py-8 pl-8 flex flex-col items-center justify-center">
            {activeCat.image && (
              <div className="relative w-[240px] h-[180px] bg-[#f5f5f5] rounded-lg overflow-hidden mb-6">
                <Image
                  src={activeCat.image}
                  alt={activeCat.label}
                  fill
                  className="object-contain"
                  sizes="240px"
                />
              </div>
            )}
            {activeCat.allLabel && activeCat.allHref && (
              <Link
                href={activeCat.allHref}
                onClick={onClose}
                className="flex items-center gap-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
              >
                <span>{activeCat.allLabel}</span>
                <span className="text-[#196FD2]">&gt;</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
