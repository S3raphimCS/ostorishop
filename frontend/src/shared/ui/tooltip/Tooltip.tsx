import { combineClasses } from '@/shared/lib/style-worker';

type Variant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type Position = 'top' | 'bottom' | 'left' | 'right';

const BASE_CLASSES = 'tooltip';

const POSITIONS: Record<Position, string> = {
  top: 'tooltip-top',
  bottom: 'tooltip-bottom',
  left: 'tooltip-left',
  right: 'tooltip-right',
};

const VARIANTS: Record<Variant, string> = {
  primary: 'tooltip-primary',
  secondary: 'tooltip-secondary',
  accent: 'tooltip-accent',
  success: 'tooltip-success',
  warning: 'tooltip-warning',
  info: 'tooltip-info',
  error: 'tooltip-error',
};

interface TooltipProps {
  content: React.ReactNode;
  position?: Position;
  color?: Variant;
  children: React.ReactNode;
  open?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'bottom',
  color = 'accent',
  children,
  open = false,
}) => {
  const openClass = open ? 'tooltip-open' : '';
  const classes = combineClasses(
    BASE_CLASSES,
    POSITIONS[position],
    VARIANTS[color],
    openClass
  );

  return (
    <div className={classes} data-tip={content}>
      {children}
    </div>
  );
};
