import { Modal, Select } from '@/shared/ui';
import { currencies } from './config';

export const Currency = () => {
  return (
    <Modal id="currency">
      <h1 className="mb-4 text-2xl">Валюта</h1>
      <Select
        className="text-base-content"
        variant={'primary'}
        size={'normal'}
        options={currencies}
      />
    </Modal>
  );
};
