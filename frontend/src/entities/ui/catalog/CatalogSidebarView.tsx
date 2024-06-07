import { Icon } from '@/shared/ui';
import { NavigationItems } from '@/widgets/header/ui/header-catalog/nav/config';
import { CatalogNavigationMobile } from './CatalogNavigationMobile';

interface CatalogSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogSidebarView: React.FC<CatalogSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full transform bg-white shadow-xl transition-transform sm:w-96 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-bold">Каталог</h2>
          <button onClick={onClose}>
            <Icon icon="close" color="black" />
          </button>
        </div>
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto p-4 pt-0">
            <CatalogNavigationMobile items={NavigationItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
