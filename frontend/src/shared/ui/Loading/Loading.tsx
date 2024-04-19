import { combineClasses } from '../../lib/combineClasses';

interface LoadingProps {
  form?: Form;
  size?: Size;
  color?: Color;
}

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Form = 'ring' | 'ball' | 'bars' | 'infinity' | 'spinner';
type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

const BASE_CLASSES = ['loading'];

const SIZES: Record<Size, string[]> = {
  xs: ['loading-xs'],
  sm: ['loading-sm'],
  md: ['loading-md'],
  lg: ['loading-lg'],
};

const FORMS: Record<Form, string[]> = {
  ring: ['loading-ring'],
  ball: ['loading-ball'],
  bars: ['loading-bars'],
  infinity: ['loading-infinity'],
  spinner: ['loading-spinner'],
};

const COLORS: Record<Color, string[]> = {
  primary: ['text-primary'],
  secondary: ['text-secondary'],
  accent: ['text-accent'],
  neutral: ['text-neutral'],
  info: ['text-info'],
  success: ['text-success'],
  warning: ['text-warning'],
  error: ['text-error'],
};

export const Loading: React.FC<LoadingProps> = ({ form, size, color }) => {
  const loadingClass = combineClasses(
    ...BASE_CLASSES,
    ...FORMS[form!],
    ...SIZES[size!],
    ...COLORS[color!]
  );
  return <span className={loadingClass}></span>;
};
