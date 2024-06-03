import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from '@/features/cart';
import { favoriteItemsReducer } from '@/features/wishlist';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteItemsReducer,
});

export default rootReducer;
