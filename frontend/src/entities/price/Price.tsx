import { currencies } from '@/widgets/header/ui/header-top/currency/config';

interface PriceProps {
  price: number;
}

export const Price: React.FC<PriceProps> = ({ price }) => {
  //   const convertedPrices = currencies.map((currency) => {
  //   const convertedPrice = price * currency.exchangeRate;
  //   const roundedPrice = convertedPrice.toFixed(2);
  //   return `${currency.label}: ${roundedPrice} ${currency.value}`;
  //   });

  return (
    <div className="flex items-center">
      <p className="text-2xl font-bold tracking-wider text-accent">{price} ₽</p>
    </div>
  );
};
