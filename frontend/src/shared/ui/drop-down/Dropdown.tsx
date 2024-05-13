'use client';
import { ReactNode, useState } from 'react';
import { combineClasses } from '@/shared/lib/style-worker';

export interface DropdownProps {
  className?: string;
  background?: string;
  buttonText?: string;
  children?: ReactNode;
}

const BASE_CLASSES = 'transition duration-300 hover:text-accent ';
const TIMEOUT_DELAY = 80;

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  background = 'bg-base-200',
  buttonText,
  children,
}) => {
  const classes = combineClasses(className, BASE_CLASSES);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    setIsOpen(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, TIMEOUT_DELAY);
  };

  return (
    <div
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div tabIndex={0} role="button" className="mx-5">
        {buttonText}
      </div>
      {isOpen && children}
    </div>
  );
};

export default Dropdown;
