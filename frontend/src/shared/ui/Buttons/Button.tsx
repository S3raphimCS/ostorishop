import { combineClasses } from '../../lib/combineClasses';
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
  accent: ['btn', 'btn-accent'],
  success: ['btn', 'btn-success'],
  warning: ['btn', 'btn-warning'],
  info: ['btn', 'btn-info'],
  delete: ['btn', 'btn-error'],
  ghost: ['btn', 'btn-ghost'],
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
  const restClassName = rest.className ? [rest.className] : [];

  const classes = combineClasses(
    ...restClassName,
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
