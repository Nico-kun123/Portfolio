<script setup>
// Импорт проектов
const props = defineProps({
    /**
     * Список проектов.
     * @type {Array}
     * @default []
     */
    projects: {
      default: () => [],
      type: Array,
    },
  }),
  { projects } = props

// Импорт i18n (такой подход лучше годится для Composition API)
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/* COMPONENTS */
import Blog from './Blog-List-Item.vue'
import Navbar from './NavBar.vue'
import ResumeListItem from './Resume-List-Item.vue'
import Service from './Service-Component.vue'
import Skill from './Skill-List-Item.vue'

/* UNUSED COMPONENTS */
// import Project from "./Portfolio Project.vue";
// import Client from "./Client Logo.vue";
// import TestimonialItem from "./Testimonial Item.vue";

const { t } = useI18n()

const isRussian = computed(() => t('locale') === 'ru-RU' || t('locale') === 'ru')

// Изменяем ссылки на изображения, чтобы в production всё корректно отображалось
projects.forEach(project => {
  project.image = new URL(
    `../assets/images/projects/${project.image.split('/')[5]}`,
    import.meta.url,
  ).href
})

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ОСНОВНЫЙ ФУНКЦИИ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/**
 * Перемешивает проекты в случайном порядке.
 *
 */
const shuffleProjects = () => {
  projects.sort(() => Math.random() - 0.5)
}
shuffleProjects()

/**
 * Добавляет класс к элементу.
 * @param {Element} element Элемент, к которому нужно добавить класс.
 * @param {string} name Название класса.
 * @return {void}
 */
const addClass = (element, name) => {
    const classList = name.split(' ')

    classList.forEach(className => {
      if (!element.classList.contains(className)) {
        element.classList.add(className)
      }
    })
  },
  /**
   * Удаляет класс из элемента.
   * @param {Element} element Элемент, у которого нужно удалить класс.
   * @param {string} name Название класса.
   * @return {void}
   */
  removeClass = (element, name) => {
    const classList = name.split(' ')

    classList.forEach(className => {
      element.classList.remove(className)
    })
  },
  /**
   * Применяет фильтр к проектам: показывает все проекты с указанным названием класса.
   *
   * @param {string} className Название класса, по которому производится фильтрация.
   * @return {void}
   */
  filterByClassName = className => {
    const elements = document.querySelectorAll('.filterDiv')
    className = className.toLowerCase()

    if (className === 'all') {
      className = ''
    }

    elements.forEach(element => {
      const elementClassName = element.className.toLowerCase()
      removeClass(element, 'show')

      if (elementClassName.includes(className)) {
        addClass(element, 'show')
      }
    })
  }

document.addEventListener('DOMContentLoaded', () => {
  // Применяет фильтр к проектам: показывает все проекты
  filterByClassName('all')

  // Подсвечивает нажимаемую кнопку (это НЕ для мобильных устройств)
  const btns = document.getElementsByClassName('btn')
  for (const btn of btns) {
    btn.addEventListener('click', () => {
      if (btn.classList.length === 1) {
        for (const current of btns) {
          current.classList.remove('active')
        }

        document.getElementsByClassName('dropbtn')[0].innerHTML = btn.innerHTML
        btn.classList.add('active')
      }
    })
  }
})

/**
 * Отображает выпадающее меню.
 */
const showDropdown = () => {
  document.getElementById('myDropdown').classList.toggle('show')
}

/**
 * Закрыть выпадающее меню, если пользователь кликнет за его пределами.
 */
window.onclick = event => {
  const dropdowns = document.getElementsByClassName('dropdown-content')
  for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i]
    if (openDropdown.classList.contains('show') && !event.target.matches('.dropbtn')) {
      openDropdown.classList.remove('show')?.remove(':focus')
    }
  }
}
</script>

