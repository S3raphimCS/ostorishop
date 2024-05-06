import { currencies } from '@/widgets/header/ui/header-top/currency/config';
import { combineClasses } from '@/shared/lib/style-worker';

interface PriceProps {
  className?: string;
  price: number;
}

const BASE_CLASSES = 'text-accent';

export const Price: React.FC<PriceProps> = ({ price, className }) => {
  //   const convertedPrices = currencies.map((currency) => {
  //   const convertedPrice = price * currency.exchangeRate;
  //   const roundedPrice = convertedPrice.toFixed(2);
  //   return `${currency.label}: ${roundedPrice} ${currency.value}`;
  //   });
  const classes = combineClasses(BASE_CLASSES, className);
  const formattedPrice = price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\u00a0');

  return (
    <div className="flex items-center">
      <p className={classes}>{formattedPrice} ₽</p>
    </div>
  );
};
