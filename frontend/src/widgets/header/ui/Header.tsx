import { HeaderTop } from './header-top';
import { HeaderCatalog } from './header-catalog';
import { HeaderBottom } from './header-bottom';

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <HeaderCatalog />
    </header>
  );
};