<template>
  <div class="main-content">
    <!-- !! NAVBAR !! -->
    <Navbar />

    <!-- !! ABOUT !! -->
    <article class="about active" data-page="about">
      <header>
        <h2 v-if="isRussian" class="article-title h2">Обо мне</h2>

        <h2 v-else class="article-title h2">About me</h2>
      </header>

      <!-- ОБО МНЕ -->
      <section class="about-text">
        <!-- <p>{{ t('aboutMe[0]') }}</p> -->

        <p>{{ t('aboutMe[1]') }}</p>

        <p>{{ t('aboutMe[2]') }}</p>

        <p>{{ t('aboutMe[3]') }}</p>

        <div class="separator"></div>

        <p>{{ t('aboutMe[4]') }}</p>

        <ul class="common-list">
          <li>{{ t('softSkills[0]') }}</li>

          <li>{{ t('softSkills[1]') }}</li>

          <li>{{ t('softSkills[2]') }}</li>

          <li>{{ t('softSkills[3]') }}</li>

          <li>{{ t('softSkills[4]') }}</li>
          <li>{{ t('softSkills[5]') }}</li>
        </ul>
      </section>

      <div class="separator"></div>

      <!-- ССЫЛКИ НА МОИ РЕЗЮМЕ -->
      <h3 v-if="isRussian" class="h2 service-title">Мои резюме:</h3>

      <h3 v-else class="h2 service-title">My resume:</h3>

      <ul class="resume-list">
        <li>
          <a
            href="https://hh.ru/resume/2a9e4a36ff0d98e11d0039ed1f414338487457"
            target="_blank"
            rel="noopener noreferrer"
            >&#10148; {{ t('resumeNames[0]') }}</a
          >
        </li>

        <!-- <li>
          <br />
        </li> -->

        <li>
          <a
            href="https://hh.ru/resume/b1d0d068ff0cb9b6c90039ed1f336153683471"
            target="_blank"
            rel="noopener noreferrer"
            >&#10148; {{ t('resumeNames[1]') }}</a
          >
        </li>
        <!-- 
        <li>
          <br />
        </li> -->

        <li>
          <a
            href="https://hh.ru/resume/914ccdb3ff0dac3ddf0039ed1f51705a753542"
            target="_blank"
            rel="noopener noreferrer"
            >&#10148; {{ t('resumeNames[2]') }}</a
          >
        </li>
      </ul>

      <div class="separator"></div>

      <!-- Раздел "Чем я занимаюсь" -->
      <section class="service">
        <h4 v-if="isRussian" class="h2 service-title">Чем я занимаюсь:</h4>

        <h4 v-else class="h2 service-title">What do I do:</h4>

        <ul class="service-list">
          <Service :id="1" :name="t('serviceName[0]')" :description="t('serviceDesc[0]')" />

          <Service :id="3" :name="t('serviceName[2]')" :description="t('serviceDesc[2]')" />

          <Service :id="4" :name="t('serviceName[1]')" :description="t('serviceDesc[1]')" />
        </ul>
      </section>

      <!-- <div class="separator"></div> -->

      <!-- ОТЗЫВЫ И РЕКОМЕНДАЦИИ -->
      <!--
        <section class="testimonials">
        <h3
        v-if="isRussian"
        class="h3 testimonials-title"
        >
        Отзывы:
        </h3>
        <h3 v-else class="h3 testimonials-title">Testimonials:</h3>

        <ul class="testimonials-list has-scrollbar">
        <TestimonialItem
        v-if="isRussian"
        id="1"
        name="Пример отзыва"
        description="Содержание отзыва"
        date="16 Октября 2021 г."
        />
        <TestimonialItem
        v-else
        id="1"
        name="Feedback Example"
        description="Some description"
        date="October 16, 2021"
        />
        <TestimonialItem />
        </ul>
        </section> 
      -->

      <!-- Popup с полным описанием -->
      <!--
        <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>

        <section class="testimonials-modal">
        <button
        class="modal-close-btn"
        data-modal-close-btn
        style="padding: fit-content; margin: auto"
        >
        <img src="../assets/images/ui/cross.svg" width="20" loading="lazy" />
        </button>

        <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
        <img alt="logo" width="80" data-modal-img loading="lazy" />
        </figure>

        <img src="../assets/images/ui/quote.svg" alt="quote icon" loading="lazy" />
        </div>

        <div class="modal-content">
        <h4 class="h3 modal-title" data-modal-title>name</h4>

        <time datetime="2021-06-14" data-modal-date>date</time>

        <div data-modal-text style="color: aliceblue">
        <p>Some Inner Text</p>
        </div>
        </div>
        </section>
        </div> 
      -->

      <!-- <div class="separator"></div> -->

      <!-- clients -->
      <!--
        <section class="clients">
        <h3
        v-if="isRussian"
        class="h3 clients-title"
        >
        Клиенты:
        </h3>
        <h3 v-else class="h3 clients-title">Clients:</h3>

        <ul class="clients-list has-scrollbar">
        <Client id="2" name="Client 2" link="Link 2" />
        </ul>
        </section> 
      -->
    </article>

    <!-- !! RESUME !! -->
    <article class="resume" data-page="resume">
      <header>
        <h2 v-if="isRussian" class="article-title h2">Резюме</h2>

        <h2 v-else class="article-title h2">Resume</h2>
      </header>

      <!-- ОБРАЗОВАНИЕ (САМЫЕ НОВЫЕ ВВЕРХУ) -->
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <img
              src="../assets/images/ui/icons/resume/education.svg"
              loading="lazy"
              draggable="false"
            />
          </div>

          <h3 v-if="isRussian" class="h3">Образование:</h3>

          <h3 v-else class="h3">Education:</h3>
        </div>

        <ol class="timeline-list">
          <ResumeListItem
            :name="t('timelineItemName[0]')"
            years="2023 — 2025"
            :description="t('timelineItemDesc[0]')"
          />

          <ResumeListItem
            :name="t('timelineItemName[0]')"
            years="2019 — 2023"
            :description="t('timelineItemDesc[1]')"
          />

          <!-- <ResumeListItem
            :name="t('timelineItemName[1]')"
            years="2008 — 2019"
            :description="t('timelineItemDesc[2]')"
          /> -->
        </ol>
      </section>

      <!-- СТАЖИРОВКИ (САМЫЕ НОВЫЕ ВВЕРХУ) -->
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <img
              src="../assets/images/ui/icons/resume/internship.svg"
              loading="lazy"
              draggable="false"
            />
          </div>

          <h3 v-if="isRussian" class="h3">Стажировки:</h3>

          <h3 v-else class="h3">Internships:</h3>
        </div>

        <ol class="timeline-list">
          <ResumeListItem
            v-if="isRussian"
            key="resume-list-item-1"
            name=""
            years="Нет стажировок."
            description=""
          />

          <ResumeListItem
            v-else
            key="resume-list-item-2"
            name=""
            years="No internships."
            description=""
          />
        </ol>
      </section>

      <!-- ОПЫТ РАБОТЫ (САМЫЕ НОВЫЕ ВВЕРХУ) -->
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <img
              src="../assets/images/ui/icons/resume/experience.svg"
              loading="lazy"
              draggable="false"
            />
          </div>

          <h3 v-if="isRussian" class="h3">Опыт работы:</h3>

          <h3 v-else class="h3">Work experience:</h3>
        </div>

        <ol class="timeline-list">
          <!-- <ResumeListItem v-if="isRussian" name="" years="Нет опыта работы." description="" />

          <ResumeListItem
            v-else
            key="resume-list-item-4"
            name=""
            years="No work experience."
            description=""
          /> -->

          <ResumeListItem
            v-if="isRussian"
            key="resume-list-item-1"
            :name="t('timelineItemName[2]')"
            years="2025 — Настоящее время"
            :description="t('timelineItemDesc[3]')"
          />
          <ResumeListItem
            v-else
            key="resume-list-item-2"
            :name="t('timelineItemName[2]')"
            years="2025 — Present"
            :description="t('timelineItemDesc[3]')"
          />
        </ol>
      </section>

      <div class="separator"></div>

      <!-- ТЕХНИЧЕСКИЕ НАВЫКИ + ШКАЛА -->
      <!-- TODO: Можно попытаться как-то оценить свои знания в этих технологиях в процентах (хз как) -->
      <section class="skill">
        <h3 v-if="isRussian" class="h3 skills-title">Мои технические навыки (hard-skills)</h3>

        <h3 v-else class="h3 skills-title">My technical skills (hard-skills)</h3>

        <p>{{ t('extra[2]') }}</p>

        <div class="content-card skills-list">
          <Skill
            v-if="isRussian"
            key="skill-ru"
            skill-name="Английский язык (C1)"
            :skill-value="78"
          />

          <Skill v-else key="skill-en" skill-name="English (C1)" :skill-value="78" />

          <div class="separator" />

          <Skill skill-name="HTML5, CSS3, JavaScript" :skill-value="75" />

          <Skill skill-name="PostgreSQL" :skill-value="70" />

          <Skill skill-name="Vue.js" :skill-value="65" />

          <Skill skill-name="Git" :skill-value="60" />

          <div class="separator" />

          <Skill skill-name="SCSS/SASS" :skill-value="80" />

          <Skill skill-name="Vite.js" :skill-value="75" />

          <Skill skill-name="Typescript" :skill-value="70" />

          <Skill skill-name="JQuery" :skill-value="40" />

          <Skill skill-name="React.js" :skill-value="36" />
        </div>
      </section>
    </article>

    <!-- !! PORTFOLIO !! -->
    <article class="portfolio" data-page="portfolio">
      <header>
        <h2 v-if="isRussian" class="article-title h2">Портфолио</h2>

        <h2 v-else class="article-title h2">Portfolio</h2>
      </header>

      <section class="about-text">
        <p>{{ t('filterInfo[0]') }}</p>
        <p>{{ t('filterInfo[1]') }}</p>
        <br />

        <!-- ФИЛЬТР ПРОЕКТОВ (МОБИЛЬНЫЕ УСТРОЙСТВА) -->
        <!-- TODO: Если нужно добавить новые фильтры, то нужно добавить их здесь (Desktop) -->
        <div id="filter-menu">
          <button v-if="isRussian" class="dropbtn" type="button" @click="showDropdown">
            Выберите фильтр
          </button>

          <button v-else class="dropbtn" type="button" @click="showDropdown">
            Select a filter
          </button>

          <div id="myDropdown" class="dropdown-content">
            <a v-if="isRussian" class="btn" @click="filterByClassName('all')">Все проекты</a>

            <a v-else class="btn" @click="filterByClassName('all')">All Projects</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('Big project')"
              >Большие Проекты</a
            >

            <a v-else class="btn" @click="filterByClassName('Big project')">Big Projects</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('Pet project')"
              >Пет-проекты</a
            >

            <a v-else class="btn" @click="filterByClassName('Pet project')">Pet projects</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('Test task')"
              >Тестовые задания</a
            >

            <a v-else class="btn" @click="filterByClassName('Test task')">Test Tasks</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('layout')">Вёрстка</a>

            <a v-else class="btn" @click="filterByClassName('layout')">Layouts</a>

            <a class="btn" @click="filterByClassName('typescript')">Typescript</a>
            <!-- <a class="btn" @click="filterByClassName('react.js')">React.js</a> -->
            <a class="btn" @click="filterByClassName('vue.js')">Vue.js</a>

            <a class="btn" @click="filterByClassName('react.js')">React.js</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('no react/vue')"
              >Без React/Vue</a
            >

            <a v-else class="btn" @click="filterByClassName('no react/vue')">No React/Vue</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('tests')">Написание тестов</a>

            <a v-else class="btn" @click="filterByClassName('tests')">Tests</a>
            <!-- <a class="btn" @click="filterByClassName('nuxt.js')">Nuxt.js</a> -->
            <a class="btn" @click="filterByClassName('postgresql')">PostgreSQL</a>

            <a class="btn" @click="filterByClassName('firebase')">Firebase</a>

            <a class="btn" @click="filterByClassName('python')">Python</a>

            <a v-if="isRussian" class="btn" @click="filterByClassName('neural network')"
              >Нейросеть</a
            >

            <a v-else class="btn" @click="filterByClassName('neural network')">Neural Network</a>
          </div>

          <div class="separator"></div>
        </div>

        <!-- ФИЛЬТР ПРОЕКТОВ (ДРУГИЕ УСТРОЙСТВА) -->
        <!-- TODO: Если нужно добавить новые фильтры, то нужно добавить их здесь (Mobile) -->
        <ul class="filter-list">
          <li class="filter-item">
            <button v-if="isRussian" class="btn" @click="filterByClassName('all')">Все</button>

            <button v-else class="btn" @click="filterByClassName('all')">All</button>
          </li>

          <li class="filter-item">
            <button
              v-if="isRussian"
              class="btn"
              type="button"
              @click="filterByClassName('Big project')"
            >
              Большие Проекты
            </button>

            <button v-else class="btn" @click="filterByClassName('Big project')">
              Big Projects
            </button>
          </li>

          <li class="filter-item">
            <button
              v-if="isRussian"
              class="btn"
              type="button"
              @click="filterByClassName('Pet project')"
            >
              Пет-проекты
            </button>

            <button v-else class="btn" @click="filterByClassName('Pet project')">
              Pet-projects
            </button>
          </li>

          <li class="filter-item">
            <button
              v-if="isRussian"
              class="btn"
              type="button"
              @click="filterByClassName('Test task')"
            >
              Тестовые задания
            </button>

            <button v-else class="btn" @click="filterByClassName('Test task')">Test Tasks</button>
          </li>

          <li class="filter-item">
            <button v-if="isRussian" class="btn" type="button" @click="filterByClassName('layout')">
              Вёрстка из Figma
            </button>

            <button v-else class="btn" @click="filterByClassName('layout')">Figma Layouts</button>
          </li>

          <li class="filter-item">
            <button class="btn" @click="filterByClassName('typescript')">Typescript</button>
          </li>

          <li class="filter-item">
            <button class="btn" @click="filterByClassName('vue.js')">Vue.js</button>
          </li>

          <li class="filter-item">
            <button class="btn" @click="filterByClassName('react.js')">React.js</button>
          </li>

          <li class="filter-item">
            <button
              v-if="isRussian"
              class="btn"
              type="button"
              @click="filterByClassName('no react/vue')"
            >
              Без React/Vue
            </button>

            <button v-else class="btn" @click="filterByClassName('no react/vue')">
              No React/Vue
            </button>
          </li>

          <li class="filter-item">
            <button v-if="isRussian" class="btn" type="button" @click="filterByClassName('tests')">
              Написание тестов
            </button>

            <button v-else class="btn" @click="filterByClassName('tests')">Tests</button>
          </li>

          <!--
            <li class="filter-item">
            <button @click="filterByClassName('react.js')" class="btn">
            React.js
            </button>
            </li> 
          -->

          <!--
            <li class="filter-item">
            <button @click="filterByClassName('nuxt.js')" class="btn">
            Nuxt.js
            </button>
            </li> 
          -->

          <li class="filter-item">
            <button class="btn" @click="filterByClassName('postgresql')">PostgreSQL</button>
          </li>

          <li class="filter-item">
            <button class="btn" @click="filterByClassName('firebase')">Firebase</button>
          </li>

          <li class="filter-item">
            <button class="btn" @click="filterByClassName('python')">Python</button>
          </li>

          <li class="filter-item">
            <button
              v-if="isRussian"
              class="btn"
              type="button"
              @click="filterByClassName('neural network')"
            >
              Нейросеть
            </button>

            <button v-else class="btn" @click="filterByClassName('neural network')">
              Neural Network
            </button>
          </li>
        </ul>

        <!-- САМИ ПРОЕКТЫ -->
        <ul class="project-list">
          <li
            v-for="project in projects"
            :key="project.id"
            :class="`filterDiv ${project.category.toLowerCase()}`"
            :data-category="project.category.toLowerCase()"
          >
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
              <figure class="project-img">
                <img
                  :src="project.image"
                  :alt="project.title.toLowerCase()"
                  loading="lazy"
                  draggable="false"
                />
              </figure>

              <h3 class="project-title">{{ project.title }}</h3>

              <label class="project-category">{{ project.category }}</label>
            </a>
          </li>
        </ul>
      </section>
    </article>

    <!-- !! BLOG !! -->
    <article class="blog" data-page="blog">
      <header>
        <h2 v-if="isRussian" class="article-title h2">Блог</h2>

        <h2 v-else class="article-title h2">Blog</h2>
      </header>

      <!-- ЭЛЕМЕНТЫ МОЕГО (несуществующего) БЛОГА -->
      <!-- TODO: Сюда можно будет потом добавить инфу про мои блоги/посты (если это вообще случится) -->
      <section class="blog-posts">
        <ul class="blog-posts-list">
          <Blog
            :id="1"
            category="Some Category"
            name="Some Name"
            description="Some Description"
            link="/"
            date="Some Date"
          />

          <!-- <Blog /> -->
        </ul>
      </section>
    </article>

    <!-- !! EXTRA !! -->
    <article class="extra" data-page="extra">
      <header>
        <h2 v-if="isRussian" class="article-title h2">Доп. информация</h2>

        <h2 v-else class="article-title h2">Extra info</h2>
      </header>

      <section class="about-text">
        <p>{{ t('extra[0]') }}</p>

        <p>{{ t('extra[1]') }}</p>

        <div class="separator"></div>

        <p v-if="isRussian">Мои увлечения и хобби:</p>

        <p v-else>My hobbies and interests:</p>

        <ul class="common-list">
          <li>{{ t('hobbies[0]') }}</li>

          <li>{{ t('hobbies[1]') }}</li>

          <li>{{ t('hobbies[2]') }}</li>

          <li>{{ t('hobbies[3]') }}</li>

          <li>{{ t('hobbies[4]') }}</li>

          <li>{{ t('hobbies[5]') }}</li>

          <li>{{ t('hobbies[6]') }}</li>
        </ul>
      </section>
    </article>
  </div>
