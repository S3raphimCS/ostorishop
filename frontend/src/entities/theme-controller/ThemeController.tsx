'use client';
import { Icon } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { saveThemeToLocalStorage } from './lib/saveThemeToLocalStorage';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

export const ThemeController = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || LIGHT_THEME
  );

  useEffect(() => {
    saveThemeToLocalStorage(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onChange={toggleTheme}
      ></input>
      <Icon
        size={32}
        className="swap-off fill-current"
        icon={'lightTheme'}
        color="white"
      />
      <Icon
        size={32}
        className="swap-on fill-current"
        icon={'darkTheme'}
        color="white"
      />
    </label>
  );
};
