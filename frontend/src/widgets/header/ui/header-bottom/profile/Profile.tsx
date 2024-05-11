'use client';
import { Icon, Modal } from '@/shared/ui';
import { openModal } from '@/shared/ui';
import { RegistrationWindow } from '@/widgets/auth';

export const Profile = () => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      onClick={() => openModal('auth')}
    >
      <Icon icon={'profile'} color="black" />
      <span className="text-sm">Профиль</span>
      <Modal className="cursor-auto" id={'auth'}>
        <RegistrationWindow />
      </Modal>
    </div>
  );
};
