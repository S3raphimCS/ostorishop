'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@/shared/ui';
import { CartSidebarView } from './CartSidebarView';
import { selectCartItemCount } from '@/features/cart';

export const CartNav: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const itemCount = useSelector(selectCartItemCount);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="relative">
      <button
        className="flex flex-col items-center"
        onClick={handleOpenSidebar}
      >
        <Icon icon="cart" color="black" />
        <span className="text-sm">Корзина</span>
        {itemCount > 0 && (
          <span className="absolute right-0 top-0 -mt-2 mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {itemCount > 9 ? '9+' : itemCount}
          </span>
        )}
      </button>
      <CartSidebarView isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};
