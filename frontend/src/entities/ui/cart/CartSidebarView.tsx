'use client';
import { Button, Icon } from '@/shared/ui';
import { CartItem, CartItemProps } from './CartItem';
import { CartSummary } from './CartSummary';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItemProps['item'][];
}

export const CartSidebarView: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full transform bg-white shadow-xl transition-transform sm:w-96 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-bold">Корзина</h2>
          <button onClick={onClose}>
            <Icon icon="close" color="black" />
          </button>
        </div>
        <div className="p-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Ваша корзина пуста</p>
          ) : (
            <ul>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  closeSidebarIfPresent={onClose}
                />
              ))}
            </ul>
          )}
        </div>
        <CartSummary totalItems={0} />
      </div>
    </div>
  );
};
