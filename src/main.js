// import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

// PLUGINS
import checkLocale from './plugins/checkLocale'

const app = createApp(App)

// App config
app.config.devtools = true
app.config.performance = true
app.config.productionTip = false
app.config.silent = false

app.use(i18n)
app.use(checkLocale, { i18n })
app.mount('#app')

// Меняем язык названия страницы
document.title = i18n.global.t('title')

// NAVIGATION
const toggleElement = elem => elem.classList.toggle('active'),
  sidebar = document.querySelector('[data-sidebar]'),
  sidebarBtn = document.querySelector('[data-sidebar-btn]')
sidebarBtn.addEventListener('click', () => toggleElement(sidebar))

const navigationLinks = document.querySelectorAll('[data-nav-link]'),
  pages = document.querySelectorAll('[data-page]')

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    pages.forEach((page, pageIndex) => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add('active')
        link.classList.add('active')
        window.scrollTo(0, 0)
      } else {
        page.classList.remove('active')
        navigationLinks[pageIndex].classList.remove('active')
      }
    })
  })
})
