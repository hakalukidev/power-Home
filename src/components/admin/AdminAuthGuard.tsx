// src/components/admin/AdminAuthGuard.tsx

'use client';

import { useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { LayoutGrid, Package, Phone, Info, LogOut } from 'lucide-react';
import { auth } from '@/lib/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/admin', label: 'Overview', icon: LayoutGrid, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package, exact: false },
  { href: '/admin/contact', label: 'Contact Info', icon: Phone, exact: false },
  { href: '/admin/about', label: 'About Section', icon: Info, exact: false },
];

export function AdminAuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/admin/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-navy-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-900">
      <aside className="flex w-64 shrink-0 flex-col bg-brand-navy-950 px-5 py-6">
        <span className="inline-flex w-fit items-center rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/70 uppercase">
          Admin Panel
        </span>
        <h1 className="mt-4 text-xl font-bold text-white">Power Admin</h1>
        <p className="mt-2 text-sm text-white/60">
          Manage products, contact info, and the about section from one place.
        </p>

        <nav className="mt-8 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-orange-500 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 border-t border-white/10 pt-4">
          <p className="truncate text-xs text-white/50">{user.email}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => signOut(auth)}
            className="w-full justify-center gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8 text-slate-100">{children}</main>
    </div>
  );
}
