<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro v-if="pageInfo.page_intro.status === 'published'" :intro="pageInfo.page_intro"/>
        
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';


export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro
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