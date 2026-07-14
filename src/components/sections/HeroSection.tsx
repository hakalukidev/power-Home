// src/components/sections/HeroSection.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1">
              🚀 Enterprise Solution
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Power International
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ERP & Distribution
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              Complete enterprise resource planning and distribution management 
              system for modern businesses. Streamline your operations with 
              real-time insights and automation.
            </p>

            {/* Features List */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Real-time inventory management</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Automated financial reporting</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Complete sales & distribution chain</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="https://erp.powerinternational.com">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-2">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Active Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Team Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-500">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-dashboard.png"
                alt="ERP Dashboard Preview"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-semibold">Fast & Efficient</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-bounce delay-1000">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}