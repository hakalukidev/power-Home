// src/components/sections/TestimonialsSection.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafiqul Islam',
    role: 'Operations Director, BuildRight Ltd.',
    quote:
      'PowerIntl transformed how we track inventory across warehouses. Real-time visibility alone saved us hours every week.',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Finance Manager, Delta Traders',
    quote:
      'The automated financial reporting is a game changer. Month-end close used to take days, now it takes minutes.',
  },
  {
    name: 'Shariar Kabir',
    role: 'CEO, Northline Distribution',
    quote:
      'From sales to distribution, everything runs on one platform now. Support has been responsive and reliable.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by teams like yours
          </h2>
          <p className="mt-4 text-gray-600">
            See what our customers have to say about working with PowerIntl.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-blue-200" />
                <p className="mt-4 text-gray-700 flex-1">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
