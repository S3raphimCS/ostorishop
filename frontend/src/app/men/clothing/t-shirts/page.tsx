import { BreadСrumb } from '@/shared/ui';
import { ProductFilters } from '@/widgets/product-filters';
import { ProductGrid } from '@/widgets/product-grid';
import { menTShirtsProducts } from '@/app-wrapper/types/mocks';

export default function MenClothingTShirtsPage() {
  return (
    <div>
      <div className="ml-4">
        <BreadСrumb />
      </div>
      <div className="flex flex-col justify-between sm:flex-col md:flex-row">
        <ProductFilters />
        <div className="flex-1 p-4">
          <ProductGrid products={menTShirtsProducts} />
        </div>
      </div>
    </div>
  );
}
