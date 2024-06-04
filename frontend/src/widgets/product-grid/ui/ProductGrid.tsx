import { Card, CardProps } from '@/entities/ui/card';
import { combineClasses } from '@/shared/lib/style-worker';

interface ProductGridProps {
  className?: string;
  products: CardProps[];
}

const BASE_CLASSES =
  'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

export const ProductGrid: React.FC<ProductGridProps> = ({
  className,
  products,
}) => {
  const classes = combineClasses(BASE_CLASSES, className);
  return (
    <div className={classes}>
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};
