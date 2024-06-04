'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '../icons/Icon';

interface BreadcrumbItem {
  label: string;
  url: string;
  disabled?: boolean;
}

const pathNames: { [key: string]: string } = {
  men: 'Мужчинам',
  women: 'Женщинам',
  kids: 'Детям',
  clothing: 'Верхняя одежда',
  shoes: 'Обувь',
  accessories: 'Аксессуары',
  jackets: 'Куртки',
  't-shirts': 'Футболки',
  jeans: 'Джинсы',
  shorts: 'Шорты',
  dresses: 'Платья',
  sneakers: 'Кроссовки',
  sandals: 'Сандалии',
  bags: 'Сумки',
  belts: 'Ремни',
  hats: 'Головные уборы',
};

export const BreadСrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((item) => item !== '');

  const home: BreadcrumbItem = { label: 'Главная', url: '/' };

  const breadcrumbItems: BreadcrumbItem[] = segments.map((item, index) => {
    const breadcrumbItem: BreadcrumbItem = {
      label: pathNames[item] || item,
      url: `/${segments.slice(0, index + 1).join('/')}`,
      disabled: index === segments.length - 1,
    };
    return breadcrumbItem;
  });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-accent"
            href={home.url}
          >
            <Icon icon={'home'} size={'0.8rem'} />
            {home.label}
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <span className="mr-2 text-gray-400">&#62;</span>
            {!item.disabled ? (
              <Link
                className="inline-flex items-center text-sm font-medium hover:text-accent"
                href={item.url}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
