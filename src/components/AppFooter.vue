<script>
import store from "../store.js"
export default {
    data() {
        return {
            shorten: false,
            store,
        }
    },
    methods: {
        isHover() {
            this.shorten = true
        },
        isNotHover() {
            this.shorten = false
        }
    },
    mounted() {

    }
}
</script>

<template>
    <footer>
        <div class="myCont d-flex justify-content-center gap-5 py-5">
            <div class="leftCont">
                <!-- <img class="w-100 pb-3" src="/img/theme_eduprime_logo.png" alt=""> -->
                <p>Bopoleveroo è la tua piattaforma di food delivery che ti collega ai migliori ristoranti della città
                    con consegne rapide e affidabili. Mangia bene, ovunque tu sia!</p>
                <div class="d-flex flex-row gap-4">
                    <div class="social facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div class="social twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div class="social instagram">
                        <i class="fa-brands fa-instagram"></i>

                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <h4 class="round-font mb-4"> {{ store.headOne }} </h4>
                </li>
                <li v-for="links in store.getLinks" class="mb-2">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <ul>
                <li>
                    <h4 class="round-font mb-4"> {{ store.headTwo }} </h4>
                </li>
                <li v-for="links in store.netLinks" class="mb-2">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <div class="rightCont d-flex flex-column gap-2">

                <div class=" search-input">
                    <input :class="{ shrink: shorten }" type="mail" placeholder="Email Adress...">
                    <button @mouseover="isHover()" @mouseleave="isNotHover()">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <h4 class="round-font my-4">Cerca per Categoria</h4>
                <div class="d-flex flex-wrap gap-2 justify-content-end">
                    <a class="btLinks" href="#">Contattaci</a>
                    <a class="btLinks" href="#">Cucina Italiana</a>
                    <a class="btLinks" href="#">Fast Food</a>
                    <a class="btLinks" href="#">Vegano</a>
                    <a class="btLinks" href="#">Sushi</a>
                    <a class="btLinks" href="#">Pizzeria</a>
                    <a class="btLinks" href="#">Dolci</a>
                </div>
                <p class="finalP">Bopoleveroo. Tutti i diritti riservati.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: #F5E6CC;
}

.social {
    border: 3px solid white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}

.facebook:hover {
    border: 3px solid white;
    background: #0866FF;
    transform: rotate(360deg);
}

.twitter:hover {
    border: 3px solid white;
    background: #1C9CEA;
    transform: rotate(360deg);
}

.instagram:hover {
    border: 3px solid white;
    transform: rotate(360deg);
    background: rgb(131, 58, 180);
    background: linear-gradient(214deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
}

.social i {
    font-size: 1.5rem;
}

input {
    border: transparent;
    border-radius: 30px;
    width: 100%;
    outline: transparent;
}

.search-input {
    position: relative;
}

input {
    width: 100%;
    border-radius: 50px;
    padding: 1rem 2.5rem;
    border: none;
    height: 60px;
    transition: 0.3s;
    outline: none;
}

.shrink {
    width: 80%;
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247);
}

button {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: none;
    position: absolute;
    right: 0%;
    transition: .3s;
    /* animation-delay: color 1s 1s; */
    color: #E56768;
    background: white;
    border-radius: 50%;
    position: absolute;
}

button:hover {
    color: white;
    background: #E56768;
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247);
    transform: rotate(360deg);
}

.myBgRed {
    background-color: #e56768;
}

.myCont {
    width: 1200px;
    margin: 0 auto;
}

ul {
    list-style: none;
    width: 13.5rem;
}

a {
    color: black;
    text-decoration: none;
    transition: 300ms ease;
}

li:hover a {
    color: orangered;
}

.leftCont {
    width: 25rem;
}

.rightCont {
    position: relative;
    width: 26rem;
}

.fa-magnifying-glass:hover {
    background-color: #e56768;
}


.btLinks {
    border: 1px solid white;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 30px;
    transition: 300ms ease;
    font-size: 0.8rem;
}

.btLinks:hover {
    background-color: #e56768;
    border: 1px solid transparent
}

.finalP {
    color: #e56768;
    text-align: end;
    margin-top: 1rem;
}
</style>