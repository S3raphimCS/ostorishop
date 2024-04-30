'use client';
import { Icon } from '@/shared/ui';
import { Theme, useTheme } from '@/entities/theme-controller';

export const ThemeController = () => {
  const { theme, toggleTheme } = useTheme();

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
