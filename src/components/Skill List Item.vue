<script setup>
const { skillName, skillValue } = defineProps(["skillName", "skillValue"]);
</script>

<template>
  <li class="skills-item">
    <div class="title-wrapper">
      <h5 class="h4">{{ skillName }}</h5>
      <data :value="skillValue">{{ skillValue }}%</data>
    </div>

    <div class="skill-progress-bg">
      <div
        v-if="skillValue >= 80"
        class="skill-progress-fill"
        :style="{ width: skillValue + '%', background: 'orange' }"
      ></div>
      <div
        v-else-if="skillValue >= 60"
        class="skill-progress-fill"
        :style="{ width: skillValue + '%', background: 'lime' }"
      ></div>
      <div
        v-else-if="skillValue >= 40"
        class="skill-progress-fill"
        :style="{ width: skillValue + '%', background: 'yellow' }"
      ></div>
      <div
        v-else-if="skillValue >= 20"
        class="skill-progress-fill"
        :style="{ width: skillValue + '%', background: 'red' }"
      ></div>
      <div
        v-else
        class="skill-progress-fill"
        :style="{ width: skillValue + '%', background: 'silver' }"
      ></div>
    </div>
  </li>
</template>

<style lang="scss">
// .skills-item:not(:last-child) {
//   margin-bottom: 15px;
// }

.skill-progress-bg {
  background: var(--jet);
  width: 100%;
  height: 8px;
  border-radius: 10px;
}
.skill-progress-fill {
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
}
.skill {
  .title-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 5px;
  }

  & data {
    color: var(--light-gray);
    font-size: var(--fs-7);
    font-weight: var(--fw-300);
  }
}

.title-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

@media (min-width: 450px) {
  .skills-item:not(:last-child) {
    margin-bottom: 15px;
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
  .skills-item:not(:last-child) {
    margin-bottom: 20px;
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
