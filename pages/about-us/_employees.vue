<template>
    <main>
        <!-- <Hero :hero="employeepage.hero"/> -->
        {{employeepage}}
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
        employees: function () {
            return this.$store.state.employees
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
                employeepage: payload
            };
        } else if (params) {
            return {
                employeepage: await require(`~/assets/content/employees/${params.employees}.json`),
            }
        }
    },
}
</script>

<style>

</style>