import { combineClasses } from '../../lib/style-worker/combineClasses';

interface ProgressBarProps {
  color?: Color;
  value?: number;
  max?: number;
}

type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

const BASE_CLASSES = ['progress'];

const COLORS: Record<Color, string[]> = {
  primary: ['progress-primary'],
  secondary: ['progress-secondary'],
  accent: ['progress-accent'],
  neutral: ['progress-neutral'],
  info: ['progress-info'],
  success: ['progress-success'],
  warning: ['progress-warning'],
  error: ['progress-error'],
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  color,
  value,
  max,
}) => {
  const classes = combineClasses(...BASE_CLASSES, ...COLORS[color!]);
  return (
    <progress
      className={classes}
      value={value ? value : 1}
      max={max ? max : 100}
    ></progress>
  );
};
