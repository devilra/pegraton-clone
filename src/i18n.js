import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import zh from "./locales/zh/translation.json";
import ja from "./locales/ja/translation.json";
import ko from "./locales/ko/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    zh: { translation: zh },
    ja: { translation: ja },
    ko: { translation: ko },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
