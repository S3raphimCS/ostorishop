'use client';
import { useSelector } from 'react-redux';
import { Button, Icon } from '@/shared/ui';
import { CartItem, CartItemProps } from './CartItem';
import { CartSummary } from './CartSummary';
import { RootState } from '@/app-wrapper/types';
import Image from 'next/image';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebarView: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const items = useSelector((state: RootState) => state.cart.items);

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
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto p-4 pb-16">
            {items.length === 0 ? (
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={'/empty_cart.png'}
                  className="rounded-lg object-cover"
                  width={200}
                  height={200}
                  alt={'Пустая корзина'}
                />
                <p className="flex justify-center">Ваша корзина пуста</p>
              </div>
            ) : (
              <ul>
                {items.map((item: CartItemProps['item']) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    closeSidebarIfPresent={onClose}
                  />
                ))}
              </ul>
            )}
          </div>
          <CartSummary
            totalItems={items.reduce(
              (sum: number, item: CartItemProps['item']) =>
                sum + item.price * item.quantity,
              0
            )}
          />
        </div>
      </div>
    </div>
  );
};
