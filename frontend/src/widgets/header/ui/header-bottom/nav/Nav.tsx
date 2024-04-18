import React from 'react';
import { items } from './config';
import { Dropdown } from '@/shared/ui';

export const Nav = () => {
  return (
    <nav>
      {items.map((item, index) => (
        <Dropdown
          key={index}
          buttonText={item.text}
          items={item.submenu.map((subitem) => subitem.text)}
          hrefs={item.submenu.map((subitem) => subitem.path)}
        />
      ))}
    </nav>
  );
};
