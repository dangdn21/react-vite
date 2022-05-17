import { useEffect, useState } from 'react';


import { LocalStorage } from '~/modules/LocalStorage';
import ThemeContext, { getInitialTheme } from './ThemeContext';

const rawSetTheme = (theme) => {
  const root = window.document.documentElement;
  const isDark = theme === 'dark';

  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(theme);

  LocalStorage.setTheme(theme);
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values -- should be re-rendered every time that values are changed - affects children theme
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
