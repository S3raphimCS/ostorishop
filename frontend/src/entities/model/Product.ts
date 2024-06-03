import { CardPlateVariant } from '../ui/card';
import { Review } from './Review';

export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  rating: number;
  reviewsCount: number;
  sizes: string[];
  price: number;
  discountPrice?: number;
  images: string[];
  material: string;
  color: string;
  description: string;
  reviews: Review[];
  cardPlates?: { variant: CardPlateVariant; label: string }[];
}
