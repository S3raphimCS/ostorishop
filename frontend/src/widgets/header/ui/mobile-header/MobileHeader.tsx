import { Cart } from '../header-bottom/cart';
import { Profile } from '../header-bottom/profile';
import { Wishlist } from '../header-bottom/wishlist';

export const MobileHeader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] flex justify-around bg-base-100 p-4 shadow-md">
      <Cart />
      <Wishlist />
      <Profile />
    </div>
  );
};
