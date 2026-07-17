// src/components/admin/ContactEditor.tsx

'use client';

import { useState } from 'react';
import { useLandingContent } from '@/hooks/useLandingContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { LandingContent } from '@/types/landing';

export function ContactEditor() {
  const { content, loading, save } = useLandingContent();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <h2 className="text-xl font-semibold">Contact Info</h2>
      <p className="mt-2 text-sm text-slate-400">Update contact details for the landing page.</p>

      {loading ? (
        <p className="mt-4 text-sm text-slate-500">Loading...</p>
      ) : (
        <ContactEditorForm content={content} save={save} />
      )}
    </div>
  );
}

function ContactEditorForm({
  content,
  save,
}: {
  content: LandingContent;
  save: (partial: Partial<LandingContent>) => Promise<void>;
}) {
  const [contactEmail, setContactEmail] = useState(content.contactEmail);
  const [contactPhone, setContactPhone] = useState(content.contactPhone ?? '');
  const [contactAddress, setContactAddress] = useState(content.contactAddress ?? '');
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleSave = async () => {
    setStatus('saving');
    await save({ contactEmail, contactPhone, contactAddress });
    setStatus('saved');
  };

  return (
    <div className="mt-4 space-y-3">
      <Input
        type="email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        placeholder="Contact email"
        className="bg-slate-900 text-slate-100"
      />
      <Input
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        placeholder="Contact phone"
        className="bg-slate-900 text-slate-100"
      />
      <Textarea
        value={contactAddress}
        onChange={(e) => setContactAddress(e.target.value)}
        placeholder={'Depots, one "Label: Value" per line\ne.g. Office: Sadar, Chuadanga'}
        rows={3}
        className="bg-slate-900 text-slate-100"
      />
      <Button onClick={handleSave} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving...' : status === 'saved' ? 'Saved' : 'Save'}
      </Button>
    </div>
  );
}
