import { Rating } from '@/shared/ui';

interface ProductReviewProps {
  user: string;
  rating: number;
  pros: string;
  cons: string;
  comment: string;
  date: string;
}

export const ProductReview: React.FC<ProductReviewProps> = ({
  user,
  rating,
  pros,
  cons,
  comment,
  date,
}) => {
  return (
    <div className="flex border-t border-gray-200 py-4">
      <div className="mr-4 flex flex-col">
        <div className="flex justify-between"></div>
        <span className="mt-2 font-semibold">{user}</span>
        <Rating rating={rating} />
        <span className="text-sm text-gray-500">{date}</span>

        <div className="pt-2">
          <div className="mb-4">
            <strong>Достоинства:</strong>
            <p>{pros}</p>
          </div>
          <div className="mb-4">
            <strong>Недостатки:</strong>
            <p>{cons}</p>
          </div>
          <strong>Комментарий:</strong>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
