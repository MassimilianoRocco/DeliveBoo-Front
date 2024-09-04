<script>

import AppContentCarousel from "./AppContentCarousel.vue";
import store from "../store.js"


export default {


    components: {
        AppContentCarousel

    },

    data() {
        return {
            store,
            descIndex: 0,
        }
    },
    methods: {
        changeDescIndex(valore) {
            console.log("il tuo mouse ze su", valore);
            this.descIndex = valore
        },
    },
    created() {
        // polaceholder
    },
    mounted() {
        // polaceholder
    }

}
</script>

<template>


    <div class="container-fluido">

        <h1 class="text-center pb-5">I NOSTRI SERVIZI</h1>

        <!-- contenitore WIDE per le card -->
        <div class="breakpoint_wide">

            <div class="card-container d-flex justify-content-center text-center gap-5">
                <!-- ciclo per stampare le card e funzione che cambia l'index della descrizione-->
                <div v-for="element, index of store.services" class="card_propria" @mouseover="changeDescIndex(index)">
                    <div class="card-body">
                        <img :src="element.img" alt="">
                        <p class="card-title fw-bold">{{ element.title }}</p>
                    </div>
                </div>
            </div>


            <div v-for="element, index in store.services" :key="index" :class="{ active: descIndex === index }"
                class="desc_container text-center">{{ element.desc }}</div>

        </div>

        <div class="breakpoint_small">

            <AppContentCarousel/>
            si cvedeg
        </div>

    </div>

</template>

<style scoped>
.breakpoint_small {
    display: none;
}

.card-title {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card_propria img {
    object-fit: contain;
    position: absolute;
    left: 0;
    top: 0;
    width: 120%;
}

.card_propria:last-of-type img {
    width: 100%;
}

.active {
    opacity: 1 !important;
    transition: .4s;
    bottom: 10% !important;
}

.desc_container {
    opacity: 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    position: absolute;
    margin: auto;
    margin-top: 5rem;
    padding: 3rem;
    width: calc(80% - 40px);
    border-radius: 30px;
    border: 2px dashed red;
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    border: 1px solid rgb(180, 180, 180);
}

h1 {
    font-weight: 700;
}

i {
    font-size: 5rem;
    margin: 3rem;
}

.container-fluido {
    position: relative;
    margin: auto;
    margin-top: 10rem;
    border-radius: 30px;
    padding: 5rem;
    width: 90%;
    -webkit-box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    height: 47rem;
    background: white;
}

.card_propria {
    width: 400px;
    height: 17rem;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 30px;
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    transition: .4s;
    overflow: hidden;
    position: relative;
    background-size: cover;
}

.card_propria:hover {
    cursor: pointer;
    transform: scale(1.09);
    transition: .4s;
}
</style>

<!-- medai quesries -->
<style scoped>
@media (max-width:1450px) {
    .breakpoint_small {
        display: block;
    }

    .breakpoint_wide {
        display: none;
    }

    .container-fluido{
        padding: 0;
    }
}
</style>