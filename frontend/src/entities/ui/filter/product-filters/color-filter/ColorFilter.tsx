'use client';
import { useState } from 'react';
import { Filter } from '@/entities/ui/filter';
import { Color, ColorVariant } from './Color';
import { Button, Input } from '@/shared/ui';

interface ColorFilterProps {
  availableColors: { color: ColorVariant; label: string }[];
  selectedColors: ColorVariant[];
  setSelectedColors: (colors: ColorVariant[]) => void;
}

export const ColorFilter: React.FC<ColorFilterProps> = ({
  availableColors = [],
  selectedColors = [],
  setSelectedColors,
}) => {
  const [showAllColors, setShowAllColors] = useState(false);

  const toggleShowAllColors = () => {
    setShowAllColors(!showAllColors);
  };

  const handleColorChange = (color: ColorVariant) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((selectedColor) => selectedColor !== color)
      );
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const colorsToShow = showAllColors
    ? availableColors
    : availableColors.slice(0, 4);

  return (
    <Filter title="Цвет">
      {colorsToShow.map(({ color, label }) => (
        <label key={color} className="mb-2 flex items-center">
          <Input
            type="checkbox"
            className="checkbox checkbox-sm mr-2"
            checked={selectedColors.includes(color as ColorVariant)}
            onChange={() => handleColorChange(color as ColorVariant)}
          />
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
