// src/components/admin/ProductsEditor.tsx

'use client';

import { useState, type ChangeEvent } from 'react';
import Image from 'next/image';
import { useLandingContent } from '@/hooks/useLandingContent';
import { uploadProductImage } from '@/lib/cloudinary/upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { LandingContent, LandingProduct } from '@/types/landing';

export function ProductsEditor() {
  const { content, loading, save } = useLandingContent();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <h2 className="text-xl font-semibold">Products</h2>
      <p className="mt-2 text-sm text-slate-400">Manage featured products from the admin screen.</p>

      {loading || !content ? (
        <p className="mt-4 text-sm text-slate-500">Loading...</p>
      ) : (
        <ProductsEditorForm content={content} save={save} />
      )}
    </div>
  );
}

function ProductsEditorForm({
  content,
  save,
}: {
  content: LandingContent;
  save: (partial: Partial<LandingContent>) => Promise<void>;
}) {
  const [products, setProducts] = useState<LandingProduct[]>(content.products);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const updateProduct = (index: number, patch: Partial<LandingProduct>) => {
    setProducts((prev) => prev.map((p, i) => (i === index ? { ...p, ...patch } : p)));
  };

  const addProduct = () => {
    setProducts((prev) => [...prev, { title: '', description: '' }]);
  };

  const removeProduct = (index: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = async (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingIndex(index);
    try {
      const url = await uploadProductImage(file);
      updateProduct(index, { imageUrl: url });
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleSave = async () => {
    setStatus('saving');
    await save({ products });
    setStatus('saved');
  };

  return (
    <div className="mt-4 space-y-4">
      {products.map((product, index) => (
        <div key={index} className="space-y-2 rounded-lg border border-slate-800 p-3">
          <Input
            value={product.title}
            onChange={(e) => updateProduct(index, { title: e.target.value })}
            placeholder="Product title"
            className="bg-slate-900 text-slate-100"
          />
          <Input
            value={product.description}
            onChange={(e) => updateProduct(index, { description: e.target.value })}
            placeholder="Product description"
            className="bg-slate-900 text-slate-100"
          />
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.title || 'Product preview'}
              width={160}
              height={100}
              className="rounded-md border border-slate-800 object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(index, e)}
            disabled={uploadingIndex === index}
            className="block w-full text-sm text-slate-400 file:mr-4 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-2 file:text-slate-100"
          />
          <Button variant="outline" size="sm" onClick={() => removeProduct(index)}>
            Remove
          </Button>
        </div>
      ))}

      <div className="flex gap-3">
        <Button variant="outline" onClick={addProduct}>
          Add product
        </Button>
        <Button onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : status === 'saved' ? 'Saved' : 'Save'}
        </Button>
      </div>
    </div>
  );
}
