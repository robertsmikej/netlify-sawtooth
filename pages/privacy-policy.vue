<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <PageIntro :intro="pageInfo.page_intro"/>
        <div class="privacy__policy" v-html="$md.render(privacyPolicy.privacy_policy_text)">      
        </div>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';

export default {
    components: {
        Hero,
        PageIntro
    },
    computed: {
        pageInfo: function () {
            return this.$store.state.pages.privacy_policy
        },
        privacyPolicy: function () {
            return this.$store.state.privacyPolicy
        }
    },
    head () {
        return {
            title: 'Privacy Policy - Sawtooth Digital',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "Your privacy is important to us, take a moment to see how we handle your data."
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.$nuxt.$loading.finish();
            }, 2500);
        });
    }
}
</script>

<style>
.privacy__policy {
    max-width: 1000px;
    width: 100%;
    padding: 50px 30px 100px;
    margin: 0 auto;
}
.privacy__policy p, .privacy__policy ul, .privacy__policy li, .privacy__policy h3, .privacy__policy h4 {
    text-align: left;
}
.page__intro::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: var(--light-orange);
    transform: rotate(-1.3deg) skewX(-1.3deg);
    transform-origin: 0 0;
    z-index: 2;
}
.page__intro {
    background-color: var(--light-orange);
    color: #FFF;
    font-weight: 600;
    font-size: 20px;
    padding-top: 100px;
}
</style>