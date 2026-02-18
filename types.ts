export type Page = 'home' | 'services' | 'price-list' | 'reviews' | 'gallery' | 'contact';

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  isNegative?: boolean;
  response?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  includes: string[];
  duration: string;
  priceStr?: string;
  pricingTiers?: { label: string; price: string }[];
  image?: string;
}

export interface PriceItem {
  breedExample: string;
  size: 'Small' | 'Medium' | 'Large' | 'X-Large';
  price: string;
}

export interface GalleryImage {
  id: string;
  url?: string;
  beforeUrl?: string;
  afterUrl?: string;
  category: 'dog' | 'cat' | 'puppy' | 'senior' | 'before-after';
  caption: string;
}