import { ProductImages } from './product-images/ProductImages';
import { ProductDetails } from './product-details/ProductDetails';
import { ProductDescription } from './product-description/ProductDescription';
import { ProductReviews } from './product-reviews/ProductReviews';
import { Product } from '@/entities/model';

interface ProductOverviewProps {
  product: Product;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  product,
}) => {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="md:col-span-1">
          <ProductDetails product={product} />
        </div>
      </div>
      <ProductDescription className="mt-6" description={product.description} />
      <ProductReviews
        className="mt-6"
        productRating={product.rating}
        reviews={product.reviews}
      />
    </div>
  );
};
