// src/lib/firebase/content.ts

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import type { LandingContent } from '@/types/landing';

export const landingContentRef = doc(db, 'content', 'landing');

export async function fetchLandingContent(): Promise<LandingContent | null> {
  const snapshot = await getDoc(landingContentRef);
  return snapshot.exists() ? (snapshot.data() as LandingContent) : null;
}

export async function saveLandingContent(partial: Partial<LandingContent>): Promise<void> {
  await setDoc(landingContentRef, partial, { merge: true });
}
