<script>
import store from "../store.js"

export default {
    data() {
        return {
            isClicked: false,
            isSmooth: true,
            store,
        }
    },
    methods: {
        dragging(value) {
            if (!this.isClicked) return;
            console.log('dragging...')
            document.getElementById('carousel').scrollLeft -= value.movementX
        },
        mouseRelease() {
            this.isClicked = false;
            this.isSmooth = true;
        },

        Right() {
            const carousel = document.getElementById('carousel');
            const distanzaScrollabile = carousel.scrollWidth - carousel.clientWidth;
            const distanzaScrollata = carousel.scrollLeft
            if (distanzaScrollata >= distanzaScrollabile) {
                carousel.scrollLeft = 0;
                console.log("Tornato all'inizio");
            } else {
                carousel.scrollLeft += 440;
                console.log("scrollDX");
            }

        },

        Left() {
            const carousel = document.getElementById('carousel');
            const distanzaScrollata = carousel.scrollLeft

            if (distanzaScrollata <= 0) {
                carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
                console.log("Tornato alla fine");
            } else {
                carousel.scrollLeft -= 440;
                console.log("scrollSX");
            }

        },


    },
    created() {

    },
    mounted() {

    }
}
</script>


<template>


    <!--  -->

    <div class="container_a black">


        <!-- la documentazione su questi "@events" è in fondo alla pagina -->

        <div class="debug" id="carousel" :class="{ smooth: isSmooth, slow: isSmooth }" @mousemove="dragging"
            @mousedown="isClicked = !isClicked, isSmooth = !isSmooth" @mouseup="mouseRelease()">


            <div class="debug_3" v-for="elemento in store.services" id="element-container"
                :class="{ snapAlign: isSmooth }">

                <div class="elemento">
                    <div class="img-container">
                        <img draggable="false" :src="elemento.img">
                    </div>
                    <div class="name round-font">{{ elemento.title }}</div>
                    <div class="task my-lightgrey">{{ elemento.desc }}</div>
                </div>

            </div>
        </div>


    </div>

</template>


<style scoped>
.img-container {
    width: 90%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 30px;
    overflow: hidden;
}

.container_a {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100%;
}

#carousel {
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    caret-color: transparent;
    scroll-snap-type: x mandatory;
    user-select: none;
}

#element-container {
    padding: 0 30px;
}


.elemento {
    border-radius: 30px;
    width: 940px;
    height: 490px;
    background: white;
    -webkit-box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.5);
    padding: 1rem;
}

.name {
    font-size: 1.3rem;
    font-weight: 650;
}

.task {
    font-size: 0.95rem;
}

img {
    width: 100%;
}

.container,
.title {
    text-align: center;
    caret-color: transparent;
}

.title {
    position: relative;
}

h1 {
    padding: 3rem 0;
    font-size: 3rem;
}

p {
    width: 45%;
    margin: auto;
}




.snapAlign {
    scroll-snap-align: start;
}

.smooth {
    scroll-behavior: smooth;
}


</style>
