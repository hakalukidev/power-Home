import type { LandingContent } from '@/types/landing';

export function getLandingContent(): LandingContent {
  return {
    heroTitle: "Build a polished landing experience",
    heroSubtitle: "A simple, editable content structure for your homepage and admin panel.",
    products: [
      {
        title: "Smart Homes",
        description: "Elegant solutions designed for modern living.",
      },
      {
        title: "Premium Spaces",
        description: "Comfort-driven layouts with timeless appeal.",
      },
      {
        title: "Reliable Support",
        description: "Dedicated help from planning to completion.",
      },
    ],
    aboutText:
      "Power Home brings together thoughtful design, practical technology, and a customer-first approach to create spaces people love.",
    contactEmail: "powerinternationalbd109@gmail.com",
    contactPhone: "+880 1309 831 316",
    contactAddress: "Office: Sadar, Chuadanga · Depot 1: Monihar, Jashore · Depot 2: Isshordi, Pabna",
  };
}
