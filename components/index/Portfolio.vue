<template>
    <section class="page__section portfolio">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para"/>
            <div class="portfolio__cells">
                <div class="portfolio__cell" v-for="(cell, index) in portfolio" :key="index">
                    <PortfolioCell v-if="cell.status === 'published'" :cell="cell"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import PortfolioCell from '~/components/index/PortfolioCell.vue';

export default {
    components: {
        SectionHeader,
        PortfolioCell
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
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
.portfolio__cell {
    flex: 0 1 32%;
    max-width: 100%;
    margin: 6px;
    cursor: pointer;
}
</style>
