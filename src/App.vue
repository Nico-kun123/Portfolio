<script setup>
"use strict";
import "../src/style.css";

import Sidebar from "./components/SideBar.vue";
import Main from "./components/MainWindow.vue";

const skillsRU = [
  "Ответственность. Я вовремя выполняю свои обязанности.",
  "Возможность сконцентрироваться на выполнении своих задач. Я могу работать в течение длительного времени.",
  "Способность спокойно воспринимать критику, если она конструктивна. Данную критику я могу использовать для улучшения своей работы.",
  "Способность не только выслушивать идеи и мнения других людей, но и высказывать свои собственные.",
  "Способность адаптироваться к новым ситуациям. Могу осваивать новые навыки или изучать новые технологии, если потребуется.",
];
const skills = [
  "Responsibility. I do my duties on time.",
  "Ability to focus on doing my tasks. I can work for a long time.",
  "Ability to calmly accept criticism if it is constructive. I can use this criticism to improve my work.",
  "Ability to not only listen to the ideas and opinions of other people, but also to express my own.",
  "Ability to adapt to new situations. I can learn new skills or learn new technologies if necessary.",
];
const hobbies = [
  "I like listening to music. I mostly listen to video game soundtracks.",
  "I like learning Japanese on my free time. I have been learning Japanese for 2 years using the Duolingo app.",
  "I like playing video games.",
];
const hobbiesRU = [
  "Мне нравится слушать музыку. В основном я слушаю саундтреки из видеоигр.",
  "Мне нравится изучать японский язык в свободное время. Я изучаю японский язык 2 года, используя приложение Duolingo.",
  "Мне нравится играть в видеоигры. Я играю в игры на ПК (Terraria, Yakuza, Hades)",
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
];

const projectsRU = [
  {
    id: "1",
    category: "No React/Vue",
    title: "Сборщик данных о товарах с интернет-магазинов",
    link: linkGH + "EShop-Parser",
    image: imgURL[0],
  },
  {
    id: "2",
    category: "Vue.js",
    title: "Простой калькулятор на Vue.js",
    link: linkPart + "Simple-Vue-Calculator",
    image: imgURL[1],
  },
  {
    id: "3",
    category: "Vue.js",
    title: "Приложение для просмотра погоды",
    link: linkPart + "Simple-Weather-App",
    image: imgURL[2],
  },
  {
    id: "4",
    category: "Vue.js",
    title: "Валидация формы создания клиентов (Vuelidate)",
    link: linkPart + "Simple-Form-Validation--Vue-Vuelidate-",
    image: imgURL[3],
  },
  {
    id: "5",
    category: "Vue.js",
    title: "Простая таблица с возможностью сортировки по столбцу",
    link: linkPart + "Vue-Table",
    image: imgURL[4],
  },
  {
    id: "6",
    category: "Typescript, Jest",
    title: "Тестирование Typescript кода с помощью Jest (ts-jest)",
    link: linkGH + "Jest-and-Typescript",
    image: imgURL[5],
  },
];
const projects = [
  {
    id: "1",
    category: "No React/Vue",
    title: "Product data parser from online stores",
    link: linkGH + "EShop-Parser",
    image: imgURL[0],
  },
  {
    id: "2",
    category: "Vue.js",
    title: "Simple Calculator (Vue.js)",
    link: linkPart + "Simple-Vue-Calculator",
    image: imgURL[1],
  },
  {
    id: "3",
    category: "Vue.js",
    title: "Simple Weather App",
    link: linkPart + "Simple-Weather-App",
    image: imgURL[2],
  },
  {
    id: "4",
    category: "Vue.js",
    title: "Client creation form validation (Vuelidate)",
    link: linkPart + "Simple-Form-Validation--Vue-Vuelidate-",
    image: imgURL[3],
  },
  {
    id: "5",
    category: "Vue.js",
    title: "Simple table with sorting by column",
    link: linkPart + "Vue-Table",
    image: imgURL[4],
  },
  {
    id: "6",
    category: "Typescript, Jest",
    title: "Testing Typescript code with Jest (ts-jest)",
    link: linkGH + "Jest-and-Typescript",
    image: imgURL[5],
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
}

a {
  text-decoration: none;
}

li {
  list-style: none;
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
  color: black;
  font-weight: bold;
}

html {
  font-family: var(--main-font);
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
