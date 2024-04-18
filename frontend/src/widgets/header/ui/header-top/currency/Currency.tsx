import { Dropdown } from '@/shared/ui';
import { items } from './config';

export const Currency = () => {
  return <Dropdown buttonText="RUB" items={items} />;
};
