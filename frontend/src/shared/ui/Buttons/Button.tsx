import { combineClasses } from '../../lib/style-worker/combineClasses';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'delete'
  | 'ghost';
type Size = 'normal' | 'small' | 'large' | 'wide' | 'tiny' | 'responsive';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: ButtonVariant;
  size?: Size;
  outline?: boolean;
  hidden?: boolean;
  circle?: boolean;
  iconSize?: string;
}

const BASE_CLASSES = ['items-center'];

const VARIANTS: Record<ButtonVariant, string[]> = {
  default: ['btn'],
  primary: ['btn', 'btn-primary'],
  secondary: ['btn', 'btn-secondary', 'text-gray-200'],
  accent: ['btn', 'btn-accent'],
  success: ['btn', 'btn-success'],
  warning: ['btn', 'btn-warning'],
  info: ['btn', 'btn-info'],
  delete: ['btn', 'btn-error'],
  ghost: ['btn', 'btn-ghost'],
};

const SIZES: Record<Size, string[]> = {
  normal: ['btn-md'],
  small: ['btn-sm'],
  large: ['btn-lg'],
  tiny: ['btn-xs'],
  wide: ['btn-wide'],
  responsive: ['btn btn-xs sm:btn-sm md:btn-md'],
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size = 'normal',
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
    className,
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
