import { Button } from '@/shared/ui';
import { Logo } from './logo';
import { Nav } from './nav';

export const Header = () => {
  return (
    <header className="navbar">
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
      </div>
    </header>
  );
};
