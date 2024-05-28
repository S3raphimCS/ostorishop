'use client';
import React, { useState } from 'react';
import { Filter } from '@/entities/ui/filter';
import { Color, ColorVariant } from './Color';
import { Button, Input } from '@/shared/ui';
import { availableColors } from '@/entities/lib/filters/color-filter/config';

export const ColorFilter: React.FC = () => {
  const [showAllColors, setShowAllColors] = useState(false);

  const toggleShowAllColors = () => {
    setShowAllColors(!showAllColors);
  };

  const colorsToShow = showAllColors
    ? availableColors
    : availableColors.slice(0, 4);
  return (
    <Filter title="Цвет">
      {colorsToShow.map(({ color, label }) => (
        <label key={color} className="mb-2 flex items-center">
          <Input type="checkbox" className="checkbox checkbox-sm mr-2" />
          <Color color={color as ColorVariant} />
          <span className="label-text ml-2">{label}</span>
        </label>
      ))}
      <Button
        variant={'ghost'}
        size="small"
        onClick={toggleShowAllColors}
        className="mt-2 text-accent hover:bg-base-100"
      >
        {showAllColors ? 'Скрыть' : 'Посмотреть все'}
      </Button>
    </Filter>
  );
};
