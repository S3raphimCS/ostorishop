import { Button, Rating, Icon } from '@/shared/ui';
import { Price } from '@/entities/price';
import { CardPlate, CardPlateProps } from '@/entities/card';

interface CardProps {
  imageUrl: string;
  alt: string;
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
  cardPlates: CardPlateProps[];
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  alt,
  title,
  rating,
  reviewsCount,
  price,
  cardPlates,
}) => {
  const discountPlate = cardPlates.find(
    (plate) => plate.variant === 'discount'
  );
  const discountPrice = discountPlate ? discountPlate.discountPrice : undefined;

  return (
    <div className="card card-compact w-full shadow-xl hover:border-4 hover:border-accent sm:w-80 md:w-96">
      <figure>
        <img
          className="m-auto box-border block max-h-full min-h-full min-w-full max-w-full p-0 "
          src={imageUrl}
          alt={alt}
        />
      </figure>
      <div className="card-actions absolute right-0 p-4 text-gray-400 ">
        <Button circle size={'small'} variant={'ghost'}>
          <Icon icon="heart-outline" />
        </Button>
      </div>
      <div className="ml-2 mt-2 flex gap-2">
        {cardPlates.map((plate, index) => (
          <CardPlate key={index} {...plate} />
        ))}
      </div>
      <div className="card-body">
        <div className="flex flex-row gap-6">
          <Price className="text-3xl font-bold" price={price} />
          {discountPrice && (
            <Price
              className="text-2xl text-gray-400 line-through decoration-red-500"
              price={discountPrice}
            />
          )}
        </div>
        <h2 className="card-title">{title}</h2>
        <Rating rating={rating} reviewsCount={reviewsCount} />
      </div>
    </div>
  );
};
