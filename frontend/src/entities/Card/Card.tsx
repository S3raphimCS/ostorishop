import { Button } from '@/shared/ui';
import { FaHeart } from 'react-icons/fa';

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
          <Button variant={'secondary'} size={'small'} icon={FaHeart}></Button>
        </div>
      </div>
    </div>
  );
};
