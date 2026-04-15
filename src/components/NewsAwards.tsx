"use client";

import Link from "next/link";

interface CardData {
  title: string;
  description: string;
  btnText: string;
  btnHref: string;
  bgImage: string;
}

const cards: CardData[] = [
  {
    title: "CERTIFICATIONS & AWARDS",
    description:
      "InfinityX Global is MSME registered, ISO certified, and GeM empanelled — a trusted, compliant partner for enterprise and government procurement.",
    btnText: "Learn More",
    btnHref: "/about#awards",
    bgImage: "/images/news/awards.jpg",
  },
  {
    title: "OUR STORY",
    description:
      "Founded in 2014, InfinityX Global has been at the forefront of AV integration across India — 4000+ installations and counting.",
    btnText: "About Us",
    btnHref: "/about",
    bgImage: "/images/news/social-responsibility.jpg",
  },
  {
    title: "NEWS & EVENTS",
    description: "",
    btnText: "View Updates",
    btnHref: "/blog",
    bgImage: "/images/news/news-events.jpg",
  },
];

export function NewsAwards() {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-[762px]">
      {cards.map((card) => (
        <div
          key={card.title}
          className="group relative flex-1 overflow-hidden min-h-[300px] md:min-h-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${card.bgImage})` }}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Hover darkening overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

          {/* Card content */}
          <div className="absolute bottom-[60px] left-[40px] right-[40px] text-white">
            <h3 className="font-heading text-[24px] leading-[36px] uppercase tracking-[1px] mb-[20px]">
              {card.title}
            </h3>
            {card.description && (
              <p className="text-[14px] leading-[21px] text-white/85 mb-[30px]">
                {card.description}
              </p>
            )}
            <Link
              href={card.btnHref}
              className="inline-flex items-center text-[14px] text-white hover:underline transition-opacity duration-300"
            >
              {card.btnText}
              <span className="ml-2">&gt;</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
