//import i18next from 'i18next';
import { locales } from 'expo-localization';
import { I18n } from 'i18n-js';
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

const i18n = new I18n({
  en: en,
  lt: lt,
  'lt-US': lt
});
console.log('locales:', locales);
i18n.defaultLocale = 'lt';
i18n.locale = 'lt';

export default i18n;

/*

i18next.use(RNLanguageDetector) // Add the language detector
  .use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    //language to use if translations in user language are not available
    fallbackLng: "en",
    supportedLngs: ['lt', 'en', 'ru'],
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18next;*/