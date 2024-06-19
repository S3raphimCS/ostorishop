'use client';
import { useState, useEffect } from 'react';
import { BreadСrumb } from '@/shared/ui';
import { ProductFilters } from '@/widgets/product-filters';
import { ProductGrid } from '@/widgets/product-grid';
import { menJacketsProducts } from '@/app-wrapper/types/mocks';
import { CardProps } from '@/entities/ui/card';
import { ColorVariant } from '@/entities/ui/filter/product-filters/color-filter/Color';
import { availableColors as allAvailableColors } from '@/entities/lib/filters/color-filter/config';

export default function MenClothingJacketsPage() {
  const [selectedColors, setSelectedColors] = useState<ColorVariant[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<CardProps[]>(menJacketsProducts);

  useEffect(() => {
    filterProducts();
  }, [selectedColors]);

  const filterProducts = () => {
    let filtered = menJacketsProducts;

    if (selectedColors.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.color &&
          selectedColors.includes(product.color as ColorVariant)
      );
    }

    setFilteredProducts(filtered);
  };

  const availableColors = allAvailableColors
    .filter(({ color }) =>
      menJacketsProducts.some((product) => product.color === color)
    )
    .map(({ color, label }) => ({
      color: color as ColorVariant,
      label,
    }));

  return (
    <div>
      <div className="ml-4">
        <BreadСrumb />
      </div>
      <div className="flex flex-col justify-between sm:flex-col md:flex-row">
        <ProductFilters
          availableColors={availableColors}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
        <div className="flex-1 p-4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
