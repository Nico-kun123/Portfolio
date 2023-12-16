<script setup>
import pl from "../assets/images/ui/folder-project-placeholder.svg";
import img1 from "../assets/images/projects/Parser.png";
import img2 from "../assets/images/projects/Calculator.png";
import img3 from "../assets/images/projects/Weather.png";
import img4 from "../assets/images/projects/Form.png";
import img5 from "../assets/images/projects/Table.png";

const { id, projectCategory, projectTitle } = defineProps({
  id: String,
  projectCategory: String,
  projectTitle: String,
  projectLink: String,
});

let projectImage = "";
let placeholderTitle = "",
  placeholderCategory = "";
switch (id) {
  case "1":
    projectImage = img1;
    break;
  case "2":
    projectImage = img2;
    break;
  case "3":
    projectImage = img3;
    break;
  case "4":
    projectImage = img4;
    break;
  case "5":
    projectImage = img5;
    break;
  default:
    projectImage = pl;
    break;
}

if (!projectCategory && !projectTitle) {
  placeholderTitle = "PLACEHOLDER TITLE";
  placeholderCategory = "???";
} else {
  placeholderTitle = projectTitle;
  placeholderCategory = projectCategory;
}
</script>

<template>
  <li
    class="project-item active"
    data-filter-item
    :data-category="placeholderCategory.toLowerCase()"
  >
    <a :href="projectLink" target="_blank">
      <figure class="project-img">
        <div class="project-item-icon-box">
          <img src="../assets/images/ui/eye.svg" alt="eye icon" loading="lazy"/>
        </div>

        <img
          :src="projectImage"
          :alt="placeholderTitle.toLowerCase()"
          loading="lazy"
        />
      </figure>

      <h3 class="project-title">{{ placeholderTitle }}</h3>

      <p class="project-category">{{ placeholderCategory }}</p>
    </a>
  </li>
</template>

<style lang="scss">
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
  height: 200px;
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
    z-index: 1;
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
  z-index: 1;
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
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
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

@media (min-width: 450px) {
  .project-img {
    height: auto;
  }
}

@media (min-width: 580px) {
  .project-img {
    border-radius: 16px;
  }
}

@media (min-width: 768px) {
  .project-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
