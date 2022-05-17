import i18nNext from 'i18next';
import { useEffect } from 'react';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import moment from 'moment';
import { LocalStorage } from '~/modules/LocalStorage';

const getLanguage = () => {
  const lang = LocalStorage.getLanguage();

  if (lang && !lang.includes('-')) { return lang; }

  return (navigator.language).toString()
    .includes('-') ? (navigator.language).toString()
      .split('-')[0] : (navigator.language).toString();
};

(async () => {
  await i18nNext
    .use(Backend)
    .use(LanguageDetector)
    .init({
      lng: getLanguage(),
      fallbackLng: 'en',
      returnEmptyString: false,
      keySeparator: '.',
      interpolation: {
        escapeValue: false,
        format: (value, format) => {
          if (value instanceof Date) {
            return moment(value)
              .format(format);
          }
          return value;
        },
      },
      react: {
        useSuspense: true,
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.yaml',
        requestOptions: {
          mode: 'cors',
          credentials: 'same-origin',
          cache: 'default',
        },
      },
    });
})();

const i18nInstall = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = LocalStorage.getLanguage();

    if (language.includes('-')) {
      LocalStorage.setLanguage('en');
      i18n.changeLanguage('en')
        .then(() => {
          document.dir = i18n.dir('en');
        })
        .catch((error) => {
          throw error;
        });
    }

    window.document.dir = i18n.dir(language);
  }, []);
};

export default i18nInstall;
