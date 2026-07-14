// src/components/admin/HomeEditor.tsx

'use client';

import { useState, type ChangeEvent } from 'react';
import Image from 'next/image';
import { useLandingContent } from '@/hooks/useLandingContent';
import { uploadHeroImage } from '@/lib/cloudinary/upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { LandingContent } from '@/types/landing';

export function HomeEditor() {
  const { content, loading, save } = useLandingContent();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <h2 className="text-xl font-semibold">Hero Content</h2>
      <p className="mt-2 text-sm text-slate-400">Edit the homepage hero title and subtitle here.</p>

      {loading || !content ? (
        <p className="mt-4 text-sm text-slate-500">Loading...</p>
      ) : (
        <HomeEditorForm content={content} save={save} />
      )}
    </div>
  );
}

function HomeEditorForm({
  content,
  save,
}: {
  content: LandingContent;
  save: (partial: Partial<LandingContent>) => Promise<void>;
}) {
  const [heroTitle, setHeroTitle] = useState(content.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(content.heroSubtitle);
  const [heroImageUrl, setHeroImageUrl] = useState(content.heroImageUrl ?? '');
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await uploadHeroImage(file);
      setHeroImageUrl(url);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    setStatus('saving');
    await save({ heroTitle, heroSubtitle, heroImageUrl });
    setStatus('saved');
  };

  return (
    <div className="mt-4 space-y-3">
      <Input
        value={heroTitle}
        onChange={(e) => setHeroTitle(e.target.value)}
        placeholder="Hero title"
        className="bg-slate-900 text-slate-100"
      />
      <Input
        value={heroSubtitle}
        onChange={(e) => setHeroSubtitle(e.target.value)}
        placeholder="Hero subtitle"
        className="bg-slate-900 text-slate-100"
      />

      {heroImageUrl && (
        <Image
          src={heroImageUrl}
          alt="Hero preview"
          width={320}
          height={180}
          className="rounded-lg border border-slate-800 object-cover"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={isUploading}
        className="block w-full text-sm text-slate-400 file:mr-4 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-2 file:text-slate-100"
      />

      <Button onClick={handleSave} disabled={status === 'saving' || isUploading}>
        {status === 'saving' ? 'Saving...' : status === 'saved' ? 'Saved' : 'Save'}
      </Button>
    </div>
  );
}
