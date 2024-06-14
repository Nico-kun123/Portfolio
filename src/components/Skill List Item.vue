<script setup>
import { computed } from 'vue'
const { skillName, skillValue } = defineProps(['skillName', 'skillValue'])

const progressColor = computed(() => {
  if (skillValue >= 80) return '#ff6600' // orange
  if (skillValue >= 60) return '#00c000' // green
  if (skillValue >= 40) return '#ffd700' // yellow
  if (skillValue >= 20) return '#ff2323' // red
  return 'silver'
})
</script>

<template>
  <!-- !! HARD SKILL + PROGRESS BAR !! -->
  <li class="skills-item">
    <div class="title-wrapper">
      <h5 class="h4">{{ skillName }}</h5>
      <data :value="skillValue">{{ skillValue }}%</data>
    </div>

    <div class="skill-progress-bg">
      <div
        class="skill-progress-fill"
        :style="{ width: `${skillValue}%`, background: progressColor }"
      ></div>
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
.skill {
  & data {
    color: var(--light-gray);
    font-size: var(--fs-7);
    font-weight: var(--fw-300);
  }
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

  .icon-box {
    width: 40px;
    height: 40px;
    margin-left: -5px;
    border-radius: 16px;
    font-size: 24px;
  }
}

@media (min-width: 580px) {
  .skills-item {
    padding: 0;
  }
  .icon-box {
    width: 50px;
    height: 50px;
    margin-left: 0;
    border-radius: 12px;
    font-size: 18px;
  }
}
</style>
