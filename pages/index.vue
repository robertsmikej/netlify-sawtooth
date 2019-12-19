<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <Offer v-if="sections.services.status" :header="sections.services.header" :para="sections.services.section_text[0].text" :services="getPageServices(pageInfo, services)" :tech="technology"/>
        <Testimonial v-if="pageInfo.testimonials" :testimonial="getTestimonial(pageInfo.testimonials)"/>
        <RecentClients :header="sections.our_work.header" :para="sections.our_work.section_text[0].text" :featured="featured"/>
        <Local v-if="sections.work_with_idaho_natives.status" :header="sections.work_with_idaho_natives.header" :para="sections.work_with_idaho_natives.section_text[0].text"/>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Offer from '~/components/index/Offer.vue';
import Local from '~/components/index/Local.vue';
import Testimonial from '~/components/testimonials/Testimonial.vue';
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
        Testimonial,
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
    methods: {
        getPageServices: function (pageInfo, services) {
            let pageservices = pageInfo.page_services;
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
        },
        getTestimonial: function (testes) {
            for (let p in this.portfolio) {
                let portfolioItem = this.portfolio[p];
                if (portfolioItem.name === testes[0]) {
                    if (portfolioItem.testimonial) {
                        return {
                            name: portfolioItem.name,
                            description: portfolioItem.testimonial.client_description,
                            main_text: portfolioItem.testimonial.testimonial_text,
                            quote: portfolioItem.testimonial.quote
                        }
                    }
                }
            }
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

</style>