<template>
  <!-- !! BLOG POST !! -->
  <li class="blog-post-item">
    <a :href="placeholderLink">
      <figure class="blog-banner-box">
        <img
          :src="projectImage"
          alt="Design conferences in 2022"
          loading="lazy"
          draggable="false"
        >
      </figure>

      <div class="blog-content">
        <div class="blog-meta">
          <p class="blog-category">{{ placeholderCategory }}</p>

          <span class="dot" />

          <time datetime="2022-02-23">{{ placeholderDate }}</time>
        </div>

        <h3 class="blog-item-title h3">{{ placeholderName }}</h3>

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

const props = defineProps({
        /**
         * Категория статьи
         * @type {String}
         * @required
         */
        category: {
          required: true,
          type: String
        },

        /**
         * Дата публикации статьи
         * @type {String}
         * @required
         */
        date: {
          required: true,
          type: String
        },

        /**
         * Краткое описание статьи
         * @type {String}
         * @required
         */
        description: {
          required: true,
          type: String
        },

        /**
         * ID статьи (для отображения)
         * @type {Number}
         * @required
         */
        id: {
          required: true,
          type: Number
        },

        /**
         * Ссылка на статью
         * @type {String}
         * @required
         */
        link: {
          required: true,
          type: String
        },

        /**
         * Название статьи
         * @type {String}
         * @required
         */
        name: {
          required: true,
          type: String
        }
      }),

      // Получаем значения из props
      {category} = props,
      {date} = props,
      {description} = props,
      {id} = props,
      {link} = props,
      {name} = props,

      // Если у статьи нет изображения, то показываем картинку по умолчанию
      placeholderImage = PlaceholderImg,

      /**
       * Получает значение из props. Если какое-то значение не передано, возвращает значение по умолчанию.
       * @param {String} value
       * @param {String} defaultValue
       * @return {String}
       */
      getValue = (value, defaultValue) => (value ? value : defaultValue),

      // Обработка значений, переданных из props
      placeholderName = getValue(name, 'PLACEHOLDER TITLE'),
      placeholderDescription = getValue(description, 'PLACEHOLDER DESCRIPTION'),
      placeholderCategory = getValue(category, 'NO CATEGORY'),
      placeholderDate = getValue(date, 'NO DATE'),
      placeholderLink = getValue(link, '/'),

      // TODO: Добавить картинки для блогов, если такие есть. Условие нужно будет изменить.
      projectImage = id === '1' ? '../assets/images/blogs/1.png' : placeholderImage
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

  & figure {
    display: flex;
    justify-content: center;
  }

  & .blog-banner-box {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: fit-content;
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
