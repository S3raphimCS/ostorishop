import { Icon } from '@/shared/ui';
import { Input, InputLabel } from '@/shared/ui';

export const Search = () => {
  return (
    <InputLabel>
      <Input type="text" placeholder="Поиск"></Input>
      <Icon icon={'search'} color="white" />
    </InputLabel>
  );
};
