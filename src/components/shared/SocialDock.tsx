// src/components/shared/SocialDock.tsx

'use client';

import { Dock, DockIcon } from '@/components/ui/dock';
import { cn } from '@/lib/utils';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.45 1.32 4.94L2 22l5.28-1.38a9.85 9.85 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2.01.88 2.16.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.29.14.45.12.62-.07.17-.2.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.63.77 1.91.91.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 3h3.05l-6.66 7.61L22.5 21h-6.14l-4.81-6.3L5.02 21H1.96l7.13-8.15L1.5 3h6.3l4.35 5.76L18.24 3Zm-1.07 16.17h1.69L7.9 4.73H6.08l11.09 14.44Z" />
    </svg>
  );
}

const socials = [
  { name: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon, color: 'text-[#1877F2]' },
  { name: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon, color: 'text-brand-orange-500' },
  { name: 'WhatsApp', href: 'https://wa.me/8801309831316', Icon: WhatsAppIcon, color: 'text-[#25D366]' },
  { name: 'X', href: 'https://x.com', Icon: XIcon, color: 'text-foreground' },
];

export function SocialDock({ className }: { className?: string }) {
  return (
    <Dock
      className={cn(
        'mt-0 border-black/10 bg-white/70 shadow-lg shadow-black/5',
        className
      )}
      iconSize={40}
      iconMagnification={56}
      iconDistance={100}
    >
      {socials.map(({ name, href, Icon, color }) => (
        <DockIcon key={name} className="bg-brand-cream-50">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex h-full w-full items-center justify-center"
          >
            <Icon className={cn('h-1/2 w-1/2', color)} />
          </a>
        </DockIcon>
      ))}
    </Dock>
  );
}
