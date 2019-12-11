<template>
    <div class="contact__box page__section">
        <div class="contact__box__inner">
            <SectionHeader :header="header" :para="para" v-if="header || para"/>
            <ContactForm :contact="contact"/>
            <!-- <div class="contact__box__button js__open__contact" @click="contactToggle()">
                <SiteButton :buttonText="sitewide.contact_box.contact_button_text" :backgroundColor="1" :color="1"/>
            </div> -->
        </div>
    </div>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import ContactForm from '~/components/contact/Contact.vue';
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SectionHeader,
        ContactForm,
        SiteButton
    },
    computed: {
        contact: function () {
            return this.$store.state.sitewide.contact_form
        }
    },
    props: {
        sitewide: Object,
        header: String,
        para: String
    },
    methods: {
        contactToggle: function(event) {
            this.$nuxt.$emit("showContact", true);
        }
    }
}
</script>

<style>
    body .contact__box {
        width: 100%;
        /* align-self: flex-end; */
        background: var(--blue);
        position: relative;
        margin: 0;
        padding-bottom: 10vh;
    }
    .contact__box::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: var(--blue);
        transform: rotate(-1.3deg) skewX(-1.3deg);
        transform-origin: 0 0;
        z-index: 2;
    }
    .contact__box__inner {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
        padding: 0 14px;
    }
    .contact__box__inner h2, .contact__box__inner p {
        color: #FFF;
    }
    .contact__box__para {
        font-size: 1.2em;
        line-height: 1.5em;
        max-width: 820px;
        margin: 30px auto 10px;
    }
    .contact__box__button {
       align-self: center;
    }
    .contact__box .page__section__header::after {
        background: #FFF !important;
    }
</style>
