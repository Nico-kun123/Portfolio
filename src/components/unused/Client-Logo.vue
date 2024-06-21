<!-- <script setup>
    const { id, name, link } = defineProps(['id', 'name', 'link'])
    </script>

    <template>
    <li class="clients-item">
    <a
    v-if="id == 1"
    :href="link"
    >
    <img
    src="../assets/images/ui/profile.png"
    :alt="name"
    loading="lazy"
    >
    </a>
    <a
    v-else
    :href="link"
    >
    <img
    src="../assets/images/testimonials/placeholder.png"
    :alt="name"
    loading="lazy"
    >
    </a>
    </li>
    </template>

    <style scoped>
    /*-----------------------------------*\
    #RESET
    \*-----------------------------------*/

    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    a {
    text-decoration: none;
    }

    li {
    list-style: none;
    }

    img,
    a {
    display: block;
    max-width: 10rem;
    }

    /* button {
    font: inherit;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    } */

    ::selection {
    background: var(--orange-yellow-crayola);
    color: var(--smoky-black);
    }

    :focus {
    outline-color: var(--orange-yellow-crayola);
    }

    /* html {
    font-family: var(--main-font);
    } */

    /* body {
    background: var(--smoky-black);
    }

    .h2,
    .h3,
    .h4,
    .h5 {
    color: var(--white-2);
    text-transform: capitalize;
    }

    .h2 {
    font-size: var(--fs-1);
    }

    .h3 {
    font-size: var(--fs-2);
    }

    .h4 {
    font-size: var(--fs-4);
    }

    .h5 {
    font-size: var(--fs-7);
    font-weight: var(--fw-500);
    } */

    .clients-item {
    min-width: 50%;
    scroll-snap-align: start;
    }

    .clients-item img {
    width: 100%;
    filter: grayscale(1);
    transition: var(--transition-1);
    }

    .clients-item img:hover {
    filter: grayscale(0);
    }

    /*-----------------------------------*\
    #RESPONSIVE
    \*-----------------------------------*/

    /** responsive larger than 450px screen */

    @media (min-width: 450px) {
    /** client */
    .clients-item {
    min-width: calc(33.33% - 10px);
    }
    }

    /** responsive larger than 580px screen */
    @media (min-width: 580px) {
    /** client */
    .clients-item {
    min-width: calc(33.33% - 35px);
    }
    }

    /** responsive larger than 1024px screen */
    @media (min-width: 1024px) {
    /**
    * CUSTOM PROPERTY
    */

    :root {
    /** shadow */
    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.125);
    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.125);
    }

    /* clients */
    .clients-item {
    min-width: calc(25% - 38px);
    }
    }

    /**
    * responsive larger than 1250px screen
    */
    </style> -->
