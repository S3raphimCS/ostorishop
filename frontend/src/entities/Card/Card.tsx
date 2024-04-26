import { Button } from '@/shared/ui';
import { Icon } from '@/shared/ui';

interface CardProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  alt,
  title,
  description,
}) => {
  return (
    <div className="card w-full shadow-xl hover:rounded hover:border-4 hover:border-accent-content sm:w-80 md:w-96">
      <div className="card-actions items-center justify-end text-gray-400">
        <Button className="mr-2 mt-2" circle size={'small'} variant={'ghost'}>
          <Icon icon="heart-outline" />
        </Button>
      </div>
      <figure>
        <img className="h-auto w-80 object-cover" src={imageUrl} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
