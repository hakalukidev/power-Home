import Link from 'next/link';
import { Package, Phone, Info } from 'lucide-react';

const SECTIONS = [
  {
    href: '/admin/products',
    label: 'Products',
    description: 'Add, edit, or remove featured battery products.',
    icon: Package,
  },
  {
    href: '/admin/contact',
    label: 'Contact Info',
    description: 'Update phone, email, and depot addresses.',
    icon: Phone,
  },
  {
    href: '/admin/about',
    label: 'About Section',
    description: 'Edit the company description shown on the About section.',
    icon: Info,
  },
];

export default function AdminOverviewPage() {
  return (
    <div>
      <header>
        <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-400">
          Pick a section from the left to manage landing page content.
        </p>
      </header>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-colors hover:border-brand-orange-500"
            >
              <Icon className="h-6 w-6 text-brand-orange-500" />
              <h2 className="mt-3 font-semibold text-white">{section.label}</h2>
              <p className="mt-1 text-sm text-slate-400">{section.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
