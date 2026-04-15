"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SolutionsMegaMenuProps {
  onClose?: () => void;
}

export function SolutionsMegaMenu({ onClose }: SolutionsMegaMenuProps) {
  const [activeItem, setActiveItem] = useState("enterprise");

  const industry = [
    {
      id: "enterprise",
      label: "Enterprise",
      href: "/solutions/enterprise",
      description: "We offer easy-to-use, high-quality conferencing solutions for all room sizes.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
    {
      id: "education",
      label: "Education",
      href: "/solutions/education",
      description: "Designed to transform traditional teaching methods into immersive and engaging learning experiences.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    },
  ];

  const platform = [
    {
      id: "teams",
      label: "Microsoft Teams",
      href: "/solutions/enterprise",
      description: "Microsoft Teams Rooms certified displays and all-in-one panels — one-touch join, auto-framing, wireless sharing.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    },
    {
      id: "zoom",
      label: "Zoom Rooms",
      href: "/solutions/enterprise",
      description: "Zoom Rooms certified hardware for any room size — from huddle spaces to large boardrooms.",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
    },
  ];

  const allItems = [...industry, ...platform];
  const active = allItems.find((i) => i.id === activeItem) || industry[0];

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-[1230px] px-[15px]">
        <div className="flex min-h-[400px]">
          {/* Left — Categories */}
          <div className="w-[280px] flex-shrink-0 border-r border-[#e5e5e5] py-8 pr-6">
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Industry</h3>
            <div className="space-y-1 mb-8">
              {industry.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between py-2 font-sans text-[14px] transition-colors text-left",
                    activeItem === item.id ? "text-[#196FD2]" : "text-[#333] hover:text-[#196FD2]"
                  )}
                >
                  <span>{item.label}</span>
                  <span className={activeItem === item.id ? "text-[#196FD2]" : "text-[#999]"}>&gt;</span>
                </button>
              ))}
            </div>
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Platform</h3>
            <div className="space-y-1">
              {platform.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between py-2 font-sans text-[14px] transition-colors text-left",
                    activeItem === item.id ? "text-[#196FD2]" : "text-[#333] hover:text-[#196FD2]"
                  )}
                >
                  <span>{item.label}</span>
                  <span className={activeItem === item.id ? "text-[#196FD2]" : "text-[#999]"}>&gt;</span>
                </button>
              ))}
              <Link href="/solutions" onClick={onClose} className="block py-2 font-sans text-[14px] text-[#196FD2] hover:underline mt-2">
                All Solutions
              </Link>
            </div>
          </div>

          {/* Middle — Description */}
          <div className="flex-1 py-8 px-8">
            <h3 className="font-heading text-[24px] text-[#333] mb-3">{active.label}</h3>
            <p className="font-sans text-[14px] text-[#666] leading-[21px] mb-6 max-w-[400px]">{active.description}</p>
            <Link
              href={active.href}
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-[5px] bg-[#196FD2] px-[30px] pt-[18px] pb-[14px] font-sans text-[14px] text-white"
            >
              Learn More <span>&gt;</span>
            </Link>
          </div>

          {/* Right — Image */}
          <div className="w-[300px] flex-shrink-0 py-8 pl-8 flex items-center justify-center">
            <div className="relative w-[260px] h-[180px] bg-[#f5f5f5] rounded-lg overflow-hidden">
              <Image src={active.image} alt={active.label} fill className="object-cover" sizes="260px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
