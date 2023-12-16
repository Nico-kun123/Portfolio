import { createI18n } from "vue-i18n";

const i18n = createI18n({
  // Устанавливаем локаль по умолчанию
  locale: navigator.language,

  // Устанавливаем локаль, если не найдена установленная локаль по умолчанию
  fallbackLocale: "en",

  // Устанавливаем флаг, чтобы не выдавало ошибку, если локаль не найдена
  sync: true,

  // Отключить предупреждения о недостающих ключах
  missingWarn: false,

  // Отключить предупреждения о недостающих переводах
  legacy: false,

  // translations
  messages: {
    en: {
      title: "My Portfolio",

      aboutDesc_1:
        "I'm a beginner Frontend-developer, ready to learn and improve my skills with their subsequent application to create interesting, modern projects!",
      aboutDesc_2:
        "My goals are to create modern, adaptive and interactive websites. I also create websites using Vue.js (Vite.js, Vue Router, Vuex, Vue-i18n).",
      aboutDesc_3:
        "I can attribute the following to my qualities (soft-skills):",

      extra1: [
        "To see my contact details (email, phone, social media links), click on the 'Show contacts' button in the top right corner of the page.",
        "Link to the certificate for knowledge of the English language: https://efset.org/cert/1pK56j",
        "My hobbies and interests:",
      ],
    },

    ru: {
      title: "Моё Портфолио",

      aboutDesc_1:
        "Я начинающий Frontend-разработчик, готовый к обучению и улучшению своих навыков с их последующих применением для создания интересных, современных проектов!",
      aboutDesc_2:
        "В моих целях — создавать современные, адаптивные и интерактивные веб-сайты. Также я создаю сайты с использованием Vue.js (Vite.js, Vue Router, Vuex, Vue-i18n).",
      aboutDesc_3: "К моим качествам (soft-skills) могу отнести следующее:",

      extra1: [
        "Для того, чтобы увидеть мои контактные данные (электронную почту, телефон, ссылки на социальные сети), нажмите на кнопку 'Показать контакты' в верхнем правом углу страницы.",
        "Ссылка на сертификат на знание английского языка: https://efset.org/cert/1pK56j",
        "Мои увлечения и хобби:",
      ],
    },
  },
});

export default i18n;
