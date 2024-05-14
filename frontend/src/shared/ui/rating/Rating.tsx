import { Icon } from '@/shared/ui';
import { combineClasses } from '@/shared/lib/style-worker';

const BASE_CLASSES =
  'grid mt-4 w-full overflow-x-scroll rounded-lg lg:overflow-visible';

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

  const classes = combineClasses(className, BASE_CLASSES);

  return (
    <div className={classes}>
      <div className="flex items-center">
        <div className="inline-flex items-center">
          {[...Array(filledStars)].map((_, index) => (
            <span key={index}>
              <Icon icon={'star'} color="orange" />
            </span>
          ))}
          {hasHalfStar && (
            <span>
              <Icon icon={'half-star'} color="orange" />
            </span>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <span key={index}>
              <Icon icon={'empty-star'} color="gray" />
            </span>
          ))}
        </div>
        <span className="text-md ml-2 text-gray-400">{reviewsCount}</span>
      </div>
    </div>
  );
};
