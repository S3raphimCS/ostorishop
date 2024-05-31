'use client';
import React, { useState } from 'react';
import { Icon } from '@/shared/ui';
import { CartSidebarView } from './CartSidebarView';

export const CartNav: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div>
      <button
        className="flex flex-col items-center"
        onClick={handleOpenSidebar}
      >
        <Icon icon="cart" color="black" />
        <span className="text-sm">Корзина</span>
      </button>
      <CartSidebarView isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};
