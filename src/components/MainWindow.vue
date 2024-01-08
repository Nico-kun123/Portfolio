<script setup>
import Blog from "./Blog List Item.vue";
// import Client from "./Client Logo.vue";
import Navbar from "./NavBar.vue";
// import Project from "./Portfolio Project.vue";
import EducationExpListElem from "./Resume List Element.vue";
import Service from "./Service.vue";

import Skill from "./Skill List Item.vue";
// import TestimonialItem from "./Testimonial Item.vue";

const { softSkills, softSkillsRU, hobbies, hobbiesRU, projects, projectsRU } =
  defineProps([
    "softSkills",
    "softSkillsRU",
    "hobbies",
    "hobbiesRU",
    "projects",
    "projectsRU",
  ]);

// Setup
document.addEventListener("DOMContentLoaded", function () {
  // Выводим все элементы
  filterSelection("all");

  // Добавляем класс active первой кнопке
  document.getElementsByClassName("btn")[6].className += " active";

  // Add active class to the current control button (highlight it)
  const btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      if (btns[i].classList.length == 1) {
        let current = document.getElementsByClassName("btn");
        for (let j = 0; j < current.length; j++) {
          current[j].className = current[j].className.replace(" active", "");
        }

        // const drop = document.getElementsByClassName('dropbtn')[0].innerHTML
        // console.log(drop);
        // console.log(btns[i].innerHTML);

        document.getElementsByClassName("dropbtn")[0].innerHTML =
          btns[i].innerHTML;
        this.className += " active";
      }
    });
  }
});
function filterSelection(c) {
  let x, i;
  x = document.querySelectorAll(".filterDiv");
  c = c.toLowerCase();
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function w3RemoveClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
function isFocus(event) {
  return true;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show")?.remove(":focus");
      }
    }
  }
  // if (event.target.matches(".dropbtn")) {
  //   document.getElementsByClassName("dropbtn")[0].add(":focus");
  // }
  // console.log(document.getElementsByClassName("dropdown-content")[0].className.indexOf('show'));
};
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
          Обо мне
        </h2>
        <h2 v-else class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>{{ $t("aboutDesc_1") }}</p>
        <p>{{ $t("aboutDesc_2") }}</p>

        <div class="separator"></div>

        <p>{{ $t("aboutDesc_3") }}</p>
        <ul v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'">
          <li
            style="
              list-style: outside;
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
              list-style: outside;
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
          <Service
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            id="4"
            name="Ручное тестирование ПО"
            description="Тестирование программ/приложений без какого-либо дополнительного ПО, написание тестовых сценариев."
          />
          <Service
            v-else
            id="4"
            name="Application manual testing"
            description="Testing various programs/apps without any additional programs, writing test cases."
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
            description="Бакалавриат, направление “Информатика и вычислительная техника”. Защитил диплом на тему “Сервис автоматизированного сбора данных для систем электронной коммерции”."
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
            description="Школа, в которой я учился с 1 по 11 класс. Закончил школу с золотой медалью."
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
        <!-- ФИЛЬТР ПРОЕКТОВ (МОБИЛЬНЫЕ УСТРОЙСТВА) -->
        <div id="filter-menu">
          <button
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            @click="showDropdown()"
            class="dropbtn"
            @focus="isFocus(this.event)"
          >
            Выберите фильтр
          </button>
          <button v-else @click="showDropdown()" class="dropbtn">
            Select a filter
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a
              class="btn"
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              @click="filterSelection('all')"
              >Все проекты</a
            >
            <a class="btn" v-else @click="filterSelection('all')"
              >All Projects</a
            >
            <a class="btn" @click="filterSelection('typescript')">Typescript</a>
            <a class="btn" @click="filterSelection('react.js')">React.js</a>
            <a class="btn" @click="filterSelection('vue.js')">Vue.js</a>
            <a
              class="btn"
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              @click="filterSelection('no react/vue')"
              >Без React/Vue</a
            >
            <a class="btn" v-else @click="filterSelection('no react/vue')"
              >No React/Vue</a
            >
            <a class="btn" @click="filterSelection('jest')">Jest</a>
            <a class="btn" @click="filterSelection('nuxt.js')">Nuxt.js</a>
          </div>
        </div>

        <!-- ФИЛЬТР ПРОЕКТОВ (ДРУГИЕ УСТРОЙСТВА) -->
        <ul class="filter-list">
          <li class="filter-item">
            <button
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              @click="filterSelection('all')"
              class="btn"
            >
              Все
            </button>
            <button v-else @click="filterSelection('all')" class="btn">
              All
            </button>
          </li>

          <li class="filter-item">
            <button @click="filterSelection('typescript')" class="btn">
              Typescript
            </button>
          </li>

          <li class="filter-item">
            <button @click="filterSelection('react.js')" class="btn">
              React.js
            </button>
          </li>

          <li class="filter-item">
            <button @click="filterSelection('vue.js')" class="btn">
              Vue.js
            </button>
          </li>

          <li class="filter-item">
            <button
              class="btn"
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              @click="filterSelection('no react/vue')"
            >
              Без React/Vue
            </button>
            <button class="btn" v-else @click="filterSelection('no react/vue')">
              No React/Vue
            </button>
          </li>

          <li class="filter-item">
            <button @click="filterSelection('jest')" class="btn">Jest</button>
          </li>
          <li class="filter-item">
            <button @click="filterSelection('nuxt.js')" class="btn">
              Nuxt.js
            </button>
          </li>
        </ul>

        <!-- САМИ ПРОЕКТЫ -->
        <ul class="project-list">
          <!-- САМИ ПРОЕКТЫ (RU) -->
          <li
            v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
            v-for="projectRU in projectsRU"
            :key="projectRU.id"
            :class="`filterDiv ${projectRU.category.toLowerCase()}`"
            :data-category="projectRU.category.toLowerCase()"
          >
            <a :href="projectRU.link" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <img
                    src="../assets/images/ui/eye.svg"
                    alt="eye icon"
                    loading="lazy"
                  />
                </div>

                <img
                  :src="projectRU.image"
                  :alt="projectRU.title.toLowerCase()"
                  loading="lazy"
                />
              </figure>
              <h3 class="project-title">{{ projectRU.title }}</h3>
              <p class="project-category">{{ projectRU.category }}</p>
            </a>
          </li>

          <!-- САМИ ПРОЕКТЫ (ENG) -->
          <li
            v-else
            v-for="project in projects"
            :key="project.id"
            :class="`filterDiv ${project.category.toLowerCase()}`"
            :data-category="project.category.toLowerCase()"
          >
            <a :href="project.link" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <img
                    src="../assets/images/ui/eye.svg"
                    alt="eye icon"
                    
                  />
                </div>

                <img
                  :src="project.image"
                  :alt="project.title.toLowerCase()"
                  loading="lazy"
                />
              </figure>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-category">{{ project.category }}</p>
            </a>
          </li>
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
              list-style: outside;
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
              list-style: outside;
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
.filterDiv {
  // float: left;
  // background-color: #2196f3;
  // color: #ffffff;
  // width: 100px;
  // line-height: 100px;
  // text-align: center;
  // margin: 2px;
  display: none; /* Hidden by default */

  &.show {
    display: block;
  }
  &.active {
    display: block;
    -webkit-animation: scaleUp 0.25s ease forwards;
    animation: scaleUp 0.25s ease forwards;
  }

}
.filterDiv > a.hover {
  background: hsla(0, 0%, 0%, 0.5);
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
.timeline {
  margin-bottom: 30px;
}
.timeline-list {
  font-size: var(--fs-4);
  margin-left: 45px;
}

/* Skills */
.skill {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;
}
.skills-title {
  font-size: var(--fs-1);
  text-align: center;
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
}

.skills-list {
  padding: 20px;
  width: 100%;
}

/*-----------------------------------*\
#PORTFOLIO
\*-----------------------------------*/
.filter-list {
  // display: none;
  // display: -webkit-box;
  // display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 25px;
  padding-left: 5px;
  margin-bottom: 30px;
}
#filter-menu {
  margin-bottom: 30px;
  // position: fixed;
  // top: 0;
  // left: 50%;
  // display: inline-block;
  display: none;
}
.show {
  display: block;
}

