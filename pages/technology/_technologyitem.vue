<template>
    <main class="tech_item">
        <Hero :hero="technologypage.hero"/>
        <section v-if="technologypage.name" class="page__section page__intro">
            <div class="page__section__inner">
                <SectionHeader :icon="technologypage.icon" :header="technologypage.name" :para="technologypage.short_description"/>
            </div>
        </section>
        <div v-if="technologypage.description" class="page__section tech__section">
            <div v-html="$md.render(technologypage.description)" class="page__section--constrained"></div>
        </div>
        <ContactBox :sitewide="sitewide" :header="'Let\'s Make ' + technologypage.name + ' Work For You'" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        SectionHeader,
        ContactBox
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        technology: function () {
            return this.$store.state.technologies
        }
    },
    // head () {
    //     return {
    //         title: sitewide.company_name,
    //         meta: [
    //             {hid: 'description', name: 'description', content: "Description here"}
    //         ]
    //     }
    // },
    async asyncData({ params, payload }) {
        if (payload) {
            return { 
                technologypage: payload
            };
        } else if (params) {
            return {
                technologypage: await require(`~/assets/content/technologies/${params.technologyitem}.json`),
            }
        }
    },
}
</script>

<style>
.tech_item {

}
.tech__section {
    width: 100%;
    background-color: var(--blue-grey);
    color: var(--site-white);
}
</style>