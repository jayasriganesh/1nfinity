'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// ─── Types ────────────────────────────────────────────────
interface HeroCarouselProps {
  className?: string
}

interface Slide {
  heading: string
  subheading: string
  ctaText: string
  ctaHref: string
  backgroundImage: string
  backgroundAlt: string
}

// ─── Component ────────────────────────────────────────────
export function HeroCarousel({ className }: HeroCarouselProps) {
  // Slide content from pages.md
  const slides: Slide[] = [
    {
      heading: 'Enterprise-Grade Interactive Displays',
      subheading: 'Transform your collaboration spaces with InfinityX smart display solutions for boardrooms, conference centers, and classrooms.',
      ctaText: 'Explore Products',
      ctaHref: '/products',
      backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      backgroundAlt: 'Modern conference room with interactive display',
    },
    {
      heading: '4000+ Installations Across India',
      subheading: 'Trusted by enterprises, educational institutions, and government agencies since 2014.',
      ctaText: 'Our Story',
      ctaHref: '/about',
      backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80',
      backgroundAlt: 'Professional team collaboration',
    },
    {
      heading: 'Complete Display Solutions Portfolio',
      subheading: 'From interactive flat panels to LED video walls, kiosks, and CCTV — we deliver technology that works.',
      ctaText: 'View All Products',
      ctaHref: '/products',
      backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
      backgroundAlt: 'Modern technology workspace',
    },
    {
      heading: 'MSME · ISO · GeM Certified',
      subheading: 'Quality you can trust. Compliance you can count on.',
      ctaText: 'Get Quote',
      ctaHref: '/get-quote',
      backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
      backgroundAlt: 'Professional business certification',
    },
  ]

  return (
    <section className={`relative h-screen w-full ${className || ''}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-white',
        }}
        navigation={{
          prevEl: '.hero-carousel-prev',
          nextEl: '.hero-carousel-next',
        }}
        loop={true}
        speed={800}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className="container-custom max-w-5xl text-center text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                    {slide.heading}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in-delay">
                    {slide.subheading}
                  </p>
                  <div className="animate-fade-in-delay-2">
                    <Button variant="ghost" size="lg" asChild>
                      <Link href={slide.ctaHref}>{slide.ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        className="hero-carousel-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="hero-carousel-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 2rem !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.5;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        /* Fade-in animations */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
      `}</style>
    </section>
  )
}
