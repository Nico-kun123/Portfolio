<script setup>

import Blog from "./Blog List Item.vue";
// import Client from "./Client Logo.vue";
import Navbar from "./NavBar.vue";
import Project from "./Portfolio Project.vue";
import EducationExpListElem from "./Resume List Element.vue";
import Service from "./Service.vue";

import Skill from "./Skill List Item.vue";
// import TestimonialItem from "./Testimonial Item.vue";

const { softSkills, softSkillsRU, hobbies, hobbiesRU } = defineProps([
  "softSkills",
  "softSkillsRU",
  "hobbies",
  "hobbiesRU",
]);
</script>

<template>
  <div class="main-content">
    <Navbar />

    <!-- # ABOUT -->
    <article class="about active" data-page="about">
      <header>
        <h2
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h2 article-title"
        >
          Обо Мне
        </h2>
        <h2 v-else class="h2 article-title">About Me</h2>
      </header>

      <section class="about-text">
        <p>{{ $t("aboutDesc_1") }}</p>
        <p>{{ $t("aboutDesc_2") }}</p>

        <div class="separator"></div>

        <p>{{ $t("aboutDesc_3") }}</p>
        <ul v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'">
          <li
            style="
              list-style: circle;
              list-style-position: inside;
              padding-bottom: 1em;
            "
            v-for="(item, index) in softSkillsRU"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <ul v-else>
          <li
            style="
              list-style: circle;
              list-style-position: inside;
              padding-bottom: 1em;
            "
            v-for="(item, index) in softSkills"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <div class="separator"></div>

      <!-- service -->
      <section class="service">
        <h3
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h3 service-title"
        >
          Чем я занимаюсь:
        </h3>
        <h3 v-else class="h3 service-title">What do I do:</h3>

        <ul class="service-list">
          <Service
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="1"
            name="Адаптивная верстка"
            description="Разработка сайтов, которые одинаково хорошо отображаются и функционируют на всех современных устройствах."
          />
          <Service
            v-else
            id="1"
            name="Adaptive layout"
            description="Development of websites that are equally well displayed and function in all modern devices."
          />
          <Service
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="2"
            name="Кросс-браузерная верстка"
            description="Разработка сайтов, которые одинаково хорошо отображаются и функционируют во всех современных браузерах."
          />
          <Service
            v-else
            id="2"
            name="Cross-browser layout"
            description="Development of websites that are equally well displayed and function in all modern browsers."
          />
          <Service
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="3"
            name="Разработка веб-сайтов на Vue.js"
            description="Разработка одностраничных приложений (SPA) с использованием Vue.js (Vite.js, Vuex, Vue Router, Vue-i18n, Vuelidate)."
          />
          <Service
            v-else
            id="3"
            name="Vue.js web application development"
            description="Development of single-page applications (SPA) using Vue.js (Vite.js, Vuex, Vue Router, Vue-i18n, Vuelidate)."
          />
        </ul>
      </section>

      <!-- <div class="separator"></div> -->

      <!-- ОТЗЫВЫ И РЕКОМЕНДАЦИИ -->
      <!-- <section class="testimonials">
        <h3
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h3 testimonials-title"
        >
          Отзывы:
        </h3>
        <h3 v-else class="h3 testimonials-title">Testimonials:</h3>

        <ul class="testimonials-list has-scrollbar">
          <TestimonialItem
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
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
      </section> -->

      <!-- Popup с полным описанием -->
      <!-- <div class="modal-container" data-modal-container>
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
      </div> -->

      <!-- <div class="separator"></div> -->

      <!-- clients -->
      <!-- <section class="clients">
        <h3
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h3 clients-title"
        >
          Клиенты:
        </h3>
        <h3 v-else class="h3 clients-title">Clients:</h3>

        <ul class="clients-list has-scrollbar">
          <Client id="2" name="Client 2" link="Link 2" />
        </ul>
      </section> -->
    </article>

    <!-- # RESUME -->
    <article class="resume" data-page="resume">
      <header>
        <h2
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h2 article-title"
        >
          Резюме
        </h2>
        <h2 v-else class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <img src="../assets/images/ui/education.svg" loading="lazy" />
          </div>

          <h3 v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'" class="h3">
            Образование:
          </h3>
          <h3 v-else class="h3">Education:</h3>
        </div>

        <!-- САМЫЕ НОВЫЕ ВВЕРХУ -->
        <ol class="timeline-list">
          <EducationExpListElem
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            name="Сибирский федеральный университет. Институт космических и информационных технологий"
            years="2023 — Настоящее время"
            description="Магистратура, направление “Инженерия искусственного интеллекта”."
          />
          <EducationExpListElem
            v-else
            name="Siberian Federal University. School of Space and Information Technology"
            years="2023 — Present"
            description="Master's degree, majoring in “Artificial Intelligence Engineering”."
          />
          <EducationExpListElem
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            name="Сибирский федеральный университет. Институт космических и информационных технологий"
            years="2019 — 2023"
            description="Бакалавриат, направление “Информатика и вычислительная техника”. Защитил диплом на тему “Сервис автоматизированного сбора данных для систем электронной коммерции” (ССЫЛКА: https://github.com/Nico-kun123/EShop-Parser)."
          />
          <EducationExpListElem
            v-else
            name="Siberian Federal University. School of Space and Information Technology"
            years="2019 — 2023"
            description="Bachelor's degree, majoring in “Informatics and Computer Science”."
          />
          <EducationExpListElem
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            name="МБОУ “Лицей № 10” г. Красноярска"
            years="2008 — 2019"
            description="Школа, в которой я учился с 1 по 11 класс. Я закончил её с золотой медалью."
          />
          <EducationExpListElem
            v-else
            name="“Lyceum No. 10” of the city of Krasnoyarsk"
            years="2008 — 2019"
            description="The school where I studied from 1 to 11 classes. I graduated from it with a gold medal."
          />
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <img src="../assets/images/ui/experience.svg" loading="lazy" />
          </div>

          <h3 v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'" class="h3">
            Опыт работы:
          </h3>
          <h3 v-else class="h3">Experience:</h3>
        </div>

        <ol class="timeline-list">
          <EducationExpListElem
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            name=""
            years="Нет опыта работы"
            description=""
          />
          <EducationExpListElem
            v-else
            name=""
            years="No work experience"
            description=""
          />
        </ol>
      </section>

      <div class="separator"></div>

      <section class="skill">
        <h3
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h3 skills-title"
        >
          Мои технические навыки (hard-skills):
        </h3>
        <h3 v-else class="h3 skills-title">
          My technical skills (hard-skills):
        </h3>

        <ul class="skills-list content-card">
          <Skill
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            skill-name="Английский язык (C1)"
            skill-value="78"
          />
          <Skill v-else skill-name="English (C1)" skill-value="78" />
          <div class="separator"></div>
          <Skill skillName="HTML5, CSS3, JS" skillValue="73" />
          <Skill skillName="Git" skillValue="65" />
          <Skill skillName="Vue.js" skillValue="60" />
          <Skill skillName="React.js" skillValue="46" />
          <div class="separator"></div>
          <Skill skillName="SCSS" skillValue="80" />
          <Skill skillName="Vite.js" skillValue="60" />
          <Skill skillName="Typescript" skillValue="56" />
          <Skill skillName="JQuery" skillValue="50" />
        </ul>
      </section>
    </article>

    <!-- # PORTFOLIO -->
    <article class="portfolio" data-page="portfolio">
      <header>
        <h2
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h2 article-title"
        >
          Портфолио
        </h2>
        <h2 v-else class="h2 article-title">Portfolio</h2>
      </header>

      <section class="projects">
        <ul class="filter-list">
          <li class="filter-item">
            <button
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              class="active"
              data-filter-btn
            >
              Все
            </button>
            <button v-else class="active" data-filter-btn>All</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>React.js</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>Vue.js</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>No React/Vue</button>
            <!-- <button
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              data-filter-btn
            >
              Без React/Vue
            </button> -->
            <!-- <button v-else data-filter-btn>No React/Vue</button> -->
          </li>
        </ul>

        <!-- LIST. Для мобильных устройств -->
        <div class="filter-select-box">
          <button class="filter-select" data-select>
            <div
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              class="select-value"
              data-selecct-value
            >
              Выберите категорию
            </div>
            <div v-else class="select-value" data-selecct-value>
              Select category
            </div>

            <div class="select-icon">
              <img
                src="../assets/images/ui/chevron-down.svg"
                alt="arrow down"
                loading="lazy"
              />
            </div>
          </button>

          <!-- LIST. Для других устройств -->
          <ul class="select-list">
            <li class="select-item">
              <button
                v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
                data-select-item
              >
                Все
              </button>
              <button v-else data-select-item>All</button>
            </li>

            <li class="select-item">
              <button data-select-item>React.js</button>
            </li>

            <li class="select-item">
              <button data-select-item>Vue.js</button>
            </li>

            <li class="select-item">
              <button data-select-item>No React/Vue</button>
            </li>
          </ul>
        </div>

        <ul class="project-list">
          <Project
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="1"
            projectCategory="No React/Vue"
            projectTitle="Сборщик данных о товарах с интернет-магазинов"
            projectLink="https://github.com/Nico-kun123/EShop-Parser"
          />
          <Project
            v-else
            id="1"
            projectCategory="No React/Vue"
            projectTitle="Product data parser from online stores"
            projectLink="https://github.com/Nico-kun123/EShop-Parser"
          />
          <Project
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="2"
            projectCategory="Vue.js"
            projectTitle="Простой калькулятор на Vue.js"
            projectLink="https://nico-kun123.github.io/Simple-Vue-Calculator/"
          />
          <Project
            v-else
            id="2"
            projectCategory="Vue.js"
            projectTitle="Simple Vue.js Calculator"
            projectLink="https://nico-kun123.github.io/Simple-Vue-Calculator/"
          />
          <Project
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="3"
            projectCategory="Vue.js"
            projectTitle="Простое приложение погоды"
            projectLink="https://nico-kun123.github.io/Simple-Weather-App/"
          />
          <Project
            v-else
            id="3"
            projectCategory="Vue.js"
            projectTitle="Simple Weather App"
            projectLink="https://nico-kun123.github.io/Simple-Weather-App/"
          />
          <Project
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="4"
            projectCategory="Vue.js"
            projectTitle="Валидация формы создания клиентов (Vuelidate)"
            projectLink="https://nico-kun123.github.io/Simple-Form-Validation--Vue-Vuelidate-/"
          />
          <Project
            v-else
            id="4"
            projectCategory="Vue.js"
            projectTitle="Client Form Validation (Vuelidate)"
            projectLink="https://nico-kun123.github.io/Simple-Form-Validation--Vue-Vuelidate-/"
          />
          <Project
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="5"
            projectCategory="Vue.js"
            projectTitle="Простая таблица с возможностью сортировки по столбцу"
            projectLink="https://nico-kun123.github.io/Vue-Table/"
          />
          <Project
            v-else
            id="5"
            projectCategory="Vue.js"
            projectTitle="Simple Table with a Column Sorting"
            projectLink="https://nico-kun123.github.io/Vue-Table/"
          />
          <!-- <Project /> -->
        </ul>
      </section>
    </article>

    <!-- # BLOG -->
    <article class="blog" data-page="blog">
      <header>
        <h2
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h2 article-title"
        >
          Блог
        </h2>
        <h2 v-else class="h2 article-title">Blog</h2>
      </header>

      <section class="blog-posts">
        <ul class="blog-posts-list">
          <!-- <Blog category="Some Category" name="Some Name" description="Some Description" date="Some Date"/> -->
          <Blog />
        </ul>
      </section>
    </article>

    <!-- # EXTRA -->
    <article class="extra" data-page="extra">
      <header>
        <h2
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="h2 article-title"
        >
          Доп. информация
        </h2>
        <h2 v-else class="h2 article-title">Extra info</h2>
      </header>

      <section class="about-text">
        <p>{{ $t("extra1[0]") }}</p>
        <p>{{ $t("extra1[1]") }}</p>

        <div class="separator"></div>

        <p>{{ $t("extra1[2]") }}</p>
        <ul v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'">
          <li
            style="
              list-style: circle;
              list-style-position: inside;
              padding-bottom: 1em;
            "
            v-for="(item, index) in hobbiesRU"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <ul v-else>
          <li
            style="
              list-style: circle;
              list-style-position: inside;
              padding-bottom: 1em;
            "
            v-for="(item, index) in hobbies"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<style lang="scss" scoped>
