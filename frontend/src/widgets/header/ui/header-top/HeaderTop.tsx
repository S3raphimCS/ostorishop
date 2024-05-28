import { Currency } from './currency';
import { Location } from './location';
import { Promotion } from './promotion';

export const HeaderTop = () => {
  return (
    <div className="bg-accent">
      <div className="mx-2 flex h-8 items-center justify-between text-base-100 ">
        <Location />
        <Promotion />
        <Currency />
      </div>
    </div>
  );
};
