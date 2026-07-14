// src/components/sections/CTASection.tsx

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to streamline your operations?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Join hundreds of businesses already running on PowerIntl&apos;s ERP &
          distribution platform.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="https://erp.powerinternational.com">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
