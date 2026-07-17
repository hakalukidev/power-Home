// src/components/sections/Navbar.tsx

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/shared/ModeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        isScrolled
          ? 'border-black/5 bg-white/95 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-brand-navy-950/95'
          : 'border-transparent bg-white/70 backdrop-blur-md dark:bg-brand-navy-950/70'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/brand/logo-full.png"
            alt="Power International BD"
            width={1155}
            height={424}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="rounded-md px-4 py-2 text-sm font-medium text-brand-navy-900/70 transition-colors hover:text-brand-orange-500 dark:text-brand-cream-50/70 dark:hover:text-brand-orange-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side - CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />
          <Button
            onClick={() => handleNavClick('#contact')}
            className="bg-brand-orange-500 text-white hover:bg-brand-orange-600"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-navy-900 hover:bg-brand-cream-100 dark:text-brand-cream-50 dark:hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-brand-navy-950">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="rounded-md px-4 py-2 text-sm font-medium text-brand-navy-900/70 hover:bg-brand-cream-100 dark:text-brand-cream-50/70 dark:hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 w-full bg-brand-orange-500 text-white hover:bg-brand-orange-600"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
