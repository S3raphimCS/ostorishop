'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/store';
import { Button, Modal, Select, openModal } from '@/shared/ui';
import { currencies } from './config';
import { setCurrency, fetchExchangeRates } from '@/features/currency';

export const Currency = () => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useSelector(
    (state: any) => state.currency.selectedCurrency
  );

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  const handleChangeCurrency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const currency = event.target.value;
    dispatch(setCurrency(currency));
  };

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
        {selectedCurrency}
      </Button>
      <Modal className="bg-white text-base-content" id="currency">
        <h1 className="mb-4 text-2xl">Валюта</h1>
        <Select
          className="text-base-content"
          variant={'accent'}
          size={'normal'}
          options={currencies.map((currency) => ({
            value: currency.value,
            label: currency.label,
          }))}
          onChange={handleChangeCurrency}
          value={selectedCurrency}
        />
      </Modal>
    </div>
  );
};
