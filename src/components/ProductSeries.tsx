"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCard {
  label: string;
  href: string;
  image: string;
}

interface ProductSlide {
  /** Wide card spanning full width */
  wide: ProductCard;
  /** Two tall cards side by side */
  tall: [ProductCard, ProductCard];
  /** Whether wide card is on top (true) or bottom (false) */
  wideOnTop: boolean;
}

const productSlides: ProductSlide[] = [
  {
    wideOnTop: true,
    wide: {
      label: "Interactive Flat Panel",
      href: "/products/interactive-flat-panels",
      image: "/images/products/interactive-flat-panel.jpg",
    },
    tall: [
      {
        label: "LED Display",
        href: "/products/led-display",
        image: "/images/products/led-display.jpg",
      },
      {
        label: "Commercial\nDisplay",
        href: "/products/commercial-display",
        image: "/images/products/commercial-display.jpg",
      },
    ],
  },
  {
    wideOnTop: false,
    wide: {
      label: "Software",
      href: "/products/software",
      image: "/images/products/software.jpg",
    },
    tall: [
      {
        label: "Accessories",
        href: "/products/accessories",
        image: "/images/products/accessories.jpg",
      },
      {
        label: "Unified\nCommunication",
        href: "/products/unified-communication",
        image: "/images/products/unified-communication.jpg",
      },
    ],
  },
];

function Card({
  card,
  className,
}: {
  card: ProductCard;
  className?: string;
}) {
  return (
    <Link
      href={card.href}
      className={`group relative block overflow-hidden ${className ?? ""}`}
    >
      <Image
        src={card.image}
        alt={card.label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-[30px] left-[30px] z-10 whitespace-pre-line text-[20px] leading-[30px] text-white font-[NexaRegular,sans-serif]">
        {card.label}
      </span>
    </Link>
  );
}

export function ProductSeries() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = productSlides[currentSlide];

  const wideRow = (
    <Card
      card={slide.wide}
      className="h-[250px] md:h-[446px] w-full"
    />
  );

  const tallRow = (
    <div className="flex flex-col md:flex-row h-auto md:h-[595px] gap-[10px]">
      <Card card={slide.tall[0]} className="flex-1 h-[250px] md:h-auto" />
      <Card card={slide.tall[1]} className="flex-1 h-[250px] md:h-auto" />
    </div>
  );

  return (
    <section className="w-full bg-white py-[40px] md:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <div className="flex flex-col gap-[10px]">
          {slide.wideOnTop ? (
            <>
              {wideRow}
              {tallRow}
            </>
          ) : (
            <>
              {tallRow}
              {wideRow}
            </>
          )}
        </div>

        {/* Navigation dots */}
        <div className="mt-[40px] flex justify-center gap-[8px]">
          {productSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[10px] w-[10px] rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-[#196FD2]"
                  : "border border-[#ccc] bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
