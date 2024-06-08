import { useSelector } from 'react-redux';
import { currencies } from '@/widgets/header/ui/header-top/currency/config';
import { combineClasses } from '@/shared/lib/style-worker';

interface PriceProps {
  className?: string;
  price: number;
  discountPrice?: number;
}

const BASE_CLASSES = '';

export const Price: React.FC<PriceProps> = ({
  price,
  discountPrice,
  className,
}) => {
  const selectedCurrency = useSelector(
    (state: any) => state.currency.selectedCurrency
  );
  const exchangeRates = useSelector(
    (state: any) => state.currency.exchangeRates
  );

  const getCurrencySymbol = (selectedCurrency: string) => {
    const currency = currencies.find(
      (currency) => currency.value === selectedCurrency
    );
    return currency ? currency.symbol : selectedCurrency;
  };

  const convertPrice = (
    price: number,
    selectedCurrency: string,
    exchangeRates: Record<string, number>
  ) => {
    const rate = exchangeRates?.[selectedCurrency];
    return rate !== undefined ? price * rate : price;
  };

  const classes = combineClasses(BASE_CLASSES, className);
  const symbol = getCurrencySymbol(selectedCurrency);

  const convertedPrice = exchangeRates?.[selectedCurrency]
    ? convertPrice(price, selectedCurrency, exchangeRates)
    : price;

  const convertedDiscountPrice = discountPrice
    ? exchangeRates?.[selectedCurrency]
      ? convertPrice(discountPrice, selectedCurrency, exchangeRates)
      : discountPrice
    : null;

  const formattedPrice =
    selectedCurrency === 'RUB'
      ? convertedPrice
          .toFixed(0)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\u00a0')
      : convertedPrice
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\u00a0');

  const formattedDiscountPrice =
    convertedDiscountPrice !== null
      ? (selectedCurrency === 'RUB'
          ? convertedDiscountPrice.toFixed(0)
          : convertedDiscountPrice.toFixed(2)
        )
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\u00a0')
      : null;

  return (
    <div className="flex items-center">
      {formattedDiscountPrice ? (
        <p className={classes}>
          <span className="line-through">
            {formattedPrice} {symbol}
          </span>
          <span className="ml-2 text-red-500">
            {formattedDiscountPrice} {symbol}
          </span>
        </p>
      ) : (
        <p className={classes}>
          {formattedPrice} {symbol}
        </p>
      )}
    </div>
  );
};
