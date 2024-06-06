import { Logo } from '@/entities/ui/logo';
import { ProfileNav } from '@/entities/ui/profile';
import { CartNav } from '@/entities/ui/cart';
import { Search } from '@/entities/ui/search';
import { WishlistNav } from '@/entities/ui/wishlist';

export const HeaderBottom = () => {
  return (
    <div className="navbar bg-neutral-100 text-base-content shadow-md">
      <div className="navbar-start flex items-center">
        <Logo width={58} height={58} />
        <div className="ml-2 hidden text-2xl font-bold tracking-wide text-base-content md:block">
          OstoriShop
        </div>
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