</template>

<style lang="scss" scoped>
header {
  & .article-title {
    @media (min-width: 320px) {
      font-size: var(--fs-2);
    }

    @media (min-width: 580px) {
      font-size: var(--fs-1);
    }
  }
}

.about {
  & .resume-list {
    list-style: circle;
    width: fit-content;

    & a {
      width: fit-content;
      line-height: 2;
    }
  }
}

/*-----------------------------------*\
# SIDEBAR
\*-----------------------------------*/
/* В SideBar.vue 👀 */

/*-----------------------------------*\
# NAVBAR
\*-----------------------------------*/
/* В NavBar.vue 👀 */

/*-----------------------------------*\
# ABOUT
\*-----------------------------------*/
.about-text {
  color: var(--light-gray);
  font-size: var(--fs-4);
  font-weight: var(--fw-300);
  line-height: 1.6;

  p {
    margin-bottom: 12px;

    &:first-letter {
      margin-left: 1em;
    }
  }
}

.common-list {
  li {
    list-style: outside;
    list-style-position: inside;
    // padding-bottom: 0.5em;
    // line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  margin-bottom: 15px;
}

.testimonials {
  margin-bottom: 30px;

  .testimonials-title {
    margin-bottom: 20px;
    font-size: var(--fs-1);
  }

  .testimonials-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    margin: 0 -15px;
    padding: 25px 15px;
    padding-bottom: 35px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;

    .testimonials-item {
      min-width: 100%;
      scroll-snap-align: center;

      .testimonials-avatar-box {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(15px, -25px);
        background: var(--bg-gradient-onyx);
        border-radius: 14px;
        box-shadow: var(--shadow-1);
      }

      .testimonials-item-title {
        margin-bottom: 7px;
      }

      .testimonials-text {
        color: var(--light-gray);
        font-size: var(--fs-6);
        font-weight: var(--fw-300);
        line-height: 1.6;
        display: -webkit-box;
        line-clamp: 4;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  // scroll-chaining: none;
  overscroll-behavior: contain;
  z-index: 20;
  pointer-events: none;
  visibility: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &.active {
    pointer-events: all;
    visibility: visible;
  }
}

.filterDiv {
  padding: 0;
  display: none;
  -webkit-tap-highlight-color: transparent;

  &.show,
  &.active {
    display: block;
    animation: scaleUp 0.25s ease forwards;
  }
}

// .filterDiv > a.hover {
//   background: hsla(0, 0%, 0%, 0.5);
// }

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 5%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-1);

  &.active {
    opacity: 0.8;
    visibility: visible;
    pointer-events: all;
  }
}

.testimonials-modal {
  background: var(--eerie-black-2);
  position: relative;
  padding: 15px;
  margin: 15px 12px;
  width: 30rem;
  min-width: max-content;
  max-width: max-content;
  border: 1px solid var(--jet);
  border-radius: 14px;
  box-shadow: var(--shadow-5);
  opacity: 0;
  transition: var(--transition-1);
  z-index: 2;

  &.active {
    transform: scale(1);
    opacity: 1;
  }

  .modal-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--onyx);
    border-radius: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white-2);
    font-size: 18px;
    opacity: 0.7;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .modal-avatar-box {
    background: var(--bg-gradient-onyx);
    border-radius: 14px;
    margin-bottom: 15px;
    box-shadow: var(--shadow-2);
  }

  // .modal-img-wrapper > img {
  //   display: none;
  // }

  .modal-title {
    margin-bottom: 4px;
  }

  // .modal-content time {
  //   font-size: var(--fs-6);
  //   color: var(--light-gray-70);
  //   font-weight: var(--fw-300);
  //   margin-bottom: 10px;
  // }

  .modal-content p {
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
    line-height: 1.6;
  }
}

