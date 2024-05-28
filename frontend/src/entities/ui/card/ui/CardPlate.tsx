import { combineClasses } from '@/shared/lib/style-worker';

export type CardPlateVariant = 'discount' | 'guarantee' | 'popular' | 'new';

export interface CardPlateProps {
  className?: string;
  variant: CardPlateVariant;
  label: string;
  discountPrice?: number;
}

const BASE_CLASSES = 'inline-block p-2 px-3';

const VARIANTS: Record<CardPlateVariant, string> = {
  discount: 'text-xs bg-fuchsia-100 text-black',
  guarantee: 'text-xs bg-slate-200 text-gray-500',
  popular: 'text-xs font-semibold bg-rose-600 text-white',
  new: 'text-xs bg-green-100 text-teal-600',
};

const LABEL_VARIANTS: Record<CardPlateVariant, string> = {
  discount: 'Скидка 20%',
  guarantee: 'Гарантия 30 дней',
  popular: 'Популярное',
  new: 'Новинка',
};

export const CardPlate: React.FC<CardPlateProps> = ({
  label,
  className,
  variant,
  discountPrice,
}) => {
  const classes = combineClasses(BASE_CLASSES, VARIANTS[variant], className);

  return <span className={classes}>{label}</span>;
};
