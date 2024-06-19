'use client';
import React, { useState, useEffect } from 'react';
import { BreadСrumb } from '@/shared/ui'; // Assuming correct path
import { ProductFilters } from '@/widgets/product-filters'; // Assuming correct path
import { ProductGrid } from '@/widgets/product-grid'; // Assuming correct path
import { menJacketsProducts } from '@/app-wrapper/types/mocks'; // Adjust import path as per your project structure
import { CardProps } from '@/entities/ui/card'; // Assuming correct path
import { ColorVariant } from '@/entities/ui/filter/product-filters/color-filter/Color'; // Assuming correct path
import { SizeVariant } from '@/entities/ui/filter/product-filters/size-filter/Size'; // Assuming correct path
import { availableColors } from '@/entities/lib/filters/color-filter/config'; // Adjust import path as per your project structure
import { availableSizes } from '@/entities/lib/filters/size-filter/config'; // Adjust import path as per your project structure

import { SizeFilter } from '@/entities/ui/filter/product-filters/size-filter/SizeFilter'; // Assuming correct path

const MenClothingJacketsPage: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<ColorVariant[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<SizeVariant[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<CardProps[]>(menJacketsProducts);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = menJacketsProducts;

      if (selectedColors.length > 0) {
        filtered = filtered.filter(
          (product) =>
            product.color &&
            selectedColors.includes(product.color as ColorVariant)
        );
      }

      if (selectedSizes.length > 0) {
        filtered = filtered.filter(
          (product) =>
            product.sizes &&
            product.sizes.some((size: SizeVariant) =>
              selectedSizes.includes(size)
            )
        );
      }

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedColors, selectedSizes]);

  const availableAllColors = availableColors
    .filter(({ color }) =>
      menJacketsProducts.some((product) => product.color === color)
    )
    .map(({ color, label }) => ({
      color: color as ColorVariant,
      label,
    }));

  const availableAllSizes = availableSizes.filter((size) =>
    menJacketsProducts.some(
      (product) => product.sizes && product.sizes.includes(size as SizeVariant)
    )
  ) as SizeVariant[];

  return (
    <div>
      <div className="ml-4">
        {/* BreadCrumb component assumed to be correctly implemented */}
        <BreadСrumb />
      </div>
      <div className="flex flex-col justify-between sm:flex-col md:flex-row">
        <ProductFilters
          availableColors={availableAllColors}
          availableSizes={availableAllSizes}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
        <div className="flex-1 p-4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default MenClothingJacketsPage; // Export as default
