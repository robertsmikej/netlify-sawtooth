<template>
    <section class="page__section our__stack">
        <SectionHeader :header="header" :para="para" v-if="header || para"/>
        <div v-html="$md.render(indexInfo.page_section_6.page_section_6_description)"></div>
        <SiteButton :buttonText="'Learn More'" :buttonLink="'/technology'" :backgroundColor="'var(--light-orange)'" :color="'#FFF'"/>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SectionHeader,
        SiteButton
    },
    props: {
        header: String,
        para: String,
        indexInfo: Object
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
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
.our__stack {
    max-width: 1000px;
}
.our__stack img[alt*="Jam Stack"] { 
    max-width: 400px;
    width: 96%;
    margin: 20px auto;
    
}
</style>