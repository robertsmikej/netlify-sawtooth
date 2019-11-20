<template>
    <div>
        <Hero :hero="portfoliopage.hero"/>
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
    data() {
        return {
            portfolioitem: {
                name: ""
            }
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
    //         title: sitewide.company_name,
    //         meta: [
    //             {hid: 'description', name: 'description', content: "Description here"}
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