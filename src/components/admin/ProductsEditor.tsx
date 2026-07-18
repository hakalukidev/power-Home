// src/components/admin/ProductsEditor.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Package, Star, ShieldCheck, ImageIcon, Pencil, ExternalLink, Trash2 } from 'lucide-react';
import { useLandingContent } from '@/hooks/useLandingContent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { LandingProduct } from '@/types/landing';

function formatUpdated(iso?: string) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ProductsEditor() {
  const { content, loading, save } = useLandingContent();

  if (loading) {
    return <p className="text-sm text-slate-500">Loading...</p>;
  }

  const products = content.products;
  const stats = [
    { label: 'Total products', value: products.length, icon: Package },
    { label: 'Featured', value: products.filter((p) => p.badge.trim() !== '').length, icon: Star },
    {
      label: 'With guarantee',
      value: products.filter((p) => p.guarantee.trim() !== '').length,
      icon: ShieldCheck,
    },
    {
      label: 'Images ready',
      value: products.filter((p) => p.image.trim() !== '').length,
      icon: ImageIcon,
    },
  ];

  const handleDelete = async (product: LandingProduct) => {
    if (!window.confirm(`Remove "${product.name || 'this product'}"? This can't be undone.`)) return;
    await save({ products: products.filter((p) => p.id !== product.id) });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{stat.label}</span>
                <Icon className="h-4 w-4 text-brand-orange-500" />
              </div>
              <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-xs font-semibold tracking-wide text-slate-400 uppercase">
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Specs</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3 text-right">Manage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-3">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-slate-900">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="h-5 w-5 text-slate-600" />
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{product.name || 'Untitled product'}</p>
                  <p className="mt-0.5 line-clamp-1 max-w-xs text-xs text-slate-400">
                    {product.description}
                  </p>
                </td>
                <td className="px-4 py-3 text-slate-300">{product.specs}</td>
                <td className="px-4 py-3 text-slate-300">{product.price}</td>
                <td className="px-4 py-3">
                  {product.badge ? (
                    <Badge variant="secondary">{product.badge}</Badge>
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-400">{formatUpdated(product.updatedAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      nativeButton={false}
                      render={
                        <Link href={`/admin/products/${product.id}/edit`}>
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </Link>
                      }
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      nativeButton={false}
                      render={
                        <Link href="/#products" target="_blank">
                          <ExternalLink className="h-3.5 w-3.5" />
                          View
                        </Link>
                      }
                    />
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(product)}>
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-sm text-slate-500">
                  No products yet. Click &quot;Add Product&quot; to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
