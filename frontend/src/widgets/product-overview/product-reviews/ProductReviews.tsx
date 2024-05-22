'use client';
import { useState } from 'react';
import { Button, Icon, Rating } from '@/shared/ui';
import { Review } from '@/entities/model/';
import { combineClasses } from '@/shared/lib/style-worker';
import { ProductReview } from '@/entities/ui/product-review';

interface ProductReviewsProps {
  className?: string;
  reviews: Review[];
  productRating: number;
}

const BASE_CLASSES = 'flex justify-between cursor-pointer items-center gap-2';

export const ProductReviews: React.FC<ProductReviewsProps> = ({
  className,
  reviews,
  productRating,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleShowAllReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  const classes = combineClasses(BASE_CLASSES, className);
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <section id="reviews">
      <div className={classes} onClick={toggleExpanded}>
        <h2 className="text-2xl font-bold">Отзывы</h2>
        <div className="flex">
          <span className="my-auto">{productRating}</span>
          <Rating rating={productRating} className="ml-2" />
          <Icon size={'3rem'} icon={expanded ? 'dropup' : 'dropdown'} />
        </div>
      </div>

      {expanded && (
        <div>
          {displayedReviews.map((review, index) => (
            <ProductReview
              key={index}
              user={review.user}
              rating={review.rating}
              pros={review.pros}
              cons={review.cons}
              comment={review.comment}
              date={review.date}
            />
          ))}
          {reviews.length > 2 && !showAllReviews && (
            <Button variant="accent" size="wide" onClick={toggleShowAllReviews}>
              Больше отзывов
            </Button>
          )}
        </div>
      )}
    </section>
  );
};
