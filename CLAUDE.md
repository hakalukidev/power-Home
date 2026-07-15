# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Turbopack, http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test suite configured in this repo.

## Next.js version note

This project runs **Next.js 16.2.10** with React 19.2.4 — newer than what most training data covers, and AGENTS.md already directs you to `node_modules/next/dist/docs/` before writing code. One concrete breaking change to know up front: **Middleware was renamed to Proxy in Next 16** (a root-level `proxy.ts` replaces `middleware.ts`; same behavior, new name/convention). There is no proxy file in this repo yet — if one is needed, follow `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`, not `middleware.ts` conventions from memory.

## Architecture

This is a marketing/landing site for "Power International BD" (ERP & distribution company) with a lightweight Firebase-backed CMS for editing landing-page copy.

**Two content paths that don't currently connect:**
- The public pages (`src/app/page.tsx` and everything under `src/components/sections/`) render **hardcoded content** directly in JSX (e.g. `HeroSection.tsx`, `ProductsSection.tsx`). They do not read from Firestore or from `src/lib/landing/content.ts`.
- The admin panel (`src/app/admin/page.tsx` → `HomeEditor`, `ProductsEditor`, `ContactEditor`, `AboutEditor`) reads/writes a `LandingContent` object through `useLandingContent()` (`src/hooks/useLandingContent.ts`), which talks to a single Firestore document at `content/landing` (`src/lib/firebase/content.ts`). If that document doesn't exist yet, it falls back to the static defaults in `src/lib/landing/content.ts`.
- `src/app/api/landing/route.ts` is a third, separate path: it just returns `getLandingContent()` (the static defaults) as JSON and isn't consumed by the frontend today.

When asked to "make admin edits show up on the site," the actual gap is wiring the public section components to `useLandingContent()`/Firestore — this is not yet implemented.

**Auth & data:**
- Firebase client SDK is initialized once in `src/lib/firebase/config.ts` (guarded with `getApps()`), reading `NEXT_PUBLIC_FIREBASE_*` env vars. `auth`, `db`, and `storage` are exported from there for reuse.
- Admin routes are protected client-side only: `AdminAuthGuard` (`src/components/admin/AdminAuthGuard.tsx`) wraps `/admin` content, uses `useAuth()` (Firebase `onAuthStateChanged`) and redirects to `/admin/login` if unauthenticated. There is no server-side/proxy-level route protection.
- Firestore security (`firestore.rules`) allows public read and authenticated-only write on `content/**` — matches the public-read/admin-write model above.
- Image uploads go straight from the browser to Cloudinary via an unsigned upload preset (`src/lib/cloudinary/upload.ts`), then the resulting `secure_url` is saved into the Firestore content doc. Cloudinary cloud name/preset/folder have hardcoded fallbacks if `NEXT_PUBLIC_CLOUDINARY_*` env vars aren't set.
- `next.config.ts` allowlists `res.cloudinary.com` for `next/image`.

**UI layer:**
- shadcn/ui components live in `src/components/ui/`, configured via `components.json` (style `base-nova`, neutral base color, Lucide icons, no Tailwind config file — v4 CSS-based config lives in `src/app/globals.css`). Use the shadcn CLI conventions (aliases `@/components`, `@/lib`, `@/ui`, `@/hooks`) rather than hand-rolling primitives.
- Dark mode via `next-themes`, wired through `ThemeProvider` (`src/components/shared/ThemeProvider.tsx`, class-based, system default) in the root layout, toggled by `ModeToggle`.
- Path alias `@/*` → `./src/*` (see `tsconfig.json`).
