<script setup>
import placeholder from "../assets/images/blogs/placeholder.svg";
const { id, link, category, name, description, date } = defineProps([
  "id",
  "link",
  "category",
  "name",
  "description",
  "date",
]);

let projectImage = "";
switch (id) {
  case "1":
    projectImage = img1;
    break;
  default:
    projectImage = placeholder;
    break;
}

let placeholderName = "";
let placeholderDescription = "";
let placeholderCategory = "";
let placeholderDate = "";
let placeholderLink = "";

if (!description || !name || !category || !date || !link) {
  if (!description) {
    placeholderDescription = "???";
  } else placeholderDescription = description;
  if (!name) {
    placeholderName = "PLACEHOLDER TITLE";
  } else placeholderName = name;
  if (!category) {
    placeholderCategory = "Fluff";
  } else placeholderCategory = category;
  if (!date) {
    placeholderDate = "NO DATE";
  } else placeholderDate = date;
  if (!link) {
    placeholderLink = "#";
  } else placeholderLink = link;
} else {
  placeholderName = name;
  placeholderDescription = description;
  placeholderCategory = category;
  placeholderDate = date;
  placeholderLink = link;
}
</script>

<template>
  <li class="blog-post-item">
    <a :href="placeholderLink">
      <figure
        class="blog-banner-box"
        style="display: flex; justify-content: center"
      >
        <img
          :src="projectImage"
          style="width: fit-content"
          alt="Design conferences in 2022"
          loading="lazy"
        />
      </figure>

      <div class="blog-content">
        <div class="blog-meta">
          <p class="blog-category">{{ placeholderCategory }}</p>

          <span class="dot"></span>

          <time datetime="2022-02-23">{{ placeholderDate }}</time>
        </div>

        <h3 class="h3 blog-item-title">{{ placeholderName }}</h3>

        <p class="blog-text">
          {{ placeholderDescription }}
        </p>
      </div>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.blog-post-item > a {
  position: relative;
  background: var(--border-gradient-onyx);
  height: 100%;
  -webkit-box-shadow: var(--shadow-4);
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: var(--eerie-black-1);
    z-index: -1;
  }

  .blog-banner-box {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -webkit-transition: var(--transition-1);
      -o-transition: var(--transition-1);
      transition: var(--transition-1);
    }
  }

  &:hover .blog-banner-box img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .blog-content {
    padding: 15px;

    .blog-meta {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: 7px;
      margin-bottom: 10px;

      .blog-category,
      time {
        color: var(--light-gray-70);
        font-size: var(--fs-6);
        font-weight: var(--fw-300);
      }

      .dot {
        background: var(--light-gray-70);
        width: 4px;
        height: 4px;
        border-radius: 4px;
      }
    }

    .blog-item-title {
      margin-bottom: 10px;
      line-height: 1.3;
      -webkit-transition: var(--transition-1);
      -o-transition: var(--transition-1);
      transition: var(--transition-1);
    }

    &:hover .blog-item-title {
      color: var(--orange-yellow-crayola);
    }

    .blog-text {
      color: var(--light-gray);
      font-size: var(--fs-6);
      font-weight: var(--fw-300);
      line-height: 1.6;
    }
  }
}
</style>
