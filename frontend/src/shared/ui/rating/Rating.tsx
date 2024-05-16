import { Icon } from '@/shared/ui';
import { combineClasses } from '@/shared/lib/style-worker';

const BASE_CLASSES = 'grid mt-4 w-full rounded-lg';

export const Rating = ({
  className,
  rating,
  reviewsCount,
}: {
  className?: string;
  rating: number;
  reviewsCount: number;
}) => {
  const MAX_RATING = 5;

  const finalRating = Math.min(rating, MAX_RATING);

  const filledStars = Math.floor(finalRating);
  const hasHalfStar = finalRating % 1 !== 0;
  const emptyStars = MAX_RATING - filledStars - (hasHalfStar ? 1 : 0);

  const fontSize = `${Math.min(1.2 - 0.1 * (MAX_RATING - filledStars), 1.2)}rem`;
  const classes = combineClasses(className, BASE_CLASSES);

  return (
    <div className={classes}>
      <div className="flex items-center">
        <div className="inline-flex items-center">
          {[...Array(filledStars)].map((_, index) => (
            <span key={index}>
              <Icon icon={'star'} color="orange" size={fontSize} />
            </span>
          ))}
          {hasHalfStar && (
            <span>
              <Icon icon={'half-star'} color="orange" size={fontSize} />
            </span>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <span key={index}>
              <Icon icon={'empty-star'} color="gray" size={fontSize} />
            </span>
          ))}
        </div>
        <span className="text-md ml-2 text-gray-400">{reviewsCount}</span>
      </div>
    </div>
  );
};
