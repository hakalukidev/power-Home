// src/components/sections/ProductImageReveal.tsx

'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';
import { PixelImage } from '@/components/ui/pixel-image';
import { cn } from '@/lib/utils';

export function ProductImageReveal({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasPlayed = useInView(ref, { amount: 0.4, once: true });

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className={cn(
        'relative flex h-72 w-72 shrink-0 items-center justify-center sm:h-80 sm:w-80',
        className
      )}
    >
      {hasPlayed ? (
        <PixelImage
          src={src}
          grid="6x4"
          pixelFadeInDuration={500}
          maxAnimationDelay={500}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="h-72 w-72 object-cover sm:h-80 sm:w-80"
        />
      )}
    </div>
  );
}
