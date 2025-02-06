import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    modal: {
      close: 'Close',
      message: 'Hello! This is a modal window.',
      open: 'Open Modal',
    },
  },
  ru: {
    modal: {
      close: 'Закрыть',
      message: 'Привет! Это модальное окно.',
      open: 'Открыть модальное',
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
