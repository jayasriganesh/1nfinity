"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SubTabContent {
  label: string;
  title?: string;
  description: string;
  href: string;
  backgroundImage: string;
}

interface MainTab {
  label: string;
  subTabs: SubTabContent[];
}

const TABS_DATA: MainTab[] = [
  {
    label: "Industry",
    subTabs: [
      {
        label: "Enterprise",
        title: "Enterprise Solutions",
        description:
          "We offer easy-to-use, high-quality conferencing solutions for all room sizes — from 2-person huddle spaces to 500-seat auditoriums.",
        href: "/solutions/enterprise",
        backgroundImage: "/images/solutions/enterprise.jpg",
      },
      {
        label: "Education",
        title: "Education Solutions",
        description:
          "Designed to transform traditional teaching into immersive and engaging learning experiences across K-12, higher education, and professional training.",
        href: "/solutions/education",
        backgroundImage: "/images/solutions/education.jpg",
      },
    ],
  },
  {
    label: "Platform",
    subTabs: [
      {
        label: "Microsoft Teams",
        title: "Microsoft Teams Rooms",
        description:
          "Pre-certified Microsoft Teams Rooms hardware — one-touch join, AI auto-framing, and wireless sharing for any room size.",
        href: "/solutions/enterprise",
        backgroundImage: "/images/solutions/mtr.jpg",
      },
      {
        label: "Zoom Rooms",
        title: "Zoom Rooms",
        description:
          "Zoom Rooms certified interactive flat panels delivering an unparalleled UC experience from huddle rooms to boardrooms.",
        href: "/solutions/enterprise",
        backgroundImage: "/images/solutions/zoom.jpg",
      },
    ],
  },
];

function getAllBackgroundImages(): string[] {
  return TABS_DATA.flatMap((tab) => tab.subTabs.map((s) => s.backgroundImage));
}

export function SolutionsSection() {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const allImages = getAllBackgroundImages();
  const currentTab = TABS_DATA[activeMainTab];
  const currentSubTab = currentTab.subTabs[activeSubTab];
  const activeImage = currentSubTab.backgroundImage;

  function handleMainTabClick(index: number) {
    setActiveMainTab(index);
    setActiveSubTab(0);
  }

  function handleSubTabClick(index: number) {
    setActiveSubTab(index);
  }

  return (
    <section className="relative w-full overflow-hidden h-auto min-h-[500px] md:h-[768px]">
      {/* Background images with cross-fade */}
      {allImages.map((src) => (
        <div
          key={src}
          className="pointer-events-none absolute inset-0"
          style={{ opacity: src === activeImage ? 1 : 0, transition: "opacity 0.6s ease" }}
        >
          <Image src={src} alt="" fill style={{ objectFit: "cover" }} priority />
        </div>
      ))}

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex flex-col md:flex-row h-full items-start md:items-center px-4 py-10 md:py-0"
        style={{ maxWidth: 1230 }}
      >
        {/* Left Sidebar */}
        <div className="flex flex-col justify-center w-full md:w-[340px] md:flex-shrink-0 md:h-full">
          <nav className="flex flex-col">
            {TABS_DATA.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleMainTabClick(index)}
                className="cursor-pointer border-none bg-transparent text-left"
                style={{
                  fontSize: 24,
                  fontFamily: "NexaRegular, sans-serif",
                  color: activeMainTab === index ? "#196FD2" : "#333",
                  padding: "20px 0",
                  lineHeight: "36px",
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <Link
            href="/solutions"
            className="mt-auto inline-flex items-center gap-1 no-underline"
            style={{ fontSize: 14, color: "#196FD2", marginTop: 40 }}
          >
            All Solutions <span style={{ fontSize: 14 }}>&gt;</span>
          </Link>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col justify-center w-full md:w-[860px] pl-0 md:pl-[30px] mt-6 md:mt-0">
          {/* Sub-tabs */}
          <div className="flex gap-8" style={{ marginBottom: 20 }}>
            {currentTab.subTabs.map((subTab, index) => (
              <button
                key={subTab.label}
                type="button"
                onClick={() => handleSubTabClick(index)}
                className="cursor-pointer border-none bg-transparent text-left"
                style={{
                  fontSize: 20,
                  color: activeSubTab === index ? "#333" : "#999",
                }}
              >
                {subTab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            {currentSubTab.title && (
              <h3
                style={{
                  fontSize: 32,
                  fontFamily: "NexaRegular, sans-serif",
                  color: "#333",
                  lineHeight: "48px",
                  marginBottom: 15,
                  fontWeight: 400,
                }}
              >
                {currentSubTab.title}
              </h3>
            )}

            <p
              style={{
                fontSize: 14,
                color: "#333",
                lineHeight: "21px",
                marginBottom: 40,
                maxWidth: 520,
              }}
            >
              {currentSubTab.description}
            </p>

            <Link
              href={currentSubTab.href}
              className="inline-flex items-center gap-2 rounded-[5px] text-sm font-medium text-white no-underline"
              style={{
                backgroundColor: "#196FD2",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 18,
                paddingBottom: 14,
              }}
            >
              Learn More <span>&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
