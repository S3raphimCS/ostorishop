import { Icon } from '@/shared/ui';
import Link from 'next/link';
import { paths } from '@/shared/routing';

export const CartNav = () => {
  return (
    <Link className="flex flex-col items-center" href={paths.wishlist}>
      <Icon icon={'cart'} color="black" />
      <span className="text-sm">Корзина</span>
    </Link>
  );
};
