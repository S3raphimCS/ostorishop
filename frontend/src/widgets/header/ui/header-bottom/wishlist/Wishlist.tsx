import { paths } from '@/shared/routing';
import Link from 'next/link';
import { Icon } from '@/shared/ui';

export const Wishlist = () => {
  return (
    <Link href={paths.cart}>
      <Icon icon={'cart'} size={24} color="white"></Icon>
    </Link>
  );
};
