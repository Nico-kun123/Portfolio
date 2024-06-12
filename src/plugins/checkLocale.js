export default {
  /**
   * Плагин для Vue-приложения.
   *
   * Если текущий язык — русский, то возвращает true, иначе — false.
   *
   * @param {*} app Vue-приложение.
   * @param {*} options Опции Vue-приложения.
   */
  install(app, options) {
    app.config.globalProperties.$isRussian = () => {
      const currentLocale = options.i18n.global.locale.value
      return currentLocale === 'ru-RU' || currentLocale === 'ru'
    }
  }
}
