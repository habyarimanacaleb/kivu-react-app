import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Explore Rwanda": "Explore Rwanda",
      "National Parks": "National Parks",
      "Culture & Heritage": "Culture & Heritage",
      Home: "Home",
      Gallery: "Gallery",
      Contact: "Contact",
      "Sign up": "Sign up",
    },
  },
  fr: {
    translation: {
      "Explore Rwanda": "Explorer le Rwanda",
      "National Parks": "Parcs Nationaux",
      "Culture & Heritage": "Culture et Patrimoine",
      Home: "Accueil",
      Gallery: "Galerie",
      Contact: "Contact",
      "Sign up": "S'inscrire",
    },
  },
  es: {
    translation: {
      "Explore Rwanda": "Explorar Ruanda",
      "National Parks": "Parques Nacionales",
      "Culture & Heritage": "Cultura y Patrimonio",
      Home: "Inicio",
      Gallery: "Galería",
      Contact: "Contacto",
      "Sign up": "Regístrate",
    },
  },
  rw: {
    translation: {
      "Explore Rwanda": "Sura u Rwanda",
      "National Parks": "Pariki z'Igihugu",
      "Culture & Heritage": "Umuco n'Ubuvanganzo",
      Home: "Ahabanza",
      Gallery: "Inyubako",
      Contact: "Tuvugishe",
      "Sign up": "Iyandikishe",
    },
  },
  ar: {
    translation: {
      "Explore Rwanda": "استكشاف رواندا",
      "National Parks": "الحدائق الوطنية",
      "Culture & Heritage": "الثقافة والتراث",
      Home: "الصفحة الرئيسية",
      Gallery: "معرض",
      Contact: "اتصل",
      "Sign up": "سجل",
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
