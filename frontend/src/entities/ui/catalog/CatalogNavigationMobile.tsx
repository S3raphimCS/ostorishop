import Link from 'next/link';
import { Accordion } from '@/shared/ui';

interface MenuItem {
  text: string;
  path: string;
  submenu?: MenuItem[];
}

export interface Category {
  text: string;
  path: string;
  submenu: MenuItem[];
}

interface CatalogNavigationMobileProps {
  items: Category[];
  onClose: () => void;
}

export const CatalogNavigationMobile: React.FC<
  CatalogNavigationMobileProps
> = ({ items, onClose }) => {
  return (
    <div className="absolute left-0 right-0 z-[1] w-[99vw] xl:menu-horizontal lg:min-w-full">
      <div className="bg-base-200 p-4">
        {items.map((category, index) => (
          <Accordion
            key={index}
            title={category.text}
            name="catalog-accordion"
            content={
              <div>
                {category.submenu.map((item, itemIndex) => (
                  <Accordion
                    key={itemIndex}
                    title={
                      <Link
                        className="text-lg font-bold text-neutral-content transition duration-200 hover:text-accent"
                        href={item.path}
                        onClick={onClose}
                      >
                        {item.text}
                      </Link>
                    }
                    name={`subcategory-accordion-${index}`}
                    content={
                      <ul className="pl-4">
                        {item.submenu?.map((subItem, subItemIndex) => (
                          <li key={subItemIndex} className="mb-2">
                            <Link
                              className="text-neutral-content transition duration-200 hover:text-accent"
                              href={subItem.path}
                              onClick={onClose}
                            >
                              {subItem.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    }
                  />
                ))}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
