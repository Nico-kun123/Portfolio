<template>
  <!-- !! TIMELINE ITEM !! -->
  <li class="timeline-item">
    <h4 class="h3 timeline-item-title">
      {{ name }}
    </h4>

    <span>{{ years }}</span>

    <p class="timeline-text">
      {{ description }}
    </p>
  </li>
</template>

<script setup>
const props = defineProps({
    /**
     * Описания пункта в резюме.
     * @type {string}
     * @required
     */
    description: {
      required: true,
      type: String,
    },
    /**
     * Название пункта в резюме.
     * @type {string}
     * @required
     */
    name: {
      required: true,
      type: String,
    },

    /**
     * Годы учёбы/работы/стажировки.
     * @type {string}
     * @required
     */
    years: {
      required: true,
      type: String,
    },
  }),
  { name } = props,
  { years } = props,
  { description } = props
</script>

<style lang="scss">
.title-wrapper {
  min-width: 300px;
  margin-left: 6px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  & h3 {
    color: var(--text-gradient-yellow);
  }
  & .icon-box {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
}

.timeline-item {
  position: relative;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 1.5em;
  }

  .timeline-item-title {
    font-weight: bold;
  }

  span {
    color: var(--vegas-gold);
    line-height: 1.6;
    font-size: var(--fs-4);
  }
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -30px;
    width: 2px;
    height: calc(100% + 50px);
    background: var(--jet);
  }

  &::after {
    content: '';
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

  & .timeline-text {
    color: var(--light-gray);
    font-weight: var(--fw-300);
    line-height: normal;
  }
  & .timeline-item-title {
    font-size: var(--fs-3);
  }
}

/** responsive larger than 450px screen */
@media (min-width: 320px) {
  /** client */
  .timeline-item {
    &:not(:last-child)::before {
      height: calc(100% + 3em);
    }
    &::after {
      left: -1.7em;
    }
    & .timeline-text {
      font-size: var(--fs-4);
    }
    & .timeline-item-title {
      font-size: var(--fs-4);
    }

    span {
      font-size: var(--fs-5);
    }
  }
  .title-wrapper {
    margin-left: 0px;
    & h3 {
      margin-left: -2px;
    }
  }
}

@media (min-width: 580px) {
  .timeline-item:not(:last-child)::before {
    left: -40px;
    // height: 220px;
  }

  .timeline-item::after {
    height: 8px;
    width: 8px;
    left: -43px;
  }
  .title-wrapper {
    margin-left: 6px;

    & h3 {
      margin-left: 8px;
    }
  }
}
@media (min-width: 768px) {
  .timeline-item {
    &-title {
      font-size: var(--fs-2);
      // margin-bottom: 10px;
    }
  }
  .title-wrapper {
    margin-left: 6px;
  }
}

@media (min-width: 1024px) {
  .timeline-item {
    &::after {
      left: -2.3em;
    }
  }
  .title-wrapper {
    margin-left: 2px;
    & h3 {
      margin-left: 4px;
    }
    & .icon-box {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
