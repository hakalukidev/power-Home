import type { LandingContent } from '@/types/landing';

export function getLandingContent(): LandingContent {
  return {
    heroTitle: 'Driving Energy\nInfrastructure,\nSustaining Industries',
    heroSubtitle:
      'High-Performance Energy Solutions & Industrial Raw Materials across South Asia.',
    heroDescription:
      'Power International BD collaborates with top-tier Chinese manufacturing facilities in Bangladesh to produce premium-quality batteries under our own brand. As a trusted B2B partner, we import next-generation Lithium solutions, trade refined lead and battery scrap with local refineries, and engineer products built for future global export.',
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
      'At Power International BD, we operate an agile and asset-light business model designed for maximum efficiency. Instead of maintaining proprietary manufacturing plants, we partner with leading Chinese-managed factories operating in Bangladesh to enforce strict international standards on our product lines. Beyond battery branding, we are a key player in the circular energy economy — aggregating battery scrap for local lead refining factories, securing high-purity refined lead, and importing cutting-edge Lithium technologies to power the future.',
    contactEmail: 'powerinternationalbd109@gmail.com',
    contactPhone: '+880 1309 831 316',
    contactAddress: 'Office: Sadar, Chuadanga\nDepot 1: Monihar, Jashore\nDepot 2: Isshordi, Pabna',
  };
}
