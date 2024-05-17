import React from 'react';

export type SizeVariant = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

interface SizeProps {
  size: SizeVariant;
}

export const Size: React.FC<SizeProps> = ({ size }) => {
  return <span className="label-text">{size}</span>;
};
