// src/components/sections/GlobalExportSection.tsx

'use client';

import { Button } from '@/components/ui/button';
import { Download, Mail, Globe } from 'lucide-react';

export default function GlobalExportSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-navy-950 py-20">
      {/* Faint world-map grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-orange-500/40 bg-brand-orange-500/10 text-brand-orange-500">
          <Globe className="h-6 w-6" />
        </span>
        <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          Scaling Energy to Global Borders
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Built on rigorous international quality benchmarks, our supply chain and product lines
          are engineered to meet global standards. We are fully equipped and open for
          international export inquiries and bulk B2B cross-border partnerships.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full bg-brand-orange-500 text-white hover:bg-brand-orange-600"
          >
            <Download className="mr-1 h-4 w-4" />
            Download Export Specifications
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo('#contact')}
            className="rounded-full border-2 border-white text-white hover:bg-white/10"
          >
            <Mail className="mr-1 h-4 w-4" />
            Contact Export Desk
          </Button>
        </div>
      </div>
    </section>
  );
}
