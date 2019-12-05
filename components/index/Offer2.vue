<template>
    <section class="page__section page__grids what__we__offer">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para"/>
            <!-- <div class="offer__side__by__side">
                    <OfferCell :service="services.websitedevelopment"/>
                    <OfferCell :service="services.affiliatemarketing"/>

            </div> -->
            <div class="offer__grid__container">
                <OfferCell v-for="(service, index) in services" :key="index" :service="service"/>
            </div>
            <SiteButton :buttonText="'Learn More'" :buttonLink="'/services'" :backgroundColor="2" :color="'#FFF'"/>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import OfferCell from '~/components/index/OfferCell.vue';
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SectionHeader,
        OfferCell,
        SiteButton
    },
    props: {
        services: Object,
        header: String,
        para: String,
        status: String
    }
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
        height: 70px;
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

    .offer__side__by__side {
        margin: 24px auto 10px;
        max-width: 1120px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: space-around;
    }
    .offer__side__by__side__cell {
        flex: 1 1 46%;
    }
</style>
