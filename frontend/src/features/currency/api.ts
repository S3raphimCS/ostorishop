import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_EXCHANGERATE;

const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/RUB`;

export const fetchExchangeRates = createAsyncThunk(
  'currency/fetchExchangeRates',
  async (_, { getState }) => {
    const state: any = getState();
    const lastFetched = state.currency.lastFetched;
    const now = Date.now();

    if (lastFetched && now - lastFetched < 24 * 60 * 60 * 1000) {
      return state.currency.exchangeRates;
    }

    const response = await axios.get(BASE_URL);
    return response.data.conversion_rates;
  }
);
