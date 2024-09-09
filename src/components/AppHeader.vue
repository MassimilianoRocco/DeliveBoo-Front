<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            dynamicBg: 'none'
        }
    },
    methods: {
        //   placeholder
    },
    mounted() {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop
            if (scrollTop >= 816) {
                this.dynamicBg = 'rgba(0, 0, 0, 0.5) !important'
            }
            else {
                this.dynamicBg = 'none'
            }



        });


    },

}
</script>

<template>

    <header class="p-3 text-white d-flex align-items-start debug_3" :style="{ background: dynamicBg }">
        <div class="container-fluid h-auto">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start debug_1">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-center text-decoration-none">
                    <img src="/src/assets/DeliveBoo-Photoroom.png" alt="logo DeliveBoo" class="my_logo">
                </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#video" class="nav-link px-2 text-white">Home</a></li>
                    <li><a href="#ristoranti" class="nav-link px-2 text-white">Lista Ristoranti</a></li>
                    <li><a href="#chiSiamo" class="nav-link px-2 text-white">Chi siamo</a></li>
                    <li><a href="#lavora" class="nav-link px-2 text-white">Lavora con noi</a></li>
                </ul>
                <div class="">
                    <a href="http://127.0.0.1:8000/login">
                        <button type="button" class="btn btn-warning my_button">Login/Registrati</button>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.debug {
    color: red;
    border: 2px dashed green;
    padding: 5px;
    width: 190px;
}

.debug_2 {
    color: fuchsia;
    border: 2px dashed yellow;
    padding: 5px;
    width: 280px;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    /* background-color: rgba(0, 0, 0, 0.5) !important; */
    /* border: 2px dashed red; */
    z-index: 800;
    min-height: 7rem !important;
    transition: .6s;
}

.my_logo {
    height: 80px;
    margin-right: 2rem;
}

.my_button {
    background-color: #BF1B2C;
    color: white;
    border-color: unset;
    padding: 2px 10px;
}

@media screen and (max-width: 992px) {
    header {
        /* L'altezza qui sarà gestita da Vue.js e non sarà necessaria una regola specifica */
    }
}
</style>
