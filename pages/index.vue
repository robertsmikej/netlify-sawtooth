<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <Offer :status="pageInfo.page_section_1.page_section_1_status" :header="pageInfo.page_section_1.page_section_1_header" :para="pageInfo.page_section_1.page_section_1_para" :services="services"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Offer from '~/components/index/Offer.vue';
import Local from '~/components/index/Local.vue';
import Testimonials from '~/components/general/Testimonials.vue';
import Recent from '~/components/index/Recent.vue';
import Process from '~/components/index/Process.vue';
import ContactBox from '~/components/general/ContactBox.vue';

export default {
    components: {
        Hero,
        PageIntro,
        ContactBox,
        Offer,
        Local,
        Testimonials,
        Recent,
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
