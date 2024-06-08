import { PriceFilter, SizeFilter, ColorFilter } from '@/entities/ui/filter';
import { ProductFiltersMobile } from './ProductFiltersMobile';

export const ProductFilters: React.FC = () => {
  return (
    <>
      <aside className="hidden w-full border-r border-gray-200 p-4 sm:block md:w-1/4 lg:w-1/6">
        <h2 className="mb-4 text-xl font-semibold">Фильтры</h2>
        <PriceFilter minPrice={2500} maxPrice={55000} />
        <SizeFilter />
        <ColorFilter />
      </aside>
      <aside className="sm:hidden">
        <ProductFiltersMobile />
      </aside>
    </>
  );
};