.clients {
  margin-bottom: 15px;

  .clients-title {
    font-size: var(--fs-1);
  }

  .clients-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    margin: 0 -15px;
    padding: 25px;
    padding-bottom: 25px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 25px;

    .clients-item {
      min-width: 50%;
      scroll-snap-align: start;

      img {
        width: 100%;
        filter: grayscale(1);
        transition: filter var(--transition-1);

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
}

/*-----------------------------------*\
# RESUME
\*-----------------------------------*/
.timeline {
  margin-bottom: 1.5rem;
}
.timeline-list {
  font-size: var(--fs-3);
  margin-left: 3rem;
}

/* Skills */
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    text-align: center;
  }
}
.skills-title {
  text-align: center;
  transition: var(--transition-1);
}

/*-----------------------------------*\
# PORTFOLIO
\*-----------------------------------*/
.filter-list {
  display: flex;
  flex-wrap: wrap;

  &.show {
    display: block;
  }
}

#filter-menu {
  display: none;
}

.dropdown-content {
  display: none;
  background-color: var(--white-2);
  border-radius: 5px;
  box-shadow: var(--shadow-1);
  z-index: 5;
  margin: 0 15px;
  border-radius: 0 0 15px 15px;

  a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background-color: var(--bg-gradient-jet);
      z-index: 9;
      transition: var(--transition-1);
    }

    &:hover:last-child {
      border-radius: inherit;
    }

    &.btn:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      background-color: var(--light-gray-70);
      font-weight: bold;
    }
  }

  .btn:hover {
    color: var(--orange-yellow-crayola);
  }
}

