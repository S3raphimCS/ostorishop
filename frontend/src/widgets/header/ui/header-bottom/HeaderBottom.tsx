import { Logo } from '@/entities/ui/logo';
import { ProfileNav } from '@/entities/ui/profile';
import { CartNav } from '@/entities/ui/cart';
import { Search } from '@/entities/ui/search';
import { WishlistNav } from '@/entities/ui/wishlist';

export const HeaderBottom = () => {
  return (
    <div className="navbar bg-neutral-100 text-base-content shadow-md">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        <Search />
      </div>
      <div className="navbar-end mx-2 flex hidden items-center gap-6 md:flex">
        <CartNav />
        <WishlistNav />
        <ProfileNav />
      </div>
    </div>
  );
};
