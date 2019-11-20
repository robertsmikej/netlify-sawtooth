<template>
    <div class="contact__box page__section">
        <div class="contact__box__inner">
            <h2 class="contact__box__header page__section__header">{{ sitewide.contact_header }}</h2>
            <p class="contact__box__para">{{ sitewide.contact_para }}</p>
            <div class="contact__box__button js__open__contact" @click="contactToggle()">
                <SiteButton :buttonText="sitewide.contact_button_text" :backgroundColor="'var(--light-orange)'" :color="'#FFF'"/>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm.vue';
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        ContactForm,
        SiteButton
    },
    props: {
        sitewide: Object
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
        align-self: flex-end;
        background: var(--blue);
        position: relative;
        margin: 0;
        padding-bottom: 13vh;
    }
    .contact__box::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        height: 60px;
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
    .contact__box__header, .contact__box__para {
        color: #FFF;
    }
    .contact__box__header {
        font-size: 3em;
        line-height: 1em;
        font-weight: 600;
        margin: 10px auto;
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