.dropbtn {
  background: var(--border-gradient-onyx);
  padding: 10px;
  box-shadow: var(--shadow-2);
  transition: var(--transition-1);
  -webkit-tap-highlight-color: transparent;
  color: var(--white-2);
  padding: 5px 1rem;
  font-size: var(--fs-4);
  border-radius: 20px;
  border-color: var(--orange-yellow-crayola);
  border-style: ridge;
  border-width: 2px;
  cursor: pointer;
  text-align: center;

  &:active {
    background-color: var(--jet);
  }

  &:hover {
    background-color: var(--jet);
  }

  &:focus {
    transition: var(--transition-1);
  }
}

.filter-item button {
  color: var(--light-gray);
  font-size: var(--fs-3);

  &:hover {
    color: var(--light-gray-70);
  }
}

// .filter-item button.active,
.active {
  color: var(--orange-yellow-crayola);
  // display: block;
}
.show {
  display: grid;
  width: 100%;
  display: -ms-grid;
  -ms-grid-columns: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
}

.filter-select-box {
  position: relative;
  margin-bottom: 25px;
  display: none;
}

.filter-select {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);

  &.active .select-icon {
    -webkit-transform: rotate(0.5turn);
    -ms-transform: rotate(0.5turn);
    transform: rotate(0.5turn);
  }
}

