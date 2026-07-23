// src/components/sections/EcosystemSection.tsx

'use client';

import { motion } from 'motion/react';
import {
  Recycle,
  Factory,
  Cog,
  Ship,
  ArrowRight,
  ArrowDown,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FlowNode = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

const mainChain: FlowNode[] = [
  { icon: Recycle, title: 'Local Scrap Collection', subtitle: 'OLAB sourcing network' },
  { icon: Factory, title: 'Lead Refining Factories', subtitle: 'Local refinery partners' },
  { icon: Cog, title: 'Partner Chinese Factories', subtitle: 'Your-brand production' },
];

const terminalNode: FlowNode = {
  icon: Ship,
  title: 'Lithium Imports & Future Export Terminal',
  subtitle: 'Inbound Li-ion · outbound global trade',
};

function FlowCard({ node, highlight = false }: { node: FlowNode; highlight?: boolean }) {
  const Icon = node.icon;
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-2 rounded-2xl border p-5 text-center transition-colors sm:w-44',
        highlight
          ? 'border-brand-orange-500/40 bg-brand-orange-500/5'
          : 'border-brand-navy-950/10 bg-white hover:border-brand-orange-500/30 dark:border-white/10 dark:bg-brand-navy-950'
      )}
    >
      <span
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-full',
          highlight
            ? 'bg-brand-orange-500 text-white'
            : 'bg-brand-orange-500/10 text-brand-orange-500'
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold text-brand-navy-950 dark:text-white">{node.title}</p>
      <p className="text-xs text-brand-navy-900/60 dark:text-brand-cream-50/60">{node.subtitle}</p>
    </div>
  );
}

export default function EcosystemSection() {
  return (
    <section className="bg-brand-cream-50 py-20 dark:bg-brand-navy-950">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: narrative */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-orange-500 uppercase">
              The Power International Ecosystem
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-navy-950 sm:text-4xl dark:text-white">
              Our Asset-Light, High-Efficiency Network
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-brand-navy-900/70 dark:text-brand-cream-50/70">
              We don&apos;t just run a factory; we orchestrate a world-class supply chain. By
              integrating Chinese production expertise in Bangladesh with local lead-refining
              giants, we ensure unmatched agility, lower overheads, and premium quality for our
              clients.
            </p>
          </div>

          {/* Right: supply chain flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-3xl border border-brand-navy-950/10 bg-white/60 p-6 sm:p-8 dark:border-white/10 dark:bg-brand-navy-900/40"
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-2">
              {mainChain.map((node, i) => (
                <div key={node.title} className="flex flex-col items-center gap-3 sm:flex-row">
                  <FlowCard node={node} />
                  {i < mainChain.length - 1 && (
                    <>
                      <ArrowDown className="h-4 w-4 shrink-0 text-brand-orange-500 sm:hidden" />
                      <ArrowRight className="hidden h-4 w-4 shrink-0 text-brand-orange-500 sm:block" />
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="my-3 flex justify-center">
              <ArrowDown className="h-5 w-5 text-brand-orange-500" />
            </div>

            <div className="flex justify-center">
              <FlowCard node={terminalNode} highlight />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
