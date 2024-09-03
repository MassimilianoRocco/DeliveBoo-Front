<script>

import store from "../store.js"


export default {


    components: {


    },

    data() {
        return {
            store,
            descIndex: 0
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


    <div class="container-fluid">

        <h1 class="text-center pb-5">I NOSTRI SERVIZI</h1>

        <!-- contenitore per le card -->
        <div class="card-container d-flex justify-content-center text-center gap-5">
            <!-- ciclo per stampare le card e funzione che cambia l'index della descrizione-->
            <div v-for="element, index of store.services" class="card_propria" @mouseover="changeDescIndex(index)">
                <div class="card-body">
                    <i :class="element.icon" class="p-3"></i>
                    <p class="card-title fw-bold">{{ element.title }}</p>
                </div>
            </div>
        </div>
        
        
        <!-- NB: l'index di questo ciclo e l'index del ciclo di sopra non ahnno nulla a che fare l'uno ocn l'altro. l'index non esce dallo scope del suo ciclo -->
        <div v-for="element, index in store.services" :key="index" :class="{active: descIndex === index}" class="desc_container text-center">{{ element.desc }}</div>

    </div>

</template>

<style scoped>
.active{
    opacity: 1!important;
    transition: 1s;
}

.desc_container {
    opacity: 0;
    left: 50%;
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


.container-fluid {
    position: relative;
    margin: auto;
    margin-top: 10rem;
    border-radius: 30px;
    padding: 5rem;
    width: 90%;
    -webkit-box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    height: 45rem;
}

.card_propria {
    width: calc(80% / 3);
    height: 17rem;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 30px;
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    transition: .4s;
}

.card_propria:hover {
    cursor: pointer;
    transform: scale(1.09);
    transition: .4s;
}

.card_propria:hover p {
    color: rgb(72, 69, 116);
    transition: .2s;
}
</style>