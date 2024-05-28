import { combineClasses } from '@/shared/lib/style-worker';
import React from 'react';

export type SizeVariant = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

interface SizeProps {
  className?: string;
  size: SizeVariant;
}

export const Size: React.FC<SizeProps> = ({ className, size }) => {
  const classes = combineClasses(className, 'label-text');
  return <span className={classes}>{size}</span>;
};
