// src/components/sections/CoreOperationsSection.tsx

'use client';

import { Factory, Ship, Recycle, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

type Operation = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const operations: Operation[] = [
  {
    icon: Factory,
    title: 'Strategic Brand Manufacturing',
    description:
      'Leveraging world-class Chinese manufacturing ecosystems within Bangladesh to produce robust, high-performance batteries under our proprietary brand.',
  },
  {
    icon: Ship,
    title: 'Global Import & Export',
    description:
      'Importing advanced Lithium-ion technology and energy storage items, with a scalable infrastructure engineered for seamless future international exports.',
  },
  {
    icon: Recycle,
    title: 'B2B Lead & Scrap Trading',
    description:
      'A vital link in the industrial circular economy — supplying raw battery scrap to local refineries and sourcing premium Refined Lead for manufacturing hubs.',
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

export default function CoreOperationsSection() {
  return (
    <section className="bg-white py-16 dark:bg-brand-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {operations.map((op) => {
            const Icon = op.icon;
            return (
              <motion.div
                key={op.title}
                variants={itemVariants}
                className="rounded-2xl border border-brand-navy-950/10 bg-brand-cream-50 p-8 dark:border-white/10 dark:bg-brand-navy-950"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-500/10 text-brand-orange-500">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-navy-950 dark:text-white">{op.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy-900/70 dark:text-brand-cream-50/70">
                  {op.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
