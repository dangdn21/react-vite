import type { ThemeName } from '../components/UI/Theme/types';
import type { Language } from '../plugins/i18n';

export const LocalStorage = {
  THEME: 'theme',

  LANGUAGE: 'i18nextLng',

  getTheme(): ThemeName | undefined {
    const theme = localStorage.getItem(LocalStorage.THEME);
    return theme as ThemeName | undefined;
  },

  setTheme(theme: boolean | string): void {
    localStorage.setItem(LocalStorage.THEME, theme.toString());
  },

  getLanguage(): Language {
    const language = localStorage.getItem(LocalStorage.LANGUAGE);
    return language as Language;
  },

  setLanguage(language: Language): void {
    localStorage.setItem(LocalStorage.LANGUAGE, language);
  },
};

export default {};
