// src/components/sections/StatsSection.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Users, 
  Package, 
  DollarSign,
  TrendingUp,
  Award
} from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '10+',
    label: 'Years of Experience',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Happy Customers',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Package,
    value: '1000+',
    label: 'Products Delivered',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: DollarSign,
    value: '50M+',
    label: 'Revenue Generated',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: TrendingUp,
    value: '200%',
    label: 'Growth Rate',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Industry Awards',
    color: 'from-indigo-500 to-blue-600',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/20 transition-all">
                <CardContent className="text-center p-6">
                  <div className={`w-12 h-12 mx-auto bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}