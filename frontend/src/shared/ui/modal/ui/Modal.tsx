'use client';
import { combineClasses } from '@/shared/lib/style-worker';
import { openModal } from '../lib/openModal';
import Button from '../../buttons/Button';
import { ReactNode } from 'react';
import { Icon } from '../../icons/Icon';

interface ModalProps {
  className?: string;
  id: string;
  children: ReactNode;
}

const BASE_CLASSES =
  'modal-box w-full overflow-hidden max-w-5xl bg-inherit sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12';

export const Modal: React.FC<ModalProps> = ({ className, id, children }) => {
  const classes = combineClasses(className, BASE_CLASSES);

  return (
    <>
      <div onClick={() => openModal(id)}></div>
      <dialog id={id} className="modal">
        <div className={classes}>
          <form method="dialog">
            <div className="flex justify-end">
              <Button
                className="absolute z-[1] mx-4 my-4"
                variant={'ghost'}
                size={'small'}
                circle
              >
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
