import { Logo } from '@/entities/logo';
import { Profile } from './profile';
import { Search } from './search';
import { Cart } from './cart';
import { Wishlist } from './wishlist';

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
        <Cart />
        <Wishlist />
        <Profile />
      </div>
    </div>
  );
};
