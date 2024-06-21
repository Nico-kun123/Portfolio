<script setup>
import { computed } from 'vue'
const props = defineProps({
    /**
     * Название навыка
     * @type {string}
     * @required
     */
    skillName: {
      required: true,
      type: String,
    },

    /**
     * Оценка знания навыка
     * @type {number}
     * @required
     */
    skillValue: {
      required: true,
      type: Number,
    },
  }),
  { skillName } = props,
  { skillValue } = props,
  // No magic numbers.
  MIN_VALUE_ORANGE = 80,
  MIN_VALUE_GREEN = 60,
  MIN_VALUE_YELLOW = 40,
  MIN_VALUE_RED = 20,
  progressColor = computed(() => {
    // orange
    if (skillValue >= MIN_VALUE_ORANGE) {
      return '#ff6600'
    }
    // green
    if (skillValue >= MIN_VALUE_GREEN) {
      return '#00c000'
    }
    // yellow
    if (skillValue >= MIN_VALUE_YELLOW) {
      return '#ffd700'
    }
    // red
    if (skillValue >= MIN_VALUE_RED) {
      return '#ff2323'
    }
    return 'silver'
  })
</script>

<template>
  <!-- !! HARD SKILL + PROGRESS BAR !! -->
  <li class="skills-item">
    <div class="title-wrapper">
      <h5 class="h4">
        {{ skillName }}
      </h5>

      <data :value="skillValue">{{ skillValue }}%</data>
    </div>

    <div class="skill-progress-bg">
      <div
        class="skill-progress-fill"
        :style="{'width': `${skillValue}%`,
                 'background': progressColor}"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
.skill-progress-bg {
  background: var(--jet);
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
}

.skill-progress-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.skill data {
  color: var(--light-gray);
  font-size: var(--fs-5);
  font-weight: var(--fw-300);
}

@media (min-width: 320px) {
  .skills-item {
    margin-bottom: 10px;
  }
}

@media (min-width: 450px) {
  .skills-item {
    margin-bottom: 20px;
  }

  // .icon-box {
  //   width: 40px;
  //   height: 40px;
  //   margin-left: -5px;
  //   border-radius: 16px;
  //   font-size: 24px;
  // }
}

@media (min-width: 580px) {
  .skills-item {
    padding: 0;
  }
  // .icon-box {
  //   width: 50px;
  //   height: 50px;
  //   margin-left: 0;
  //   border-radius: 12px;
  //   font-size: 18px;
  // }
}
</style>
