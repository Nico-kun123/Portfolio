<script setup>
// import { ref } from "vue";
// import "../style.css"
import ProfilePic from "../assets/images/ui/profile.jpg";
import i18n from "../i18n";

function changeText() {
  const sidebarBtn = document.querySelectorAll("[data-sidebar-btn]")[0];
  const innerText = sidebarBtn.childNodes[0].textContent;

  if (i18n.global.locale.value == "ru-RU" || i18n.global.locale.value == "ru") {
    if (innerText == "Скрыть контакты") {
      document.querySelectorAll(
        "[data-sidebar-btn]"
      )[0].childNodes[0].textContent = "Показать контакты";
    } else {
      document.querySelectorAll(
        "[data-sidebar-btn]"
      )[0].childNodes[0].textContent = "Скрыть контакты";
    }
  } else {
    if (innerText == "Hide contacts") {
      document.querySelectorAll(
        "[data-sidebar-btn]"
      )[0].childNodes[0].textContent = "Show contacts";
    } else {
      document.querySelectorAll(
        "[data-sidebar-btn]"
      )[0].childNodes[0].textContent = "Hide contacts";
    }
  }
}
</script>

<template>
  <!-- #SIDEBAR -->
  <aside class="sidebar" data-sidebar>
    <div class="portfolio__title">
      <figure class="avatar__box">
        <img :src="ProfilePic" alt="Nicolay Kudryavtsev" width="100px" />
      </figure>

      <div class="info__content">
        <h1
          v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          class="name"
          title="Nicolay Kudryavtsev"
        >
          Николай Кудрявцев
        </h1>
        <h1 v-else class="name" title="Nicolay Kudryavtsev">
          Nicolay Kudryavtsev
        </h1>

        <p v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'" class="title">
          Frontend-разработчик
        </p>
        <p v-else class="title">Frontend-developer</p>
        
      </div>

      <button class="info__more-btn" data-sidebar-btn @click="changeText()">
        <span v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
          >Показать контакты</span
        >
        <span v-else>Show contacts</span>
      </button>
    </div>

    <div class="portfolio__title_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 512 512"
            >
              <path
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </svg>
          </div>

          <div class="contact-info">
            <p
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              class="contact-title"
            >
              Электронная Почта
            </p>
            <p v-else class="contact-title">Email</p>

            <span href="nicolay.kudryavtsev@gmail.com" class="contact-link"
              >nicolay.kudryavtsev@gmail.com</span
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 512 512"
            >
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
          </div>

          <div class="contact-info">
            <p
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              class="contact-title"
            >
              Телефон
            </p>
            <p v-else class="contact-title">Phone</p>

            <span href="tel:+12133522795" class="contact-link"
              >+7 (983) 501-48-17</span
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 448 512"
            >
              <path
                d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"
              />
            </svg>
          </div>

          <div class="contact-info">
            <p
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              class="contact-title"
            >
              Дата рождения
            </p>
            <p v-else class="contact-title">birthday</p>
            <time
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              datetime="19.12.2001"
              >19.12.2001</time
            >
            <time v-else datetime="mm-dd-yyyy">12-19-2001</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 384 512"
            >
              <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
          </div>

          <div class="contact-info">
            <p
              v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'"
              class="contact-title"
            >
              Местоположение
            </p>
            <p v-else class="contact-title">Location</p>

            <address v-if="$i18n.locale == 'ru-RU' || $i18n.locale == 'ru'">
              Россия, г. Красноярск
            </address>
            <address v-else>Russia, Krasnoyarsk</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="https://vk.com/layconi" class="social-link" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
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
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 496 512"
            >
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
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
svg {
  fill: #ff5f0c;
}
.contacts {
  color: var(--light-gray-70);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}

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
    content: "";
    position: absolute;
    inset: 1px;
    background: var(--eerie-black-1);
    border-radius: inherit;
    z-index: -1;
  }
}

.sidebar {
  margin-bottom: 15px;
  max-height: 112px;
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
}

.avatar__box {
  background: var(--bg-gradient-onyx);

  img {
    border-radius: 25px;
    width: 100px;
    height: auto;
  }
}

.info__content {
  .name {
    color: var(--white-2);
    font-size: var(--fs-4);
    font-weight: var(--fw-500);
    letter-spacing: -0.25px;
    margin-bottom: 10px;
  }

  .title {
    color: var(--white-1);
    background: var(--onyx);
    font-size: var(--fs-8);
    font-weight: var(--fw-300);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding: 3px 12px;
    border-radius: 8px;
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

  &::before {
    content: "";
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
  padding-bottom: 4px;
  padding-left: 7px;
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
  .sidebar {
    margin-inline: auto;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    max-height: 112px;
  }

  .icon-box {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }

  .sidebar.active {
    max-height: 405px;
  }

  .avatar__box {
    border-radius: 20px;

    img {
      width: 80px;
      height: auto;
    }
  }

  .info__content {
    .name {
      margin-bottom: 5px;
      font-size: var(--fs-2);
    }

    .title {
      padding: 3px 12px;
      font-size: var(--fs-8);
      background-color: var(--orange-yellow-crayola);
      color: black;
      font-weight: bold;
    }
  }

  .info__more-btn {
    padding: 7px;

    span {
      display: block;
      font-size: var(--fs-8);
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
  }
  .avatar__box img {
    width: 100px;
    height: auto;
  }

  .info__content {
    .name {
      margin-bottom: 10px;
      font-size: var(--fs-1);
    }
    .title {
      padding: 3px 12px;
      font-size: var(--fs-7);
    }
  }

  .info__more-btn {
    padding: 5px;

    span {
      display: block;
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

  .portfolio__title {
    gap: 25px;
  }

  .avatar__box {
    border-radius: 30px;

    img {
      width: 120px;
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
      font-size: var(--fs-8);
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
