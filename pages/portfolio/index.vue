<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro :intro="pageInfo.page_intro"/>
        <section class="portfolio__page__cells page__section">
            <div class="portfolio__page__cells__inner">
                <div class="portfolio__cell" v-for="(cell, index) in portfolio" :key="index">
                    <PortfolioCell v-if="cell.status" :cell="cell"/>
                </div>
            </div>
        </section>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import PortfolioCell from '~/components/index/PortfolioCell.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        SectionHeader,
        PortfolioCell,
        ContactBox
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.portfolio
        },
        portfolio: function () {
            return this.$store.state.portfolio
        }
    },
    head() {
        return {
            title: "Sawtooth Digital | Portfolio",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Come see for yourself what we can do for you business."
                }
            ]
        };
    }
}
</script>

<style>

.portfolio__page__cells {
    background: var(--light-orange);
    color: #FFF;
    width: 100%;
    margin: 0;
}
.portfolio__page__cells__inner {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.portfolio__cell {
    flex: 1 1 30%;
    margin: 10px;
    min-width: 240px;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 700px) {
    .portfolio__cell {
        flex: 1 1 100%;
        margin: 10px 0;
    }
}
</style>