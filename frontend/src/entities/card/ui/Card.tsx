import { Button, Rating, Icon } from '@/shared/ui';
import { Price } from '@/entities/price';
import { CardPlate } from '@/entities/card';

interface CardProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  price: number;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  alt,
  title,
  description,
  rating,
  reviewsCount,
  price,
}) => {
  return (
    <div className="card w-full shadow-xl hover:border-4 hover:border-accent sm:w-80 md:w-96">
      <figure>
        <img
          className="m-auto box-border block max-h-full min-h-full min-w-full max-w-full p-0 "
          src={imageUrl}
          alt={alt}
        />
      </figure>
      <div className="card-actions absolute right-0 p-4 text-gray-400">
        <Button circle size={'small'} variant={'ghost'}>
          <Icon icon="heart-outline" />
        </Button>
      </div>
      <div className="absolute left-2 top-2/4 flex gap-2">
        <CardPlate variant={'guarantee'} label={'Гарантия 30 дней'} />
        <CardPlate variant={'new'} label={'Новинка'} />
        <CardPlate variant={'popular'} label={'Популярное'} />
      </div>
      <div className="card-body">
        <Price price={price} />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <Rating rating={rating} reviewsCount={reviewsCount} />
      </div>
    </div>
  );
};
