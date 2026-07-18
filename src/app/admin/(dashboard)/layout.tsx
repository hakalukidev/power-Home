import type { ReactNode } from 'react';
import { AdminAuthGuard } from '@/components/admin/AdminAuthGuard';

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return <AdminAuthGuard>{children}</AdminAuthGuard>;
}