/*-----------------------------------*\
#SIDEBAR
\*-----------------------------------*/
/* В SideBar.vue */

/*-----------------------------------*\
#NAVBAR
\*-----------------------------------*/
/* В NavBar.vue */

/*-----------------------------------*\
#ABOUT
\*-----------------------------------*/

.about .article-title {
  margin-bottom: 15px;
}

.about-text {
  color: var(--light-gray);
  font-size: var(--fs-4);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

.about-text p {
  margin-bottom: 15px;
}

/* Service */

/* Отзывы и рекомендации */
.testimonials {
  margin-bottom: 30px;

  .testimonials-title {
    margin-bottom: 20px;
    font-size: var(--fs-1);
  }

  .testimonials-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    gap: 15px;
    margin: 0 -15px;
    padding: 25px 15px;
    padding-bottom: 35px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    -ms-scroll-snap-type: inline mandatory;
    scroll-snap-type: inline mandatory;

    .testimonials-item {
      min-width: 100%;
      scroll-snap-align: center;

      .testimonials-avatar-box {
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: translate(15px, -25px);
        -ms-transform: translate(15px, -25px);
        transform: translate(15px, -25px);
        background: var(--bg-gradient-onyx);
        border-radius: 14px;
        -webkit-box-shadow: var(--shadow-1);
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

/* testimonials-modal */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow-y: auto;
  -ms-scroll-chaining: none;
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
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
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
  min-width: -webkit-fit-content;
  min-width: -moz-fit-content;
  min-width: fit-content;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;

  border: 1px solid var(--jet);
  border-radius: 14px;
  -webkit-box-shadow: var(--shadow-5);
  box-shadow: var(--shadow-5);
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  opacity: 0;
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
  z-index: 2;

  &.active {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
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
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    border-radius: 14px;
    margin-bottom: 15px;
    -webkit-box-shadow: var(--shadow-2);
    box-shadow: var(--shadow-2);
  }

  .modal-img-wrapper > img {
    display: none;
  }

  .modal-title {
    margin-bottom: 4px;
  }

  .modal-content time {
    font-size: var(--fs-6);
    color: var(--light-gray-70);
    font-weight: var(--fw-300);
    margin-bottom: 10px;
  }

  .modal-content p {
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
    line-height: 1.6;
  }
}

/* Клиенты */
.clients {
  margin-bottom: 15px;

  .clients-title {
    font-size: var(--fs-1);
  }

  .clients-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    gap: 15px;
    margin: 0 -15px;
    padding: 25px;
    padding-bottom: 25px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    -ms-scroll-snap-type: inline mandatory;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 25px;

    .clients-item {
      min-width: 50%;
      scroll-snap-align: start;

      img {
        width: 100%;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        -webkit-transition: var(--transition-1);
        -o-transition: var(--transition-1);
        transition: var(--transition-1);

        &:hover {
          -webkit-filter: grayscale(0);
          filter: grayscale(0);
        }
      }
    }
  }
}

/*-----------------------------------*\
#RESUME
\*-----------------------------------*/
.article-title {
  margin-bottom: 30px;
}

.timeline {
  margin-bottom: 30px;
}

.timeline-list {
  font-size: var(--fs-4);
  margin-left: 45px;
}

.timeline-item {
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &-title {
    font-size: var(--fs-6);
    line-height: 1.3;
    margin-bottom: 7px;
  }

  span {
    color: var(--vegas-gold);
    font-weight: var(--fw-400);
    line-height: 1.6;
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    top: -25px;
    left: -30px;
    width: 1px;
    height: calc(100% + 50px);
    background: var(--jet);
  }

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: -33px;
    height: 6px;
    width: 6px;
    background: var(--text-gradient-yellow);
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0 4px var(--jet);
    box-shadow: 0 0 0 4px var(--jet);
  }

  &-text {
    color: var(--light-gray);
    font-weight: var(--fw-300);
    line-height: 1.6;
  }
}

/* Skills */
.skills-title {
  margin-bottom: 20px;
  font-size: var(--fs-1);
}

.skills-list {
  padding: 20px;
}

/*-----------------------------------*\
#PORTFOLIO
\*-----------------------------------*/
.filter-list {
  /* display: none; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 25px;
  padding-left: 5px;
  margin-bottom: 30px;
}
.filter-item button {
  color: var(--light-gray);
  font-size: var(--fs-3);
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
}

.filter-item button:hover {
  color: var(--light-gray-70);
}

.filter-item button.active {
  color: var(--orange-yellow-crayola);
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
  -webkit-transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
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
  font-weight: var(--fw-300);
  text-transform: capitalize;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;

  &:hover {
    --eerie-black-2: hsl(240, 2%, 20%);
  }
}

/*-----------------------------------*\
#BLOG
\*-----------------------------------*/
.blog-posts {
  margin-bottom: 10px;
}

.blog-posts-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  gap: 20px;
}
/* Остальное в "Blog List Item.vue" */

/*-----------------------------------*\
#CONTACT
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

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
  }
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
      content: "";
      position: absolute;
      inset: 1px;
      background: var(--bg-gradient-jet);
      border-radius: inherit;
      z-index: -1;
      -webkit-transition: var(--transition-1);
      -o-transition: var(--transition-1);
      transition: var(--transition-1);
    }

    ion-icon {
      font-size: 16px;
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
#RESPONSIVE
\*-----------------------------------*/

/** responsive larger than 450px screen */
@media (min-width: 450px) {
  /** client */
  .clients-item {
    min-width: calc(33.33% - 10px);
  }

  .icon-box {
    width: 40px;
    height: 40px;
    margin-left: -5px;
    border-radius: 16px;
    font-size: 24px;
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

  html {
    margin-bottom: 5em;
  }

  /** REUSED STYLE */
  .sidebar,
  article {
    width: 520px;
    margin-inline: auto;
    padding: 30px;
  }

  .article-title {
    font-weight: var(--fw-600);
    padding-bottom: 15px;
  }

  .article-title::after {
    width: 40px;
    height: 5px;
  }

  .icon-box {
    width: 50px;
    height: 50px;
    margin-left: 0;
    border-radius: 12px;
    font-size: 18px;
  }

  /** MAIN */
  main {
    margin-top: 60px;
    margin-bottom: 100px;
  }

  /** ABOUT */
  .about .article-title {
    margin-bottom: 20px;
  }

  .about-text {
    margin-bottom: 40px;
  }

  /* service */
  .service-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    gap: 18px;
    padding: 30px;
  }

  .service-icon-box {
    margin-bottom: 0;
    margin-top: 5px;
  }

  .service-content-box {
    text-align: left;
  }

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
    padding: 30px;
    padding-top: 25px;
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

  .modal-img-wrapper > img {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 35px;
  }

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

  .timeline-item:not(:last-child)::before {
    left: -40px;
  }

  .timeline-item::after {
    height: 8px;
    width: 8px;
    left: -43px;
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

  textarea.form-input {
    margin-bottom: 30px;
  }

  .form-btn {
    --fs-6: 16px;
    padding: 16px 20px;
  }

  .form-btn ion-icon {
    font-size: 18px;
  }
}

/** responsive larger than 768px screen */
@media (min-width: 768px) {
  /** REUSED STYLE */

  html {
    margin-bottom: 5em;
  }
  .sidebar,
  article {
    width: 700px;
  }

  .has-scrollbar::-webkit-scrollbar-button {
    width: 100px;
  }

  /** SIDEBAR */

  .contacts-list {
    -ms-grid-columns: 1fr 15px 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 30px 15px;
  }

  /** NAVBAR */

  .navbar-link {
    --fs-8: 15px;
  }

  /** ABOUT */

  /* testimonials modal */

  .testimonials-modal {
    gap: 35px;
    max-width: 980px;
  }

  .modal-avatar-box img {
    width: 80px;
  }

  /** PORTFOLIO */

  .article-title {
    padding-bottom: 20px;
  }

  .filter-select-box {
    display: none;
  }

  .filter-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 25px;
    padding-left: 5px;
    margin-bottom: 30px;
  }

  .filter-item button {
    color: var(--light-gray);
    font-size: var(--fs-5);
    -webkit-transition: var(--transition-1);
    -o-transition: var(--transition-1);
    transition: var(--transition-1);
  }

  .filter-item button:hover {
    color: var(--light-gray-70);
  }

  .filter-item button.active {
    color: var(--orange-yellow-crayola);
  }

  /* portfolio and blog grid */

  .project-list,
  .blog-posts-list {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  /** CONTACT */

  .input-wrapper {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .form-btn {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin-left: auto;
  }
}

/** responsive larger than 1024px screen */

@media (min-width: 1024px) {
  /** CUSTOM PROPERTY */

  :root {
    /** shadow */

    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.125);
    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.125);
  }

  /** REUSED STYLE */

  .sidebar,
  article {
    width: 950px;
    -webkit-box-shadow: var(--shadow-5);
    box-shadow: var(--shadow-5);
  }

  /** MAIN */

  main {
    margin-bottom: 60px;
  }

  .main-content {
    position: relative;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin: auto;
  }

  /** NAVBAR */

  .navbar {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .navbar-list {
    gap: 30px;
    padding: 0 20px;
  }

  .navbar-link {
    font-weight: var(--fw-500);
  }

  /** ABOUT */

  /* service */

  .service-list {
    -ms-grid-columns: 1fr 25px 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }

  /* testimonials */

  .testimonials-item {
    min-width: calc(50% - 15px);
  }

  /* clients */

  .clients-item {
    min-width: calc(25% - 38px);
  }

  /** PORTFOLIO */

  .project-list {
    grid-template-columns: repeat(3, 1fr);
  }

  /** BLOG */

  .blog-banner-box {
    height: 230px;
  }
}

/** responsive larger than 1250px screen */
</style>
