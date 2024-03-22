<script setup>
"use strict";
import "../src/style.css";

import Sidebar from "./components/SideBar.vue";
import Main from "./components/MainWindow.vue";

const skillsRU = [
  "Ответственность. Я способен брать на себя ответственность и признавать свои ошибки.",
  "Возможность сосредотачиваться. Я могу концентрироваться на поставленных задачах и доводить их до завершения.",
  "Принятие критики. Я верю в то, что нужно не только давать конструктивную критику, но и принимать её, чтобы улучшить эффективность работы.",
  "Навыки коммуникации. Я активно слушаю и стараюсь ясно выражать свои мысли и идеи.",
  "Адаптивность. Я быстро учусь новым навыкам или изучаю технологии.",
];
const skills = [
  "Responsibility: I consistently strive to take ownership and own up to my failures.",
  "Ability to Focus: I can concentrate on tasks and take them to completion.",
  "Accepting Criticism: I believe in both giving and accepting constructive criticism for improvement.",
  "Communication Skills: I am an active listener and I try to express my thoughts and ideas clearly.",
  "Adaptability: I am quick to learn new skills or explore technologies.",
];
const hobbies = [
  "I like listening to music. I mostly listen to video game soundtracks.",
  "I like learning Japanese on my free time using the Duolingo app.",
  "I like playing video games from time to time.",
];
const hobbiesRU = [
  "Мне нравится слушать музыку. В основном я слушаю саундтреки из видеоигр.",
  `Мне нравится изучать японский язык в свободное время, используя приложение "Duolingo".`,
  "Мне нравится играть в видеоигры время от времени.",
];

// ~~~~ PROJECTS ~~~~
const linkPart = "https://nico-kun123.github.io/";
const linkGH = "https://github.com/Nico-kun123/";
//
// const imgURL = "@/assets/images/projects/";

//! В "preview" они только так показываться будут ❗❗❗
const imgURL = [
  new URL("/src/assets/images/projects/Parser.png", import.meta.url),
  new URL("/src/assets/images/projects/Calculator.png", import.meta.url),
  new URL("/src/assets/images/projects/Weather.png", import.meta.url),
  new URL("/src/assets/images/projects/Form.png", import.meta.url),
  new URL("/src/assets/images/projects/Table.png", import.meta.url),
  new URL("/src/assets/images/projects/Typescript Jest.png", import.meta.url),
  new URL("/src/assets/images/projects/User Edit Form.png", import.meta.url),
  new URL("/src/assets/images/projects/Connect DB to site.png", import.meta.url),
];

