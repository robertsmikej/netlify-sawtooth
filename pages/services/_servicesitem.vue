<template>
    <main>
        <Hero :hero="servicespage.hero"/>
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
        sitewide: function () {
            return this.$store.state.sitewide
        },
        services: function () {
            return this.$store.state.services
        }
    },
    // data() {
    //     return {
    //         servicesitem: {
    //             name: ""
    //         }
    //     }
    // },
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
                servicespage: payload
            };
        } else if (params) {
            return {
                servicespage: await require(`~/assets/content/services/${params.servicesitem}.json`),
            }
        }
    },
}
</script>

<style>

</style>