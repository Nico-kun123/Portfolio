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
</script>

<template>
  <Sidebar />
  <Main
    :softSkills="skills"
    :softSkillsRU="skillsRU"
    :hobbies="hobbies"
    :hobbiesRU="hobbiesRU"
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
ion-icon,
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

::-moz-selection {
  background: var(--orange-yellow-crayola);
  color: var(--smoky-black);
}

::selection {
  background: var(--orange-yellow-crayola);
  color: var(--smoky-black);
}

:focus {
  outline-color: var(--orange-yellow-crayola);
}

html {
  font-family: var(--main-font);

  margin-bottom: 5em;
}

body {
  background: var(--smoky-black);
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

.icon-box ion-icon {
  --ionicon-stroke-width: 35px;
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
  text-transform: capitalize;
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
  padding-bottom: 7px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.has-scrollbar::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--onyx);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--orange-yellow-crayola);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-button {
  width: 20px;
}

.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  -webkit-box-shadow: var(--shadow-2);
  box-shadow: var(--shadow-2);
  cursor: pointer;
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

/*-----------------------------------*\
#MAIN
\*-----------------------------------*/

main {
  margin: 15px 12px;
  margin-bottom: 75px;
  min-width: 259px;
}

p {
  width: fit-content;
}
</style>
