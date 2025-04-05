<template>
  <!-- !! SERVICE !! -->
  <li class="service-item">
    <div v-if="id === 1" class="service-icon-box">
      <img
        src="../assets/images/ui/icons/about/coding.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
        draggable="false"
      />
    </div>

    <div v-else-if="id === 2" class="service-icon-box">
      <img
        src="../assets/images/ui/icons/about/layout.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
        draggable="false"
      />
    </div>

    <div v-else-if="id === 3" class="service-icon-box">
      <img
        src="../assets/images/ui/icons/about/vue.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
        draggable="false"
      />
    </div>

    <div v-else-if="id === 4" class="service-icon-box">
      <img
        src="../assets/images/ui/icons/about/folder-project-placeholder.svg"
        alt="design icon"
        width="40"
        height="40"
        loading="lazy"
        draggable="false"
      />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ name }}
      </h4>

      <p class="service-item-text">
        {{ description }}
      </p>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
    /**
     * Описание занятия
     * @type {string}
     * @required
     */
    description: {
      required: true,
      type: String,
    },

    /**
     * ID занятия
     * @type {number}
     * @required
     */
    id: {
      required: true,
      type: Number,
    },

    /**
     * Название занятия
     * @type {string}
     * @required
     */
    name: {
      required: true,
      type: String,
    },
  }),
  { id } = props,
  { name } = props,
  { description } = props
</script>

<style lang="scss">
.service-title {
  margin-bottom: 20px;
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
      content: '';
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
        font-size: var(--fs-5);
        font-weight: var(--fw-3);
        line-height: 1.3;
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
  .service {
    h3 {
      margin-bottom: 20px;
      font-size: var(--fs-2);
    }
  }
  .icon-box {
    width: 40px;
    height: 40px;
    margin-left: -5px;
    border-radius: 16px;
    font-size: 24px;

    img {
      width: 70%;
    }
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
  .service {
    h3 {
      margin-bottom: 20px;
      font-size: var(--fs-1);
    }
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
