<template>
    <section class="page__section portfolio">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para" v-if="header || para"/>
            <div class="portfolio__cells">
                <div class="portfolio__cell" v-for="(cell, index) in portfolio" :key="index">
                    <PortfolioCell v-if="cell.status === 'published'" :cell="cell"/>
                </div>
            </div>
            <SiteButton :buttonText="'See More Examples'" :buttonLink="'/portfolio'" :backgroundColor="1" :color="1"/>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import PortfolioCell from '~/components/index/PortfolioCell.vue';
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SectionHeader,
        PortfolioCell,
        SiteButton
    },
    computed: {
        portfolio: function () {
            return this.$store.state.portfolio
        }
    },
    props: {
        header: String,
        para: String
    }
}
</script>

<style>
.portfolio {
    background: var(--turkish-blue);
    color: #FFF;
}
.portfolio__cells {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    max-width: 1100px;
    margin: 30px 0;
}
.portfolio::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: var(--turkish-blue);
    transform: rotate(1deg) skewX(1deg);
    transform-origin: 100% 0;
}
.portfolio::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: var(--turkish-blue);
    transform: rotate(1.3deg) skewX(1.3deg);
    transform-origin: 0 0;
    z-index: 2;
}
.portfolio__cell {
    flex: 1 1 32%;
    max-width: 100%;
    min-width: 260px;
    max-width: 500px;
    margin: 6px;
    cursor: pointer;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .portfolio__text__container {
        background: none;
        opacity: 1;
        position: relative;
        flex: 1;
        padding: 20px;
        color: var(--dark-grey);
    }
    .portfolio__cell__inner {
        flex-direction: column;
        align-content: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        background-color: #FFF;
        text-decoration: none;
    }
    .portfolio__cell:nth-of-type(even) .portfolio__cell__inner {
        flex-direction: column;
    }
    .portfolio__name {
        margin: 0 auto 10px;
    }
    .portfolio__link {
        margin: 10px auto 0;
        font-size: 1em;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 500px) {
    .portfolio__cell {
        flex: 1 1 auto;
        min-width: 0;
        max-width: 100%;
    }
}
</style>
