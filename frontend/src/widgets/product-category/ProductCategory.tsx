import { FC } from 'react';

interface ProductCategoryProps {
  readonly title: string;
  readonly children: JSX.Element;
  readonly className?: string;
}

export const ProductCategory: FC<ProductCategoryProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={`mb-4 w-11/12 rounded-lg border border-gray-200 p-4 ${className}`}
    >
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
};
