<template>
    <section class="page__section side__by__side">
        <div class="side__by__side__container">
            <div v-if="data.header" class="side__cell">
                <h2 class="side__cell__header">{{ data.header }}</h2>
                <div v-if="data.text" v-html="$md.render(data.text)" class="side__cell__text__container"></div>
            </div>
            <div class="side__cell">
                <div v-if="image" class="side__cell__image__container">
                    <img :src="image" :alt="data.header" class="side__cell__image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    components: {
        
    },
    props: {
        data: Object,
        textSide: String,
        image: String
    }
}
</script>

<style>
.side__by__side {
    background-color: var(--light-blue);
}
.side__by__side__container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    padding: 0 20px;
}
.side__cell {
    flex: 1 1 60%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.side__cell:nth-of-type(2) {
    flex: 1 1 40%;
}
.side__cell__header {

}
.side__cell__text__container {

}
.side__cell__image__container {
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.side__cell__image {
    max-width: 240px;
    max-height: 90%;
    align-self: center;
    margin: 0 auto;

}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .side__by__side__container {
        flex-direction: column-reverse;
        padding: 0;
    }
    .side__cell {
        flex: 1 1 50%;
    }
    .side__cell:nth-of-type(2) {
        flex: inherit;
        padding: 0 0 20px;
    }
}
</style>
