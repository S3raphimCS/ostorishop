import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchExchangeRates } from './api';

interface CurrencyState {
  selectedCurrency: string;
  exchangeRates: Record<string, number>;
  lastFetched: number | null;
}

const initialState: CurrencyState = {
  selectedCurrency: 'RUB',
  exchangeRates: {},
  lastFetched: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExchangeRates.fulfilled, (state, action) => {
      state.exchangeRates = action.payload;
      state.lastFetched = Date.now();
    });
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
