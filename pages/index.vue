<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <Offer v-if="sections.services.status" :header="sections.services.header" :para="sections.services.section_text[0].text" :services="services" :tech="technology"/>
        <RecentClients :header="sections.our_work.header" :para="sections.our_work.section_text[0].text" :featured="featured"/>
        <!-- <Portfolio v-if="sections.our_work.status" :header="sections.our_work.header" :para="sections.our_work.section_text[0].text"/> -->
        <!-- <OurStack v-if="pageInfo.page_section_6.status" :header="pageInfo.page_section_6.page_section_6_header" :para="pageInfo.page_section_6.page_section_6_para" :indexInfo="pageInfo"/> -->
        <Testimonials v-if="sections.testimonials.status" :header="sections.testimonials.header" :para="sections.testimonials.section_text[0].text"/>
        <Local v-if="sections.work_with_idaho_natives.status" :header="sections.work_with_idaho_natives.header" :para="sections.work_with_idaho_natives.section_text[0].text"/>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Offer from '~/components/index/Offer.vue';
import Local from '~/components/index/Local.vue';
import Testimonials from '~/components/general/Testimonials.vue';
import Recent from '~/components/index/Recent.vue';
import Portfolio from '~/components/index/Portfolio.vue';
import RecentClients from '~/components/general/RecentClients.vue';
import Technology from '~/components/general/Technology.vue';
import OurStack from '~/components/general/OurStack.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        Offer,
        Local,
        Testimonials,
        Recent,
        Portfolio,
        RecentClients,
        Technology,
        OurStack,
        ContactBox
    },
    transition: 'bounce',
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.index
        },
        sections: function () {
            return this.$store.state.pages.index.sections
        },
        services: function () {
            return this.$store.state.services
        },
        portfolio: function () {
            return this.$store.state.portfolio
        },
        processes: function () {
            return this.$store.state.processes
        },
        technology: function () {
            return this.$store.state.technologies
        },
        featured: function () {
            let site = this.$store.state.sitewide.featured_clients;
            let port = this.$store.state.portfolio;
            let newArr = [];
            for (let s in site) {
                let client = site[s];
                for (let p in port) {
                    let porter = port[p];
                    if (porter.name === client) {
                        newArr.push(porter);
                    }
                }
            }
            return newArr
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
                },
                { hid: 'robots', name: 'robots', content: 'index, follow' }
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
