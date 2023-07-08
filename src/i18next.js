import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// const apiKey = "6kU87UCJ-d-Wcw2iU2lxVQ";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    ns: ["default"],
    defaultNS: "default",
    debug: false,
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"]
    },
    supportedLngs: ["ru", "uz", "en", "zh"],
    interpolation: {
      escapeValue: false
    },

    backend: {
      loadPath: '/translations/{{lng}}/default.json'
    }
  })
