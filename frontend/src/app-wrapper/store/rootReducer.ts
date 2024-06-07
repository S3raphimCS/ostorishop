import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from '@/features/cart';
import { currencyReducer } from '@/features/currency';
import { favoriteItemsReducer } from '@/features/wishlist';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteItemsReducer,
  currency: currencyReducer,
});

export default rootReducer;
