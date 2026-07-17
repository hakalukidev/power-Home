export type LandingProduct = {
  id: string;
  name: string;
  specs: string;
  description: string;
  price: string;
  guarantee: string;
  badge: string;
  image: string;
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
