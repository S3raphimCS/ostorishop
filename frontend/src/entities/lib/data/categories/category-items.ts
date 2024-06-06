import { getCategoryItems } from './generate-category-items';

export const menClothingItems = getCategoryItems(
  'Мужчинам',
  'Верхняя одежда',
  'men'
);
export const menShoesItems = getCategoryItems('Мужчинам', 'Обувь', 'men');
export const menAccessoriesItems = getCategoryItems(
  'Мужчинам',
  'Аксессуары',
  'men'
);

export const womenClothingItems = getCategoryItems(
  'Женщинам',
  'Верхняя одежда',
  'women'
);
export const womenShoesItems = getCategoryItems('Женщинам', 'Обувь', 'women');
export const womenAccessoriesItems = getCategoryItems(
  'Женщинам',
  'Аксессуары',
  'women'
);
