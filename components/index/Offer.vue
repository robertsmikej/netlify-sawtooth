<template>
    <section v-if="status === 'published'" class="page__section page__grids what__we__offer">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para"/>
            <div class="offer__grid__container">
                <OfferCell v-for="(offer, index) in offers" :key="index" :offer="offer"/>
            </div>
            <nuxt-link to="/services" class="site__button services__button">See more</nuxt-link>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import OfferCell from '~/components/index/OfferCell.vue';

export default {
    components: {
        SectionHeader,
        OfferCell
    },
    props: {
        offers: Array,
        header: String,
        para: String,
        status: String
    },
    // mounted() {
    //     this.$nextTick(() => {
    //         this.$nuxt.$loading.start();
    //         setTimeout(() => {
    //             this.$nuxt.$loading.finish();
    //         }, 1500);
    //     });
    // }
}
</script>

<style>
    .what__we__offer {
        background-color: var(--light-orange);
        position: relative;
    }
    .what__we__offer::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: var(--light-orange);
        transform: rotate(-1.3deg) skewX(-1.3deg);
        transform-origin: 0 0;
        z-index: 2;
    }
    .what__we__offer::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: var(--light-orange);
        transform: rotate(1.3deg) skewX(1.3deg);
        transform-origin: 0 0;
        z-index: 2;
    }
    .what__we__offer .page__section__header, .what__we__offer .page__section__header__para {
        color: #FFF;
    }
    .offer__grid__container {
        margin: 24px auto 10px;
        max-width: 1120px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .services__button {
        background-color: var(--turkish-blue);
        color: #FFF;
    }
</style>
