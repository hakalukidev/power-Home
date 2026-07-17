// src/components/sections/ContactSection.tsx

'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { useLandingContent } from '@/hooks/useLandingContent';

export default function ContactSection() {
  const { content } = useLandingContent();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit a Depot',
      lines: (content.contactAddress ?? '').split('\n').filter(Boolean),
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: content.contactPhone ? [content.contactPhone] : [],
      href: content.contactPhone ? `tel:${content.contactPhone.replace(/\s+/g, '')}` : undefined,
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: [content.contactEmail],
      href: `mailto:${content.contactEmail}`,
    },
  ];

  return (
    <section id="contact" className="bg-brand-cream-50 py-20 dark:bg-brand-navy-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-orange-500 uppercase">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy-950 sm:text-4xl dark:text-white">
            Let&apos;s power your next order
          </h2>
          <p className="mt-4 text-brand-navy-900/70 dark:text-brand-cream-50/70">
            Reach out for bulk orders, dealership enquiries, or product support.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-10 divide-y divide-brand-navy-950/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-white/10">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const card = (
              <div className="flex flex-col items-center gap-3 pt-10 text-center first:pt-0 sm:px-6 sm:pt-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-orange-500/30 text-brand-orange-500">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy-950 dark:text-white">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-brand-navy-900/70 dark:text-brand-cream-50/70">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
            return item.href ? (
              <a key={item.title} href={item.href} className="block">
                {card}
              </a>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
