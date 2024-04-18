import { Icon } from '@/shared/ui';
import Link from 'next/link';
import { paths } from '@/shared/routing';

export const Cart = () => {
  return (
    <Link href={paths.wishlist}>
      <Icon icon={'heart'} size={24} color="white"></Icon>
    </Link>
  );
};
