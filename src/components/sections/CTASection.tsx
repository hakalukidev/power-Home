// src/components/sections/CTASection.tsx

'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-navy-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to power your next ride?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Get in touch for bulk orders, dealership opportunities, or a quote on
          any Power International BD battery.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollTo('#contact')}
            className="rounded-full bg-brand-orange-500 text-white hover:bg-brand-orange-600"
          >
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo('#products')}
            className="rounded-full border-2 border-white text-white hover:bg-white/10"
          >
            Browse Products
          </Button>
        </div>
      </div>
    </section>
  );
}
