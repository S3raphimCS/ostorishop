'use client';
import { useState } from 'react';
import { ProductFiltersSidebarView } from './ProductFiltersSidebarView';
import { Icon } from '@/shared/ui';

export const ProductFiltersMobile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenSidebar} className="p-2">
        <Icon icon="filter" />
      </button>
      <ProductFiltersSidebarView
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />
    </div>
  );
};
