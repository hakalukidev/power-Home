// src/components/sections/HeroSection.tsx

'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { TypingAnimation } from '@/components/ui/typing-animation';

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-brand-cream-50 pt-28 pb-10 lg:pt-32 dark:bg-brand-navy-950">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-brand-navy-800/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
          {/* Left content */}
          <div>
            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-brand-navy-950 uppercase sm:text-5xl lg:text-6xl dark:text-white">
              <TypingAnimation as="span" className="block" duration={55} delay={200} showCursor={false}>
                Engineering
              </TypingAnimation>
              <TypingAnimation as="span" className="block" duration={55} delay={950} showCursor={false}>
                Batteries That
              </TypingAnimation>
              <TypingAnimation
                as="span"
                className="block text-brand-orange-500"
                duration={55}
                delay={1900}
                showCursor={false}
              >
                Keep You Moving
              </TypingAnimation>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-navy-900/70 dark:text-brand-cream-50/70">
              Power International BD supplies deep-cycle and easy-bike
              batteries built for long mileage, fast recharge, and dependable
              backup power &mdash; trusted across Chuadanga, Jashore and Pabna.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('#products')}
                className="h-11 rounded-full bg-brand-orange-500 px-6 text-white hover:bg-brand-orange-600"
              >
                Get Started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#contact')}
                className="h-11 rounded-full border-2 border-brand-navy-950 px-6 text-brand-navy-950 hover:bg-brand-navy-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-navy-950"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative flex w-full items-center justify-center p-8 sm:p-12">
            <Image
              src="/hero.png"
              alt="Power International BD battery"
              width={480}
              height={480}
              priority
              className="h-auto w-full max-w-sm dark:hidden"
            />
            <Image
              src="/hero-dark.png"
              alt="Power International BD battery"
              width={480}
              height={480}
              priority
              className="hidden h-auto w-full max-w-sm dark:block"
            />
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-2 text-xs font-medium text-brand-navy-900/60 dark:text-brand-cream-50/60">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll to explore our products
        </div>
      </div>
    </section>
  );
}
