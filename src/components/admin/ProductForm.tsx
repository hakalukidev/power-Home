// src/components/admin/ProductForm.tsx

'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ImageIcon } from 'lucide-react';
import { useLandingContent } from '@/hooks/useLandingContent';
import { uploadProductImage } from '@/lib/cloudinary/upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { LandingContent, LandingProduct } from '@/types/landing';

const EMPTY_PRODUCT: Omit<LandingProduct, 'id'> = {
  name: '',
  specs: '',
  description: '',
  price: '',
  guarantee: '',
  badge: '',
  image: '',
};

function BackLink() {
  return (
    <Link
      href="/admin/products"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange-500 hover:underline"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to all products
    </Link>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

export function ProductForm({ productId }: { productId?: string }) {
  const { content, loading, save } = useLandingContent();

  if (loading) {
    return <p className="text-sm text-slate-500">Loading...</p>;
  }

  if (productId) {
    const existingProduct = content.products.find((p) => p.id === productId);
    if (!existingProduct) {
      return (
        <div>
          <BackLink />
          <p className="mt-6 text-sm text-slate-400">Product not found. It may have been removed.</p>
        </div>
      );
    }
    return <ProductFormBody product={existingProduct} products={content.products} save={save} />;
  }

  return <ProductFormBody products={content.products} save={save} />;
}

function ProductFormBody({
  product,
  products,
  save,
}: {
  product?: LandingProduct;
  products: LandingProduct[];
  save: (partial: Partial<LandingContent>) => Promise<void>;
}) {
  const router = useRouter();
  const isEdit = Boolean(product);
  const [form, setForm] = useState<Omit<LandingProduct, 'id'>>(
    product ? { ...product } : EMPTY_PRODUCT
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const update = (patch: Partial<LandingProduct>) => setForm((prev) => ({ ...prev, ...patch }));

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await uploadProductImage(file);
      update({ image: url });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const updatedAt = new Date().toISOString();
    try {
      if (isEdit && product) {
        const nextProducts = products.map((p) =>
          p.id === product.id ? { ...p, ...form, updatedAt } : p
        );
        await save({ products: nextProducts });
      } else {
        const newProduct: LandingProduct = { ...form, id: crypto.randomUUID(), updatedAt };
        await save({ products: [...products, newProduct] });
      }
      router.push('/admin/products');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <BackLink />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950 p-6"
        >
          <div>
            <h1 className="text-2xl font-semibold text-white">
              {isEdit ? 'Edit product' : 'Add product'}
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              {isEdit
                ? "Update this product's details, price, and image."
                : 'Create a new featured product with pricing, details, and an image.'}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Product name">
              <Input
                required
                value={form.name}
                onChange={(e) => update({ name: e.target.value })}
                placeholder="e.g. AK Power Plus"
                className="bg-slate-900 text-slate-100"
              />
            </Field>
            <Field label="Price">
              <Input
                required
                value={form.price}
                onChange={(e) => update({ price: e.target.value })}
                placeholder="e.g. Starting from ৳ 8,500"
                className="bg-slate-900 text-slate-100"
              />
            </Field>
          </div>

          <Field label="Specs">
            <Input
              required
              value={form.specs}
              onChange={(e) => update({ specs: e.target.value })}
              placeholder="e.g. 6-EV-12V · Deep Cycle AGM"
              className="bg-slate-900 text-slate-100"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Badge">
              <Input
                value={form.badge}
                onChange={(e) => update({ badge: e.target.value })}
                placeholder="e.g. Best Seller"
                className="bg-slate-900 text-slate-100"
              />
            </Field>
            <Field label="Guarantee">
              <Input
                value={form.guarantee}
                onChange={(e) => update({ guarantee: e.target.value })}
                placeholder="e.g. 12 Months Replacement Guarantee"
                className="bg-slate-900 text-slate-100"
              />
            </Field>
          </div>

          <Field label="Description">
            <Textarea
              required
              rows={4}
              value={form.description}
              onChange={(e) => update({ description: e.target.value })}
              placeholder="Describe the product..."
              className="bg-slate-900 text-slate-100"
            />
          </Field>

          <Button type="submit" disabled={isSaving || isUploading}>
            {isSaving ? 'Saving...' : isEdit ? 'Save changes' : 'Add product'}
          </Button>
        </form>

        <div className="h-fit rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <h2 className="font-semibold text-white">Image preview</h2>
          <p className="mt-1 text-xs text-slate-400">
            Upload the product image shown on the landing page.
          </p>

          <div className="mt-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-700 bg-slate-900">
            {form.image ? (
              <Image
                src={form.image}
                alt={form.name || 'Product preview'}
                width={280}
                height={280}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 px-6 text-center text-slate-500">
                <ImageIcon className="h-8 w-8" />
                <span className="text-xs">Upload a product image to preview it here.</span>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={isUploading}
            className="mt-4 block w-full text-sm text-slate-400 file:mr-4 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-2 file:text-slate-100"
          />
          {isUploading && <p className="mt-2 text-xs text-slate-500">Uploading...</p>}
        </div>
      </div>
    </div>
  );
}
