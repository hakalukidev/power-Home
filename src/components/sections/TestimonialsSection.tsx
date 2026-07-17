// src/components/sections/TestimonialsSection.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafiqul Islam',
    role: 'Easy Bike Owner, Chuadanga',
    quote:
      'The Mileage King battery easily outlasts anything I’ve used before. Charges fast and the mileage difference is real.',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Shop Owner, Jashore',
    quote:
      'We stock Power International batteries at our depot — fewer returns, solid build quality, and customers keep coming back for them.',
  },
  {
    name: 'Shariar Kabir',
    role: 'Fleet Operator, Pabna',
    quote:
      'Reliable backup power for our whole fleet. The guarantee coverage and depot support make it an easy choice every time.',
  },
  {
    name: 'Mahfuzur Rahman',
    role: 'Easy Bike Owner, Jashore',
    quote:
      'Switched to AK Power Plus for backup power and never looked back — consistent output even after long power cuts.',
  },
  {
    name: 'Taslima Akter',
    role: 'Dealer, Chuadanga',
    quote:
      'Best after-sales support we’ve had from any battery supplier. Replacement claims are handled quickly, no hassle.',
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <Card className="h-full w-80 shrink-0">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-brand-orange-500/30" />
        <p className="mt-4 text-brand-navy-900/80 dark:text-brand-cream-50/80 flex-1">{testimonial.quote}</p>
        <div className="mt-6 flex items-center gap-1 text-brand-orange-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold text-brand-navy-950 dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-brand-navy-900/60 dark:text-brand-cream-50/60">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-cream-50 overflow-hidden dark:bg-brand-navy-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-950 dark:text-white">
            Trusted by riders and retailers alike
          </h2>
          <p className="mt-4 text-brand-navy-900/70 dark:text-brand-cream-50/70">
            See what our customers have to say about Power International BD batteries.
          </p>
        </div>

        {testimonials.length > 4 ? (
          <div className="relative -mx-4">
            <Marquee pauseOnHover className="py-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-brand-cream-50 to-transparent sm:w-32 dark:from-brand-navy-950" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-brand-cream-50 to-transparent sm:w-32 dark:from-brand-navy-950" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
