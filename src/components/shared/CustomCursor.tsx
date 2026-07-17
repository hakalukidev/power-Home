'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = cursorRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(-45deg)`;
      el.style.opacity = '1';
    };
    const handleLeave = () => {
      el.style.opacity = '0';
    };
    const handleEnter = () => {
      el.style.opacity = '1';
    };

    document.documentElement.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] opacity-0 transition-opacity duration-150"
      style={{ willChange: 'transform' }}
    >
      <div
        className="h-5 w-5 bg-brand-orange-500 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
        style={{ clipPath: 'polygon(0 0, 100% 32%, 32% 100%)' }}
      />
    </div>
  );
}
