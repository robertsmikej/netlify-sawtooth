<template>

    <nuxt-link :to="'/about-us/' + employee.slug" class="employee__cell__inner">
        <div class="employee__card__wrapper">
            <div class="employee__cell__img__container employee__card">
                <div v-if="employee.headshot" class="employee__card__front">
                    <img :src="employee.headshot" :alt="employee.name + ' - Boise Idaho'" class="employee__cell__img">
                </div>
                <div v-if="employee.gif" class="employee__card__rear">
                    <img :src="employee.gif" :alt="employee.name + '\'s Favorite Gif'" class="employee__cell__img">
                </div>
            </div>
        </div>
        <div class="employee__cell__text">
            <h2 v-if="employee.name" class="employee__name">{{ employee.name }}</h2>
            <h3 v-if="employee.title" class="employee__title">{{ employee.title }}</h3>
            <h4 v-if="employee.speciality" class="employee__title--2">{{ employee.speciality }}</h4>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        employee: Object
    }
}
</script>

<style>
.employee__cell {
    max-width: 240px;
    width: 100%;
    margin: 10px 20px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-around;
    text-decoration: none;
    overflow: hidden;
}
.employee__card__wrapper {
    width: 100%;
    height: 100%;
    perspective: 800px;
}
.employee__cell__img__container {
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: relative;
    -webkit-transition: transform .8s;
    transition: transform .8s;
    transform-style: preserve-3d;
    border-radius: 5px;
}
.employee__cell__img__container:hover {
    -ms-transform: rotateX(-180deg);
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
}
.employee__card__front {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    text-align: center;
}
.employee__card__front img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
.employee__card__rear {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    -ms-transform: rotateX(-180deg);
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.employee__cell__img {
    height: 100%;
}
.employee__cell__text {
    width: 100%;
    padding: 10px 5px;
}
.employee__name {
    font-size: 1.5em;
    line-height: 1em;
    font-weight: 300;
    margin: 0 auto;
}
.employee__title {
    font-size: 1.1em;
    line-height: 1em;
    font-weight: 400;
    margin: 5px auto 4px;
}
.employee__title--2 {
    font-size: 1em;
    line-height: 1em;
    font-weight: 400;
    margin: 5px auto 4px;
}
</style>
