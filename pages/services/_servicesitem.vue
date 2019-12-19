<template>
    <main>
        <HeroSmall :hero="servicespage.hero"/>
        <PageIntro v-if="servicespage.page_intro" :intro="servicespage.page_intro"/>
        <SubServices v-if="servicespage.sub_services" :subs="servicespage.sub_services.sub_services" :parent="servicespage"/>
        <SideBySide v-if="servicespage.side_by_side" :data="servicespage.side_by_side" :image="servicespage.icon_large" :textSide="'left'"/>
        <Process v-if="servicespage.service_processes" :details="servicespage.service_processes" :process="getProcesses(servicespage.service_processes.processes_list, processes)"/>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import HeroSmall from '~/components/hero/HeroSmall.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import SubServices from '~/components/services/SubServices.vue';
import SideBySide from '~/components/general/SideBySide.vue';
import Process from '~/components/process/Process.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        HeroSmall,
        PageIntro,
        SubServices,
        SideBySide,
        Process,
        ContactBox
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        services: function () {
            return this.$store.state.services
        },
        processes: function () {
            return this.$store.state.processes
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
        getProcesses: function (data, stored) {
            let newArr = [];
            let d = {};
            for (var a in data) {
                newArr.push(data[a][0]);
            }
            for(let s in stored) {
                let stor = stored[s];
                if (newArr.includes(stor.process_header)) {
                    d[s] = stor;
                    d[s]["name"] = stor.process_header;
                    d[s]["type"] = "process";
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