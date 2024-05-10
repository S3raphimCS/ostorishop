import { Logo } from '@/entities/logo';
import { Profile } from './profile';
import { Search } from './search';
import { Cart } from './cart';
import { Wishlist } from './wishlist';

export const HeaderBottom = () => {
  return (
    <div className="navbar bg-neutral text-base-content">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        <Search />
      </div>
      <div className="navbar-end mx-2 flex items-center gap-6">
        <Cart />
        <Wishlist />
        <Profile />
      </div>
    </div>
  );
};
