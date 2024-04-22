export const saveThemeToLocalStorage = (theme: string) => {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
};
