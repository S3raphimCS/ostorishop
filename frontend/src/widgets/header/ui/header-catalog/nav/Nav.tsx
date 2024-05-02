import Link from 'next/link';
import { items } from './config';
import { Dropdown, DropdownMenu } from '@/shared/ui';
import { CatalogNavigation } from '@/widgets/catalog-navigation';

export const Nav = () => {
  return (
    <nav className="flex">
      {/* {items.map((item, index) => (
        <Link href={item.path} key={index}>
          <Dropdown className="dropdown dropdown-hover" buttonText={item.text}>
            <DropdownMenu
              items={item.submenu.map((subitem) => subitem.text)}
              hrefs={item.submenu.map((subitem) => subitem.path)}
            />
          </Dropdown>
        </Link>
      ))} */}
      <Dropdown buttonText="Товары проверка">
        <CatalogNavigation />
      </Dropdown>
    </nav>
  );
};
