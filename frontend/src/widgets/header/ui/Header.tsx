import { HeaderTop } from './header-top';
import { HeaderCatalog } from './header-catalog';
import { HeaderBottom } from './header-bottom';
import { MobileHeader } from './mobile-header';

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <HeaderCatalog />
      <div className="sm:hidden">
        <MobileHeader />
      </div>
    </header>
  );
};
