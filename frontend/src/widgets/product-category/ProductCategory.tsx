import { FC } from 'react';
import { combineClasses } from '@/shared/lib/style-worker';

interface ProductCategoryProps {
  readonly title: string;
  readonly children: JSX.Element;
  readonly className?: string;
}

const BASE_CLASSES = 'mb-4 w-11/12 rounded-lg border border-gray-200 p-4';

export const ProductCategory: FC<ProductCategoryProps> = ({
  title,
  children,
  className,
}) => {
  const classes = combineClasses(BASE_CLASSES, className);
  return (
    <div className={classes}>
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
};
