import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, lt } from "./translations";

import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
/*
i18next
  //.use(RNLanguageDetector) // Add the language detector
  .use(initReactI18next)
  .init({
    fallbackLng: 'lt',
    supportedLngs: ['lt', 'en', 'ru'],
    ns: [],
    defaultNS: undefined,

    resources: {
      en: {
        common: require('./locales/en/common.json')
      },
      ru: {
        common: require('./locales/ru/common.json')
      },
      lt: {
        common: require('./locales/lt/common.json')
      }
    },

    interpolation: {
      escapeValue: false,
    },
  });*/

const resources = {
  en: {
    translation: en,
  },
  lt: {
    translation: lt,
  }
};

i18next.use(RNLanguageDetector) // Add the language detector
  .use(initReactI18next).init({
    resources,
    //language to use if translations in user language are not available
    fallbackLng: "en",
    supportedLngs: ['lt', 'en', 'ru'],
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18next;