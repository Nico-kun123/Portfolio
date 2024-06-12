<template>
  <!-- !! BLOG POST !! -->
  <li class="blog-post-item">
    <a :href="placeholderLink">
      <figure class="blog-banner-box" style="display: flex; justify-content: center">
        <img
          :src="projectImage"
          style="width: fit-content"
          alt="Design conferences in 2022"
          loading="lazy"
          draggable="false"
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

<script setup>
// TODO: Добавлять ссылки на картинки для блогов, чтобы потом их использовать
import PlaceholderImg from '../assets/images/blogs/placeholder.svg'

const { id, link, category, name, description, date } = defineProps([
  'id',
  'link',
  'category',
  'name',
  'description',
  'date'
])

const placeholderImage = PlaceholderImg

/**
 * Получает значение из props. Если какое-то значение не передано, возвращает значение по умолчанию.
 * @param {String} value
 * @param {String} defaultValue
 * @return {String}
 */
const getValue = (value, defaultValue) => (value ? value : defaultValue)

// Обработка значений, переданных из props
const placeholderName = getValue(name, 'PLACEHOLDER TITLE')
const placeholderDescription = getValue(description, 'PLACEHOLDER DESCRIPTION')
const placeholderCategory = getValue(category, 'NO CATEGORY')
const placeholderDate = getValue(date, 'NO DATE')
const placeholderLink = getValue(link, '/')

// TODO: Добавить картинки для блогов, если такие есть. Условие нужно будет изменить.
const projectImage = id === '1' ? '../assets/images/blogs/1.png' : placeholderImage
</script>

<style lang="scss" scoped>
.blog-post-item > a {
  position: relative;
  background: var(--border-gradient-onyx);
  height: 100%;
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;

  &::before {
    content: '';
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
      object-fit: cover;
      transition: var(--transition-1);
    }
  }

  &:hover .blog-banner-box img {
    transform: scale(1.1);
  }

  .blog-content {
    padding: 15px;

    .blog-meta {
      display: flex;
      justify-content: flex-start;
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
      transition: color var(--transition-1);
    }

    .blog-text {
      color: var(--light-gray);
      font-size: var(--fs-6);
      font-weight: var(--fw-300);
      line-height: 1.6;
    }
  }

  &:hover .blog-item-title {
    color: var(--orange-yellow-crayola);
  }
}
</style>
