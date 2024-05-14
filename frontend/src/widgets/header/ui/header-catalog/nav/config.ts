import { paths } from '@/shared/routing';

export const items = [
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
            path: paths.categoryPath(paths.men, paths.jackets),
          },
          {
            text: 'Футболки',
            path: paths.categoryPath(paths.men, paths.tShirts),
          },
          { text: 'Джинсы', path: paths.categoryPath(paths.men, paths.jeans) },
          { text: 'Шорты', path: paths.categoryPath(paths.men, paths.shorts) },
        ],
      },
      {
        text: 'Обувь',
        path: paths.categoryPath(paths.men, paths.shoes),
        submenu: [
          {
            text: 'Кроссовки',
            path: paths.categoryPath(paths.men, paths.sneakers),
          },
          {
            text: 'Сандалии',
            path: paths.categoryPath(paths.men, paths.sandals),
          },
        ],
      },
      {
        text: 'Аксессуары',
        path: paths.categoryPath(paths.men, paths.accessories),
        submenu: [
          { text: 'Сумки', path: paths.categoryPath(paths.men, paths.bags) },
          { text: 'Ремни', path: paths.categoryPath(paths.men, paths.belts) },
          {
            text: 'Головные уборы',
            path: paths.categoryPath(paths.men, paths.hats),
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
            path: paths.categoryPath(paths.women, paths.dresses),
          },
          {
            text: 'Куртки',
            path: paths.categoryPath(paths.women, paths.jackets),
          },
          {
            text: 'Футболки',
            path: paths.categoryPath(paths.women, paths.tShirts),
          },
          {
            text: 'Джинсы',
            path: paths.categoryPath(paths.women, paths.jeans),
          },
          {
            text: 'Шорты',
            path: paths.categoryPath(paths.women, paths.shorts),
          },
        ],
      },
      {
        text: 'Обувь',
        path: paths.categoryPath(paths.women, paths.shoes),
        submenu: [
          {
            text: 'Кроссовки',
            path: paths.categoryPath(paths.women, paths.sneakers),
          },
          {
            text: 'Сандалии',
            path: paths.categoryPath(paths.women, paths.sandals),
          },
        ],
      },
      {
        text: 'Аксессуары',
        path: paths.categoryPath(paths.women, paths.accessories),
        submenu: [
          { text: 'Сумки', path: paths.categoryPath(paths.women, paths.bags) },
          { text: 'Ремни', path: paths.categoryPath(paths.women, paths.belts) },
          {
            text: 'Головные уборы',
            path: paths.categoryPath(paths.women, paths.hats),
          },
        ],
      },
    ],
  },
  {
    text: 'Детям',
    path: paths.kids,
    submenu: [
      {
        text: 'Верхняя одежда',
        path: paths.categoryPath(paths.kids, paths.clothing),
        submenu: [
          {
            text: 'Платья',
            path: paths.categoryPath(paths.kids, paths.dresses),
          },
          {
            text: 'Куртки',
            path: paths.categoryPath(paths.kids, paths.jackets),
          },
          {
            text: 'Футболки',
            path: paths.categoryPath(paths.kids, paths.tShirts),
          },
          { text: 'Джинсы', path: paths.categoryPath(paths.kids, paths.jeans) },
          { text: 'Шорты', path: paths.categoryPath(paths.kids, paths.shorts) },
        ],
      },
      {
        text: 'Обувь',
        path: paths.categoryPath(paths.kids, paths.shoes),
        submenu: [
          {
            text: 'Кроссовки',
            path: paths.categoryPath(paths.kids, paths.sneakers),
          },
          {
            text: 'Сандалии',
            path: paths.categoryPath(paths.kids, paths.sandals),
          },
        ],
      },
      {
        text: 'Аксессуары',
        path: paths.categoryPath(paths.kids, paths.accessories),
        submenu: [
          { text: 'Сумки', path: paths.categoryPath(paths.kids, paths.bags) },
          { text: 'Ремни', path: paths.categoryPath(paths.kids, paths.belts) },
          {
            text: 'Головные уборы',
            path: paths.categoryPath(paths.kids, paths.hats),
          },
        ],
      },
    ],
  },
];
