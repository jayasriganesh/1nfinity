"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { pub } from "@/lib/publicPath";

interface Slide {
  bg: string;
  textWhite: boolean;
  title: string;
  subtitle?: string;
  description: string;
  btnText: string;
  btnHref: string;
  hasPlayButton?: boolean;
}

const slides: Slide[] = [
  {
    bg: "/images/banner/slide1-mtr-ecosystem.jpg",
    textWhite: true,
    title: "",
    description:
      "Complete Microsoft Teams Rooms &amp; Zoom Rooms collaboration ecosystem for every room size.",
    btnText: "Enterprise Solutions",
    btnHref: "/solutions/enterprise",
  },
  {
    bg: "/images/banner/slide2-about-video-poster.jpg",
    textWhite: true,
    title: "InfinityX Global",
    subtitle: "Where Collaboration Comes to Life.",
    description: "",
    btnText: "About Us",
    btnHref: "/about",
    hasPlayButton: true,
  },
  {
    bg: "/images/banner/slide3-intel-whitepaper.jpg",
    textWhite: true,
    title: "INTERACTIVE FLAT PANELS",
    description:
      "Transform your meeting and learning spaces with AI-powered interactive displays.",
    btnText: "View Products",
    btnHref: "/products/interactive-flat-panels",
  },
  {
    bg: "/images/banner/slide4-all-in-one.jpg",
    textWhite: false,
    title: "ALL-IN-ONE SOLUTION",
    description:
      "Experience the difference intelligent features and intuitive tools can create.",
    btnText: "Get a Quote",
    btnHref: "/get-quote",
  },
  {
    bg: "/images/banner/slide5-solutions.jpg",
    textWhite: true,
    title: "CREATE YOUR DREAM SPACE",
    description:
      "Be inspired by our solutions — any industry, any platform, any space is welcome.",
    btnText: "View Solutions",
    btnHref: "/solutions",
  },
  {
    bg: "/images/banner/slide6-partner-alliance.jpg",
    textWhite: true,
    title: "PARTNER WITH US",
    description:
      "Join forces to create exceptional technology solutions across India and beyond.",
    btnText: "Contact Us",
    btnHref: "/contact?subject=partner",
  },
];

const AUTO_ADVANCE_MS = 5000;
const TRANSITION_DURATION = "duration-700";

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const startAutoAdvance = useCallback(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    setIntervalId(id);
    return id;
  }, []);

  const resetAutoAdvance = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    startAutoAdvance();
  }, [intervalId, startAutoAdvance]);

  useEffect(() => {
    const id = startAutoAdvance();
    return () => clearInterval(id);
  }, [startAutoAdvance]);

  const goToSlide = useCallback(
    (index: number) => { setCurrentSlide(index); resetAutoAdvance(); },
    [resetAutoAdvance]
  );
  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoAdvance();
  }, [resetAutoAdvance]);
  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoAdvance();
  }, [resetAutoAdvance]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity",
            TRANSITION_DURATION,
            "ease-in-out",
            index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
          )}
          style={{ backgroundImage: `url(${pub(slide.bg)})` }}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1230px] px-4 md:px-[91px] pt-[25vh] md:pt-[20vh]">
              <div className="max-w-[430px]">
                {slide.title && (
                  <h2
                    className={cn(
                      "font-heading text-[24px] md:text-[36px] font-normal uppercase leading-[36px] md:leading-[54px]",
                      "mb-3 md:mb-5",
                      slide.textWhite ? "text-white" : "text-[#333]"
                    )}
                  >
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p
                    className={cn(
                      "font-heading text-[24px] md:text-[36px] font-normal leading-[36px] md:leading-[54px]",
                      "mb-3 md:mb-5",
                      slide.textWhite ? "text-white" : "text-[#333]"
                    )}
                  >
                    {slide.subtitle}
                  </p>
                )}
                {slide.description && (
                  <p
                    className={cn(
                      "font-sans text-[16px] md:text-[24px] leading-6 md:leading-9",
                      "mb-6 md:mb-10",
                      slide.textWhite ? "text-white" : "text-[#333]"
                    )}
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                )}
                <div className="inline-block rounded-[5px] bg-[#196FD2]">
                  <Link
                    href={slide.btnHref}
                    className="block px-[30px] pb-[14px] pt-[18px] text-sm text-white"
                  >
                    {slide.btnText} <span className="ml-1">&gt;</span>
                  </Link>
                </div>
              </div>

              {slide.hasPlayButton && (
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    aria-label="Play video"
                    className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent transition-colors hover:bg-white/20"
                  >
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M24 14L0 28V0L24 14Z" fill="white" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Prev Arrow */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/30 transition-colors hover:bg-black/50"
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2L2 10L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/30 transition-colors hover:bg-black/50"
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L10 10L2 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-[30px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
            className={cn(
              "rounded-full transition-all duration-300",
              index === currentSlide
                ? "h-3 w-3 bg-[#196FD2] ring-2 ring-white ring-offset-1 ring-offset-transparent"
                : "h-2 w-2 border border-white/50 bg-transparent"
            )}
          />
        ))}
      </div>
    </section>
  );
}
