export type CategoryImage = {
  imageUrl: string;
  alt: string;
};

export const menCategoryImages: Record<string, CategoryImage> = {
  jackets: {
    imageUrl: '/categories-grid/men/clothing/jacket.jpg',
    alt: 'Мужские куртки',
  },
  't-shirts': {
    imageUrl: '/categories-grid/men/clothing/tShirts.jpg',
    alt: 'Мужские футболки',
  },
  jeans: {
    imageUrl: '/categories-grid/men/clothing/jeans.jpg',
    alt: 'Мужские джинсы',
  },
  shorts: {
    imageUrl: '/categories-grid/men/clothing/shorts.jpg',
    alt: 'Мужские шорты',
  },
  sneakers: {
    imageUrl: '/categories-grid/men/shoes/sneakers.jpg',
    alt: 'Мужские кроссовки',
  },
  sandals: {
    imageUrl: '/categories-grid/men/shoes/sandals.jpg',
    alt: 'Мужские сандалии',
  },
  bags: {
    imageUrl: '/categories-grid/men/accessories/bags.jpg',
    alt: 'Мужские сумки',
  },
  belts: {
    imageUrl: '/categories-grid/men/accessories/belts.jpg',
    alt: 'Мужские ремни',
  },
  hats: {
    imageUrl: '/categories-grid/men/accessories/hats.jpg',
    alt: 'Мужские головные уборы',
  },
};

export const womenCategoryImages: Record<string, CategoryImage> = {
  dresses: {
    imageUrl: '/categories-grid/women/clothing/dress.jpg',
    alt: 'Платья',
  },
  jackets: {
    imageUrl: '/categories-grid/women/clothing/jacket.jpg',
    alt: 'Женские Куртки',
  },
  't-shirts': {
    imageUrl: '/categories-grid/women/clothing/tShirts.jpg',
    alt: 'Женские Футболки',
  },
  jeans: {
    imageUrl: '/categories-grid/women/clothing/jeans.jpg',
    alt: 'Женские Джинсы',
  },
  shorts: {
    imageUrl: '/categories-grid/women/clothing/shorts.jpg',
    alt: 'Женские Шорты',
  },
  sneakers: {
    imageUrl: '/categories-grid/women/shoes/sneakers.jpg',
    alt: 'Женские кроссовки',
  },
  sandals: {
    imageUrl: '/categories-grid/women/shoes/sandals.jpg',
    alt: 'Женские сандалии',
  },
  bags: {
    imageUrl: '/categories-grid/women/accessories/bags.jpg',
    alt: 'Женские сумки',
  },
  belts: {
    imageUrl: '/categories-grid/women/accessories/belts.jpg',
    alt: 'Женские ремни',
  },
  hats: {
    imageUrl: '/categories-grid/women/accessories/hats.jpg',
    alt: 'Женские головные уборы',
  },
};

export const kidsCategoryImages: Record<string, CategoryImage> = {
  dresses: {
    imageUrl: '/categories-grid/kids/dress.png',
    alt: 'Платья',
  },
  jackets: {
    imageUrl: '/categories-grid/kids/jacket.png',
    alt: 'Куртки',
  },
  tShirts: {
    imageUrl: '/kross3.png',
    alt: 'Футболки',
  },
  jeans: {
    imageUrl: '/categories-grid/kids/jeans.png',
    alt: 'Джинсы',
  },
  shorts: {
    imageUrl: '/categories-grid/kids/shorts.png',
    alt: 'Шорты',
  },
};
