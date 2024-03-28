import { combineClasses } from '../lib/combineClasses';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'delete';
type Size = 'normal' | 'small' | 'large' | 'wide' | 'tiny';

const BASE_CLASSES = ['items-center'];

const VARIANTS: Record<ButtonVariant, string[]> = {
  default: ['btn'],
  primary: ['btn', 'btn-primary'],
  secondary: ['btn', 'btn-secondary'],
  success: ['btn', 'btn-success'],
  delete: ['btn', 'btn-error'],
};

const SIZES: Record<Size, string[]> = {
  normal: [''],
  small: ['btn-sm'],
  large: ['btn-lg'],
  tiny: ['btn-xs'],
  wide: ['btn-wide'],
};

export const Button = ({
  text,
  variant,
  size,
  hidden,
}: {
  text?: string;
  variant: ButtonVariant;
  size: Size;
  hidden?: boolean;
}) => {
  const classes = combineClasses(
    ...BASE_CLASSES,
    ...VARIANTS[variant],
    ...SIZES[size],
    hidden ? 'hidden' : undefined
  );

  return <button className={classes}>{text}</button>;
};
