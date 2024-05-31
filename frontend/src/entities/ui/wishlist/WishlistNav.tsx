import { paths } from '@/shared/routing';
import Link from 'next/link';
import { Icon } from '@/shared/ui';

export const WishlistNav = () => {
  return (
    <Link className="flex flex-col items-center" href={paths.wishlist}>
      <Icon icon={'heart'} color="black" />
      <span className="text-sm">Избранное</span>
    </Link>
  );
};
