// src/components/admin/AboutEditor.tsx

'use client';

import { useState } from 'react';
import { useLandingContent } from '@/hooks/useLandingContent';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import type { LandingContent } from '@/types/landing';

export function AboutEditor() {
  const { content, loading, save } = useLandingContent();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <h2 className="text-xl font-semibold">About Section</h2>
      <p className="mt-2 text-sm text-slate-400">Update the company description and story.</p>

      {loading ? (
        <p className="mt-4 text-sm text-slate-500">Loading...</p>
      ) : (
        <AboutEditorForm content={content} save={save} />
      )}
    </div>
  );
}

function AboutEditorForm({
  content,
  save,
}: {
  content: LandingContent;
  save: (partial: Partial<LandingContent>) => Promise<void>;
}) {
  const [aboutText, setAboutText] = useState(content.aboutText);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleSave = async () => {
    setStatus('saving');
    await save({ aboutText });
    setStatus('saved');
  };

  return (
    <div className="mt-4 space-y-3">
      <Textarea
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
        placeholder="About text"
        rows={5}
        className="bg-slate-900 text-slate-100"
      />
      <Button onClick={handleSave} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving...' : status === 'saved' ? 'Saved' : 'Save'}
      </Button>
    </div>
  );
}
