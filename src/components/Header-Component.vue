<script setup>
// Проверка языка браузера (i18n.locale)
import { getCurrentInstance } from 'vue'

// import ProfilePic from '../assets/images/profile.jpeg'
const { proxy } = getCurrentInstance(),
  isRussian = proxy.$isRussian() // true || false

// ICONS
import IconBirthday from '../assets/images/ui/icons/header/birthday-icon.vue'
import IconLocation from '../assets/images/ui/icons/header/location-icon.vue'
import IconEmail from '../assets/images/ui/icons/header/mail-icon.vue'
import IconPhone from '../assets/images/ui/icons/header/phone-icon.vue'

/**
 * Изменение текста кнопки "Показать контакты" -> "Скрыть контакты" и наоборот.
 */
const changeButtonText = () => {
  const [sidebarBtn] = document.querySelectorAll('[data-sidebar-btn]'),
    innerText = sidebarBtn.childNodes[0].textContent,
    newText = isRussian
      ? innerText === 'Скрыть контакты'
        ? 'Показать контакты'
        : 'Скрыть контакты'
      : innerText === 'Hide contacts'
        ? 'Show contacts'
        : 'Hide contacts'

  sidebarBtn.childNodes[0].textContent = newText
}
</script>

<template>
  <!-- !! HEADER !! -->
  <div class="sidebar" data-sidebar>
    <div class="portfolio__title">
      <!-- АВАТАРКА -->
      <figure class="avatar__box">
        <img
          src="../assets/images/ui/github logo.png"
          alt="Nicolay Kudryavtsev"
          width="50px"
          height="50px"
          loading="eager"
          draggable="false"
        />
      </figure>

      <!-- ФАМИЛИЯ, ИМЯ И ЗАНЯТИЯ -->
      <div class="info__content">
        <h1 v-if="isRussian" class="name" title="Nicolay Kudryavtsev">Николай Кудрявцев</h1>

        <h1 v-else class="name" title="Nicolay Kudryavtsev">Nicolay Kudryavtsev</h1>

        <div class="title-box">
          <label v-if="isRussian" class="title">Frontend-разработчик</label>

          <label v-else class="title">Frontend developer</label>

          <label v-if="isRussian" class="title">Тестировщик</label>

          <label v-else class="title">Tester</label>
        </div>
      </div>

      <!-- КНОПКА ПОКАЗАТЬ/СКРЫТЬ КОНТАКТЫ -->
      <button class="info__more-btn" data-sidebar-btn type="button" @click="changeButtonText">
        <span v-if="isRussian">Показать контакты</span>

        <span v-else>Show contacts</span>
      </button>
    </div>

    <!-- КОНТАКТНАЯ И ПРОЧАЯ ИНФОРМАЦИЯ -->
    <div class="portfolio__title_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <IconEmail />
          </div>

          <div class="contact-info">
            <p v-if="isRussian" class="contact-title">Электронная Почта</p>

            <p v-else class="contact-title">Email</p>

            <span href="nicolay.kudryavtsev@gmail.com" class="contact-link"
              >nicolay.kudryavtsev@gmail.com</span
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <IconPhone />
          </div>

          <div class="contact-info">
            <p v-if="isRussian" class="contact-title">Телефон</p>

            <p v-else class="contact-title">Phone</p>

            <span href="tel:+12133522795" class="contact-link">+7 (983) 501-48-17</span>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <IconBirthday />
          </div>

          <div class="contact-info">
            <p v-if="isRussian" class="contact-title">Дата рождения</p>

            <p v-else class="contact-title">birthday</p>

            <time v-if="isRussian" datetime="dd.mm.yyyy">19.12.2001</time>

            <time v-else datetime="mm-dd-yyyy">12-19-2001</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <IconLocation />
          </div>

          <div class="contact-info">
            <p v-if="isRussian" class="contact-title">Местоположение</p>

            <p v-else class="contact-title">Location</p>

            <address v-if="isRussian">Россия, г. Красноярск</address>

            <address v-else>Russia, Krasnoyarsk</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <a
            href="https://vk.com/layconi"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
              <path
                d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"
              />
            </svg>
          </a>
        </li>

        <li class="social-item">
          <a
            href="https://t.me/LaycoNicolay"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512">
              <path
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              />
            </svg>
          </a>
        </li>

        <li class="social-item">
          <a
            href="https://github.com/Nico-kun123"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
svg {
  fill: white;
}
// .contacts {
//   color: var(--light-gray-70);
//   font-size: var(--fs-3);
//   font-weight: var(--fw-500);
//   letter-spacing: -0.25px;
//   margin-bottom: 10px;
// }

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  -webkit-box-shadow: var(--shadow-1);
  box-shadow: var(--shadow-1);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: var(--eerie-black-1);
    border-radius: inherit;
    z-index: -1;
  }
}

.sidebar {
  margin-bottom: 15px;
  overflow: hidden;
  -webkit-transition: var(--transition-2);
  -o-transition: var(--transition-2);
  transition: var(--transition-2);

  &.active {
    max-height: 405px;
  }
}

.portfolio__title {
  position: relative;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 10px;
}

.avatar__box {
  img {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }
}

