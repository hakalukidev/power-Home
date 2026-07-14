// src/components/sections/FeaturesSection.tsx

'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShoppingCart,
  Users,
  Wallet,
  Truck,
  BarChart3,
  ShieldCheck
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Sales Management',
    description: 'Complete sales chain from lead to delivery with real-time tracking.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Wallet,
    title: 'Financial Control',
    description: 'Full accounting, ledger, payments, and expense management.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Truck,
    title: 'Distribution & Logistics',
    description: 'Warehouse management, delivery assignment, and tracking.',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: Users,
    title: 'HR & Payroll',
    description: 'Employee management, attendance, payroll, and commissions.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time dashboards, daily closing, and business insights.',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Role-based access, audit trails, and data protection.',
    color: 'from-indigo-500 to-blue-600',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Power International?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Complete solution for modern businesses with enterprise-grade features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}