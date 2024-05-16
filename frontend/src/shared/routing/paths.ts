type Id = string | null | undefined;

export const paths = {
  home: '/',
  cart: '/cart',
  wishlist: '/wishlist',

  men: '/men',
  women: '/women',
  kids: '/kids',

  clothing: '/clothing',
  shoes: '/shoes',
  accessories: '/accessories',

  dresses: '/dresses',
  jackets: '/jackets',
  tShirts: '/t-shirts',
  jeans: '/jeans',
  shorts: '/shorts',
  sneakers: '/sneakers',
  sandals: '/sandals',
  bags: '/bags',
  belts: '/belts',
  hats: '/hats',

  termsAndConditions: '/help/terms-and-conditions',
  privacyPolicy: '/help/privacy-policy',

  categoryPath: (category: string, ...subcategories: string[]): string =>
    [category, ...subcategories].join(''),

  promo: (id: Id): string => `/promo/${id}`,
};
