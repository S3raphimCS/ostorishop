'use client';
import { useEffect, useState } from 'react';
import { Icon, Modal, Sidebar } from '@/shared/ui';
import { openModal } from '@/shared/ui';
import {
  LoginWindow,
  RegistrationWindow,
  ResetPasswordWindow,
} from '@/widgets/auth';

export const ProfileNav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleLoginWindow = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const toggleRegistrationWindow = () => {
    setShowLogin(false);
    setShowResetPassword(false);
  };

  const toggleResetPasswordWindow = () => {
    setShowLogin(false);
    setShowResetPassword((prevShowResetPassword) => !prevShowResetPassword);
  };

  const handleOpenModal = () => {
    if (isMobile) {
      setIsSidebarOpen(true);
    } else {
      openModal('auth');
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div
        className="flex cursor-pointer flex-col items-center"
        onClick={handleOpenModal}
      >
        <Icon icon={'profile'} color="black" />
        <span className="text-sm">Профиль</span>
      </div>
      {!isMobile ? (
        <Modal className="cursor-auto shadow-none" id={'auth'}>
          {showLogin ? (
            <LoginWindow
              onShowRegistration={toggleRegistrationWindow}
              onShowResetPassword={toggleResetPasswordWindow}
            />
          ) : showResetPassword ? (
            <ResetPasswordWindow
              onShowRegistration={toggleRegistrationWindow}
            />
          ) : (
            <RegistrationWindow onShowLogin={toggleLoginWindow} />
          )}
        </Modal>
      ) : (
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar}>
          {showLogin ? (
            <LoginWindow
              onShowRegistration={toggleRegistrationWindow}
              onShowResetPassword={toggleResetPasswordWindow}
            />
          ) : showResetPassword ? (
            <ResetPasswordWindow
              onShowRegistration={toggleRegistrationWindow}
            />
          ) : (
            <RegistrationWindow onShowLogin={toggleLoginWindow} />
          )}
        </Sidebar>
      )}
    </>
  );
};
