<template>
    <section class="page__section technology">
        <SectionHeader :header="header" :para="para" v-if="header || para"/>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';

export default {
    components: {
        SectionHeader
    },
    props: {
        header: String,
        para: String
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.technology
        },
        technologies: function () {
            return this.$store.state.technologies
        }
    },
    head() {
        return {
            title: "Sawtooth Digital | Technology",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "These are technologies that we use to make you a website, and give your customers a great experience."
                }
            ]
        };
    }
}
</script>

<style>

</style>