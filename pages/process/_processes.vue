<template>
    <main>
        <Hero :hero="processpage.hero"/>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        ContactBox
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