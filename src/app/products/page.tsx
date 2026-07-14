// src/app/products/page.tsx

'use client';

import { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star,
  X
} from 'lucide-react';

const products = [
  {
    id: 1,
    category: 'Battery',
    name: 'Industrial Battery 12V 200Ah',
    description: 'High-performance deep-cycle battery for industrial applications',
    price: '15,000 BDT',
    rating: 4.8,
    reviews: 120,
    badge: 'Best Seller',
    features: ['10+ years lifespan', 'Maintenance-free', 'Deep cycle'],
  },
  {
    id: 2,
    category: 'Inverter',
    name: 'Solar Inverter 5kW',
    description: 'Smart solar inverter with MPPT technology',
    price: '25,000 BDT',
    rating: 4.9,
    reviews: 85,
    badge: 'New',
    features: ['MPPT technology', 'Smart monitoring', 'High efficiency'],
  },
  {
    id: 3,
    category: 'Distribution',
    name: 'Power Distribution Board 3-Phase',
    description: 'Complete power distribution solution with surge protection',
    price: '45,000 BDT',
    rating: 4.7,
    reviews: 45,
    badge: 'Popular',
    features: ['Surge protection', '3-Phase', 'Customizable'],
  },
  {
    id: 4,
    category: 'Stabilizer',
    name: 'Automatic Voltage Stabilizer 10kVA',
    description: 'Advanced voltage regulation for sensitive equipment',
    price: '8,500 BDT',
    rating: 4.6,
    reviews: 30,
    badge: 'Budget',
    features: ['Automatic regulation', 'Overload protection', 'Digital display'],
  },
  {
    id: 5,
    category: 'Meter',
    name: 'Smart Energy Meter 3-Phase',
    description: 'Digital energy monitoring with remote access',
    price: '5,200 BDT',
    rating: 4.5,
    reviews: 20,
    badge: 'Smart',
    features: ['Remote monitoring', 'Energy analytics', 'Smart home ready'],
  },
  {
    id: 6,
    category: 'UPS',
    name: 'UPS System 3kVA Online',
    description: 'True online UPS with zero transfer time',
    price: '12,000 BDT',
    rating: 4.8,
    reviews: 60,
    badge: 'Premium',
    features: ['Zero transfer time', 'Pure sine wave', 'LCD display'],
  },
  {
    id: 7,
    category: 'Battery',
    name: 'Solar Battery 12V 100Ah',
    description: 'Deep-cycle solar battery with high storage capacity',
    price: '8,500 BDT',
    rating: 4.4,
    reviews: 40,
    badge: 'Best Value',
    features: ['Deep-cycle', 'High storage', 'Solar optimized'],
  },
  {
    id: 8,
    category: 'Inverter',
    name: 'Hybrid Inverter 3kW',
    description: 'Hybrid solar inverter with battery backup',
    price: '18,000 BDT',
    rating: 4.7,
    reviews: 55,
    badge: 'Popular',
    features: ['Hybrid', 'Battery backup', 'Grid-tie ready'],
  },
];

const categories = ['All', 'Battery', 'Inverter', 'Distribution', 'Stabilizer', 'Meter', 'UPS'];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Quality products designed for your business needs
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full md:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                  {selectedCategory === category && (
                    <X className="h-3 w-3 ml-1" />
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="w-full h-full flex items-center justify-center text-6xl text-gray-300">
                      🔋
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Quote
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}