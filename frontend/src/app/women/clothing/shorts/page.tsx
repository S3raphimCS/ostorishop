import { BreadСrumb } from '@/shared/ui';
import { ProductFilters } from '@/widgets/product-filters';
import { ProductGrid } from '@/widgets/product-grid';
import { womenShortsProducts } from '@/app-wrapper/types/mocks';

export default function WomenClothingShortsPage() {
  return (
    <div>
      <div className="ml-4">
        <BreadСrumb />
      </div>
      <div className="flex justify-between">
        <ProductFilters />
        <div className="flex-1 p-4">
          <ProductGrid products={womenShortsProducts} />
        </div>
      </div>
    </div>
  );
}
