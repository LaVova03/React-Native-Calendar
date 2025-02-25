import "react-i18next";

declare module "react-i18next" {
  interface Resources {
    en: {
      translation: typeof import("./locales/en.json");
    };
    uk: {
      translation: typeof import("./locales/uk.json");
    };
  }
}
