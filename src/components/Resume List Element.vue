<script setup>
const { name, years, description } = defineProps([
  "name",
  "years",
  "description",
]);
</script>

<template>
  <li class="timeline-item">
    <h4 class="h4 timeline-item-title">{{ name }}</h4>

    <span>{{ years }}</span>

    <p class="timeline-text">
      {{ description }}
    </p>
  </li>
</template>

<style lang="scss" scoped>
.icon-box {
  width: 55px;
  height: 55px;
  margin-left: 10px;
  border-radius: 12px;
  font-size: 18px;

  &::before {
    margin-left: -10px;
  }
}

.timeline-item {
  position: relative;

  .timeline-item-title {
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &-title {
    font-size: var(--fs-4);
    line-height: 1.3;
    margin-bottom: 7px;
  }
}

.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
}

.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: var(--jet);
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: var(--text-gradient-yellow);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0 4px var(--jet);
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

@media (min-width: 580px) {
  .timeline-list {
    margin-left: 65px;
  }

  .timeline-item:not(:last-child)::before {
    left: -40px;
  }

  .timeline-item::after {
    height: 8px;
    width: 8px;
    left: -43px;
  }
}
</style>
