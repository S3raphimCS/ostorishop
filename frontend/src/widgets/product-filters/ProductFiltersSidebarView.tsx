import { Icon } from '@/shared/ui';
import { PriceFilter, SizeFilter, ColorFilter } from '@/entities/ui/filter';

interface ProductFiltersSidebarViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductFiltersSidebarView: React.FC<
  ProductFiltersSidebarViewProps
> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full transform bg-white pb-24 shadow-xl transition-transform sm:w-96 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-bold">Фильтры</h2>
          <button onClick={onClose}>
            <Icon icon="close" color="black" />
          </button>
        </div>
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto p-4 pt-0">
            <aside className="w-full p-4">
              <PriceFilter minPrice={2500} maxPrice={55000} />
              <SizeFilter />
              <ColorFilter />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
