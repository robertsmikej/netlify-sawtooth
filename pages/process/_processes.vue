<template>
    <div>
        <Hero :hero="processpage.hero"/>
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
        processeses: function () {
            return this.$store.state.processeses
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
                processpage: payload
            };
        } else if (params) {
            return {
                processpage: await require(`~/assets/content/process/${params.processes}.json`),
            }
        }
    },
}
</script>

<style>

</style>