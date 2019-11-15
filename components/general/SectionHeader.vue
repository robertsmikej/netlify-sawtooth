<template>
    <div class="section__header__container">
        <h2 v-if="header" class="page__section__header">{{ header }}</h2>
        <h3 v-if="subheader" class="page__section__sub__header">{{ subheader }}</h3>
        <p v-if="para" class="page__section__header__para">{{ para }}</p>
    </div>
</template>

<script>
export default {
    props: {
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
    .page__section__header {
        max-width: 810px;
        margin: 20px auto 24px;
        font-size: 3em;
        line-height: 1em;
        font-weight: 700;
        position: relative;
        z-index: 1;
    }
    .page__section__header::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 0);
        height: 2px;
        width: 180px;
        z-index: -1;
    }
    .page__section:nth-of-type(even) .page__section__header::after {
        background: var(--light-orange);
    }
    .page__section:nth-of-type(odd) .page__section__header::after {
        background: #FFF;
    }
    .page__section__header__para {
        max-width: 700px;
        margin: 10px auto;
        font-size: 1.1em;
        line-height: 1.5em;
        font-weight: 500;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 900px) {
        .page__section__header {
            font-size: 2.5em;
        }
    }
</style>
