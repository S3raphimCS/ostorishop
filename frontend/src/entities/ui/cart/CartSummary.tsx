import { Button } from '@/shared/ui';
import { Price } from '../price';

export const CartSummary: React.FC<{ totalItems: number }> = ({
  totalItems,
}) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-20 w-full flex-shrink-0 border-t bg-white px-6 py-6 text-sm sm:px-6">
      <ul className="pb-2">
        <li className="flex justify-between py-1">
          <span>Доставка</span>
          <span className="font-bold tracking-wide">FREE</span>
        </li>
      </ul>
      <div className="mb-2 flex justify-between border-t border-gray-400 py-3 font-bold">
        <span>Итого</span>
        <Price price={totalItems} />
      </div>
      <div className="flex justify-center">
        <Button size="wide" variant={'accent'}>
          Перейти к оформлению
        </Button>
      </div>
    </div>
  );
};
