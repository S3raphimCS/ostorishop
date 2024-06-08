import { paths } from '@/shared/routing';
import Link from 'next/link';
import { Price } from '../price';

interface ProductCardSearchProps {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
}

export const ProductCardSearch: React.FC<ProductCardSearchProps> = ({
  id,
  name,
  price,
  discountPrice,
  image,
}) => {
  return (
    <Link href={paths.productSlug + id}>
      <div className="flex items-center rounded-lg border bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
        <img src={image} alt={name} className="mr-4 h-16 w-16 object-cover" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <Price price={price} discountPrice={discountPrice} />
        </div>
      </div>
    </Link>
  );
};
