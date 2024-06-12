<script setup>
// import { ref, defineProps } from "vue";

const { id, name, description, date } = defineProps(['id', 'name', 'description', 'date'])

import PlaceholderIcon from '../assets/images/testimonials/placeholder.png'
import Icon_1 from '../assets/images/testimonials/1.png'

let icon = ''
switch (id) {
  case '1':
    icon = Icon_1
    break

  default:
    icon = PlaceholderIcon
    break
}

let dat = ''
if (!date) {
  dat = 'No date'
} else {
  dat = date
}
</script>

<template>
  <li class="testimonials-item">
    <div class="content-card" data-testimonials-item>
      <figure class="testimonials-avatar-box">
        <img :src="icon" alt="Logo" width="60" data-testimonials-avatar loading="lazy" />
      </figure>

      <h4 class="h4 testimonials-item-title" data-testimonials-title>
        {{ name }}
      </h4>
      <time datetime="2021-06-14" data-testimonials-date>{{ dat }}</time>

      <div class="testimonials-text" data-testimonials-text>
        <p>{{ description }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
time {
  color: var(--light-gray-70);
  font-size: var(--fs-7);
  margin-bottom: 1em;
  display: block;
}
.testimonials-item {
  min-width: 100%;
  scroll-snap-align: center;
}

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
</style>
