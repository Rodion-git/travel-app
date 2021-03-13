import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "be",
        debug: true,
        detection: {
            order: ["queryString", "cookie"],
            cache: ["cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
        lng: "be",
        backend: {
            loadPath: "public/locales/{{lng}}/translation.json",
            crossDomain: true,
        },
    });

export default i18n;
