<template>
    <nuxt-link :to="cell.slug" class="sub__service__cell">
        <div class="sub__service__image__container">
            <img :src="cell.icon" :alt="cell.service_type" class="sub__service__image">
        </div>
        <div class="sub__service__text__container">
            <div class="sub__service__text__container__inner sub__service__text__container__front">
                <h4 v-if="cell.service_type">{{ cell.service_type }}</h4>
                <p v-if="cell.short_description">{{ cell.short_description }}</p>
            </div>
            <div v-if="cell.description" class="sub__service__text__container__inner sub__service__text__container__rear">
                <p>{{ cell.description }}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    components: {
        
    },
    props: {
        cell: Object,
        parentType: String
    },
    methods: {
        
    },
    computed: {
        
    }
}
</script>

<style>
.sub__service__cell {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    background-color: #FFF;
    padding: 30px 16px;
    color: var(--text-color);
    border-radius: 10px;
    width: 30%;
    cursor: pointer;
    margin: 10px;
    text-decoration: none;
}
.sub__service__image__container {

}
.sub__service__image {

}
.sub__service__text__container {

}
.sub__service__text__container__inner {

}
.sub__service__text__container__front {

}
.sub__service__text__container__rear {
    display: none;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 1000px) {
    .sub__service__cell {
        padding: 20px 12px;
        border-radius: 5px;
        width: auto;
        flex: 1 1 33%;
        margin: 10px;
        min-width: 290px;
    }
}
</style>