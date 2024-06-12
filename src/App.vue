<template>
  <Header />
  <Main :projects="$isRussian() ? projectsRU : projects" />
</template>

<script setup>
import '../src/style.css'

// Импорт компонентов
import Header from './components/Header.vue'
import Main from './components/MainWindow.vue'

// Плагин для проверки языка локализации
// import isRussian from './plugins/checkLocale'

// Информация о проектах
/*
  TODO: Если нужно добавить новые проекты, то нужно их добавить в assets/projects.json.
  Только делай так, чтобы category у проекта соответствовал добавленному фильтру (в "MainWindow.vue").
  И сами фильтры тоже надо добавить в тот же vue-файл.
*/
import MyProjects from './assets/projects.json'
const { projects, projectsRU } = MyProjects
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--main-font);
}

a {
  text-decoration: none;
  color: var(--orange-yellow-crayola);
}

p {
  color: var(--light-gray);
  font-weight: var(--fw-300);
}

li {
  list-style: none;
  padding-left: 1em;
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

body {
  background: var(--eerie-black-1);
  height: auto;
}

.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: '';
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
  animation: fade 0.5s ease backwards;
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
  font-size: var(--fs-2);
}

.h3 {
  font-size: var(--fs-3);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-5);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 30px;
}

.article-title::after {
  content: '';
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
