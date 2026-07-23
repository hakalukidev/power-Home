// src/app/admin/login/page.tsx

'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';
import { auth } from '@/lib/firebase/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/admin');
    } catch {
      setError('Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen">
      {/* Left: brand panel with the battery visual */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-brand-navy-950 p-12 lg:flex">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-brand-orange-500/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-navy-800/30 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-full-dark.svg" alt="Power International BD" className="h-12 w-auto" />

          <Image
            src="/hero-dark.png"
            alt="Power International BD battery"
            width={480}
            height={480}
            priority
            className="mt-10 h-auto w-full max-w-sm"
          />

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-brand-cream-50/60">
            Manage your landing page content, products, and inquiries from one place.
          </p>
        </div>
      </div>

      {/* Right: login form */}
      <div className="flex w-full flex-col items-center justify-center bg-brand-cream-50 p-6 dark:bg-brand-navy-950 lg:w-1/2">
        <div className="w-full max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-full.svg"
            alt="Power International BD"
            className="mb-8 h-10 w-auto dark:hidden lg:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-full-dark.svg"
            alt="Power International BD"
            className="mb-8 hidden h-10 w-auto dark:block lg:hidden"
          />

          <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy-950 dark:text-white">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-brand-navy-900/60 dark:text-brand-cream-50/60">
            Sign in to manage landing page content.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="h-11 rounded-full px-4"
            />
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="h-11 rounded-full px-4 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute top-1/2 right-3.5 -translate-y-1/2 text-brand-navy-900/50 hover:text-brand-navy-950 dark:text-brand-cream-50/50 dark:hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button
              type="submit"
              disabled={isLoading}
              className="h-11 w-full rounded-full bg-brand-orange-500 text-white hover:bg-brand-orange-600"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
