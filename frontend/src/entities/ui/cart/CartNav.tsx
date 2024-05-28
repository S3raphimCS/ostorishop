'use client';
import React, { useState } from 'react';
import { Icon } from '@/shared/ui';
import { CartSidebarView } from './CartSidebarView';

export const CartNav: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  const cartItems = [
    {
      id: 1,
      name: 'Товар 1',
      path: 'product-1',
      variant: {
        image: {
          url: '/categories-grid/men/clothing/jackets/jacket1.jpg',
          alt: 'Product 1',
        },
      },
      price: 1000,
      quantity: 1,
      options: [
        { name: 'Цвет', value: 'Красный' },
        { name: 'Размер', value: 'XL' },
      ],
    },
    {
      id: 2,
      name: 'Товар 2',
      path: 'product-2',
      variant: {
        image: {
          alt: 'Product 2',
        },
      },
      price: 2000,
      quantity: 2,
      options: [
        { name: 'Цвет', value: 'Синий' },
        { name: 'Размер', value: 'L' },
      ],
    },
    {
      id: 2,
      name: 'Товар 2',
      path: 'product-2',
      variant: {
        image: {
          alt: 'Product 2',
        },
      },
      price: 2000,
      quantity: 2,
      options: [
        { name: 'Цвет', value: 'Синий' },
        { name: 'Размер', value: 'L' },
      ],
    },
    {
      id: 2,
      name: 'Товар 2',
      path: 'product-2',
      variant: {
        image: {
          alt: 'Product 2',
        },
      },
      price: 2000,
      quantity: 2,
      options: [
        { name: 'Цвет', value: 'Синий' },
        { name: 'Размер', value: 'L' },
      ],
    },
    {
      id: 2,
      name: 'Товар 2',
      path: 'product-2',
      variant: {
        image: {
          alt: 'Product 2',
        },
      },
      price: 2000,
      quantity: 2,
      options: [
        { name: 'Цвет', value: 'Синий' },
        { name: 'Размер', value: 'L' },
      ],
    },
    {
      id: 2,
      name: 'Товар 2',
      path: 'product-2',
      variant: {
        image: {
          alt: 'Product 2',
        },
      },
      price: 2000,
      quantity: 2,
      options: [
        { name: 'Цвет', value: 'Синий' },
        { name: 'Размер', value: 'L' },
      ],
    },
  ];

  return (
    <div>
      <button
        className="flex flex-col items-center"
        onClick={handleOpenSidebar}
      >
        <Icon icon="cart" color="black" />
        <span className="text-sm">Корзина</span>
      </button>
      <CartSidebarView
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        items={cartItems}
      />
    </div>
  );
};
