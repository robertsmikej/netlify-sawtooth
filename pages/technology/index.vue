<template>
    <main class="technology">
        <Hero :hero="pageInfo.hero"/>
        <PageIntro v-if="pageInfo.page_intro" :intro="pageInfo.page_intro"/>
        <div class="page__section integrations__section">
            <SectionHeader :header="pageInfo.page_section_1.page_section_1_header" :para="pageInfo.page_section_1.page_section_1_para"/>
            <div class="integrations__cells">
                <div class="tech__cell integration__cell" v-for="(item, index) in integrations" :key="index">
                    <TechnologyCell v-if="item.status === 'published'" :cell="item"/>
                </div>
            </div>
        </div>
        <div class="page__section technology__section">
            <SectionHeader :header="pageInfo.page_section_2.page_section_2_header" :para="pageInfo.page_section_2.page_section_2_para"/>
            <div class="technology__cells">
                <div class="tech__cell" v-for="(item, index) in technology" :key="index">
                    <TechnologyCell v-if="item.status === 'published'" :cell="item"/>
                </div>
            </div>
        </div>
        <ContactBox :sitewide="sitewide.contact_box"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import TechnologyCell from '~/components/general/TechnologyCell.vue';
import ContactBox from '~/components/general/ContactBox.vue';

export default {
    components: {
        Hero,
        PageIntro,
        SectionHeader,
        TechnologyCell,
        ContactBox
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.technology
        },
        technology: function () {
            return this.$store.state.technologies
        },
        integrations: function () {
            return this.$store.state.integrations
        }
    },
    head() {
        return {
            title: "Sawtooth Digital | Portfolio",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Come see for yourself what we can do for you business."
                }
            ]
        };
    }
}
</script>

<style>
.technology {
    
}
.technology::before {
    display: none;
}
.technology .page__intro::before {
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
.technology .page__intro {
    background-color: var(--light-orange);
    color: #FFF;
    font-weight: 600;
    font-size: 20px;
    padding-top: 100px;
}
.technology__section {
    background-color: var(--light-orange);
    color: #FFF;
}
.technology__cells, .integrations__cells {
    max-width: 1200px;
    width: 100%;
    margin: 10px auto;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
}

.technology__cells .tech__cell a {
    color: #FFF;
}
.tech__cell {
    flex: 0 1 25%;
    margin: 10px 0;
}
</style>