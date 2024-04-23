import clsx from 'clsx';

export const combineClasses = (...classNames: (string | undefined)[]) => {
  return clsx(classNames.filter((className) => className !== undefined));
};
