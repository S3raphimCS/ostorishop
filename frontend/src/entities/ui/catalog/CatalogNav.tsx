'use client';
import { useState } from 'react';
import { Icon } from '@/shared/ui';
import { CatalogSidebarView } from './CatalogSidebarView';

export const CatalogNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div>
      <button
        className="flex flex-col items-center"
        onClick={handleOpenSidebar}
      >
        <Icon icon="catalog" color="black" />
        <span className="text-sm">Каталог</span>
      </button>
      <CatalogSidebarView isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};
