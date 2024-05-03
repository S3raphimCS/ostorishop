import { combineClasses } from '@/shared/lib/style-worker';

type Variant = 'discount' | 'guarantee' | 'popular' | 'new';

export interface CardPlateProps {
  className?: string;
  variant: Variant;
  label: string;
}

const BASE_CLASSES = 'inline-block p-2';

const VARIANTS: Record<Variant, string> = {
  discount: 'text-md bg-fuchsia-100 text-black',
  guarantee: 'text-sm bg-slate-200 text-gray-500',
  popular: 'text-sm font-semibold bg-rose-600 text-white',
  new: 'text-sm bg-green-100 text-teal-600',
};

const LABEL_VARIANTS: Record<Variant, string> = {
  discount: 'Скидка 20%',
  guarantee: 'Гарантия 30 дней',
  popular: 'Популярное',
  new: 'Новинка',
};

export const CardPlate: React.FC<CardPlateProps> = ({
  label,
  className,
  variant,
}) => {
  const classes = combineClasses(BASE_CLASSES, VARIANTS[variant], className);

  return <span className={classes}>{label}</span>;
};
