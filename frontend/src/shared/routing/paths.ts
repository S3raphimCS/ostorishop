type Id = string | null | undefined;

export const paths = {
  home: '/',
  cart: '/cart',
  wishlist: '/wishlist',

  men: '/men',
  menClothing: '/men-clothing',
  menShoes: '/men-shoes',
  menAccessories: '/men-accessories',

  women: '/women',
  womenClothing: '/women-clothing',
  womenShoes: '/women-shoes',
  womenAccessories: '/women-accessories',

  kids: '/kids',
  kidsClothing: '/kids-clothing',
  kidsShoes: '/kids-shoes',
  kidsAccessories: '/kids-accessories',

  promo: (id: Id): string => `/promo/${id}`,
};
