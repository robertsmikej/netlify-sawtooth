<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro :intro="pageInfo.page_intro"/>
        <Portfolio/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Portfolio from '~/components/index/Portfolio.vue';

export default {
    components: {
        Hero,
        PageIntro,
        Portfolio
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.technology
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

</style>