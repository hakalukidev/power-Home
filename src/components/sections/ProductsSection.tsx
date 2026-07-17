// src/components/sections/ProductsSection.tsx

'use client';

import { Button } from '@/components/ui/button';
import { ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TextReveal } from '@/components/ui/text-reveal';
import { ProductImageReveal } from './ProductImageReveal';

const products = [
  {
    id: 1,
    name: 'AK Power Plus',
    specs: '6-EV-12V · Deep Cycle AGM',
    description:
      'Heavy-duty deep-cycle battery engineered for easy bikes and backup power, with reinforced plates for a longer, more consistent discharge cycle.',
    price: 'Starting from ৳ 8,500',
    guarantee: '12 Months Replacement Guarantee',
    image: '/products/p1.jpeg',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Mileage King',
    specs: 'Model 21S AH · 6-EV-12V · Easy Bike Battery',
    description:
      'High-mileage easy-bike battery built for long rides, fast recharge, and dependable power delivery mile after mile.',
    price: 'Starting from ৳ 9,900',
    guarantee: '18 Months Warranty',
    image: '/products/p2.jpeg',
    badge: 'Top Rated',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-white py-10 dark:bg-brand-navy-900">
      <div className="container mx-auto px-4">
        <TextReveal className="mx-auto mb-10 max-w-3xl">
          Batteries Built for the Long Ride. Scroll down to reveal each product — genuine Power International BD batteries, manufactured for reliability.
        </TextReveal>

        <div className="flex flex-col gap-16">
          {products.map((product, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <div
                key={product.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={cn(
                    'flex justify-center',
                    imageFirst ? 'lg:order-1' : 'lg:order-2'
                  )}
                >
                  <div className="relative">
                    <span className="absolute -top-3 -left-3 z-10 rounded-full bg-brand-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      {product.badge}
                    </span>
                    <ProductImageReveal src={product.image} alt={product.name} />
                  </div>
                </div>

                <div className={cn(imageFirst ? 'lg:order-2' : 'lg:order-1')}>
                  <p className="text-sm font-semibold tracking-wide text-brand-orange-500 uppercase">
                    {product.specs}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-brand-navy-950 sm:text-3xl dark:text-white">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-brand-navy-900/70 dark:text-brand-cream-50/70">
                    {product.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <span className="text-2xl font-bold text-brand-navy-950 dark:text-white">
                      {product.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy-900/70 dark:text-brand-cream-50/70">
                      <ShieldCheck className="h-4 w-4 text-brand-orange-500" />
                      {product.guarantee}
                    </span>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-brand-navy-900/50 dark:text-brand-cream-50/50">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Indicative pricing &mdash; contact us for the current rate.
                  </div>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="rounded-full bg-brand-navy-950 px-6 text-white hover:bg-brand-navy-800"
                    >
                      Inquire Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-brand-navy-950 px-6 text-brand-navy-950 hover:bg-brand-navy-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-navy-950"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
