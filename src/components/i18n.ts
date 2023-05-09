import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        name: 'Name',
        birthday: 'Birthday',
        age: 'Age',
        country: 'Country',
        city: 'City',
        welcome: 'welcome to my website',
        about: 'About',
        user: 'I am an aspiring junior Front-end developer. I have a strong desire to learn and create.',
        learn: "I believe in life long learning and I'm constantly exploring new techhnologies and ideas. I'll try to keep myself updatet in the latest trends and technologies.",
        interests: 'My interessts are very divers. I like to go out with my dog. Train martial arts with my team. And I love phylosophy and physics.',

      },
    },
    de: {
      translation: {
        name: 'Name',
        birthday: 'Geburtstag',
        age: 'Alter',
        country: 'Land',
        city: 'Stadt',
        welcome: 'Willkommen auf meiner Website',
        about: 'Imperessum',
        user: 'Ich bin ein aufstrebender Junior Front-End-Entwickler. Ich möchte mich jeden Tag steigern und was neues lernen.',
        learn: "Ich glaube an lebenslanges Lernen und bin ständig auf der Suche nach neuen Technologien und Ideen. Ich versuchen mich stets über die neuesten Trends und Technologien auf dem Laufenden zu halten.",
        interests: 'Meine Interessen sind sehr vielfältig. Ich gehe gerne mit meinem Hund spazieren. Ich mache Kampfsport und ich liebe es mich mit Philosophie und Physik zu beschäftigen.',

      },

    },
  },
});

export default i18n;
