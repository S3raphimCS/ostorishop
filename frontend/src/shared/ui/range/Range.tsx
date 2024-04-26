import { combineClasses } from '../../lib/combineClasses';
import { InputProps } from '@/shared/ui';

export type RangeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'delete'
  | 'ghost';
type Size = 'normal' | 'small' | 'large' | 'tiny';

const VARIANTS: Record<RangeVariant, string[]> = {
  default: ['range'],
  primary: ['range', 'range-primary'],
  secondary: ['range', 'range-secondary'],
  accent: ['range', 'range-accent'],
  success: ['range', 'range-success'],
  warning: ['range', 'range-warning'],
  info: ['range', 'range-info'],
  delete: ['range', 'range-error'],
  ghost: ['range', 'range-ghost'],
};

const SIZES: Record<Size, string[]> = {
  normal: ['range-md'],
  small: ['range-sm'],
  large: ['range-lg'],
  tiny: ['range-xs'],
};

export interface RangeProps extends Omit<InputProps, 'size'> {
  variant?: RangeVariant;
  size?: Size;
}

export const Range: React.FC<RangeProps> = ({
  className,
  variant = 'default',
  size = 'normal',
  ...props
}) => {
  const classes = combineClasses(
    ...VARIANTS[variant],
    ...SIZES[size],
    className
  );

  return <input {...props} className={classes} type="range" />;
};
