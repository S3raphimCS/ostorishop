'use client';
import { createContext } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});