.dropdown-content {
  display: none;
  position: relative;
  background-color: var(--white-2);
  // border-style:double;
  border-top: none;
  border-radius: 5px;
  // border-width: 5px;

  // min-width: 165px;
  box-shadow: var(--shadow-1);
  z-index: 5;
  margin-left: 15px;
  margin-right: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  // border-style: ridge;
  // border-top: none;
  // border-color: var(--orange-yellow-crayola);
  // outline: var(--orange-yellow-crayola) 5px dashed;

  a {
    color: black;
    padding: 10px;
    // text-decoration: none;
    display: block;
    cursor: pointer;

    & :hover {
      background-color: var(--bg-gradient-jet);
      z-index: 9;
      -webkit-transition: var(--transition-1);
      -o-transition: var(--transition-1);
      transition: var(--transition-1);
    }
    &:hover:last-child {
      border-radius: inherit;
    }
 
    &.btn:first-child {
      background-color: var(--light-gray-70);
      font-weight: bolder;
    }
  } 

  .btn {
    &:hover {
      color: var(--orange-yellow-crayola);
    } 
  }

  // .btn {
    // border: red double 1px;
    // border-top: none;
    // border-radius: 5px;
  // }
}
// .dropdown-content a {
//   color: black;
//   padding: 10px;
//   text-decoration: none;
//   display: block;
// }
// .dropdown-content a:hover {
//   background-color: #ddd;
//   z-index: 5;
//   -webkit-transition: var(--transition-1);
//   -o-transition: var(--transition-1);
//   transition: var(--transition-1);
// }
.dropbtn {
  // background-color: var(--eerie-black-2);
  background: var(--border-gradient-onyx);
  padding: 10px;
  -webkit-box-shadow: var(--shadow-2);
  box-shadow: var(--shadow-2);
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);

  color: var(--white-2);
  padding: 5px 1rem 5px 1rem;
  font-size: var(--fs-4);
  border-radius: 20px;
  border-color: var(--orange-yellow-crayola);
  border-style: ridge;
  cursor: pointer;
  // min-width: 178px;
  text-align: center;

  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: var(--jet);
  }
}
.dropbtn:hover {
  background-color: var(--jet);
}
.dropbtn:focus {
  // background-color: var(--jet);
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
  // border-bottom-left-radius: 0;
  // border-bottom-right-radius: 0;
}
.filter-item button {
  color: var(--light-gray);
  font-size: var(--fs-3);
}