const projectsRU = [
  {
    id: "1",
    category: "Big project, No React/Vue, PostgreSQL",
    title: "Сборщик данных о товарах с интернет-магазинов",
    link: linkGH + "EShop-Parser",
    image: imgURL[0],
  },
  {
    id: "2",
    category: "Pet project, Vue.js",
    title: "Простой калькулятор на Vue.js",
    link: linkPart + "Simple-Vue-Calculator",
    image: imgURL[1],
  },
  {
    id: "3",
    category: "Pet project, Vue.js",
    title: "Приложение для просмотра погоды",
    link: linkPart + "Simple-Weather-App",
    image: imgURL[2],
  },
  {
    id: "4",
    category: "Test task, Vue.js",
    title: "Валидация формы создания клиентов (Vuelidate)",
    link: linkPart + "Simple-Form-Validation--Vue-Vuelidate-",
    image: imgURL[3],
  },
  {
    id: "5",
    category: "Test task, Vue.js",
    title: "Простая таблица с возможностью сортировки по столбцу",
    link: linkPart + "Vue-Table",
    image: imgURL[4],
  },
  {
    id: "6",
    category: "Pet project, Typescript, Jest",
    title: "Тестирование Typescript кода с помощью Jest (ts-jest)",
    link: linkGH + "Jest-and-Typescript",
    image: imgURL[5],
  },
  {
    id: "7",
    category: "Test task, Vue.js, Typescript",
    title: "Форма редактирования данных пользователей (Vue + Vuelidate)",
    link: linkGH + "user-edit-form",
    image: imgURL[6],
  },
  {
    id: "8",
    category: "Pet project, Vue.js, PostgreSQL",
    title: "Сайт для взаимодействия с базой данных через API-запросы",
    link: linkGH + "vue-pg-database",
    image: imgURL[7],
  },
];
const projects = [
  {
    id: "1",
    category: "Big project, No React/Vue, PostgreSQL",
    title: "Product data parser from online stores",
    link: linkGH + "EShop-Parser",
    image: imgURL[0],
  },
  {
    id: "2",
    category: "Pet project, Vue.js",
    title: "Simple Calculator (Vue.js)",
    link: linkPart + "Simple-Vue-Calculator",
    image: imgURL[1],
  },
  {
    id: "3",
    category: "Pet project, Vue.js",
    title: "Simple Weather App",
    link: linkPart + "Simple-Weather-App",
    image: imgURL[2],
  },
  {
    id: "4",
    category: "Test task, Vue.js",
    title: "Client creation form validation (Vuelidate)",
    link: linkPart + "Simple-Form-Validation--Vue-Vuelidate-",
    image: imgURL[3],
  },
  {
    id: "5",
    category: "Test task, Vue.js",
    title: "Simple table with sorting by column",
    link: linkPart + "Vue-Table",
    image: imgURL[4],
  },
  {
    id: "6",
    category: "Pet project, Typescript, Jest",
    title: "Testing Typescript code with Jest (ts-jest)",
    link: linkGH + "Jest-and-Typescript",
    image: imgURL[5],
  },
  {
    id: "7",
    category: "Test task, Vue.js, Typescript",
    title: "User data edit form (Vue + Vuelidate)",
    link: linkGH + "user-edit-form",
    image: imgURL[6],
  },
  {
    id: "8",
    category: "Pet project, Vue.js, PostgreSQL",
    title: "Edit database tables through a website using API-calls",
    link: linkGH + "vue-pg-database",
    image: imgURL[7],
  },
];
</script>

<template>
  <Sidebar />
  <Main
    :softSkills="skills"
    :softSkillsRU="skillsRU"
    :hobbies="hobbies"
    :hobbiesRU="hobbiesRU"
    :projects="projects"
    :projectsRU="projectsRU"
  />
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: var(--main-font);
}

a {
  text-decoration: none;
  color: var(--orange-yellow-crayola)
}

p {
  color: var(--light-gray);
  font-weight: var(--fw-300);
}

li {
  list-style: none;
  padding-left: 1em
}
ul {
  padding: 0;
}

img,
a,
button,
time,
span {
  display: block;
}

button {
  font: inherit;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}

input,
textarea {
  display: block;
  width: 100%;
  background: none;
  font: inherit;
}

/* ::-moz-selection {
  background: var(--orange-yellow-crayola);
  color: black;
  font-weight: bold;
}

::selection {
  background: var(--orange-yellow-crayola);
  color: black;
  font-weight: bold;
} */

:focus {
  outline-color: var(--orange-yellow-crayola);
  /* color: black; */
  /* font-weight: bold; */
}

html {
  /* font-family: var(--main-font); */
  /* margin-bottom: 5em; */
  /* background: var(--border-gradient-onyx); */
  height: auto;
}

body {
  /* background: var(--border-gradient-onyx); */
  background: var(--eerie-black-1);
  height: auto;
}

/*-----------------------------------*\
#REUSED STYLE
\*-----------------------------------*/
.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  -webkit-box-shadow: var(--shadow-1);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  -webkit-box-shadow: var(--shadow-1);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

article {
  display: none;
}

article.active {
  display: block;
  -webkit-animation: fade 0.5s ease backwards;
  animation: fade 0.5s ease backwards;
}

@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.h2,
.h3,
.h4,
.h5 {
  color: var(--white-2);
}

.h2 {
  font-size: var(--fs-1);
}

.h3 {
  font-size: var(--fs-2);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 30px;
  /* margin: 0; */
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--vegas-gold);
  border-radius: 3px;
}

@media (min-width: 320px) {
  html {
    margin-bottom: 60px;
  }
}
</style>
