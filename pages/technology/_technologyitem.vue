<template>
    <main>
        <Hero :hero="technologypage.hero"/>
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
        technology: function () {
            return this.$store.state.technologies
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
                technologypage: payload
            };
        } else if (params) {
            return {
                technologypage: await require(`~/assets/content/technologies/${params.technologyitem}.json`),
            }
        }
    },
}
</script>

<style>

</style>