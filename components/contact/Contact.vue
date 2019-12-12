<template>
    <div class="contact__form__container" id="contact">
        <form id="contact__form" data-netlify="true" name="Sawtooth-Contact" class="contact__form" action="" method="post">
            <input type="hidden" name="Sawtooth-Contact" value="Sawtooth-Contact" />
            <div v-for="(input, index) in contact.items" :key="index">
                <fieldset v-if="input.short_name !== 'message'">
                    <p>{{ input.text }}</p>
                    <input :aria-label="input.text" :name="input.short_name" :placeholder="input.placeholder" :type="input.field_type" :class="input.short_name">
                </fieldset>
                <fieldset v-else>
                    <p>{{ input.text }}</p>
                    <textarea :aria-label="input.text" :name="input.short_name" :placeholder="input.placeholder" rows="4" :type="input.field_type" :class="input.short_name"></textarea>
                </fieldset>
            </div>
            <fieldset class="site__button">
                <button class="site__button__inner contact__submit js__contact__submit" style="background-color: var(--light-orange); border: 1px solid var(--light-orange); color: rgb(255, 255, 255)" data-submit="Sending">{{ contact.button_text }}</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
const axios = require('axios');

import PageOverlay from '~/components/general/PageOverlay.vue';

export default {
    components: {
        PageOverlay
    },
    props: {
        contact: Object
    },
    data() {
        return {
            formData: {
                name: "",
                email: "",
                phone: "",
                company: "",
                currentsite: "",
                message: ""
            }
        }
    },
    methods: {
        // getRequired: function (e) {

        // },
        // handleSubmit: function () {
        //     let emaildata = JSON.stringify({
        //         name: this.formData.name,
        //         email: this.formData.email,
        //         phone: this.formData.phone,
        //         company_name: this.formData.company,
        //         current_website: this.formData.currentsite,
        //         message: this.formData.message
        //     });
        //     this.$axios.post('/', emaildata).then(function(Response) {
        //         console.log(Response);
        //     }).catch(function (err) {
        //         this.errors.push(err)
        //     });
        // },
        contactclose: function() {
            this.$nuxt.$emit("showContact", false);
        }
    }
}
</script>

<style>
    .contact__form__container {
        width: 100%;
        max-width: 800px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        background-color: #FFF;
        border-radius: 10px;
    }
    .contact__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
        padding: 10px 0;
    }
    .contact__form div {
        width: 100%;
    }
    .contact__form__container fieldset {
        border: none;
    }
    .contact__box__inner .contact__form__container p {
        text-align: left;
        margin: 6px 0 0;
        color: var(--dark-grey);
    }
    .contact__form__container input {
        border: none;
        width: 100%;
        padding: 10px 10px;
        font-size: 14px;
        border-bottom: 1px solid var(--dark-grey);
        background: transparent;
        color: var(--dark-blue);
    }
    .contact__form__container textarea {
        border: none;
        width: 100%;
        padding: 10px 10px;
        font-size: 14px;
        border-bottom: 1px solid var(--dark-grey);
        background: transparent;
        color: var(--dark-blue);
    }
    .contact__form__container input::placeholder, .contact__form__container textarea::placeholder {
        font-weight: 500;
        font-size: 13px;
    }
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .contact__header {
        margin: 10px 0 5px;
    }
    .contact__form__container p {
        margin: 8px 0 0;
    }
    .contact__form__container input {
        padding: 6px 10px;
    }
    .contact__form__container .contact__submit {
        margin: 8px auto 0;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 410px) {
    .contact__header {
        margin: 6px 0 2px;
    }
    .contact__form__container p {
        margin: 4px 0 0;
    }
    .contact__form__container input {
        padding: 2px 10px;
    }
    .contact__form__container textarea {
        padding: 4px 10px;
    }
    .contact__form__container .contact__submit {
        margin: 2px auto 0;
    }
}
</style>
