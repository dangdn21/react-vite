
import { createContext } from 'react';
import { LocalStorage } from '~/modules/LocalStorage';
import Variables from '~/modules/vars';

export const getInitialTheme = () => {
  const { defaultTheme } = Variables.theme;

  const storedTheme = LocalStorage.getTheme();
  if (storedTheme && storedTheme !== 'auto') {
    return storedTheme;
  }

  const userMedia = window.matchMedia('(prefers-color-scheme:dark)');
  if (userMedia.matches) {
    return 'dark';
  }

  return defaultTheme;
};

const ThemeContext = createContext({});

export default ThemeContext;
