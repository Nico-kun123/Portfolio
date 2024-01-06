<script setup>
const { id, name, description } = defineProps(["id", "name", "description"]);
</script>

<template>
  <li class="service-item">
    <div class="service-icon-box" v-if="id == 1">
      <img
        src="../assets/images/ui/coding.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
      />
    </div>
    <div class="service-icon-box" v-else-if="id == 2">
      <img
        src="../assets/images/ui/layout.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
      />
    </div>
    <div class="service-icon-box" v-else-if="id == 3">
      <img
        src="../assets/images/ui/vue.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
      />
    </div>
    <div class="service-icon-box" v-else-if="id == 4">
      <img
        src="../assets/images/ui/folder-project-placeholder.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
      />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">{{ name }}</h4>

      <p class="service-item-text">
        {{ description }}
      </p>
    </div>
  </li>
</template>

<style lang="scss">
.service-title {
  margin-bottom: 20px;
  font-size: var(--fs-1);
}

.service-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  gap: 20px 25px;

  .service-item {
    position: relative;
    background: var(--border-gradient-onyx);
    padding: 20px;
    border-radius: 14px;
    -webkit-box-shadow: var(--shadow-2);
    box-shadow: var(--shadow-2);
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      inset: 1px;
      background: var(--bg-gradient-jet);
      border-radius: inherit;
      z-index: -1;
    }

    .service-icon-box {
      margin-bottom: 10px;

      img {
        margin: auto;
      }
    }

    .service-content-box {
      .service-item-title {
        margin-bottom: 7px;
      }

      .service-item-text {
        color: var(--light-gray);
        font-size: var(--fs-6);
        font-weight: var(--fw-3);
        line-height: 1.6;
      }
    }
  }
}

/*-----------------------------------*\
#RESPONSIVE
\*-----------------------------------*/
@media (min-width: 320px) {
  .service-list {
    text-align: center;
  }
  .icon-box {
    width: 40px;
    height: 40px;
    margin-left: -5px;
    border-radius: 16px;
    font-size: 24px;
  }
}

@media (min-width: 450px) {
  .icon-box {
    width: 40px;
    height: 40px;
    margin-left: -5px;
    border-radius: 16px;
    font-size: 24px;
  }
}

@media (min-width: 580px) {
  .service-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    gap: 18px;
    padding: 30px;
  }

  .service-icon-box {
    margin-bottom: 0;
    margin-top: 5px;
  }

  .service-content-box {
    text-align: left;
  }
  .icon-box {
    width: 50px;
    height: 50px;
    margin-left: 0;
    border-radius: 12px;
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .service-list {
    -ms-grid-columns: 1fr 25px 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }
}
</style>