.select-list {
  background: var(--eerie-black-2);
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  padding: 6px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.15s ease-in-out;

  .filter-select.active & {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
}

.select-item button {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  font-size: var(--fs-6);
  text-transform: capitalize;
  padding: 8px 10px;
  border-radius: 8px;

  &:hover {
    background-color: hsl(240, 2%, 20%);
  }
}

/*-----------------------------------*\
# BLOG
\*-----------------------------------*/
.blog-posts {
  margin-bottom: 10px;
}

.blog-posts-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  gap: 15px;

  li {
    padding-left: 0;
    -webkit-tap-highlight-color: transparent;
  }
}
/* Остальное в "Blog List Item.vue" 👀 */

/*-----------------------------------*\
# CONTACT
\*-----------------------------------*/
.mapbox {
  position: relative;
  height: 250px;
  width: 100%;
  border-radius: 16px;
  margin-bottom: 30px;
  border: 1px solid var(--jet);
  overflow: hidden;

  figure {
    height: 100%;
  }

  // iframe {
  //   width: 100%;
  //   height: 100%;
  //   border: none;
  //   -webkit-filter: grayscale(1) invert(1);
  //   filter: grayscale(1) invert(1);
  // }
}

.contact-form {
  margin-bottom: 10px;

  .form-title {
    margin-bottom: 20px;
  }

  .input-wrapper {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 25px;

    .form-input {
      color: var(--white-2);
      font-size: var(--fs-6);
      font-weight: var(--fw-400);
      padding: 13px 20px;
      border: 1px solid var(--jet);
      border-radius: 14px;
      outline: none;

      &::-webkit-input-placeholder {
        font-weight: var(--fw-500);
      }

      &::-moz-placeholder {
        font-weight: var(--fw-500);
      }

      &:-ms-input-placeholder {
        font-weight: var(--fw-500);
      }

      &::-ms-input-placeholder {
        font-weight: var(--fw-500);
      }

      &::placeholder {
        font-weight: var(--fw-500);
      }

      &:focus {
        border-color: var(--orange-yellow-crayola);
      }

      &.textarea {
        min-height: 100px;
        height: 120px;
        max-height: 200px;
        resize: vertical;
        margin-bottom: 25px;

        &::-webkit-resizer {
          display: none;
        }
      }

      &:focus:invalid {
        border-color: var(--bittersweet-shimmer);
      }
    }
  }

  .form-btn {
    position: relative;
    width: 100%;
    background: var(--border-gradient-onyx);
    color: var(--orange-yellow-crayola);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 10px;
    padding: 13px 20px;
    border-radius: 14px;
    font-size: var(--fs-6);
    text-transform: capitalize;
    -webkit-box-shadow: var(--shadow-3);
    box-shadow: var(--shadow-3);
    z-index: 1;
    -webkit-transition: var(--transition-1);
    -o-transition: var(--transition-1);
    transition: var(--transition-1);

    &::before {
      content: '';
      position: absolute;
      inset: 1px;
      background: var(--bg-gradient-jet);
      border-radius: inherit;
      z-index: -1;
      -webkit-transition: var(--transition-1);
      -o-transition: var(--transition-1);
      transition: var(--transition-1);
    }

    &:hover {
      background: var(--bg-gradient-yellow-1);

      &::before {
        background: var(--bg-gradient-yellow-2);
      }
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;

      &:hover {
        background: var(--border-gradient-onyx);

        &::before {
          background: var(--bg-gradient-jet);
        }
      }
    }
  }
}