.info__content {
  -webkit-transition: var(--transition-2);
  -o-transition: var(--transition-2);
  transition: var(--transition-2);

  .name {
    color: var(--white-2);
    // font-size: var(--fs-4);
    font-weight: var(--fw-500);
    letter-spacing: -0.25px;
    margin-bottom: 10px;
  }

  .title {
    color: var(--white-1);
    background: var(--onyx);
    // font-size: var(--fs-8);
    font-weight: var(--fw-300);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding: 3px 12px;
    border-radius: 8px;
  }

  .title-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }
}

.info__more-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 0 15px;
  color: var(--white-2);
  background: var(--border-gradient-onyx);
  padding: 10px;
  -webkit-box-shadow: var(--shadow-1);
  box-shadow: var(--shadow-1);
  -webkit-transition: var(--transition-1);
  -o-transition: var(--transition-1);
  transition: var(--transition-1);
  z-index: 1;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: var(--bg-gradient-jet);
    -webkit-transition: var(--transition-1);
    -o-transition: var(--transition-1);
    transition: var(--transition-1);
    z-index: -1;
  }

  &:hover {
    background: var(--bg-gradient-yellow-1);
  }

  span {
    font-size: var(--fs-7);
  }
}

.portfolio__title_more {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: var(--transition-2);
  -o-transition: var(--transition-2);
  transition: var(--transition-2);
}

.sidebar.active .portfolio__title_more {
  opacity: 1;
  visibility: visible;
}

.contacts-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-item {
  min-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 16px;
}

.contact-info {
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
}

.contact-title {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-info :is(.contact-link, time, address) {
  color: var(--white-2);
  font-size: var(--fs-6);
}

.contact-info address {
  font-style: normal;
}

.social-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 15px;
  padding: 0;
  padding-left: 8px;
  -webkit-tap-highlight-color: transparent;
}

.social-item .social-link {
  color: var(--light-gray-70);
  font-size: 18px;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;

  &:hover {
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    -webkit-filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.2));
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.2));
  }
}

/*-----------------------------------*\
#RESPONSIVE
\*-----------------------------------*/
@media (min-width: 320px) {
  .portfolio__title {
    height: 6rem;
  }
  .sidebar {
    margin-inline: auto;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    max-height: 130px;
  }

  .icon-box {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }

  .sidebar.active {
    max-height: 412px;
  }

  .avatar__box {
    & img {
      // border-radius: 50%;
      width: 3rem;
      height: auto;
    }
  }

  .info__content {
    .name {
      margin-bottom: 5px;
      font-size: var(--fs-3);
    }

    .title {
      padding: 1px 8px;
      font-size: var(--fs-5);
      background-color: var(--orange-yellow-crayola);
      color: black;
      font-weight: bold;
    }

    & .title-box {
      gap: 0.25em;
      padding: 0;

      & label {
        font-size: var(--fs-5);
      }
    }
  }

  .info__more-btn {
    padding: 7px;

    span {
      display: block;
      padding: 0 5px;
      font-size: var(--fs-7);
    }
  }

  .separator {
    margin: 16px 0;
  }

  .contacts-list {
    gap: 10px;
  }

  .contact-info {
    max-width: calc(100% - 46px);
    width: calc(100% - 46px);
  }
}

@media (min-width: 450px) {
  .portfolio__title {
    // height: fit-content;
    gap: 10px;
  }
  .sidebar {
    width: 100%;
    margin-inline: auto;
    max-height: 135px;
  }

  .icon-box {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .sidebar.active {
    max-height: 440px;
  }

  .avatar__box {
    border-radius: 25px;
    img {
      width: 4rem;
      height: auto;
    }
  }

  .info__content {
    .name {
      margin-bottom: 10px;
      font-size: var(--fs-1);
    }
    .title {
      padding: 3px 12px;
      font-size: var(--fs-6);
    }

    & .title-box {
      gap: 0.5em;
    }
  }

  .info__more-btn {
    span {
      display: block;
      padding: 0 10px;
      font-size: var(--fs-7);
    }
  }
  .separator {
    margin: 16px 0;
  }

  .contacts-list {
    gap: 15px;
  }

  .contact-info {
    max-width: calc(100% - 46px);
    width: calc(100% - 46px);
  }
}

@media (min-width: 580px) {
  .portfolio__title {
    height: 7rem;
    padding-left: 1rem;
    gap: 20px;
  }
  .sidebar {
    width: 520px;
    margin-inline: auto;
    max-height: 150px;
    border-radius: 20px;
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    font-size: 20px;
  }

  .sidebar.active {
    max-height: 505px;
  }

  .avatar__box {
    img {
      // border-radius: 50%;
      width: 5rem;
      height: auto;
    }
  }

  .info__content {
    .name {
      margin-bottom: 15px;
      font-size: var(--fs-1);
    }

    .title {
      font-size: var(--fs-6);
    }
  }

  .info__more-btn {
    padding: 10px;

    span {
      display: block;
      font-size: var(--fs-7);
    }
  }

  .separator {
    margin: 16px 0;
  }

  .contacts-list {
    gap: 20px;
  }

  .contact-info {
    max-width: calc(100% - 64px);
    width: calc(100% - 64px);
  }
}

@media (min-width: 768px) {
  .sidebar {
    width: 600px;
  }
  .contacts-list {
    -ms-grid-columns: 1fr 0 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .sidebar.active {
    max-height: 370px;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    -webkit-box-shadow: var(--shadow-5);
    box-shadow: var(--shadow-5);
  }
}
</style>
