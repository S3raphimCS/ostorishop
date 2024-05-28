import { Card, CardProps } from '@/entities/ui/card';
import { combineClasses } from '@/shared/lib/style-worker';
import { paths } from '@/shared/routing';
import Link from 'next/link';

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
        <Link href={paths.productSlug}>
          <Card key={index} {...product} />
        </Link>
      ))}
    </div>
  );
};
