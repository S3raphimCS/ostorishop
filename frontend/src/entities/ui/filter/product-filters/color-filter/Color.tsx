import { combineClasses } from '@/shared/lib/style-worker';
export type ColorVariant =
  | 'Белый'
  | 'Чёрный'
  | 'Красный'
  | 'Оранжевый'
  | 'Жёлтый'
  | 'Зелёный'
  | 'Синий'
  | 'Тёмно-синий'
  | 'Индиго'
  | 'Фиолетовый'
  | 'Розовый'
  | 'Серый'
  | 'Коричневый'
  | 'Бежевый'
  | 'Оливковый';

const COLOR_VARIANTS: Record<ColorVariant, string[]> = {
  Белый: ['bg-gray-100'],
  Чёрный: ['bg-black'],
  Красный: ['bg-red-500'],
  Оранжевый: ['bg-orange-500'],
  Жёлтый: ['bg-yellow-500'],
  Зелёный: ['bg-green-500'],
  Синий: ['bg-blue-500'],
  'Тёмно-синий': ['bg-blue-800'],
  Индиго: ['bg-indigo-500'],
  Фиолетовый: ['bg-purple-500'],
  Розовый: ['bg-pink-500'],
  Серый: ['bg-gray-500'],
  Коричневый: ['bg-yellow-800'],
  Бежевый: ['bg-yellow-200'],
  Оливковый: ['bg-lime-700'],
};

interface ColorProps {
  className?: string;
  color: ColorVariant;
}

const BASE_CLASSES = 'h-4 w-4 rounded-full';

export const Color: React.FC<ColorProps> = ({ className, color }) => {
  const classes = combineClasses(
    BASE_CLASSES,
    ...COLOR_VARIANTS[color],
    className
  );
  return <div className={classes}></div>;
};
