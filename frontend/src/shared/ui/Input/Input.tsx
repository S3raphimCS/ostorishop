import { InputHTMLAttributes } from 'react';
import { combineClasses } from '@/shared/lib';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const INPUT_LABEL_CLASSES = 'input input-bordered flex items-center gap-2';

export const InputLabel: React.FC<InputProps> = ({
  label,
  children,
  className,
  ...props
}) => {
  return (
    <label className={combineClasses(INPUT_LABEL_CLASSES, className)}>
      {label && <span>{label}</span>}
      {children}
    </label>
  );
};

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={combineClasses('grow', className)}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};
