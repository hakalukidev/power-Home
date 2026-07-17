// src/components/sections/PowerBeamStats.tsx

'use client';

import { createRef, useRef } from 'react';
import Image from 'next/image';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import {
  Building2,
  Users,
  Package,
  MapPin,
  Gauge,
  Award,
  type LucideIcon,
} from 'lucide-react';

type Stat = { icon: LucideIcon; value: string; label: string };

export const stats: Stat[] = [
  { icon: Building2, value: '10+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Package, value: '1000+', label: 'Batteries Delivered' },
  { icon: MapPin, value: '3', label: 'Depot Locations' },
  { icon: Gauge, value: '98%', label: 'Customer Satisfaction' },
  { icon: Award, value: '15+', label: 'Quality Certifications' },
];

// Hexagon layout around the center node, as percentages of the container.
const positions = [
  { top: '8%', left: '50%' },
  { top: '29%', left: '86.4%' },
  { top: '71%', left: '86.4%' },
  { top: '92%', left: '50%' },
  { top: '71%', left: '13.6%' },
  { top: '29%', left: '13.6%' },
];

export default function PowerBeamStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(stats.map(() => createRef<HTMLDivElement>())).current;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto hidden aspect-square w-full max-w-xl md:block"
    >
      {stats.map((stat, i) => (
        <AnimatedBeam
          key={stat.label}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={nodeRefs[i]}
          curvature={0}
          duration={4}
          delay={i * 0.3}
          pathColor="var(--brand-navy-950)"
          pathOpacity={0.08}
          pathWidth={2}
          gradientStartColor="var(--brand-orange-500)"
          gradientStopColor="var(--brand-navy-800)"
        />
      ))}

      {/* Center node — Power International BD */}
      <div
        ref={centerRef}
        className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-orange-500 bg-white p-3 sm:h-28 sm:w-28 dark:bg-brand-navy-900">
          <Image
            src="/brand/logo-icon.png"
            alt="Power International BD"
            width={387}
            height={428}
            className="h-full w-auto object-contain"
          />
        </div>
        <span className="rounded-full bg-brand-navy-950 px-3 py-1 text-[11px] font-bold tracking-wide text-white whitespace-nowrap">
          POWER INTERNATIONAL BD
        </span>
      </div>

      {/* Stat nodes */}
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={positions[i]}
          >
            <div
              ref={nodeRefs[i]}
              className="flex h-16 w-16 flex-col items-center justify-center rounded-full border border-brand-navy-950/10 bg-white shadow-md sm:h-20 sm:w-20 dark:border-white/10 dark:bg-brand-navy-900"
            >
              <Icon className="h-4 w-4 text-brand-orange-500" />
              <span className="text-sm font-bold text-brand-navy-950 sm:text-base dark:text-white">
                {stat.value}
              </span>
            </div>
            <span className="max-w-[6.5rem] text-center text-[11px] leading-tight font-medium text-brand-navy-900/70 dark:text-brand-cream-50/70">
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
