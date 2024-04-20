import { Logo } from './logo';
import { Nav } from './nav';
import { Profile } from './profile';
import { Search } from './search';
import { Cart } from './cart';
import { Wishlist } from './wishlist';

export const HeaderBottom = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        <Nav />
      </div>
      <div className="navbar-end mx-2 flex items-center gap-6">
        <Search />
        <Cart />
        <Wishlist />
        <Profile />
      </div>
    </div>
  );
};