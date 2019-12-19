<template>
    <div class="section__header__container">
        <div v-if="icon" class="section__header__icon__container">
            <img :src="icon" :alt="header" class="section__header__icon">
        </div>
        <h2 v-if="header" class="page__section__header">{{ header }}</h2>
        <h3 v-if="subheader" class="page__section__sub__header">{{ subheader }}</h3>
        <p v-if="para" class="page__section__header__para">{{ para }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        header: String,
        subheader: String,
        para: String
    }
}
</script>

<style>
    .section__header__container {
        margin: 0 auto;
        display: block;
    }
    .section__header__icon__container {
        width: 100%;
    }
    .section__header__icon {
        max-width: 60px;
    }
    .page__section__header {
        max-width: 810px;
        margin: 20px auto 24px;
        position: relative;
        z-index: 1;
    }
    .page__section__header::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translate(-50%, 0);
        height: 2px;
        width: 24%;
        z-index: -1;
        background: var(--light-orange);
    }
    .page__section .page__section__header::after {
        

    }
    .page__section__header__para {
        max-width: 720px;
        margin: 10px auto;
    }
</style>
