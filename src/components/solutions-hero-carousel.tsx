'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────
interface Solution {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  href: string
  cta: string
}

// ─── Component ────────────────────────────────────────────
export function SolutionsHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Solutions slides data
  const solutions: Solution[] = [
    {
      id: '1',
      title: 'Interactive Flat Panels',
      subtitle: 'TRANSFORM COLLABORATION',
      description: 'Enterprise-grade interactive displays with 4K resolution, multi-touch, and seamless Teams & Zoom integration for modern meeting rooms and classrooms.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1920&q=80',
      href: '/products/interactive-flat-panels',
      cta: 'Explore IFP Solutions',
    },
    {
      id: '2',
      title: 'LED Video Walls',
      subtitle: 'STUNNING VISUAL EXPERIENCES',
      description: 'Create breathtaking displays with COB, transparent, and outdoor LED solutions. From P0.9 fine pixel pitch to large-scale installations.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
      href: '/products/led-display',
      cta: 'View LED Solutions',
    },
    {
      id: '3',
      title: 'Ultra Slim Kiosks',
      subtitle: 'ENGAGE YOUR CUSTOMERS',
      description: 'Interactive kiosks and digital signage solutions for retail, hospitality, and public spaces. Touch and non-touch variants from 32" to 65".',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&q=80',
      href: '/products/kiosks',
      cta: 'Discover Kiosks',
    },
    {
      id: '4',
      title: 'CCTV & Security',
      subtitle: 'PROTECT YOUR ASSETS',
      description: 'Complete surveillance and security systems for enterprises, retail, and public spaces. 24/7 monitoring capabilities with advanced analytics.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80',
      href: '/products/cctv',
      cta: 'Security Solutions',
    },
    {
      id: '5',
      title: 'Education Solutions',
      subtitle: 'TRANSFORM LEARNING',
      description: 'Smart classroom technology designed to transform traditional teaching methods into immersive and engaging learning experiences.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
      href: '/solutions/education',
      cta: 'Education Technology',
    },
    {
      id: '6',
      title: 'Digital Signage',
      subtitle: 'CAPTIVATE YOUR AUDIENCE',
      description: 'Professional digital signage solutions for retail, corporate lobbies, and public spaces. Centrally managed with CAST CMS software.',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=80',
      href: '/products/kiosks',
      cta: 'Signage Solutions',
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, solutions.length])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentSolution = solutions[currentIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images - All slides */}
      {solutions.map((solution, index) => (
        <div
          key={solution.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          )}
        >
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            quality={90}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            {/* Animated Content */}
            <div
              key={currentIndex}
              className="animate-in fade-in slide-in-from-left-8 duration-700"
            >
              {/* Subtitle Badge */}
              <div className="inline-flex mb-6">
                <span className="px-4 py-2 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded">
                  {currentSolution.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                {currentSolution.title}
              </h2>

              {/* Description */}
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {currentSolution.description}
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-base"
                asChild
              >
                <Link href={currentSolution.href}>
                  {currentSolution.cta}
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
        aria-label="Previous solution"
      >
        <ChevronLeft className="h-7 w-7 text-white" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
        aria-label="Next solution"
      >
        <ChevronRight className="h-7 w-7 text-white" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'h-2.5 rounded-full transition-all',
              index === currentIndex
                ? 'w-12 bg-primary'
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            )}
            aria-label={`Go to solution ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-12 right-12 z-20 text-white/80 text-sm font-medium">
        <span className="text-white text-lg">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(solutions.length).padStart(2, '0')}</span>
      </div>
    </section>
  )
}
