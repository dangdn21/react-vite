export const LocalStorage = {
  THEME: 'theme',

  LANGUAGE: 'i18nextLng',

  getTheme() {
    const theme = localStorage.getItem(LocalStorage.THEME);
    return theme;
  },

  setTheme(theme) {
    localStorage.setItem(LocalStorage.THEME, theme.toString());
  },

  getLanguage() {
    const language = localStorage.getItem(LocalStorage.LANGUAGE);
    return language;
  },

  setLanguage(language) {
    localStorage.setItem(LocalStorage.LANGUAGE, language);
  },
};

export default {};
