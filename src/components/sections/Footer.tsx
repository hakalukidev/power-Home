// src/components/sections/Footer.tsx

'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLandingContent } from '@/hooks/useLandingContent';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { content } = useLandingContent();
  const officeLocations = (content.contactAddress ?? '')
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(':');
      return { label: label.trim(), value: rest.join(':').trim() };
    });

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/brand/logo-icon.png"
                alt="Power International BD"
                width={387}
                height={428}
                className="h-9 w-auto"
              />
              <span className="font-bold text-xl">
                Power <span className="text-brand-orange-500">International BD</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A trusted battery manufacturer and distributor, engineering
              deep-cycle and easy-bike batteries built to last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-brand-orange-400 shrink-0 mt-0.5" />
                <span>
                  {officeLocations.map((loc) => (
                    <span key={loc.label} className="block">
                      <span className="text-gray-500">{loc.label}:</span> {loc.value}
                    </span>
                  ))}
                </span>
              </li>
              {content.contactPhone && (
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="h-5 w-5 text-brand-orange-400 shrink-0" />
                  <a
                    href={`tel:${content.contactPhone.replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {content.contactPhone}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-brand-orange-400 shrink-0 mt-0.5" />
                <span>
                  <a href={`mailto:${content.contactEmail}`} className="block hover:text-white transition-colors">
                    {content.contactEmail}
                  </a>
                  <a href="mailto:redwanahmad109@gmail.com" className="block hover:text-white transition-colors">
                    redwanahmad109@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Power International BD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