/*-----------------------------------*\
# EXTRA + PORTFOLIO
\*-----------------------------------*/
.extra,
.portfolio {
  padding-bottom: 0;
}

/*-----------------------------------*\
# RESPONSIVE
\*-----------------------------------*/

/** responsive smaller than 320px screen */
@media (min-width: 320px) {
  *,
  *::before,
  *::after {
    scroll-behavior: smooth;
    line-height: 1.5;
  }

  #filter-menu {
    display: block;
  }
  .filter-list {
    display: none;
  }
  .dropbtn {
    width: 100%;
    font-size: var(--fs-6);
  }
  .dropdown-content {
    width: inherit;

    text-align: center;

    & .btn {
      padding: 5px;
      font-weight: bolder;
      font-size: var(--fs-5);
    }
  }
  .project-img {
    & img {
      width: 30px;
    }
  }
  .skills-title {
    font-size: var(--fs-3);
    margin-bottom: 1em;
  }
  .skills-list {
    padding: 1rem;
    padding-left: 0;
    width: 100%;
    margin-top: 1.5em;
  }

  .title-wrapper {
    margin-left: 0.25em;

    & h3 {
      font-size: var(--fs-2);
    }
  }
}

/** responsive larger than 450px screen */
@media (min-width: 450px) {
  /** client */
  .clients-item {
    min-width: calc(33.33% - 10px);
  }
  .dropbtn {
    font-size: var(--fs-6);
  }
  .dropdown-content {
    grid-template-columns: repeat(3, 1fr);
  }
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .skills-title {
    font-size: var(--fs-3);
    margin-bottom: 20px;
  }
}

/** responsive larger than 580px screen */
@media (min-width: 580px) {
  /** CUSTOM PROPERTY */
  :root {
    /** typography */
    --fs-1: 32px;
    --fs-2: 24px;
    --fs-3: 26px;
    --fs-4: 18px;
    --fs-6: 15px;
    --fs-7: 15px;
    --fs-8: 12px;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: smooth;
    line-height: 1.4;
  }

  // html {
  //   margin-bottom: 5em;
  // }

  /** REUSED STYLE */
  .sidebar,
  article {
    width: 520px;
    margin-inline: auto;
    padding: 30px;
    transition: var(--transition-1) 0.2s;
  }

  /** MAIN */
  // main {
  //   margin-top: 60px;
  //   margin-bottom: 100px;
  // }

  /** ABOUT */
  .about-text {
    margin-bottom: 40px;
  }

  /* service */

  /* testimonials */
  .testimonials-title {
    margin-bottom: 25px;
  }

  .testimonials-list {
    gap: 30px;
    margin: 0 -30px;
    padding: 30px;
    padding-bottom: 35px;
  }

  .content-card {
    position: relative;
    background: var(--border-gradient-onyx);
    padding: 30px;
    padding-top: 25px;
    border-radius: 14px;
    -webkit-box-shadow: var(--shadow-2);
    box-shadow: var(--shadow-1);
    z-index: 1;
  }
  .content-card::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: var(--bg-gradient-jet);
    border-radius: inherit;
    z-index: -1;
  }
  .testimonials-avatar-box {
    -webkit-transform: translate(30px, -30px);
    -ms-transform: translate(30px, -30px);
    transform: translate(30px, -30px);
    border-radius: 20px;
  }

  .testimonials-avatar-box img {
    width: 80px;
  }

  .testimonials-item-title {
    margin-bottom: 10px;
    margin-left: 95px;
  }

  .testimonials-text {
    line-clamp: 2;
    -webkit-line-clamp: 2;
  }

  /* testimonials modal */
  .modal-container {
    padding: 20px;
  }

  .testimonials-modal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    gap: 25px;
    padding: 30px;
    border-radius: 20px;
  }

  .modal-img-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .modal-avatar-box {
    border-radius: 18px;
    margin-bottom: 0;
  }

  .modal-avatar-box img {
    width: 65px;
  }

  // .modal-img-wrapper > img {
  //   display: block;
  //   -webkit-box-flex: 1;
  //   -ms-flex-positive: 1;
  //   flex-grow: 1;
  //   width: 35px;
  // }

  /* clients */
  .clients-list {
    gap: 50px;
    margin: 0 -30px;
    padding: 45px;
    scroll-padding-inline: 45px;
  }

  .clients-item {
    min-width: calc(33.33% - 35px);
  }

  /** RESUME */
  .timeline-list {
    margin-left: 65px;
  }

  /** PORTFOLIO, BLOG */
  .project-img,
  .blog-banner-box {
    border-radius: 16px;
  }

  .blog-posts-list {
    gap: 30px;
  }

  .blog-content {
    padding: 25px;
  }

  /** CONTACT */
  .mapbox {
    height: 380px;
    border-radius: 18px;
  }

  .input-wrapper {
    gap: 30px;
    margin-bottom: 30px;
  }

  .form-input {
    padding: 15px 20px;
  }

  // textarea.form-input {
  //   margin-bottom: 30px;
  // }

  .form-btn {
    --fs-6: 16px;
    padding: 16px 20px;
  }

  .dropdown-content {
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    & .btn {
      width: 100%;
      padding: 3px;
      padding-bottom: 5px;
      font-size: var(--fs-5);
    }
  }

  .title-wrapper {
    margin-left: 0.4em;
  }
}

