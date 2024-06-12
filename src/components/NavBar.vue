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

.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  box-shadow: var(--shadow-2);
  z-index: 10;

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
  }

  &__item {
    padding: 0 10px;
  }

  &__link {
    -webkit-tap-highlight-color: transparent;
    position: relative;
    color: var(--light-gray);
    // font-size: var(--fs-4);
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
      width: 100%;
    }

    &__link {
      font-size: var(--fs-6);
      padding: 1.3em 0;
    }
  }

  @media (min-width: 450px) {
    &__list {
      gap: 20px;
    }
    &__link {
      font-size: var(--fs-6);
    }
  }

  @media (min-width: 768px) {
    &__link {
      font-size: var(--fs-4);
    }
  }

  @media (min-width: 1024px) {
    &__link {
      font-size: var(--fs-3);
      font-weight: var(--fw-500);
      padding: 0.5em 0;
    }
  }
}
</style>
