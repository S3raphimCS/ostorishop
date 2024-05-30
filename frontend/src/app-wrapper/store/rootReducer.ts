import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from '@/entities/ui/cart';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
