import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    common: {
      back: 'Back',
    },
    settingsModal: {
      tableSettingsTitle: 'Settings of the table',
      exportToExcel: 'Export to excel',
      importToExcel: 'Import to excel',
    },
  },
  ru: {
    common: {
      back: 'Назад',
    },
    settingsModal: {
      tableSettingsTitle: 'Настройки таблицы',
      exportToExcel: 'Экспорт в эксель',
      importToExcel: 'Импорт в эксель',
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
