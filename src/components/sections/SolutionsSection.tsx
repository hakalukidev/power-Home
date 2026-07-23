// src/components/sections/SolutionsSection.tsx

'use client';

import { motion } from 'motion/react';
import { BatteryCharging, Cpu, Layers3, type LucideIcon } from 'lucide-react';
import { TextReveal } from '@/components/ui/text-reveal';

type Category = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
};

const categories: Category[] = [
  {
    icon: BatteryCharging,
    tag: 'Category 01',
    title: 'Proprietary Lead-Acid & Easy-Bike Series',
    description: 'Engineered for maximum deep-cycle longevity under South Asian grid conditions.',
  },
  {
    icon: Cpu,
    tag: 'Category 02',
    title: 'Next-Gen Lithium-Ion Solutions',
    description: 'Advanced imported Lithium packs for high-end EVs and smart energy storage.',
  },
  {
    icon: Layers3,
    tag: 'Category 03',
    title: 'Industrial Raw Materials (Trading)',
    description: 'High-purity Refined Lead Ingots and organized Battery Scrap (OLAB) supply.',
  },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SolutionsSection() {
  return (
    <section className="bg-white py-16 dark:bg-brand-navy-900">
      <div className="container mx-auto px-4">
        <TextReveal className="mx-auto mb-10 max-w-3xl">
          Three premium categories, one integrated supply chain — from proprietary batteries to
          the raw materials that power them.
        </TextReveal>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group overflow-hidden rounded-2xl border border-brand-navy-950/10 dark:border-white/10"
              >
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand-navy-950 to-brand-navy-800 dark:from-brand-navy-900 dark:to-black">
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
                  <Icon className="relative h-14 w-14 text-brand-orange-500 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.4} />
                </div>
                <div className="bg-brand-cream-50 p-6 dark:bg-brand-navy-950">
                  <p className="text-xs font-semibold tracking-wide text-brand-orange-500 uppercase">
                    {category.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-brand-navy-950 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy-900/70 dark:text-brand-cream-50/70">
                    {category.description}
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
