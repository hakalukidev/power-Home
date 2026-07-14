// src/components/sections/Footer.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Share2,
  Briefcase,
  MessageCircle,
  Play,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const officeLocations = [
  { label: 'Office', value: 'Sadar, Chuadanga' },
  { label: 'Depot 1', value: 'Monihar, Jashore' },
  { label: 'Depot 2', value: 'Isshordi, Pabna' },
];

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],
  products: [
    { name: 'ERP System', href: '/products/erp' },
    { name: 'Distribution', href: '/products/distribution' },
    { name: 'CRM', href: '/products/crm' },
    { name: 'Analytics', href: '/products/analytics' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Power <span className="text-orange-500">International BD</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Complete enterprise resource planning and distribution management 
              system for modern businesses.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Briefcase className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>
                  {officeLocations.map((loc) => (
                    <span key={loc.label} className="block">
                      <span className="text-gray-500">{loc.label}:</span> {loc.value}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+8801309831316" className="hover:text-white transition-colors">
                  +880 1309 831 316
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="mailto:powerinternationalbd109@gmail.com" className="block hover:text-white transition-colors">
                    powerinternationalbd109@gmail.com
                  </a>
                  <a href="mailto:redwanahmad109@gmail.com" className="block hover:text-white transition-colors">
                    redwanahmad109@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Power International BD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}