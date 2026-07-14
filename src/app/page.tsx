// src/app/page.tsx

'use client';

import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import StatsSection from '@/components/sections/StatsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}