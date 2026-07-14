export type LandingProduct = {
  title: string;
  description: string;
};

export type LandingContent = {
  heroTitle: string;
  heroSubtitle: string;
  products: LandingProduct[];
  aboutText: string;
  contactEmail: string;
};
