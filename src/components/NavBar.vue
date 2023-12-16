<script setup></script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <button class="navbar__link active" data-nav-link>About</button>
      </li>

      <li class="navbar__item">
        <button class="navbar__link" data-nav-link>Resume</button>
      </li>

      <li class="navbar__item">
        <button class="navbar__link" data-nav-link>Portfolio</button>
      </li>

      <!-- <li class="navbar__item">
        <button class="navbar__link" data-nav-link>Blog</button>
      </li> -->

      <li class="navbar__item">
        <button class="navbar__link" data-nav-link>Extra</button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
/*-----------------------------------*\
#NAVBAR
\*-----------------------------------*/
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.75);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  -webkit-box-shadow: var(--shadow-2);
  box-shadow: var(--shadow-2);
  z-index: 5;

  &__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;
    gap: 20px;
  }

  &__link {
    color: var(--light-gray);
    font-size: var(--fs-8);
    padding: 20px 7px;
    -webkit-transition: color var(--transition-1);
    -o-transition: color var(--transition-1);
    transition: color var(--transition-1);

    &:hover,
    &:focus {
      color: var(--light-gray-70);
    }

    &.active {
      color: var(--orange-yellow-crayola);
      font-weight: bolder;
    }
  }

  @media (min-width: 450px) {
    &__link {
      font-size: 13pt;
    }
  }
  @media (min-width: 768px) {
    &__link {
      font-size: 14pt;
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
    -webkit-box-shadow: none;
    box-shadow: none;

    &__list {
      gap: 30px;
      padding: 0 20px;
    }

    &__link {
      font-weight: var(--fw-500);
    }
  }
}
</style>
