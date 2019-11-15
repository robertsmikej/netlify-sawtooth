<template>
    <div v-if="loading" class="loading-page" :class="{showLoading: loading}">
        <div class="loading__animation">
            <div class="loading__overlay"></div>
            <div class="fox__container">
                <div class="fox__head">
                    <div class="fox__head--side fox__head--left">
                        <div class="head__top--between--ears"></div>
                        <div class="head__top--face"></div>
                        <div class="head--ear"></div>
                        <div class="head__nose"></div>
                        <div class="head__bottom--face"></div>
                    </div>
                    <div class="fox__head--side fox__head--right">
                        <div class="head__top--between--ears"></div>
                        <div class="head__top--face"></div>
                        <div class="head--ear"></div>
                        <div class="head__nose"></div>
                        <div class="head__bottom--face"></div>
                    </div>
                </div>
                <div class="fox__body">
                    <div class="body__top">
                        <div class="body__top__white body__top__white--left"></div>
                        <div class="body__top__white body__top__white--right"></div>
                        <div class="body__top__color"></div>
                    </div>
                    <div class="body__legs">
                        <div class="legs__leg legs__leg--left"></div>
                        <div class="legs__leg legs__leg--right"></div>
                    </div>
                </div>
                <div class="fox__tail">
                    <div class="fox__tail__1"></div>
                    <div class="fox__tail__2"></div>
                    <div class="fox__tail__3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data: () => ({
		loading: false
	}),
	methods: {
		start() {
            this.loading = true;
            // console.log(this.loading);
		},
		finish() {
            this.loading = false;
            // console.log(this.loading);
        }
	}
}
</script>

<style>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    text-align: center;
    font-size: 40px;
    z-index: 100;
    color: var(--dark-blue);
    animation: fader 2.5s infinite;
    transform-origin: 100% 5%;
    z-index: 40;
}
@keyframes fader {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
.loading__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-blue);
    opacity: .7;
}
.loading__animation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    /* background: grey; */
    z-index: 20;
}

.fox__container {
    width: 300px;
    height: 400px;
    align-self: center;
    margin: 0 auto;
    position: relative;
}

.fox__head {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    height: 100%;
}

.fox__head:before {}

.fox__head:after {}

.fox__head--side {
    width: 50%;
    position: relative;
}

.fox__head--left {
    height: 100%;
}

.fox__head--right {
    transform: scaleX(-1);
    height: 100%;
}

.head__top--face {
    position: absolute;
    top: 50px;
    left: 86px;
    width: 84px;
    height: 70px;
    transform: skew(-30deg, 0deg);
    background-color: var(--light-orange);;
}
.head__top--face:before {
    content: "";
    position: absolute;
    height: 8px;
    width: 24px;
    top: 45px;
    left: 34px;
    background-color: var(--dark-grey);
    transform: skew(45deg, 15deg);
}

.head__bottom--face {
    position: absolute;
    top: 120px;
    left: 90px;
    width: 76px;
    height: 10px;
    transform: skew(30deg, 0deg) rotate(180deg);
    background: linear-gradient(to top, #FFF, #E8E8E8);
    z-index: 0;
    border-top-right-radius: 14%;
    border-top-left-radius: 14%;
    animation: bottomface 5s infinite;
}

.head--ear {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 64px solid var(--light-orange);
    transform: skew(25deg, -55deg);
    position: absolute;
    top: 10px;
    left: 70px;
}

.head--ear:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 34px solid var(--dark-blue);
    position: absolute;
    top: 30px;
    left: -12px;
}

.head__nose {
    width: 0;
    height: 0;
    border-left: 46px solid transparent;
    border-right: 46px solid transparent;
    border-top: 36px solid var(--light-orange);
    
    position: absolute;
    top: 120px;
    left: 104px;
    z-index: 2;
}

.head__nose:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid var(--dark-blue);
    transform: rotate(0deg);
    position: absolute;
    top: -12px;
    left: -16px;
}

.fox__body {

}
.body__top {

}
.body__top__white {
    width: 30px;
    height: 120px;
    position: absolute;
    top: 134px;
    background: #FFF;
    z-index: 1;
}
.body__top__white--left {
    transform: skew(0deg, 20deg) rotate(0deg);
    left: 120px;
}
.body__top__white--right {
    transform: skew(0deg, -20deg) rotate(0deg);
    right: 120px;
}
.body__top__color {
    width: 110px;
    height: 0;
    border-top: 140px solid var(--light-orange);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: absolute;
    top: 130px;
    left: 95px;
    z-index: 0;
}

.body__legs {

}
.legs__leg {
    width: 14px;
    border-top: 70px solid #232323;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    top: 210px;
    z-index: 2;
}
.legs__leg--left {
    left: 120px;
}
.legs__leg--right {
    right: 120px;
}

.fox__tail {

}
.fox__tail__1 {
    width: 70px;
    height: 24px;
    background: var(--light-orange);
    position: absolute;
    top: 220px;
    right: 60px;
    border-top-right-radius: 30px;
}
.fox__tail__2 {
    width: 26px;
    height: 74px;
    background: var(--light-orange);
    position: absolute;
    top: 224px;
    right: 62px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 26px;
    transform: rotate(20deg);
}

.fox__tail__2::before {
    content: "";
    width: 30px;
    height: 30px;
    background: transparent;
    position: absolute;
    top: 30px;
    left: -28px;
    border-radius: 50%;
    box-shadow: 5px 15px 0 0 var(--light-orange);
    transform: rotate(230deg);
}
.fox__tail__3 {
    border-bottom: 140px solid var(--light-orange);
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    height: 0;
    width: 50px;
    position: absolute;
    top: 302px;
    right: 84px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    transform: rotate(55deg);
    animation: tailbottom 2s infinite;
    transform-origin: 100% 5%;
    z-index: 10;
}
@keyframes tailbottom {
    0% {
        transform: rotate(75deg);
    }
    50% {
        transform: rotate(105deg);
    }
    100% {
        transform: rotate(75deg);
    }
}
.fox__tail__3::after {
    content: "";
    border-bottom: 24px solid #FFF;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    height: 0;
    width: 30px;
    position: absolute;
    top: 140px;
    right: -16px;
    transform: skew(0deg, 0deg) rotate(180deg);
}
</style>