/** responsive larger than 768px screen */
@media (min-width: 768px) {
  .sidebar,
  article {
    width: 700px;
  }

  .has-scrollbar::-webkit-scrollbar-button {
    width: 100px;
  }

  #filter-menu {
    display: none;
  }
  .filter-list {
    display: none;
  }

  /** SIDEBAR */
  .contacts-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 15px;
  }

  .navbar-link {
    --fs-8: 15px;
  }

  .testimonials-modal {
    gap: 35px;
    max-width: 980px;
  }

  .modal-avatar-box img {
    width: 80px;
  }

  /** PORTFOLIO */
  .filter-select-box {
    display: none;
  }

  .filter-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75em;
    margin-bottom: 30px;
  }

  .filter-item button {
    color: var(--light-gray);
    font-size: var(--fs-5);
    transition: var(--transition-1);
  }

  .filter-item button:hover {
    color: var(--light-gray-70);
  }

  // .filter-item button.active {
  //   color: var(--orange-yellow-crayola);
  // }

  .project-list,
  .blog-posts-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .input-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-btn {
    width: max-content;
    margin-left: auto;
  }

  .skills-title {
    font-size: var(--fs-2);
  }
}

/** responsive larger than 1024px screen */
@media (min-width: 1024px) {
  :root {
    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.125);
    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.125);
  }

  .sidebar,
  article {
    width: 950px;
    box-shadow: var(--shadow-5);
  }

  // main {
  //   margin-bottom: 60px;
  // }

  .main-content {
    position: relative;
    width: max-content;
    margin: auto;
  }

  .navbar {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
    box-shadow: none;
  }

  .service-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 25px;
  }

  .testimonials-item {
    min-width: calc(50% - 15px);
  }

  .clients-item {
    min-width: calc(25% - 38px);
  }

  .project-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .blog-banner-box {
    height: 230px;
  }

  .skills-title {
    font-size: var(--fs-1);
  }

  .title-wrapper {
    margin-left: 0.15em;
  }
}

/*-----------------------------------*\
# Карточки с проектами
\*-----------------------------------*/
.project-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  margin-bottom: 10px;

  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 580px) {
    .project-img {
      border-radius: 16px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    .project-img {
      height: auto;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-item {
  display: none;

  &.active {
    display: block;
    -webkit-animation: scaleUp 0.25s ease forwards;
    animation: scaleUp 0.25s ease forwards;
  }
}

/* Hover для карточек проектов */
.project-list > li:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

@-webkit-keyframes scaleUp {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes scaleUp {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.project-item > a {
  width: 100%;
}

.project-img {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    -webkit-transition: var(--transition-1);
    -o-transition: var(--transition-1);
    transition: var(--transition-1);
  }

  .project-item > a:hover &::before {
    background: hsla(0, 0%, 0%, 0.5);
  }

  @media (min-width: 320px) {
    height: auto;
    width: 100%;
  }
}

.project-item-icon-box {
  --scale: 0.8;

  background: var(--jet);
  color: var(--orange-yellow-crayola);
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) scale(var(--scale));
  -ms-transform: translate(-50%, -50%) scale(var(--scale));
  transform: translate(-50%, -50%) scale(var(--scale));
  font-size: 20px;
  padding: 18px;
  border-radius: 12px;
  opacity: 0;
  z-index: 2;
  overflow: hidden;
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);

  .project-item > a:hover & {
    --scale: 1;
    opacity: 1;
  }
}

.project-img img {
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);

  border: 1px solid var(--jet);
  border-radius: 15px;
}

.project-item > a:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-title {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: normal;
  margin-bottom: 8px;
}

.project-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: normal;
  display: block;
  // height: auto;

  text-transform: capitalize;
}
</style>
