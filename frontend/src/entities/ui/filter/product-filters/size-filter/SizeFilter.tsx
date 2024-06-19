'use client';
import React, { useState } from 'react';
import { Button, Input } from '@/shared/ui';
import { Filter } from '@/entities/ui/filter';
import { Size } from './Size'; // Assuming Size component is correctly implemented
import { SizeVariant } from './Size'; // Adjust import path as per your project structure

interface SizeFilterProps {
  availableSizes: SizeVariant[];
  selectedSizes: SizeVariant[];
  setSelectedSizes: (sizes: SizeVariant[]) => void;
}

export const SizeFilter: React.FC<SizeFilterProps> = ({
  availableSizes = [],
  selectedSizes = [],
  setSelectedSizes,
}) => {
  const [showAllSizes, setShowAllSizes] = useState(false);

  const toggleShowAllSizes = () => {
    setShowAllSizes(!showAllSizes);
  };

  const handleSizeChange = (size: SizeVariant) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(
        selectedSizes.filter((selectedSize) => selectedSize !== size)
      );
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // Determine which sizes to display based on showAllSizes state
  const sizesToShow = showAllSizes
    ? availableSizes
    : availableSizes.slice(0, 4);

  return (
    <Filter title="Размер">
      <div>
        {sizesToShow.map((size) => (
          <label key={size} className="mb-2 flex items-center">
            <Input
              type="checkbox"
              className="checkbox checkbox-sm mr-2"
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            <Size size={size} />{' '}
            {/* Assuming Size component correctly displays size */}
          </label>
        ))}
        {availableSizes.length > 4 && (
          <Button
            variant={'ghost'}
            size="small"
            onClick={toggleShowAllSizes}
            className="mt-2 text-accent hover:bg-base-100"
          >
            {showAllSizes ? 'Скрыть' : 'Посмотреть все'}
          </Button>
        )}
      </div>
    </Filter>
  );
};
