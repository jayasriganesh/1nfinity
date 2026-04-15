"use client";

import Link from "next/link";

interface ExploreMegaMenuProps {
  onClose?: () => void;
}

export function ExploreMegaMenu({ onClose }: ExploreMegaMenuProps) {
  const company = [
    { label: "About Us", href: "/about" },
    { label: "Certifications & Awards", href: "/about#awards" },
    { label: "Contact Us", href: "/contact" },
  ];

  const news = [
    { label: "News & Events", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-[1230px] px-[15px]">
        <div className="flex min-h-[300px] py-8">
          {/* Company */}
          <div className="flex-1 pr-8 border-r border-[#e5e5e5]">
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Company</h3>
            <div className="space-y-1">
              {company.map((item) => (
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
          </div>

          {/* News & Policies */}
          <div className="flex-1 px-8">
            <h3 className="font-heading text-[20px] text-[#333] mb-4">News &amp; More</h3>
            <div className="space-y-1">
              {news.map((item) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
