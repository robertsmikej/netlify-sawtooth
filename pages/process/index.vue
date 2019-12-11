<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro v-if="pageInfo.page_intro" :intro="pageInfo.page_intro"/>
        {{processes}}
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
        pageInfo: function () {
            return this.$store.state.pages.process
        },
        processes: function () {
            return this.$store.state.processes
        }
    },
    head() {
        return {
            title: "Sawtooth Digital | Services",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Check out everything we offer you and your business."
                }
            ]
        };
    }
}
</script>

<style>

</style>