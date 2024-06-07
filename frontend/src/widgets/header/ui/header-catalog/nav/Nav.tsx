'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { NavigationItems } from './config';
import { Dropdown } from '@/shared/ui';
import { CatalogNavigation } from '@/widgets/catalog-navigation';

const TIMEOUT_DELAY = 800;

export const Nav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (index: number) => {
    clearTimeout(timeoutId);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpenIndex(null);
    }, TIMEOUT_DELAY);
  };

  return (
    <nav className="flex">
      {NavigationItems.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hover:text-accent">
            <Dropdown buttonText={item.text}>
              {openIndex === index && <CatalogNavigation items={[item]} />}
            </Dropdown>
          </div>
        </div>
      ))}
    </nav>
  );
};
