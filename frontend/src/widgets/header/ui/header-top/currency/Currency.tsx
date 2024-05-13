'use client';
import { Button, Modal, Select, openModal } from '@/shared/ui';
import { currencies } from './config';

export const Currency = () => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      onClick={() => openModal('currency')}
    >
      <Button
        className="hover:bg-transparent focus-visible:shadow-none focus-visible:outline-none"
        size="tiny"
        variant={'ghost'}
      >
        RUB
      </Button>
      <Modal className="bg-white text-base-content" id="currency">
        <h1 className="mb-4 text-2xl">Валюта</h1>
        <Select
          className="text-base-content"
          variant={'accent'}
          size={'normal'}
          options={currencies}
        />
      </Modal>
    </div>
  );
};
