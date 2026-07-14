export type LandingProduct = {
  title: string;
  description: string;
  imageUrl?: string;
};

export type LandingContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl?: string;
  products: LandingProduct[];
  aboutText: string;
  contactEmail: string;
  contactPhone?: string;
  contactAddress?: string;
};
