import { HeaderTop } from './header-top';
import { HeaderCatalog } from './header-catalog';
import { HeaderBottom } from './header-bottom';
import { MobileHeader } from './mobile-header';
import { CookieBanner } from '@/widgets/cookie-use-agree';

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <HeaderCatalog />
      <CookieBanner />
      <div className="sm:hidden">
        <MobileHeader />
      </div>
    </header>
  );
};
