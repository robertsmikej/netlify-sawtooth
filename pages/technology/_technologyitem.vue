<template>
    <div>
        <Hero :hero="technologypage.hero"/>
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
        technology: function () {
            return this.$store.state.technologies
        }
    },
    data() {
        return {
            portfolioitem: {
                name: ""
            }
        }
    },
    // methods: {
    //     getHero: function (pagedata) {
    //         return {
    //             hero_header: pagedata.name
    //         }
    //     }
    // },
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
                technologypage: payload
            };
        } else if (params) {
            return {
                technologypage: await require(`~/assets/content/technologies/${params.portfolioitem}.json`),
            }
        }
    },
}
</script>

<style>

</style>