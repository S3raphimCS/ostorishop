import { Icon } from '@/shared/ui';
import { Input, InputLabel } from '@/shared/ui';

export const Search = () => {
  return (
    <InputLabel>
      <Input className="w-96" type="text" placeholder="Поиск"></Input>
      <Icon icon={'search'} color="black" />
    </InputLabel>
  );
};
