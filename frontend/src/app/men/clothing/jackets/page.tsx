import { CardProps } from '@/entities/ui/card';
import { ProductFilters } from '@/widgets/product-filters';
import { ProductGrid } from '@/widgets/product-grid';

import { menJacketsProducts } from '@/app-wrapper/types/mocks';

export default function MenClothingJacketsPage() {
  return (
    <div className="flex justify-between">
      <ProductFilters />
      <div className="flex-1 p-4">
        <ProductGrid products={menJacketsProducts} />
      </div>
    </div>
  );
}
