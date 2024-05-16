import { Filter } from '@/entities/ui/filter';

export const ColorFilter: React.FC = () => {
  return (
    <Filter title="Цвет">
      <div>
        <label className="mb-2 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="label-text">Черный</span>
        </label>
        <label className="mb-2 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="label-text">Белый</span>
        </label>
        <label className="mb-2 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="label-text">Красный</span>
        </label>
        <label className="mb-2 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="label-text">Синий</span>
        </label>
      </div>
    </Filter>
  );
};
