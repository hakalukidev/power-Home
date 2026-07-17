// src/components/sections/StatsSection.tsx

'use client';

import PowerBeamStats, { stats } from './PowerBeamStats';

export default function StatsSection() {
  return (
    <section className="bg-brand-cream-50 py-16 dark:bg-brand-navy-950">
      <div className="container mx-auto px-4">
        <p className="mb-10 text-center text-sm font-semibold tracking-wide text-brand-orange-500 uppercase">
          Power International BD in numbers
        </p>

        <PowerBeamStats />

        {/* Mobile fallback — simple grid, no beams */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-brand-navy-950/10 bg-white p-5 text-center dark:border-white/10 dark:bg-brand-navy-900"
              >
                <Icon className="h-5 w-5 text-brand-orange-500" />
                <p className="text-xl font-bold text-brand-navy-950 dark:text-white">{stat.value}</p>
                <p className="text-xs font-medium text-brand-navy-900/70 dark:text-brand-cream-50/70">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
