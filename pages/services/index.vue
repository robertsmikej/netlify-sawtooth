<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro v-if="pageInfo.page_intro.status === 'published'" :intro="pageInfo.page_intro"/>
        <Offer :services="getPageServices(sitewide.major_services, services)" :tech="technology"/>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Offer from '~/components/index/Offer.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        Offer,
        ContactBox
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.services
        },
        services: function () {
            return this.$store.state.services
        },
        technology: function () {
            return this.$store.state.technologies
        }
    },
    methods: {
        getPageServices: function (pageservices, services) {
            let newArr = [];
            for (let s in services) {
                let service = services[s];
                for (let ps in pageservices) {
                    if (pageservices[ps] === service.service_type) {
                        newArr.push(service);
                    }
                }
            }
            return newArr;
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