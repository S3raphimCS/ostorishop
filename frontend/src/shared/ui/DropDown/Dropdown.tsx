'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownProps {
  buttonText: string;
  items: string[];
  hrefs?: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  buttonText,
  items,
  hrefs,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown dropdown-hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div tabIndex={0} role="button" className="m-1 mx-5">
        {buttonText}
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 shadow"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <li key={index}>
              {hrefs && hrefs[index] ? (
                <Link href={hrefs[index]}>{item}</Link>
              ) : (
                <span>{item}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
