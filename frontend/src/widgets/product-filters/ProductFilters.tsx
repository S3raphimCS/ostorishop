import { PriceFilter, SizeFilter, ColorFilter } from '@/entities/ui/filter';

export const ProductFilters: React.FC = () => {
  return (
    <aside className="w-full border-r border-gray-200 p-4 sm:w-1/4 md:w-1/5 lg:w-1/6">
      <h2 className="mb-4 text-xl font-semibold">Фильтры</h2>
      <PriceFilter minPrice={2500} maxPrice={55000} />
      <SizeFilter />
      <ColorFilter />
    </aside>
  );
};
