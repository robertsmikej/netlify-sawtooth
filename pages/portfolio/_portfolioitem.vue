<template>
    <div>
        <Hero :hero="portfoliopage.hero"/>
        {{portfoliopage}}
    </div>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';


export default {
    components: {
        Hero,
        PageIntro
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        portfolio: function () {
            return this.$store.state.portfolio
        }
    },
    methods: {
        getHero: function (pagedata) {
            return {
                hero_header: pagedata.name
            }
        }
    },
    // head () {
    //     return {
    //         title: this.$store.state.springs[this.$route.params.name].name + " Hot Springs - " + this.$store.state.springs[this.$route.params.name].state + " - " + this.$store.state.springs[this.$route.params.name].region + " region. | HotSpringing.com",
    //         meta: [
    //             {hid: 'description', name: 'description', content: this.$store.state.springs[this.$route.params.name].short_description}
    //         ]
    //     }
    // },
    async asyncData({ params, payload }) {
        if (payload) {
            return { 
                portfoliopage: payload
            };
        } else if (params) {
            return {
                portfoliopage: await require(`~/assets/content/portfolio/${params.portfolioitem}.json`),
            }
        }
    },
}
</script>

<style>

</style>