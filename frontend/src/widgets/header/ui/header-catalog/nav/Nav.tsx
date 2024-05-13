import Link from 'next/link';
import { items } from './config';
import { Dropdown } from '@/shared/ui';
import { CatalogNavigation } from '@/widgets/catalog-navigation';

export const Nav = () => {
  return (
    <nav className="flex">
      {items.map((item, index) => (
        <Link href={item.path} key={index}>
          <Dropdown buttonText={item.text}>
            <CatalogNavigation items={items} />
          </Dropdown>
        </Link>
      ))}
    </nav>
  );
};
