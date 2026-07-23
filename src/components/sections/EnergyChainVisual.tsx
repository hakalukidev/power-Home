// src/components/sections/EnergyChainVisual.tsx

'use client';

import { useRef } from 'react';
import { Cylinder, Layers3 } from 'lucide-react';
import { AnimatedBeam } from '@/components/ui/animated-beam';

// Left → right chain: imported Lithium cells feed the own-brand battery line,
// which in turn is backed by refined lead/scrap trading — the three pillars
// from the hero copy, rendered as a single connected visual.
export function EnergyChainVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lithiumRef = useRef<HTMLDivElement>(null);
  const batteryRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-md items-center justify-between px-2 py-10 sm:px-4"
    >
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={lithiumRef}
        toRef={batteryRef}
        curvature={-30}
        duration={3.5}
        pathColor="var(--brand-navy-950)"
        pathOpacity={0.1}
        pathWidth={2}
        gradientStartColor="var(--brand-orange-500)"
        gradientStopColor="var(--brand-navy-800)"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={batteryRef}
        toRef={leadRef}
        curvature={30}
        duration={3.5}
        delay={0.6}
        pathColor="var(--brand-navy-950)"
        pathOpacity={0.1}
        pathWidth={2}
        gradientStartColor="var(--brand-orange-500)"
        gradientStopColor="var(--brand-navy-800)"
      />

      {/* Lithium cell */}
      <div ref={lithiumRef} className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-navy-950/10 bg-white shadow-md sm:h-20 sm:w-20 dark:border-white/10 dark:bg-brand-navy-900">
          <Cylinder className="h-7 w-7 text-brand-navy-800 dark:text-brand-cream-50" strokeWidth={1.6} />
        </div>
        <span className="text-center text-[11px] leading-tight font-semibold text-brand-navy-900/70 dark:text-brand-cream-50/70">
          Lithium
          <br />
          Cells
        </span>
      </div>

      {/* Own-brand battery — the center of the chain */}
      <div ref={batteryRef} className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-orange-500 bg-white p-4 shadow-lg sm:h-28 sm:w-28 dark:bg-brand-navy-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-icon.svg"
            alt="Power International BD"
            className="h-full w-auto object-contain"
          />
        </div>
        <span className="text-center text-[11px] leading-tight font-bold text-brand-navy-950 dark:text-white">
          Own-Brand
          <br />
          Battery
        </span>
      </div>

      {/* Refined lead ingot */}
      <div ref={leadRef} className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-navy-950/10 bg-white shadow-md sm:h-20 sm:w-20 dark:border-white/10 dark:bg-brand-navy-900">
          <Layers3 className="h-7 w-7 text-brand-navy-800 dark:text-brand-cream-50" strokeWidth={1.6} />
        </div>
        <span className="text-center text-[11px] leading-tight font-semibold text-brand-navy-900/70 dark:text-brand-cream-50/70">
          Refined
          <br />
          Lead
        </span>
      </div>
    </div>
  );
}
