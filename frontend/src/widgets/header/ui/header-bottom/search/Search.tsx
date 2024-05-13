import { Icon } from '@/shared/ui';
import { Input, InputLabel } from '@/shared/ui';

export const Search = () => {
  return (
    <InputLabel>
      <Input
        className="sm:w-48 md:w-64 lg:w-96"
        type="text"
        placeholder="Поиск"
      ></Input>
      <Icon icon={'search'} color="black" />
    </InputLabel>
  );
};
