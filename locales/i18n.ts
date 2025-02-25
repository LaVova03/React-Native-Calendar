import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

import en from "./en.json";
import uk from "./uk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: RNLocalize.getLocales()[0].languageTag,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
