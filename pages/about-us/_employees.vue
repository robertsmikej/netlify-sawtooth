<template>
    <main>
        <Hero :hero="employeepage.hero"/>
        <section class="page__section employee__content">
            <div class="employee__intro">
                <div v-if="employeepage.headshot" class="employee__page__headshot">
                    <img :src="employeepage.headshot" :alt="employeepage.name + ' - Boise Idaho'" class="employee__page__headshot__img">
                </div>
                <div class="employee__intro__text">
                    <h2 v-if="employeepage.name" class="employee__name">{{ employeepage.name }}</h2>
                    <h3 v-if="employeepage.title" class="employee__title">{{ employeepage.title }}</h3>
                    <h4 v-if="employeepage.speciality" class="employee__title--2">{{ employeepage.speciality }}</h4>
                </div>
                
            </div>
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
    async asyncData({ params, payload, store }) {
        if (payload) {
            return { 
                employeepage: payload
            };
        } else if (params) {
            let employee = params.employees;
            return {
                employeepage: store.state.employees[employee],
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
.employee__intro {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
    margin: 0 auto 40px;
}
.employee__intro__text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.employee__long__text {
    width: 100%;
    text-align: left;
}

.employee__page__headshot {
    width: 290px;
}
.employee__page__headshot img {
    width: 100%;
}
</style>