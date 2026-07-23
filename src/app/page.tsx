// src/app/page.tsx

'use client';

import Navbar from '@/components/sections/Navbar';
import { SocialDock } from '@/components/shared/SocialDock';
import { CustomCursor } from '@/components/shared/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import CoreOperationsSection from '@/components/sections/CoreOperationsSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import StatsSection from '@/components/sections/StatsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import GlobalExportSection from '@/components/sections/GlobalExportSection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CoreOperationsSection />
      <EcosystemSection />
      <SolutionsSection />
      <ProductsSection />
      <FeaturesSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <GlobalExportSection />
      <Footer />
      <SocialDock />
      <CustomCursor />
    </main>
  );
}
