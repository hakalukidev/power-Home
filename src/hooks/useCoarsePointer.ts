// src/hooks/useCoarsePointer.ts

'use client';

import { useEffect, useState } from 'react';

/** Reactively tracks a CSS media query (e.g. multiple queries joined with a comma act as OR). */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return matches;
}

/** True on touch/coarse-pointer devices, where hover-based effects (magnetic docks, scroll-jacked reveals) don't translate well. */
export function useCoarsePointer() {
  return useMediaQuery('(pointer: coarse)');
}
