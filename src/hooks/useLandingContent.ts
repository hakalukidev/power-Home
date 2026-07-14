// src/hooks/useLandingContent.ts

'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchLandingContent, saveLandingContent } from '@/lib/firebase/content';
import { getLandingContent } from '@/lib/landing/content';
import type { LandingContent } from '@/types/landing';

export function useLandingContent() {
  const [content, setContent] = useState<LandingContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchLandingContent()
      .then((remote) => {
        if (!active) return;
        setContent(remote ?? getLandingContent());
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const save = useCallback(async (partial: Partial<LandingContent>) => {
    await saveLandingContent(partial);
    setContent((prev) => (prev ? { ...prev, ...partial } : prev));
  }, []);

  return { content, loading, save };
}
