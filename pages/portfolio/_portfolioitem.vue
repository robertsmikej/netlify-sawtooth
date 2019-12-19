<template>
    <main class="portfolio__page">
        <Hero :hero="portfoliopage.hero"/>
        <div class="portfolio__company__intro">
            <img v-if="portfoliopage.logo" :src="portfoliopage.logo" :alt="portfoliopage.name + ' Logo'" class="portfolio__logo"/>
            <SectionHeader :para="portfoliopage.para"/>
        </div>
        <div class="page__section portfolio__content">
            <div class="portfolio__content__inner">
                <div class="portfolio__text__content" v-if="portfoliopage.long_description" v-html="$md.render(portfoliopage.long_description)"></div>
                <div class="portfolio__tech__used portfolio__side__bar">
                    <div class="portfolio__tech__section" v-if="portfoliopage.category">
                        <h4 class="portfolio__header">How We Help Them</h4>
                        <div class="services__used__cell" v-for="(item, index) in getServices(portfoliopage.category, this.services)" :key="index">
                            <TechnologyCell :cell="item"/>
                        </div>
                    </div>
                    <hr v-if="portfoliopage.tech.tech_used" />
                    <div class="portfolio__tech__section" v-if="portfoliopage.tech.tech_used">
                        <h4 class="portfolio__header">Technologies Used</h4>
                        <div class="services__used__cell" v-for="(item, index) in getUsed(portfoliopage.tech.tech_used, this.technology)" :key="index">
                            <TechnologyCell :cell="item"/>
                        </div>
                    </div>
                    <hr v-if="portfoliopage.tech.integrations_used" />
                    <div class="portfolio__tech__section" v-if="portfoliopage.tech.integrations_used">
                        <h4 class="portfolio__header">Integrations Used</h4>
                        <div class="services__used__cell" v-for="(item, index) in getUsed(portfoliopage.tech.integrations_used, this.integrations)" :key="index">
                            <TechnologyCell :cell="item"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import TechnologyCell from '~/components/general/TechnologyCell.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
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
        portfolio: function () {
            return this.$store.state.portfolio
        },
        services: function () {
            return this.$store.state.services
        },
        technology: function () {
            return this.$store.state.technologies
        },
        integrations: function () {
            return this.$store.state.integrations
        }
    },
    methods: {
        getHero: function (pagedata) {
            return {
                hero_header: pagedata.name
            }
        },
        getServices: function (data, stored) {
            let d = {};
            for(let s in stored) {
                let stor = stored[s];
                if (data.includes(stor.service_type)) {
                    d[stor.service_type] = stor;
                    d[stor.service_type]["name"] = stor.service_type;
                    d[stor.service_type]["type"] = "services";
                }
            }
            return d;
        },
        getUsed: function (data, stored) {
            let d = {};
            for(let s in stored) {
                let stor = stored[s];
                if (data.includes(stor.name)) {
                    d[stor.name] = stor;
                    d[stor.name]["short_description"] = "";
                    d[stor.name]["type"] = "technology";
                }
            }
            return d;
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
                portfoliopage: payload
            };
        } else if (params) {
            return {
                portfoliopage: await require(`~/assets/content/portfolio/${params.portfolioitem}.json`),
            }
        }
    },
}
</script>

<style>
.portfolio__page {

}
.portfolio__company__intro {
    /* background: var(--turkish-blue); */
    /* color: #FFF; */
    background-color: var(--light-blue);
    padding:  40px 10px 40px;
}
.portfolio__company__intro .page__section__header__para {
    margin-bottom: 0;
}
.portfolio__content {
    
}
.portfolio__tech__used hr {
    width: 80%;
    margin: 10px auto;
}
.portfolio__content__inner {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
}
.portfolio__logo {
    object-fit: contain;
    align-self: center;
    margin: 0 auto 10px;
    max-width: 200px;
    width: auto;
    display: block;
}
.portfolio__header {
    margin: 10px auto;
}
.portfolio__tech__section {
    margin: 0 0 30px;
}
.portfolio__side__bar {
    flex: 1 1 25%;
    padding: 5px;
    min-width: 160px;
}
.portfolio__text__content {
    flex: 1 1 50%;
    padding: 5px;
}
.portfolio__text__content p {
    margin: 0 auto 10px;
    text-align: left;
}
.services__used__cell .tech__cell__inner {
    margin: 20px 0;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 670px) {
    .portfolio__header {
        width: 100%;
        margin-bottom: 0px;
    }
    .portfolio__tech__section {
        flex: 1 1 100%;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
    }
    .portfolio__side__bar {
        flex: 1 1 100%;
        padding: 5px;
        width: 120px;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
    }
    .services__used__cell {
        width: 120px;
        margin: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }
}
</style>