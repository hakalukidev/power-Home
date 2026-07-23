// src/components/sections/HeroSection.tsx

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Search, Zap, Factory, Ship, Recycle, type LucideIcon } from 'lucide-react';
import { useLandingContent } from '@/hooks/useLandingContent';
import { cn } from '@/lib/utils';

type Slide = {
  label: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
  bgClass: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const AUTOPLAY_MS = 6000;

export default function HeroSection() {
  const { content } = useLandingContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const slides: Slide[] = [
    {
      label: 'Power International BD',
      icon: Zap,
      kicker: 'Power International BD',
      title: content.heroTitle.replace(/\n/g, ' '),
      description: content.heroDescription || content.heroSubtitle,
      bgClass: 'bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-black',
      primaryCta: { label: 'Explore Solutions', href: '#products' },
      secondaryCta: { label: 'B2B Inquiry', href: '#contact' },
    },
    {
      label: 'Brand Manufacturing',
      icon: Factory,
      kicker: 'Core Operation 01',
      title: 'Strategic Brand Manufacturing',
      description:
        'Leveraging world-class Chinese manufacturing ecosystems within Bangladesh to produce robust, high-performance batteries under our proprietary brand.',
      bgClass: 'bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-950',
      primaryCta: { label: 'View Products', href: '#products' },
    },
    {
      label: 'Import & Export',
      icon: Ship,
      kicker: 'Core Operation 02',
      title: 'Global Import & Export',
      description:
        'Importing advanced Lithium-ion technology and energy storage items, with a scalable infrastructure engineered for seamless future international exports.',
      bgClass: 'bg-gradient-to-br from-black via-brand-navy-950 to-brand-navy-900',
      primaryCta: { label: 'Get in Touch', href: '#contact' },
    },
    {
      label: 'Lead & Scrap Trading',
      icon: Recycle,
      kicker: 'Core Operation 03',
      title: 'B2B Lead & Scrap Trading',
      description:
        'A vital link in the industrial circular economy — supplying raw battery scrap to local refineries and sourcing premium Refined Lead for manufacturing hubs.',
      bgClass: 'bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-navy-800',
      primaryCta: { label: 'Get in Touch', href: '#contact' },
    },
  ];

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % slides.length) + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex((i) => (i + 1) % slides.length);
      }
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  return (
    <section id="home" className="relative overflow-hidden bg-brand-cream-50 pt-28 pb-10 lg:pt-32 dark:bg-brand-navy-950">
      <div className="container mx-auto px-4">
        {/* Desktop / tablet: devPulse-style accordion slider */}
        <div
          className="hidden h-[560px] gap-3 md:flex"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {slides.map((slide, i) => {
            const isActive = i === activeIndex;
            const Icon = slide.icon;
            return (
              <div
                key={slide.label}
                onClick={() => !isActive && goTo(i)}
                className={cn(
                  'relative flex basis-0 flex-col justify-between overflow-hidden rounded-3xl transition-[flex-grow] duration-700 ease-in-out',
                  slide.bgClass,
                  isActive ? 'flex-[10] cursor-default' : 'min-w-[7rem] flex-[1] cursor-pointer'
                )}
              >
                {/* ambient glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-orange-500/10 blur-3xl" />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"
                />

                {isActive ? (
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-12">
                    <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-wide text-brand-orange-500 uppercase">
                      <Icon className="h-4 w-4" />
                      {slide.kicker}
                    </span>
                    <h2 className="mt-3 max-w-2xl text-3xl leading-tight font-extrabold text-white lg:text-5xl">
                      {slide.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-white/70">{slide.description}</p>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollTo(slide.primaryCta.href);
                          }}
                          className="rounded-full bg-brand-orange-500 px-6 text-white hover:bg-brand-orange-600"
                        >
                          {slide.primaryCta.label}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                        {slide.secondaryCta && (
                          <Button
                            size="lg"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollTo(slide.secondaryCta!.href);
                            }}
                            className="rounded-full border-2 border-white/60 bg-transparent px-6 text-white hover:bg-white/10"
                          >
                            {slide.secondaryCta.label}
                          </Button>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          aria-label="Previous slide"
                          onClick={(e) => {
                            e.stopPropagation();
                            prev();
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-brand-navy-950"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          aria-label="Next slide"
                          onClick={(e) => {
                            e.stopPropagation();
                            next();
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-brand-navy-950"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex h-full flex-col items-center justify-between p-5">
                    <span className="h-2 w-2 rounded-full border border-white/50" />
                    <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold whitespace-nowrap text-white/80">
                      {slide.label}
                    </span>
                    <button
                      type="button"
                      aria-label={`Expand ${slide.label}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i);
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-brand-navy-950"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: single-slide carousel */}
        <div className="md:hidden">
          <div
            className={cn(
              'relative overflow-hidden rounded-3xl p-6 sm:p-8',
              slides[activeIndex].bgClass
            )}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-brand-orange-500/10 blur-3xl" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-wide text-brand-orange-500 uppercase">
                {(() => {
                  const Icon = slides[activeIndex].icon;
                  return <Icon className="h-4 w-4" />;
                })()}
                {slides[activeIndex].kicker}
              </span>
              <h2 className="mt-3 text-3xl leading-tight font-extrabold text-white uppercase">
                {slides[activeIndex].title}
              </h2>
              <p className="mt-4 text-white/70">{slides[activeIndex].description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() => scrollTo(slides[activeIndex].primaryCta.href)}
                  className="rounded-full bg-brand-orange-500 px-6 text-white hover:bg-brand-orange-600"
                >
                  {slides[activeIndex].primaryCta.label}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                {slides[activeIndex].secondaryCta && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo(slides[activeIndex].secondaryCta!.href)}
                    className="rounded-full border-2 border-white/60 bg-transparent px-6 text-white hover:bg-white/10"
                  >
                    {slides[activeIndex].secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === activeIndex ? 'w-6 bg-brand-orange-500' : 'w-2 bg-brand-navy-950/20 dark:bg-white/20'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
