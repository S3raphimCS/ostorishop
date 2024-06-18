'use client';
import { useState } from 'react';
import { Icon, Button, Input } from '@/shared/ui';
import { Logo } from '@/entities/ui/logo';
import {
  LoginWindow,
  RegistrationWindow,
  ResetPasswordWindow,
} from '@/widgets/auth';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full transform bg-white shadow-xl transition-transform sm:w-96 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-wide text-base-content">
            <Logo width={48} height={48} />
            OstoriShop
          </div>
          <button onClick={onClose}>
            <Icon icon="close" color="red" />
          </button>
        </div>
        <div className="flex h-full flex-col">{children}</div>
      </div>
    </div>
  );
};
