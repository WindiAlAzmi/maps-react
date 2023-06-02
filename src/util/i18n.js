import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/src/data/locales/{{lng}}/{{ ns }}.json",
    },
    supportedLngs: ["en", "id"], // Add 'id' as a supported language
    fallbackLng: "en",
    debug: true,
    react: {
      useSuspense: true,
    },
  });

export default i18n;
