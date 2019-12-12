<template>
    <section class="sub__services page__section">
        <SectionHeader :header="subs.header" :para="subs.para"/>
        <div class="sub__cells">
            <SubServiceCell v-for="(sub, index) in narrowedSubs" :key="index" :cell="sub"/>
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
        subs: Object
    },
    computed: {
        subservices: function () {
            return this.$store.state.subservices
        },
        narrowedSubs: function () {
            let newSubs = {};
            let servicesU = this.subs.list;
            let subState = this.$store.state.subservices;
            for (let d in servicesU) {
                let serviceused = servicesU[d[0]].sub_services_used[0];
                for (let s in subState) {
                    let subservice = subState[s];
                    if (subservice.name === serviceused) {
                        newSubs[subservice.name] = subservice;
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
</style>