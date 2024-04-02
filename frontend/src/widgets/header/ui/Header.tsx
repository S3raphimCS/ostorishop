import { Button } from '@/shared/ui';
import { Logo } from './logo';
import { Nav } from './nav';
import { ThemeController } from '@/shared/ui';

export const Header = () => {
  return (
    <header className="navbar bg-neutral">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        <Nav />
      </div>
      <div className="navbar-end">
        <Button variant={'success'} size={'small'}>
          Debug test
        </Button>
        <div className="mx-4">
          <ThemeController />
        </div>
      </div>
    </header>
  );
};
