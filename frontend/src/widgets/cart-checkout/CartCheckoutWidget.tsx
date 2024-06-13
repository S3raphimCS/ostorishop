'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app-wrapper/types';
import {
  removeFromCart,
  updateQuantity,
  selectCartItemCount,
} from '@/features/cart';
import { CartItem, CartItemProps } from '@/entities/ui/cart';
import { Price } from '@/entities/ui/price';
import { Button, Icon, Input } from '@/shared/ui';
import { YookassaSvg } from '@/shared/ui/icons/Icon';
import InputMask from 'react-input-mask';
import { countryCodes, getPhoneMask, getFlagComponent } from './config';
import { coupons } from '@/entities/lib/coupons/config';

export const CartCheckoutWidget: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0].code
  );
  const [paymentMethod, setPaymentMethod] = useState<'delivery' | 'card' | ''>(
    ''
  );
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoResult, setPromoResult] = useState<string>('');

  const handleRemove = (
    id: number,
    options?: CartItemProps['item']['options']
  ) => {
    dispatch(removeFromCart({ id, options }));
  };

  const handleUpdateQuantity = (
    quantity: number,
    id: number,
    options?: CartItemProps['item']['options']
  ) => {
    dispatch(updateQuantity({ id, options, quantity }));
  };

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCountryCode(event.target.value);
  };

  const subtotal = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const totalItems = useSelector(selectCartItemCount);

  const handlePaymentMethodChange = (value: 'delivery' | 'card') => {
    setPaymentMethod(value);
  };

  const handleApplyPromoCode = () => {
    const appliedCoupon = coupons.find((coupon) => coupon.code === promoCode);
    if (appliedCoupon) {
      setPromoResult(`Применен купон ${promoCode}: ${appliedCoupon.bonus}`);
    } else {
      setPromoResult('Купон недействителен');
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full border-none pr-4 md:w-1/2 md:border-r">
        <h2 className="mb-4 text-2xl font-bold">Ваш заказ</h2>
        <ul>
          {items.map((item: any) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => handleRemove(item.id, item.options)}
              onUpdateQuantity={(quantity: number) =>
                handleUpdateQuantity(quantity, item.id, item.options)
              }
            />
          ))}
        </ul>
      </div>
      <div className="w-full pl-4 md:w-1/2 md:border-l">
        <div className="sticky top-0">
          <div className="flex justify-between">
            <h2 className="mb-4 font-bold sm:text-xl md:text-2xl">
              Оформление заказа
            </h2>
            <span className="font-bold text-accent sm:text-xl md:text-2xl">
              {totalItems} товара
            </span>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 shadow">
            <div className="mb-2 flex justify-between">
              <span>Цена товаров:</span>
              <Price className="font-bold" price={subtotal} />
            </div>
            <div className="mb-2 flex justify-between ">
              <span>Доставка:</span>
              <Price className="font-bold" price={0} />
            </div>
            <div className="flex justify-between border-t">
              <span>Итог:</span>
              <Price className="font-bold" price={subtotal} />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm">Промокод</label>
            <div className="flex items-center">
              <Input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="mt-1 w-full rounded border p-1"
              />
              <Button
                className="rounded-none"
                size="small"
                onClick={handleApplyPromoCode}
                variant={'accent'}
              >
                Применить
              </Button>
            </div>
            {promoResult && <p className="mt-2 text-sm">{promoResult}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Адрес</label>
            <Input type="text" className="mt-1 w-full rounded border p-2" />
          </div>
          <div className="mt-4">
            <label className="block text-sm">Оплата заказа</label>
            <div className="mt-1 space-y-2">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  name="payment"
                  checked={paymentMethod === 'delivery'}
                  onChange={() => handlePaymentMethodChange('delivery')}
                  className="checkbox mr-2"
                />
                <Icon icon={'delivery'} className="mr-2" />
                <span>Оплата при получении</span>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => handlePaymentMethodChange('card')}
                  className="checkbox mr-2"
                />
                <YookassaSvg />
                <span className="ml-2">Оплата картой</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm">Номер телефона</label>
            <div className="flex items-center">
              <select
                value={selectedCountryCode}
                onChange={handleCountryCodeChange}
                className="mr-2 rounded border p-2"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    <span className="mr-2">
                      {getFlagComponent(country.code)}
                    </span>
                    {country.label} ({country.code})
                  </option>
                ))}
              </select>
              <InputMask
                mask={getPhoneMask(selectedCountryCode)}
                className="w-full rounded border p-2"
                placeholder={selectedCountryCode + ' (___) ___-__-__'}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button size="wide" variant={'accent'}>
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckoutWidget;
