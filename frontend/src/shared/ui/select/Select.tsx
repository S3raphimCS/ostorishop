import { combineClasses } from '../../lib/style-worker/combineClasses';

type SelectVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'error';
type Size = 'normal' | 'small' | 'large' | 'tiny';

//@ts-ignore 2430
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant: SelectVariant;
  size: Size;
  options: { value: string; label: string }[];
}

const BASE_CLASSES = ['select'];

const VARIANTS: Record<SelectVariant, string[]> = {
  primary: ['select-primary'],
  secondary: ['select-secondary'],
  accent: ['select-accent'],
  success: ['select-success'],
  warning: ['select-warning'],
  info: ['select-info'],
  error: ['select-error'],
};

const SIZES: Record<Size, string[]> = {
  normal: [''],
  small: ['select-sm'],
  large: ['select-lg'],
  tiny: ['select-xs'],
};

export const Select: React.FC<SelectProps> = ({
  variant,
  size,
  options,
  ...rest
}) => {
  const restClassName = rest.className ? [rest.className] : [];

  const classes = combineClasses(
    ...restClassName,
    ...BASE_CLASSES,
    ...VARIANTS[variant],
    ...SIZES[size]
  );

  return (
    <select {...rest} className={classes}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
