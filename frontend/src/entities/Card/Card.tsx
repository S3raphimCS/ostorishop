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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={alt} />
      </figure>
      <div className="card-body bg-neutral">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Button variant={'secondary'} size={'small'}>
            <Icon icon="heart" size={14} color="black" />
          </Button>
        </div>
      </div>
    </div>
  );
};
