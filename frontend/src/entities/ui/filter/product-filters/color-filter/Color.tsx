import { combineClasses } from '@/shared/lib/style-worker';
export type ColorVariant =
  | 'white'
  | 'black'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'gray'
  | 'brown'
  | 'beige'
  | 'olive';

const COLOR_VARIANTS: Record<ColorVariant, string[]> = {
  white: ['bg-gray-100'],
  black: ['bg-black'],
  red: ['bg-red-500'],
  orange: ['bg-orange-500'],
  yellow: ['bg-yellow-500'],
  green: ['bg-green-500'],
  blue: ['bg-blue-500'],
  indigo: ['bg-indigo-500'],
  purple: ['bg-purple-500'],
  pink: ['bg-pink-500'],
  gray: ['bg-gray-500'],
  brown: ['bg-yellow-800'],
  beige: ['bg-yellow-200'],
  olive: ['bg-lime-700'],
};

interface ColorProps {
  color: ColorVariant;
}

const BASE_CLASSES = 'h-4 w-4 rounded-full';

export const Color: React.FC<ColorProps> = ({ color }) => {
  const classes = combineClasses(BASE_CLASSES, ...COLOR_VARIANTS[color]);
  return <div className={classes}></div>;
};
