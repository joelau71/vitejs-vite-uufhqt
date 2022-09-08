import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../public/locales/en/translation.json';
import translationTc from '../public/locales/tc/translation.json';
import translationSc from '../public/locales/sc/translation.json';
import detector from 'i18next-browser-languagedetector';
import config from './config';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const { FALLBACK_LOCALE } = config;
const resources = {
  en: {
    translation: translationEn,
  },
  tc: {
    translation: translationTc,
  },
  sc: {
    translation: translationSc,
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: FALLBACK_LOCALE,
    supportedLngs: ['en', 'tc', 'sc'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
