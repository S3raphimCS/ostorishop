import { Icon } from '@/shared/ui';
import Link from 'next/link';
import { paths } from '@/shared/routing';

export const Cart = () => {
  return (
    <Link className="flex flex-col items-center" href={paths.wishlist}>
      <Icon icon={'cart'} color="white" />
      <span className="text-sm">Корзина</span>
    </Link>
  );
};
