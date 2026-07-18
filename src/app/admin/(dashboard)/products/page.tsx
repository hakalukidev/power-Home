import Link from 'next/link';
import { Plus } from 'lucide-react';
import { ProductsEditor } from '@/components/admin/ProductsEditor';
import { Button } from '@/components/ui/button';

export default function AdminProductsPage() {
  return (
    <div>
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Products</h1>
          <p className="mt-1 text-sm text-slate-400">
            Add, edit, or remove featured battery products shown on the landing page.
          </p>
        </div>
        <Button
          className="gap-1.5"
          nativeButton={false}
          render={
            <Link href="/admin/products/new">
              <Plus className="h-4 w-4" />
              Add Product
            </Link>
          }
        />
      </header>

      <div className="mt-6">
        <ProductsEditor />
      </div>
    </div>
  );
}
