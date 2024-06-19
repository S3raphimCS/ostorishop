import { combineClasses } from '@/shared/lib/style-worker';
import React from 'react';

export type SizeVariant =
  | '38'
  | '39'
  | '40'
  | '41'
  | '42'
  | '43'
  | '44'
  | '45'
  | '46'
  | '47'
  | '48'
  | '50'
  | '52'
  | '54'
  | '38-40'
  | '40-42'
  | '44-46'
  | '48-50'
  | '52-54';

interface SizeProps {
  className?: string;
  size: SizeVariant;
}

export const Size: React.FC<SizeProps> = ({ className, size }) => {
  const classes = combineClasses(className, 'label-text');
  return <span className={classes}>{size}</span>;
};
