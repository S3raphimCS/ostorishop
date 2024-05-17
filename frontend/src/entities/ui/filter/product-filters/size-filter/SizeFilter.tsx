'use client';
import React, { useState } from 'react';
import { Button, Input } from '@/shared/ui';
import { Filter } from '@/entities/ui/filter';
import { Size, SizeVariant } from './Size';
import { availableSizes } from '@/entities/lib/filters/size-filter/config';

export const SizeFilter: React.FC = () => {
  const [showAllSizes, setShowAllSizes] = useState(false);

  const toggleShowAllSizes = () => {
    setShowAllSizes(!showAllSizes);
  };

  const sizesToShow = showAllSizes
    ? availableSizes
    : availableSizes.slice(0, 4);
  return (
    <Filter title="Размер">
      <div>
        {sizesToShow.map((size) => (
          <label key={size} className="mb-2 flex items-center">
            <Input type="checkbox" className="checkbox checkbox-sm mr-2" />
            <Size key={size} size={size as SizeVariant} />
          </label>
        ))}
        <Button
          variant={'ghost'}
          size="small"
          onClick={toggleShowAllSizes}
          className="mt-2 text-accent hover:bg-base-100"
        >
          {showAllSizes ? 'Скрыть' : 'Посмотреть все'}
        </Button>
      </div>
    </Filter>
  );
};
