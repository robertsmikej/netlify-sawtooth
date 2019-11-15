<template>
    <div class="contact__form__container">
        <div class="contact__exit" @click="contactclose()"></div>
        <h2 class="contact__header">Send Us A Message</h2>
        <form id="contact__form" class="" action="" method="post" @submit.prevent="handleSubmit">
            <fieldset>
                <p>Your Name</p>
                <input aria-label="Full Name" placeholder="Eg. Edward Cullen" type="text" v-model="formData.name" required autofocus>
            </fieldset>
            <fieldset>
                <p>Your Email Address</p>
                <input aria-label="Email Address" placeholder="Eg. jacobsux@gmail.com" type="email" v-model="formData.email" required>
            </fieldset>
            <fieldset>
                <p>Your Phone Number</p>
                <input aria-label="Telephone Number" placeholder="Eg. 1-208-555-0000" type="tel" v-model="formData.phone" required>
            </fieldset>
            <fieldset>
                <p>Your Company</p>
                <input aria-label="Your Company's Name" placeholder="Eg. Nighttime Transfusions" type="text" v-model="formData.companyname">
            </fieldset>
            <fieldset>
                <p>Your Current Website</p>
                <input aria-label="Your Current Website" placeholder="Eg. https://www.extremehairs.com" type="url" v-model="formData.currentsite">
            </fieldset>
            <fieldset>
                <p>How Can We Help You?</p>
                <textarea aria-label="Message To Us" placeholder="Eg. Build Me A Website!" rows="4" v-model="formData.message" required></textarea>
            </fieldset>
            <fieldset>
                <button class="site__button contact__submit js__contact__submit" data-submit="Sending">Send Message</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    props: {
        
    },
    computed: {
        pageInfo: function () {
            return this.$store.state.pages
        },
        sitewide: function () {
            return this.$store.state.sitewide
        }
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
        handleSubmit: function () {
            let data = {
                "name": this.formData.name,
                "email": this.formData.email,
                "phone": this.formData.phone,
                "company_name": this.formData.company,
                "current_website": this.formData.currentsite,
                "message": this.formData.message
            };
            axios.post('https://www.4fuq.com/directus/public/_/items/site_contacts', data).then(function (response) {
                console.log("Contact Added To Directus");
            });
            let emaildata = JSON.stringify({
                name: this.formData.name,
                email: this.formData.email,
                phone: this.formData.phone,
                company_name: this.formData.company,
                current_website: this.formData.currentsite,
                message: this.formData.message
            });
            let xhr = new XMLHttpRequest();
            let url = "./assets/php/submitForm.php";
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('message submitted');
                } else {
                    console.log('error submitting');
                }
            };
            xhr.send(emaildata);
        },
        contactclose: function() {
            this.$nuxt.$emit("contact_hide", !this.$parent.$parent.contactShow);
        }
    }
}
</script>

<style>
    .contact__form__container {
        position: fixed;
        top: 150%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 90vh;
        z-index: 11;
        width: 96vw;
        max-width: 560px;
        padding: 20px 40px;
        border: 3px solid var(--dark-blue);
        border-radius: 8px;
        background: #FFF;
        transition: top .6s;
        overflow: hidden;
    }
    .contactShow {
        top: 50%;
    }
    .contact__header {
        margin: 20px 0 10px;
    }
    .contact__form__container fieldset {
        border: none;
    }
    .contact__form__container p {
        text-align: right;
        margin: 14px 0 0;
    }
    .contact__form__container input {
        border: none;
        width: 100%;
        padding: 10px 10px;
        font-size: 14px;
        border-bottom: 1px solid var(--dark-grey);
        /* border-left: 1px solid var(--dark-grey); */
        background: transparent;
        color: var(--dark-blue);
        text-align: right;
    }
    .contact__form__container textarea {
        border: none;
        width: 100%;
        padding: 10px 10px;
        font-size: 14px;
        border-bottom: 1px solid var(--dark-grey);
        /* border-left: 1px solid var(--dark-grey); */
        background: transparent;
        color: var(--dark-blue);
        text-align: right;
    }
    .contact__form__container input::placeholder, .contact__form__container textarea::placeholder {
        font-weight: 500;
        font-size: 13px;
    }
    .contact__form__container .contact__submit {
        margin: 20px auto 0;
        background-color: #FFF;
        border: none;
        border-bottom: 1px solid var(--dark-grey);
        border-right: 1px solid var(--dark-grey);
        cursor: pointer;
    }
    .contact__exit {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 5px;
        right: 8px;
        cursor: pointer;
    }
    .contact__exit::before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--dark-grey);
        transform: rotate(45deg);
        position: absolute;
        top: 50%;
        right: 0;
    }
    .contact__exit::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--dark-grey);
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
        right: 0;
    }
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .contact__form__container {
        padding: 14px 20px;
    }
    .contactShow {
        top: 53%;
    }
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
    .contact__form__container {
        padding: 8px 16px;
    }
    .contactShow {
        top: 54%;
    }
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