.filter-item button:hover {
  color: var(--light-gray-70);
}

.filter-item button.active,
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

.project-img {
    & img {
      // width: 30px;
      filter: blur();
    }
  }

/*-----------------------------------*\
#RESPONSIVE
\*-----------------------------------*/
@media (min-width: 320px) {
  #filter-menu {
    display: block;
  }
  .filter-list {
    display: none;
  }
  .dropbtn {
    width: 100%;
    font-size: var(--fs-7);
  }
  .dropdown-content {
    width: inherit;
    // margin-left: 12px;
    // margin-right: 12px;
    text-align: center;

    & .btn {
      padding: 5px;
    }
  }
  .project-img {
    & img {
      width: 30px;
    }
  }
  .skills-title {
    // margin-left: 20px;
    font-size: var(--fs-6);
    margin-bottom: 0;
  }
}
/** responsive larger than 450px screen */
@media (min-width: 450px) {
  /** client */
  .clients-item {
    min-width: calc(33.33% - 10px);
  }
  .dropbtn {
    // width: 180px;
    font-size: var(--fs-6);
  }
  .dropdown-content {
    grid-template-columns: repeat(3, 1fr);
  }
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .skills-title {
    // margin-left: 20px;
    font-size: var(--fs-2);
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

  html {
    margin-bottom: 5em;
  }

  /** REUSED STYLE */
  .sidebar,
  article {
    width: 520px;
    margin-inline: auto;
    padding: 30px;
    transition: var(--transition-1) 0.2s;
  }

  /** MAIN */
  main {
    margin-top: 60px;
    margin-bottom: 100px;
  }

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
    // cursor:auto;
    z-index: 1;
  }
  .content-card::before {
    content: "";
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
  .dropdown-content {
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    & .btn {
      width: 100%;
      padding: 3px;
      padding-bottom: 5px;
      // text-align: center;
      font-size: var(--fs-5);
    }
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

  #filter-menu {
    display: none;
  }
  // .filter-list {
    // display: none;
  // }
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

  .skills-title {
    // margin-left: 20px;
    font-size: var(--fs-1);
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

  /** NAVBAR (СПРАВА ВВЕРХУ) */
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

//!!!!!!!!!!!!!!!!!

.project-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 10px;
}

.project-item {
  display: none;

  &.active {
    display: block;
    -webkit-animation: scaleUp 0.25s ease forwards;
    animation: scaleUp 0.25s ease forwards;
  }
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
  // height: 200px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    // z-index: 1;
    -webkit-transition: var(--transition-1);
    -o-transition: var(--transition-1);
    transition: var(--transition-1);
  }

  .project-item > a:hover &::before {
    background: hsla(0, 0%, 0%, 0.5);
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
  z-index: 20;
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
}

.project-item > a:hover .project-item-icon-box {
  --scale: 1;
  opacity: 1;
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

.project-title,
.project-category {
  margin-left: 10px;
}

.project-title {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: 1.3;
}

.project-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

/*-----------------------------------*\
#RESPONSIVE
\*-----------------------------------*/
@media (min-width: 320px) {
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .project-img {
    height: auto;
    width: 100%;
  }
}
@media (min-width: 450px) {
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 580px) {
  .project-img {
    // height: auto;
    border-radius: 16px;
  }
}

@media (min-width: 768px) {
  .project-img {
    height: auto;
  }
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .project-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
