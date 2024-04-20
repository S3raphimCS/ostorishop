'use client';

import Button from '../buttons/Button';
import { ReactNode } from 'react';
import { Icon } from '../icons/Icon';

interface ModalProps {
  id: string;
  name: string;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ id, name, children }) => {
  const openModal = () => {
    const modal = document.getElementById(id);
    if (modal) {
      // @ts-ignore
      modal.showModal();
    }
  };

  return (
    <>
      <Button variant={'accent'} size={'small'} onClick={openModal}>
        {name}
      </Button>
      <dialog id={id} className="modal">
        <div className="modal-box text-white">
          <form method="dialog">
            <div className="flex justify-end">
              <Button variant={'ghost'} size={'tiny'} circle>
                <Icon color="white" icon={'close'} />
              </Button>
            </div>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
};
