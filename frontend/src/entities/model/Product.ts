import { CardPlateVariant } from '../ui/card';
import { ColorVariant } from '../ui/filter/product-filters/color-filter/Color';
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
  color: ColorVariant;
  description: string;
  reviews: Review[];
  cardPlates?: { variant: CardPlateVariant; label: string }[];
}
