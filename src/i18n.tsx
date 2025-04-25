
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en/translation.json';
import faTranslation from './locales/fa/translation.json';

// Define available languages
export const languages = {
  en: { name: 'English', dir: 'ltr', code: 'en' },
  fa: { name: 'فارسی', dir: 'rtl', code: 'fa' }
};

// Initialize i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
  });

// Function to change language and handle RTL/LTR
export const changeLanguage = (lng: string) => {
  document.documentElement.dir = languages[lng as keyof typeof languages].dir;
  document.documentElement.lang = lng;
  return i18n.changeLanguage(lng);
};

// Set initial direction based on detected language
const currentLang = i18n.language || 'en';
document.documentElement.dir = languages[currentLang as keyof typeof languages]?.dir || 'ltr';
document.documentElement.lang = currentLang;

export default i18n;
