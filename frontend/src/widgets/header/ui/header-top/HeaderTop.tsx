import { Currency } from './currency';
import { Location } from './location';
import { Promotion } from './promotion';

export const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between bg-accent text-white">
      <Location />
      <Promotion />
      <Currency />
    </div>
  );
};
