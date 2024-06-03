'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Rating, Icon } from '@/shared/ui';
import { Price } from '@/entities/ui/price';
import { CardPlate, CardPlateProps } from '@/entities/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from '@/features/wishlist';
import { paths } from '@/shared/routing';

export interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  rating?: number;
  reviewsCount?: number;
  price?: number;
  cardPlates?: CardPlateProps[];
  showHeart?: boolean;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  imageUrl,
  alt,
  rating,
  reviewsCount,
  price,
  cardPlates = [],
  showHeart = true,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((item: any) => item.id === id);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(
        addFavorite({ id, title, imageUrl, alt, rating, reviewsCount, price })
      );
    }
  };

  const discountPlate = cardPlates.find(
    (plate) => plate.variant === 'discount'
  );
  const discountPrice = discountPlate ? discountPlate.discountPrice : undefined;

  return (
    <div className="card card-compact w-full shadow-xl hover:border-4 hover:border-accent">
      {showHeart && (
        <div className="absolute right-0 top-0 flex justify-end p-4 text-gray-400">
          <Button
            circle
            size={'small'}
            variant={'ghost'}
            onClick={handleFavoriteClick}
          >
            <Icon
              size={'1.5em'}
              icon={isFavorite ? 'heart' : 'heart-outline'}
              color={isFavorite ? 'red' : 'black'}
            />
          </Button>
        </div>
      )}
      <Link href={paths.productSlug + id} passHref>
        <figure>
          <Image
            className="hover:rounded-xl"
            src={imageUrl}
            alt={alt}
            width={300}
            height={200}
            layout="responsive"
          />
        </figure>

        {cardPlates && cardPlates.length > 0 && (
          <div className="ml-2 mt-2 flex gap-2">
            {cardPlates.map((plate, index) => (
              <CardPlate key={index} {...plate} />
            ))}
          </div>
        )}
        <div className="card-body">
          {price !== undefined && (
            <div className="flex flex-row gap-6">
              <Price className="text-3xl font-bold" price={price} />
              {discountPrice && (
                <Price
                  className="text-2xl text-gray-400 line-through decoration-red-500"
                  price={discountPrice}
                />
              )}
            </div>
          )}
          <h2 className="card-title">{title}</h2>
          {rating !== undefined && reviewsCount !== undefined && (
            <Rating rating={rating} reviewsCount={reviewsCount} />
          )}
        </div>
      </Link>
    </div>
  );
};
