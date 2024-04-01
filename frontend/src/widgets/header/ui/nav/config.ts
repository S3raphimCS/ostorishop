import { paths } from '@/shared/routing';

export const items = [
  {
    text: 'Мужчинам',
    path: paths.men,
    submenu: [
      { text: 'Верхняя одежда', path: paths.menClothing },
      { text: 'Обувь', path: paths.menShoes },
      { text: 'Аксессуары', path: paths.menAccessories },
    ],
  },

  {
    text: 'Женщинам',
    path: paths.women,
    submenu: [
      { text: 'Верхняя одежда', path: paths.womenClothing },
      { text: 'Обувь', path: paths.womenShoes },
      { text: 'Аксессуары', path: paths.womenAccessories },
    ],
  },

  {
    text: 'Детям',
    path: paths.kids,
    submenu: [
      { text: 'Верхняя одежда', path: paths.kidsClothing },
      { text: 'Обувь', path: paths.kidsShoes },
      { text: 'Аксессуары', path: paths.kidsAccessories },
    ],
  },
];
