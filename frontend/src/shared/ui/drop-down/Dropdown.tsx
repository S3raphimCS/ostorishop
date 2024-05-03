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

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  background = 'bg-base-200',
  buttonText,
  children,
}) => {
  const classes = combineClasses(className, BASE_CLASSES);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
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
