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

      <li class="navbar__item">
        <button class="navbar__link" data-nav-link>Blog</button>
      </li>

      <li class="navbar__item">
        <button class="navbar__link" data-nav-link>Extra</button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
/*-----------------------------------*\
#NAVBAR
\*-----------------------------------*/

// NAVBAR (СНИЗУ СТРАНИЦЫ)
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  -webkit-box-shadow: var(--shadow-2);
  box-shadow: var(--shadow-2);
  z-index: 10;

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
    gap: 10px;
  }

  &__link {
    color: var(--light-gray);
    font-size: var(--fs-8);
    padding: 0;
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
      -webkit-tap-highlight-color: transparent;
    }
  }

  @media (min-width: 320px) {
    &__list {
      gap: 5px;
    }
    &__link {
      font-size: 9pt;
      padding: 1.5em 0;
    }
  }
  @media (min-width: 350px) {
    &__list {
      gap: 3px;
    }
    &__link {
      font-size: 11pt;
    }
  }
  @media (min-width: 450px) {
    &__list {
      gap: 20px;
    }
    &__link {
      font-size: 11pt;
    }
  }
  @media (min-width: 768px) {
    &__link {
      font-size: 13pt;
      // padding: 1em;
    }
  }

  @media (min-width: 1024px) {
    &__list {
      font-size: 15pt;
    }

    &__link {
      font-weight: var(--fw-500);
      padding: 0.5em;
    }
  }
}
</style>
