'use client';
import React, { useState, ChangeEvent, FocusEvent } from 'react';
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
  const [minValue, setMinPrice] = useState<string | number>(minPrice);
  const [maxValue, setMaxPrice] = useState<string | number>(maxPrice);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value);
    setMinPrice(isNaN(parsedValue) ? '' : parsedValue);
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value);
    setMaxPrice(isNaN(parsedValue) ? '' : parsedValue);
  };

  const handleMinPriceBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const min = Number(minValue);
    const max = Number(maxValue);
    if (isNaN(value) || value < minPrice) {
      setMinPrice(minPrice);
    } else if (value > max) {
      setMinPrice(max);
    } else {
      setMinPrice(value);
    }
  };

  const handleMaxPriceBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const min = Number(minValue);
    const max = Number(maxValue);
    if (isNaN(value) || value > maxPrice) {
      setMaxPrice(maxPrice);
    } else if (value < min) {
      setMaxPrice(min);
    } else {
      setMaxPrice(value);
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
          value={minValue === '' ? '' : minValue}
          onChange={handleMinPriceChange}
          onBlur={handleMinPriceBlur}
          className="input-sm input-accent w-1/3 rounded border p-1"
        />
        <span>До:</span>
        <Input
          type="text"
          inputMode="numeric"
          value={maxValue === '' ? '' : maxValue}
          onChange={handleMaxPriceChange}
          onBlur={handleMaxPriceBlur}
          className="input-sm input-accent w-1/3 rounded border p-1"
        />
      </div>
    </Filter>
  );
};
