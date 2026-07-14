// src/components/sections/ProductsSection.tsx

'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Industrial Battery',
    description: 'High-capacity battery for industrial applications',
    price: '15,000 BDT',
    image: '/images/battery.jpg',
    rating: 4.8,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Solar Inverter',
    description: 'Premium solar inverter with smart technology',
    price: '25,000 BDT',
    image: '/images/inverter.jpg',
    rating: 4.9,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Power Distribution Board',
    description: 'Complete power distribution solution',
    price: '45,000 BDT',
    image: '/images/distribution.jpg',
    rating: 4.7,
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Voltage Stabilizer',
    description: 'Automatic voltage regulation system',
    price: '8,500 BDT',
    image: '/images/stabilizer.jpg',
    rating: 4.6,
    badge: 'Budget',
  },
  {
    id: 5,
    name: 'Smart Meter',
    description: 'Digital energy monitoring solution',
    price: '5,200 BDT',
    image: '/images/meter.jpg',
    rating: 4.5,
    badge: 'Smart',
  },
  {
    id: 6,
    name: 'UPS System',
    description: 'Uninterrupted power supply for critical equipment',
    price: '12,000 BDT',
    image: '/images/ups.jpg',
    rating: 4.8,
    badge: 'Premium',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Products</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            Quality products designed for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gray-100 dark:bg-slate-800">
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                    {product.badge}
                  </Badge>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-6xl">🔋</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{product.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 dark:border-slate-600 dark:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}