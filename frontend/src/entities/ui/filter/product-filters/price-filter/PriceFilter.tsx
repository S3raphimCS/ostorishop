'use client';
import React, { useState, ChangeEvent } from 'react';
import { Range } from '@/shared/ui';
import { Filter } from '../../Filter';
import { Input } from '@/shared/ui';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
}) => {
  const [minValue, setMinPrice] = useState(minPrice);
  const [maxValue, setMaxPrice] = useState(maxPrice);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseInt(e.target.value);
    if (
      !isNaN(newMinPrice) &&
      newMinPrice <= maxPrice &&
      newMinPrice >= minPrice
    ) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value);
    if (
      !isNaN(newMaxPrice) &&
      newMaxPrice >= minPrice &&
      newMaxPrice <= maxPrice
    ) {
      setMaxPrice(newMaxPrice);
    }
  };

  return (
    <Filter title="Цена">
      <Range
        variant="secondary"
        size="tiny"
        min={minPrice}
        max={maxPrice}
        value={minValue}
        onChange={(e) => setMinPrice(parseInt(e.target.value))}
      />
      <div className="mt-2 flex items-center justify-between">
        <span>От:</span>
        <Input
          type="text"
          inputMode="numeric"
          value={minValue}
          onChange={handleMinPriceChange}
          className="input-sm input-accent w-1/3 rounded border p-1"
        />
        <span>До:</span>
        <Input
          type="text"
          inputMode="numeric"
          value={maxValue}
          onChange={handleMaxPriceChange}
          className="input-sm input-accent w-1/3 rounded border p-1"
        />
      </div>
    </Filter>
  );
};
