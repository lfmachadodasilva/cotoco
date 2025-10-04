import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import en from './locales/en.json';
import pt from './locales/pt.json';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: undefined, // let detector determine language
    fallbackLng: 'en', // fallback language

    interpolation: {
      escapeValue: false, // react already does escaping
    },

    // Language detection configuration
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // never cache cimode

      // Map pt-BR to pt
      convertDetectedLanguage: (lng: string) => {
        if (lng.startsWith('pt')) {
          return 'pt';
        }
        if (lng.startsWith('en')) {
          return 'en';
        }
        return lng;
      },
    },
  });

export default i18n;
