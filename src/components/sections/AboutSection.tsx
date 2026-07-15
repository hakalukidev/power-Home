// src/components/sections/AboutSection.tsx

import Image from 'next/image';
import { MapPin } from 'lucide-react';

const depots = [
  { label: 'Office', value: 'Sadar, Chuadanga' },
  { label: 'Depot 1', value: 'Monihar, Jashore' },
  { label: 'Depot 2', value: 'Isshordi, Pabna' },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-orange-500 uppercase">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy-950 sm:text-4xl">
              A trusted battery manufacturer, built on Bangladeshi ground
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-brand-navy-900/70">
              Power International BD engineers deep-cycle and easy-bike
              batteries built to last &mdash; combining reinforced plate
              design, rigorous quality checks, and a growing depot network to
              keep riders and retailers powered across Bangladesh.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-brand-navy-950/10 pt-6">
              <Image
                src="/brand/logo-icon.png"
                alt="Power International BD"
                width={387}
                height={428}
                className="h-12 w-auto"
              />
              <div>
                <p className="font-bold text-brand-navy-950">Md. Rezwan Ahmad</p>
                <p className="text-sm text-brand-navy-900/60">Managing Director, Power International BD</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-navy-950/10 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-brand-navy-950">Where to find us</h3>
            <ul className="mt-4 space-y-4">
              {depots.map((d) => (
                <li key={d.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange-500/10 text-brand-orange-500">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy-950">{d.label}</p>
                    <p className="text-sm text-brand-navy-900/70">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
