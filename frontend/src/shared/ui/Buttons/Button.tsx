import { combineClasses } from '../../lib/combineClasses';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'delete';
type Size = 'normal' | 'small' | 'large' | 'wide' | 'tiny';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: Size;
  outline?: boolean;
  hidden?: boolean;
  circle?: boolean;
  iconSize?: string;
}

const BASE_CLASSES = ['items-center'];

const VARIANTS: Record<ButtonVariant, string[]> = {
  default: ['btn'],
  primary: ['btn', 'btn-primary'],
  secondary: ['btn', 'btn-secondary'],
  success: ['btn', 'btn-success'],
  warning: ['btn', 'btn-warning'],
  info: ['btn', 'btn-info'],
  delete: ['btn', 'btn-error'],
};

const SIZES: Record<Size, string[]> = {
  normal: [''],
  small: ['btn-sm'],
  large: ['btn-lg'],
  tiny: ['btn-xs'],
  wide: ['btn-wide'],
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  outline,
  circle,
  hidden,
  iconSize,
  onClick,
  children,
  ...rest
}) => {
  const classes = combineClasses(
    ...BASE_CLASSES,
    ...VARIANTS[variant],
    ...SIZES[size],
    outline ? 'btn-outline' : undefined,
    circle ? 'btn-circle' : undefined,
    hidden ? 'hidden' : undefined
  );

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children ? children : undefined}
    </button>
  );
};

export default Button;
