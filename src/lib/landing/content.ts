import type { LandingContent } from '@/types/landing';

export function getLandingContent(): LandingContent {
  return {
    heroTitle: 'Engineering\nBatteries That\nKeep You Moving',
    heroSubtitle:
      'Power International BD supplies deep-cycle and easy-bike batteries built for long mileage, fast recharge, and dependable backup power — trusted across Chuadanga, Jashore and Pabna.',
    heroImageUrl: '/hero.png',
    products: [
      {
        id: '1',
        name: 'AK Power Plus',
        specs: '6-EV-12V · Deep Cycle AGM',
        description:
          'Heavy-duty deep-cycle battery engineered for easy bikes and backup power, with reinforced plates for a longer, more consistent discharge cycle.',
        price: 'Starting from ৳ 8,500',
        guarantee: '12 Months Replacement Guarantee',
        badge: 'Best Seller',
        image: '/products/p1.jpeg',
      },
      {
        id: '2',
        name: 'Mileage King',
        specs: 'Model 21S AH · 6-EV-12V · Easy Bike Battery',
        description:
          'High-mileage easy-bike battery built for long rides, fast recharge, and dependable power delivery mile after mile.',
        price: 'Starting from ৳ 9,900',
        guarantee: '18 Months Warranty',
        badge: 'Top Rated',
        image: '/products/p2.jpeg',
      },
    ],
    aboutText:
      'Power International BD engineers deep-cycle and easy-bike batteries built to last — combining reinforced plate design, rigorous quality checks, and a growing depot network to keep riders and retailers powered across Bangladesh.',
    contactEmail: 'powerinternationalbd109@gmail.com',
    contactPhone: '+880 1309 831 316',
    contactAddress: 'Office: Sadar, Chuadanga\nDepot 1: Monihar, Jashore\nDepot 2: Isshordi, Pabna',
  };
}
