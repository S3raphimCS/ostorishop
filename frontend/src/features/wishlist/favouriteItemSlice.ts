import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app-wrapper/types';
import { IFavouriteItem } from '../../entities/ui/favourite-item/model/types';

interface FavoritesState {
  favorites: IFavouriteItem[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoriteItemsSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IFavouriteItem>) => {
      const itemExists = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteItemsSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default favoriteItemsSlice.reducer;
