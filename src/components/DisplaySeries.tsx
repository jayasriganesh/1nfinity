"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Slide {
  bg: string;
  textWhite: boolean;
  title: string;
  subtitle: string;
  btnText: string;
  btnHref: string;
}

const slides: Slide[] = [
  {
    bg: "/images/v6series/ultra-wide.jpg",
    textWhite: true,
    title: "ULTRA IMMERSIVE VISION",
    subtitle: "InfinityX Commercial Display Solutions",
    btnText: "Learn More",
    btnHref: "/products/commercial-display",
  },
  {
    bg: "/images/v6series/raptor-led.jpg",
    textWhite: false,
    title: "Simple, Smart, Connected",
    subtitle: "InfinityX Integrated LED Wall Solutions",
    btnText: "Learn More",
    btnHref: "/products/led-display",
  },
  {
    bg: "/images/v6series/cma-series.jpg",
    textWhite: false,
    title: "Crystal-Clear, Stable, Multifunctional",
    subtitle: "InfinityX Interactive Flat Panels",
    btnText: "Learn More",
    btnHref: "/products/interactive-flat-panels",
  },
];

export function DisplaySeries() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[762px] overflow-hidden">
      {/* Background images with fade transition */}
      {slides.map((slide, index) => (
        <img
          key={slide.bg}
          src={slide.bg}
          alt={slide.subtitle}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        />
      ))}

      {/* Text overlay */}
      <div className="relative h-full mx-auto max-w-[1230px] px-4">
        {slides.map((slide, index) => {
          const textColor = slide.textWhite ? "text-white" : "text-[#333]";

          return (
            <div
              key={slide.bg}
              className="absolute top-[30%] left-4 max-w-[500px] transition-opacity duration-700 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <h2
                className={`font-heading text-[24px] md:text-[36px] leading-[36px] md:leading-[54px] uppercase mb-[10px] md:mb-[15px] ${textColor}`}
              >
                {slide.title}
              </h2>
              <p
                className={`font-sans text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] mb-[20px] md:mb-[40px] ${textColor}`}
              >
                {slide.subtitle}
              </p>
              <Link
                href={slide.btnHref}
                className="inline-block bg-[#196FD2] rounded-[5px] text-white text-sm px-[30px] py-[18px] pb-[14px] hover:opacity-90 transition-opacity"
              >
                {slide.btnText} &gt;
              </Link>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
