'use client';
import { useState } from 'react';
import { Icon, Modal } from '@/shared/ui';
import { openModal } from '@/shared/ui';
import {
  LoginWindow,
  RegistrationWindow,
  ResetPasswordWindow,
} from '@/widgets/auth';

export const Profile = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

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

  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      onClick={() => openModal('auth')}
    >
      <Icon icon={'profile'} color="black" />
      <span className="text-sm">Профиль</span>
      <Modal className="cursor-auto shadow-none" id={'auth'}>
        {showLogin ? (
          <LoginWindow
            onShowRegistration={toggleRegistrationWindow}
            onShowResetPassword={toggleResetPasswordWindow}
          />
        ) : showResetPassword ? (
          <ResetPasswordWindow onShowRegistration={toggleRegistrationWindow} />
        ) : (
          <RegistrationWindow onShowLogin={toggleLoginWindow} />
        )}
      </Modal>
    </div>
  );
};
