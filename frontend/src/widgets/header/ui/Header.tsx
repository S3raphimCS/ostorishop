import { Button, Icon } from '@/shared/ui';
import { Logo } from './logo';
import { Nav } from './nav';
import { ThemeController } from '@/shared/ui';
import { Search } from './search';
import Link from 'next/link';
import { paths } from '@/shared/routing';

export const Header = () => {
  return (
    <header className="navbar bg-neutral">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        <Nav />
      </div>
      <div className="navbar-end mx-2 flex items-center gap-6">
        <Search />
        <Link href={paths.wishlist}>
          <Icon icon={'heart'} size={20} color="white"></Icon>
        </Link>
        <Link href={paths.cart}>
          <Icon icon={'cart'} size={20} color="white"></Icon>
        </Link>
        <Link href={'/debug'}>
          <Button variant={'warning'} size={'small'}>
            Debug
          </Button>
        </Link>

        <ThemeController />
      </div>
    </header>
  );
};
