export type LandingProduct = {
  id: string;
  name: string;
  specs: string;
  description: string;
  price: string;
  guarantee: string;
  badge: string;
  image: string;
  /** ISO timestamp, set whenever the product is created or saved from the admin panel. */
  updatedAt?: string;
};

export type LandingContent = {
  /** Newline-separated phrases; the last line is highlighted in the hero heading. */
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl?: string;
  products: LandingProduct[];
  aboutText: string;
  contactEmail: string;
  contactPhone?: string;
  /** Newline-separated "Label: Value" lines, e.g. "Office: Sadar, Chuadanga". */
  contactAddress?: string;
};
