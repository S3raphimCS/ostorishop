import { paths } from '@/shared/routing';

export const NavigationItems = [
  {
    text: 'Мужчинам',
    path: paths.men,
    submenu: [
      {
        text: 'Верхняя одежда',
        path: paths.categoryPath(paths.men, paths.clothing),
        submenu: [
          {
            text: 'Куртки',
            path: paths.categoryPath(paths.men, paths.clothing, paths.jackets),
          },
          {
            text: 'Футболки',
            path: paths.categoryPath(paths.men, paths.clothing, paths.tShirts),
          },
          {
            text: 'Джинсы',
            path: paths.categoryPath(paths.men, paths.clothing, paths.jeans),
          },
          {
            text: 'Шорты',
            path: paths.categoryPath(paths.men, paths.clothing, paths.shorts),
          },
        ],
      },
      {
        text: 'Обувь',
        path: paths.categoryPath(paths.men, paths.shoes),
        submenu: [
          {
            text: 'Кроссовки',
            path: paths.categoryPath(paths.men, paths.shoes, paths.sneakers),
          },
          {
            text: 'Сандалии',
            path: paths.categoryPath(paths.men, paths.shoes, paths.sandals),
          },
        ],
      },
      {
        text: 'Аксессуары',
        path: paths.categoryPath(paths.men, paths.accessories),
        submenu: [
          {
            text: 'Сумки',
            path: paths.categoryPath(paths.men, paths.accessories, paths.bags),
          },
          {
            text: 'Ремни',
            path: paths.categoryPath(paths.men, paths.accessories, paths.belts),
          },
          {
            text: 'Головные уборы',
            path: paths.categoryPath(paths.men, paths.accessories, paths.hats),
          },
        ],
      },
    ],
  },
  {
    text: 'Женщинам',
    path: paths.women,
    submenu: [
      {
        text: 'Верхняя одежда',
        path: paths.categoryPath(paths.women, paths.clothing),
        submenu: [
          {
            text: 'Платья',
            path: paths.categoryPath(
              paths.women,
              paths.clothing,
              paths.dresses
            ),
          },
          {
            text: 'Куртки',
            path: paths.categoryPath(
              paths.women,
              paths.clothing,
              paths.jackets
            ),
          },
          {
            text: 'Футболки',
            path: paths.categoryPath(
              paths.women,
              paths.clothing,
              paths.tShirts
            ),
          },
          {
            text: 'Джинсы',
            path: paths.categoryPath(paths.women, paths.clothing, paths.jeans),
          },
          {
            text: 'Шорты',
            path: paths.categoryPath(paths.women, paths.clothing, paths.shorts),
          },
        ],
      },
      {
        text: 'Обувь',
        path: paths.categoryPath(paths.women, paths.shoes),
        submenu: [
          {
            text: 'Кроссовки',
            path: paths.categoryPath(paths.women, paths.shoes, paths.sneakers),
          },
          {
            text: 'Сандалии',
            path: paths.categoryPath(paths.women, paths.shoes, paths.sandals),
          },
        ],
      },
      {
        text: 'Аксессуары',
        path: paths.categoryPath(paths.women, paths.accessories),
        submenu: [
          {
            text: 'Сумки',
            path: paths.categoryPath(
              paths.women,
              paths.accessories,
              paths.bags
            ),
          },
          {
            text: 'Ремни',
            path: paths.categoryPath(
              paths.women,
              paths.accessories,
              paths.belts
            ),
          },
          {
            text: 'Головные уборы',
            path: paths.categoryPath(
              paths.women,
              paths.accessories,
              paths.hats
            ),
          },
        ],
      },
    ],
  },
];
