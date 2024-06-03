import { CardPlateProps } from '../../card';

export interface IFavouriteItem {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  rating?: number;
  reviewsCount?: number;
  price?: number;
  cardPlates?: CardPlateProps[];
}
