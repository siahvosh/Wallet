import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// وارد کردن فایل‌های JSON
import loginEn from './Locales/en/Login.json';
import registerEn from './Locales/en/Register.json';
import loginFa from './Locales/fa/Login.json';
import registerFa from './Locales/fa/Register.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                login: loginEn,
                register: registerEn,
            },
            fa: {
                login: loginFa,
                register: registerFa,
            },
        },
        lng: 'en', // زبان پیش‌فرض
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // برای جلوگیری از فرار خودکار متون
        },
    });

export default i18n;
