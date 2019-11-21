<template>
    <main class="portfolio__page">
        <Hero :hero="portfoliopage.hero"/>
        <div class="page__section portfolio__company__intro">
            <img :src="portfoliopage.logo" :alt="portfoliopage.name + ' Logo'" class="portfolio__logo"/>
            <SectionHeader :para="portfoliopage.para"/>
            <!-- <SectionHeader :header="portfoliopage.name" :para="portfoliopage.para"/> -->
        </div>
        <!-- {{portfoliopage}} -->
        <div class="page__section portfolio__content">
            <div class="portfolio__content__inner">
                <div class="our__services__used">
                    <h3 class="portfolio__header">What We Do For Them</h3>
                    <div class="services__used__cell" v-for="(item, index) in getServices(portfoliopage.category, this.services)" :key="index">
                        <TechnologyCell :cell="item"/>
                    </div>
                </div>
                <div class="portfolio__text__content" v-if="portfoliopage.long_description" v-html="$md.render(portfoliopage.long_description)"></div>
                <div class="portfolio__tech__used">
                    <div class="portfolio__tech__section">
                        <h3 class="portfolio__header">Technologies Used</h3>
                        <div class="services__used__cell" v-for="(item, index) in getUsed(portfoliopage.tech.tech_used, this.technology)" :key="index">
                            <TechnologyCell :cell="item"/>
                        </div>
                    </div>
                    <div class="portfolio__tech__section">
                        <h3 class="portfolio__header">Integrations Used</h3>
                        <div class="services__used__cell" v-for="(item, index) in getUsed(portfoliopage.tech.integrations_used, this.integrations)" :key="index">
                            <TechnologyCell :cell="item"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import TechnologyCell from '~/components/general/TechnologyCell.vue';

export default {
    components: {
        Hero,
        PageIntro,
        SectionHeader,
        TechnologyCell
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
    data() {
        return {
            
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
                    // d[service.service_type]["short_description"] = service.service_short_description;
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
}
.portfolio__company__intro .page__section__header__para {
    margin-bottom: 0;
}
.portfolio__content {
    
}
.portfolio__content__inner {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
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
    margin: 0 auto 32px;
}
.our__services__used {
    flex: 1 1 25%;
    padding: 5px;
}
.portfolio__tech__used {
    flex: 1 1 25%;
    padding: 5px;
}
.portfolio__text__content {
    flex: 1 1 50%;
    padding: 5px;
}
.portfolio__text__content p {
    font-size: 1em;
    font-weight: 400;
    margin: 0 auto 10px;
}
.services__used__cell .tech__cell__inner {
    margin: 20px 0;
}
</style>