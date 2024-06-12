import { createI18n } from 'vue-i18n'

// Файлы с локализациями
import english from '../locales/en.json'
import russian from '../locales/ru.json'

const i18n = createI18n({
  // Устанавливаем локаль по умолчанию
  locale: navigator.language,
  // locale: 'ru',
  // locale: 'en',

  // Устанавливаем локаль, если не найдена установленная локаль по умолчанию
  fallbackLocale: 'en',

  // Устанавливаем флаг, чтобы не выдавало ошибку, если локаль не найдена
  sync: true,

  // Отключить предупреждения о недостающих ключах
  missingWarn: false,

  // Отключить предупреждения о недостающих переводах
  legacy: false,

  // Переводы на языки: русский и английский
  messages: {
    en: english,
    ru: russian
  }
})

export default i18n
