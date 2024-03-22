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
        "Dynamic and motivated Frontend Developer and Tester seeking internship or full-time job opportunities to apply and enhance my skills in creating modern, responsive, and interactive websites and applications.",
      aboutDesc_2:
        "Currently pursuing a Bachelor's degree in Artificial Intelligence Engineering, with a passion for AI and Machine Learning. Proficient in HTML, CSS, JavaScript, TypeScript, Vue.js, Vite.js, scss/sass, PostgreSQL, Jest. Familiar with utilizing AI tools, including ChatGPT, to enhance productivity and problem-solving.",
      aboutDesc_3:
        "Eager to collaborate within a team and contribute to exciting projects! I am confident in my ability to bring technical expertise, dedication, and a strong work ethic to any organization. Open to challenges, I am excited about the opportunity to grow and excel in a professional environment!",
      aboutDesc_4:
        "I can attribute the following to my qualities (soft-skills):",

      extra1: [
        "To see my contact details (email, phone, social media links), click on the 'Show contacts' button in the top right corner of the page.",
        "Link to the certificate for knowledge of the English language: https://efset.org/cert/1pK56j",
        "My hobbies and interests:",
      ],

      filterInfo: "Select a filter to find projects quicker.",
      filterInfo_2: "You can filter by programming language or by project type (Pet-project, test project or big projects).",
    },

    ru: {
      title: "Моё Портфолио",

      aboutDesc_1:
        "Ответственный и замотивированный Frontend разработчик и тестировщик, в поисках полной занятости или возможности прохождения стажировки. Готов оттачивать свои профессиональные навыки в создании современных, адаптивных и интерактивных веб-сайтов и приложений.",
      aboutDesc_2:
        `В данный момент прохожу обучение в магистратуре по направлению "Инженерия искусственного интеллекта", где активно изучаю машинное обучение и ИИ. У меня есть знание таких технологий, как HTML, CSS, JavaScript, TypeScript, Vue.js, Vite.js, scss/sass, PostgreSQL, Jest. Знаком с ChatGPT: использую его для улучшения продуктивности и для решения проблем.`,
      aboutDesc_3:
        "Я буду рад принимать участие в разработке интересных и современных проектов! Я уверен в том, что мои навыки и энтузиазм будут ценной частью вашей дружной команды!",
      aboutDesc_4: "К моим качествам (soft-skills) могу отнести следующее:",

      extra1: [
        "Для того, чтобы увидеть мои контактные данные (электронную почту, телефон, ссылки на социальные сети), нажмите на кнопку 'Показать контакты' в верхнем правом углу страницы.",
        "Ссылка на сертификат на знание английского языка: https://efset.org/cert/1pK56j",
        "Мои увлечения и хобби:",
      ],

      filterInfo: "Выберите фильтр для быстрого поиска проектов.",
      filterInfo_2: "Можно фильтровать по языкам программирования или по виду проекта (Пет-проект, тестовое задание или большие проекты)."
    },
  },
});

export default i18n;
