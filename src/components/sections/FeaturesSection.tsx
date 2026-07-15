// src/components/sections/FeaturesSection.tsx

'use client';

import {
  ShieldCheck,
  Zap,
  Truck,
  Gauge,
  Recycle,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { TextReveal } from '@/components/ui/text-reveal';

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    description: 'Rigorous quality checks and reinforced plate design on every battery we manufacture.',
  },
  {
    icon: Zap,
    title: 'Fast Recharge',
    description: 'Optimized cell design for quicker charging and longer, more stable runtime.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Depots in Chuadanga, Jashore and Pabna keep delivery fast and reliable.',
  },
  {
    icon: Gauge,
    title: 'High Mileage',
    description: 'Engineered for consistent power output across thousands of rides.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'Recyclable materials and a responsible battery disposal programme.',
  },
  {
    icon: Award,
    title: 'Trusted Manufacturer',
    description: 'A growing, trusted name in Bangladesh’s battery manufacturing industry.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-brand-cream-50 py-10">
      <div className="container mx-auto px-4">
        <TextReveal className="mx-auto mb-10 max-w-3xl">
          Why Choose Power International BD? Quality batteries backed by real service, from manufacturing to delivery.
        </TextReveal>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-5xl divide-y divide-brand-navy-950/10 border-t border-brand-navy-950/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 border-b border-brand-navy-950/10 px-2 py-8 sm:border-b-0 sm:px-8"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-orange-500/30 text-brand-orange-500">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy-950">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy-900/70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
