'use client';
import { Icon, Modal } from '@/shared/ui';
import { openModal } from '@/shared/ui';
import { AuthWindow } from '@/widgets/auth';

export const Profile = () => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      onClick={() => openModal('auth')}
    >
      <Icon icon={'profile'} color="white" />
      <span className="text-sm">Профиль</span>
      <Modal className="cursor-auto" id={'auth'}>
        <AuthWindow />
      </Modal>
    </div>
  );
};
