<template>
    <main>
        <Hero :hero="employeepage.hero"/>
        <section class="page__section employee__content">
            <Employee v-if="employeepage.status === 'published'" :employee="employeepage" class="employee__cell"/>
            <div v-html="$md.render(employeepage.long_text)" v-if="employeepage.long_text" class="employee__long__text"></div>
        </section>
        <ContactBox :sitewide="sitewide" :header="sitewide.contact_box.contact_header" :para="sitewide.contact_box.contact_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import Employee from '~/components/about-us/Employee.vue';
import ContactBox from '~/components/contact/ContactBox.vue';

export default {
    scrollToTop: true,
    components: {
        Hero,
        PageIntro,
        Employee,
        ContactBox
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
.employee__content {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.employee__long__text {
    width: 100%;
}
</style>