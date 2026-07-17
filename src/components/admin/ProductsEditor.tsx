// src/components/admin/ProductsEditor.tsx

'use client';

import { useState, type ChangeEvent } from 'react';
import Image from 'next/image';
import { useLandingContent } from '@/hooks/useLandingContent';
import { uploadProductImage } from '@/lib/cloudinary/upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { LandingContent, LandingProduct } from '@/types/landing';

export function ProductsEditor() {
  const { content, loading, save } = useLandingContent();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <h2 className="text-xl font-semibold">Products</h2>
      <p className="mt-2 text-sm text-slate-400">Manage featured products from the admin screen.</p>

      {loading ? (
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
    setStatus('idle');
  };

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: '',
        specs: '',
        description: '',
        price: '',
        guarantee: '',
        badge: '',
        image: '',
      },
    ]);
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
      updateProduct(index, { image: url });
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
        <div key={product.id} className="space-y-2 rounded-lg border border-slate-800 p-3">
          <Input
            value={product.name}
            onChange={(e) => updateProduct(index, { name: e.target.value })}
            placeholder="Product name"
            className="bg-slate-900 text-slate-100"
          />
          <Input
            value={product.specs}
            onChange={(e) => updateProduct(index, { specs: e.target.value })}
            placeholder="Specs (e.g. 6-EV-12V · Deep Cycle AGM)"
            className="bg-slate-900 text-slate-100"
          />
          <Textarea
            value={product.description}
            onChange={(e) => updateProduct(index, { description: e.target.value })}
            placeholder="Description"
            rows={3}
            className="bg-slate-900 text-slate-100"
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              value={product.price}
              onChange={(e) => updateProduct(index, { price: e.target.value })}
              placeholder="Price (e.g. Starting from ৳ 8,500)"
              className="bg-slate-900 text-slate-100"
            />
            <Input
              value={product.badge}
              onChange={(e) => updateProduct(index, { badge: e.target.value })}
              placeholder="Badge (e.g. Best Seller)"
              className="bg-slate-900 text-slate-100"
            />
          </div>
          <Input
            value={product.guarantee}
            onChange={(e) => updateProduct(index, { guarantee: e.target.value })}
            placeholder="Guarantee (e.g. 12 Months Replacement Guarantee)"
            className="bg-slate-900 text-slate-100"
          />
          {product.image && (
            <Image
              src={product.image}
              alt={product.name || 'Product preview'}
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
          {uploadingIndex === index && <p className="text-xs text-slate-500">Uploading...</p>}
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
