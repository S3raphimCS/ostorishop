import axios from 'axios';
import Cookies from 'js-cookie';
import { TokenObtainPair, UserRegister } from '@/shared/model/Api';

// Test delay for some API executions
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const BACKEND_SERVER_URL = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;
const API_URL: string = BACKEND_SERVER_URL + 'api/auth/user';

const TOKEN_NAME = 'authorized';

const api = axios.create({
  baseURL: API_URL,
});

export const getJwtToken = () => {
  const jwtToken = Cookies.get(TOKEN_NAME);
  return jwtToken;
};

export const setJwtToken = (jwtToken: string) => {
  Cookies.set(TOKEN_NAME, jwtToken, { expires: 2 });
};

export const registerUser = async (userData: UserRegister) => {
  try {
    const response = await api.post('/register', userData);
    loginUser({ email: userData.email, password: userData.password1 });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Registration failed';
  }
};

export const loginUser = async (userData: TokenObtainPair) => {
  try {
    const response = await api.post('/login/', userData);
    const token = response.data.access;
    setJwtToken(token);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Login failed';
  }
};
