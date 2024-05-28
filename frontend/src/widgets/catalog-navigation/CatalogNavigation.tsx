import Link from 'next/link';

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

interface CatalogNavigationProps {
  items: Category[];
}

export const CatalogNavigation: React.FC<CatalogNavigationProps> = ({
  items,
}) => {
  return (
    <div className="absolute left-0 right-0 z-[1] mt-2 w-[99vw]">
      <div className="bg-base-200 xl:menu-horizontal lg:min-w-full">
        <ul className="p-4">
          {items.map((category, index) => (
            <li key={index}>
              <div>
                <ul className="flex gap-16">
                  {category.submenu.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        className="text-lg font-bold text-neutral-content transition duration-200 hover:text-accent"
                        href={item.path}
                      >
                        {item.text}
                      </Link>
                      {item.submenu && (
                        <ul>
                          {item.submenu.map((subItem, subItemIndex) => (
                            <li key={subItemIndex}>
                              <Link
                                className="text-neutral-content transition duration-200 hover:text-accent"
                                href={subItem.path}
                              >
                                {subItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
