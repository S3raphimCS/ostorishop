import { CartNav } from '@/entities/ui/cart';
import { CatalogNav } from '@/entities/ui/catalog';
import { ProfileNav } from '@/entities/ui/profile';
import { WishlistNav } from '@/entities/ui/wishlist';

export const MobileHeader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[300] flex justify-around bg-base-100 p-4 shadow-md">
      <CartNav />
      <CatalogNav />
      <WishlistNav />
      <ProfileNav />
    </div>
  );
};
