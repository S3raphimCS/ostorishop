import { Filter } from '@/entities/ui/filter';
import { Input } from '@/shared/ui';

export const SizeFilter: React.FC = () => {
  return (
    <Filter title="Размер">
      <div>
        <label className="mb-2 flex items-center">
          <Input type="checkbox" className="checkbox checkbox-sm mr-2" />
          <span className="label-text">S</span>
        </label>
        <label className="mb-2 flex items-center">
          <Input type="checkbox" className="checkbox checkbox-sm mr-2" />
          <span className="label-text">M</span>
        </label>
        <label className="mb-2 flex items-center">
          <Input type="checkbox" className="checkbox checkbox-sm mr-2" />
          <span className="label-text">L</span>
        </label>
        <label className="mb-2 flex items-center">
          <Input type="checkbox" className="checkbox checkbox-sm mr-2" />
          <span className="label-text">XL</span>
        </label>
      </div>
    </Filter>
  );
};
