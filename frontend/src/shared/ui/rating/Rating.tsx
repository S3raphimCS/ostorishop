import { Icon } from '@/shared/ui';
import { combineClasses } from '@/shared/lib/style-worker';

const BASE_CLASSES =
  'grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible';

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

  const filledStars = Math.floor(rating);
  const emptyStars = MAX_RATING - filledStars;

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
          {[...Array(emptyStars)].map((_, index) => (
            <span key={index}>
              <Icon icon={'star'} color="gray" />
            </span>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {reviewsCount} отзывов
        </span>
      </div>
    </div>
  );
};
