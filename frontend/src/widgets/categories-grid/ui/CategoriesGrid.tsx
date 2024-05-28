import Link from 'next/link';
import { ProductCategory } from '../../product-category';
import { Card, CardProps } from '@/entities/ui/card';

interface CategoriesGridProps {
  title: string;
  items: (CardProps & { href: string })[];
}

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({
  title,
  items,
}) => {
  return (
    <ProductCategory className="w-11/12" title={title}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <Card showHeart={false} key={index} {...item} />
          </Link>
        ))}
      </div>
    </ProductCategory>
  );
};
