import { CardPlateVariant } from '../ui/card';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  rating: number;
  reviewsCount: number;
  sizes: string[];
  price: number;
  images: string[];
  material: string;
  color: string;
  description: string;
  reviews: { user: string; rating: number; comment: string }[];
  cardPlates?: { variant: CardPlateVariant; label: string }[];
}
