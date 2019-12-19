<template>
    <section class="sub__services page__section">
        <SectionHeader :header="subs.header" :para="subs.para"/>
        <div class="sub__cells">
            <SubServiceCell v-for="(sub, index) in narrowedSubs" :key="index" :cell="sub" :parentType="parent.slug"/>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import SubServiceCell from '~/components/services/SubServiceCell.vue';

export default {
    components: {
        SectionHeader,
        SubServiceCell
    },
    props: {
        subs: Array,
        parent: Object
    },
    computed: {
        services: function () {
            return this.$store.state.services
        },
        narrowedSubs: function () {
            let newSubs = {};
            let servicesU = this.subs;
            for (let d in servicesU) {
                let serviceused = servicesU[d];
                for (let s in this.services) {
                    let service = this.services[s];
                    if (service.service_type === serviceused) {
                        newSubs[service.service_type] = service;
                    }
                }
            }
            return newSubs;
        }
    },
    methods: {

    }
}
</script>

<style>
.sub__services {
    background-color: var(--turkish-blue);
    color: var(--site-white);
}
.sub__cells {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
}
.sub__cells p {
    
}
</style>