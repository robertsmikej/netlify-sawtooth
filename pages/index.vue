<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <Offer2 v-if="pageInfo.page_section_1.status === 'published'" :header="pageInfo.page_section_1.page_section_1_header" :para="pageInfo.page_section_1.page_section_1_para" :services="services"/>
        <Process v-if="pageInfo.page_section_3.status === 'published'" :header="pageInfo.page_section_3.page_section_3_header" :para="pageInfo.page_section_3.page_section_3_para" :process="processes"/>
        <Portfolio v-if="pageInfo.page_section_5.status === 'published'" :header="pageInfo.page_section_5.page_section_5_header" :para="pageInfo.page_section_5.page_section_5_para"/>
        <!-- <OurStack v-if="pageInfo.page_section_6.status === 'published'" :header="pageInfo.page_section_6.page_section_6_header" :para="pageInfo.page_section_6.page_section_6_para" :indexInfo="pageInfo"/> -->
        <Testimonials v-if="pageInfo.page_section_2.status === 'published'" :header="pageInfo.page_section_2.page_section_2_header" :para="pageInfo.page_section_2.page_section_2_para"/>
        <Local v-if="pageInfo.page_section_4.status === 'published'" :header="pageInfo.page_section_4.page_section_4_header" :para="pageInfo.page_section_4.page_section_4_para"/>
        <ContactBox :sitewide="sitewide.contact_box"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Offer from '~/components/index/Offer.vue';
import Offer2 from '~/components/index/Offer2.vue';
import Local from '~/components/index/Local.vue';
import Testimonials from '~/components/general/Testimonials.vue';
import Recent from '~/components/index/Recent.vue';
import Process from '~/components/index/Process.vue';
import Portfolio from '~/components/index/Portfolio.vue';
import Technology from '~/components/general/Technology.vue';
import OurStack from '~/components/general/OurStack.vue';
import ContactBox from '~/components/general/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        ContactBox,
        Offer,
        Offer2,
        Local,
        Testimonials,
        Recent,
        Portfolio,
        Technology,
        OurStack,
        Process
    },
    transition: 'bounce',
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.index
        },
        services: function () {
            return this.$store.state.services
        },
        portfolio: function () {
            return this.$store.state.portfolio
        },
        processes: function () {
            return this.$store.state.processes
        }
    },
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
            title: "Sawtooth Digital | Boise Idaho Based Web Development Agency",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Sawtooth Digital is a Digital Web Design and Development Agency based in Boise, Idaho. Our passion is creating custom, cutting edge websites that will make you money."
                }
            ]
        };
    }
}
</script>

<style>
.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
