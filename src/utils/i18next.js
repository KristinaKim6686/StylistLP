import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          tel: "Telefono",
          pretitle: "Estilista en Madrid",
          linkColor: "Tintes",
          linkHaircuts: "Cortes",
          linkHairstyles: "Peinados",
          colorTitle: "Coloracion",
          perfectRuby: "Rubio perfecto",
          hairHealth: "Cuidado de cabello",
          liveColor: "Colores vivos",
          galery: "Galeria",
        },
      },
      uk: {
        translation: {
          tel: "Телефон",
          pretitle: "Стиліст в Мадриді",
          linkColor: "Фарбування",
          linkHaircuts: "Стрижки",
          linkHairstyles: "Зачіски",
          colorTitle: "Колорування",
          perfectRuby: "Ідеальний блонд",
          hairHealth: "Догляд за волоссям",
          liveColor: "Живий колір",
          galery: "Галерея",
        },
      },
    },
  });
