<template>
    <main class="thanks">
        <Hero :hero="pageInfo.hero"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';

export default {
    components: {
        Hero
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.thanks
        }
    },
    head() {
        return {
            title: "Sawtooth Digital | Thanks For Reaching Out",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "We'll be in touch soon!"
                },
                { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
            ]
        };
    }
}
</script>

<style>
.thanks .contact__box {
    display: none;
}
</style>
