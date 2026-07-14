// src/components/admin/AdminAuthGuard.tsx

'use client';

import { useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

export function AdminAuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/admin/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-100">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-4 border-b border-slate-800 bg-slate-900 px-8 py-3 text-slate-100">
        <span className="text-sm text-slate-400">{user.email}</span>
        <Button variant="outline" size="sm" onClick={() => signOut(auth)}>
          Sign out
        </Button>
      </div>
      {children}
    </div>
  );
}
