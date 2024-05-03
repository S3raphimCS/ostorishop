import Link from 'next/link';

interface MenuItem {
  text: string;
  path: string;
}

interface Category {
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
      <div className="bg-black xl:menu-horizontal lg:min-w-full">
        <ul className="grid grid-flow-col gap-24 p-4">
          {items.map((category, index) => (
            <li key={index}>
              <div>
                <p className="font-bold">{category.text}</p>
                <ul>
                  {category.submenu.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.path}>{item.text}</Link>
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
