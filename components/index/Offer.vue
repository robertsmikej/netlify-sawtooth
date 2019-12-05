<template>
    <section class="page__section page__grids what__we__offer">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para"/>
            <div class="offer__grid__container">
                <!-- {{services}} -->
                <OfferCell v-for="(service, index) in services" :key="index" :service="service" :technologies="techno(service)"/>
            </div>
            <SiteButton :buttonText="'See All Services'" :buttonLink="'/services'" :backgroundColor="4" :color="1"/>
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
        status: String,
        tech: Array
    },
    computed: {
        technology: function () {
            return this.$store.state.technologies
        }
    },
    methods: {
        techno: function (data) {
            let used = data.tech.tech_used;
            let tech = this.technology;
            let arr = [];
            for (var u in used) {
                var us = used[u];
                for (var t in tech) {
                    var te = tech[t].name;
                    if (te.toLowerCase() == us.toLowerCase()) {
                        arr.push(tech[t]);
                    }
                }
            }
            return arr;
        }
    }
}
</script>

<style>
    .what__we__offer {
        /* background-color: var(--light-orange); */
        position: relative;
    }

    .what__we__offer::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: #FFF;
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
        background-color: #FFF;
        transform: rotate(1.3deg) skewX(1.3deg);
        transform-origin: 0 0;
        z-index: 2;
    }
    .offer__grid__container {
        margin: 24px auto 16px;
        max-width: 1000px;
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
    .what__we__offer .site__button {
        margin-bottom: 20px;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 600px) {
        .offer__grid__container {
            margin: 6px auto;
        }
    }
</style>
