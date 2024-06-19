import React from 'react';
import { SizeFilter } from '@/entities/ui/filter/product-filters/size-filter/SizeFilter'; // Assuming correct path
import { ColorFilter } from '@/entities/ui/filter'; // Adjust import path as per your project structure
import { ColorVariant } from '@/entities/ui/filter/product-filters/color-filter/Color';
import { SizeVariant } from '@/entities/ui/filter/product-filters/size-filter/Size';

interface ProductFiltersProps {
  availableColors: { color: ColorVariant; label: string }[];
  availableSizes: SizeVariant[];
  selectedColors: ColorVariant[];
  setSelectedColors: (colors: ColorVariant[]) => void;
  selectedSizes: SizeVariant[];
  setSelectedSizes: (sizes: SizeVariant[]) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  availableColors,
  availableSizes,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
}) => {
  return (
    <>
      <aside className="hidden w-full border-r border-gray-200 p-4 sm:block md:w-1/4 lg:w-1/6">
        <h2 className="mb-4 text-xl font-semibold">Фильтры</h2>
        {/* Assuming PriceFilter and ColorFilter are implemented */}
        <SizeFilter
          availableSizes={availableSizes}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
        <ColorFilter
          availableColors={availableColors}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </aside>
      {/* ProductFiltersMobile component can be implemented separately */}
    </>
  );
};
