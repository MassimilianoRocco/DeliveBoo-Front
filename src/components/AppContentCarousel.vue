<script>
import store from "../store/store.js"

export default {
    data() {
        return {
            isClicked: false,
            isSmooth: true,
            store,
            horiScroll: '',

            scrollable: '0',
            scrolled: '0',
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
                carousel.scrollLeft += 600;
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
                carousel.scrollLeft -= 600;
                console.log("scrollSX");
            }

        },
    },
    created() {

    },
    mounted() {
        document.addEventListener('mouseup', this.mouseRelease)

    }
}
</script>


<template>


    <!--  -->

    <div class="container_a black">

        <button class="sx" @click="Left()">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div class="debug" id="carousel" :class="{ smooth: isSmooth, slow: isSmooth }" @mousemove="dragging"
            @mousedown="isClicked = !isClicked, isSmooth = !isSmooth">



            <div class="debug_3" v-for="elemento in store.services" id="element-container"
                :class="{ snapAlign: isSmooth }">

                <div class="elemento">
                    <div class="img-container">
                        <img class="immagine" draggable="false" :src="elemento.img">
                    </div>
                    <div class="name ">{{ elemento.title }}</div>
                    <div class="task ">{{ elemento.desc }}</div>
                </div>

            </div>
        </div>
        <button class="dx" @click="Right()">
            <i class="fa-solid fa-chevron-right"></i>
        </button>

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

button {
    width: 50px;
    aspect-ratio: 1;
    border: none;
    border-radius: 25px;
    background: orange;
    color: white;
}

.sx {
    margin-left: 20px;
    margin-right: 10px;
}

.dx {
    margin-left: 10px;
    margin-right: 20px;
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
    min-width: 100%;
}


.elemento {
    border-radius: 30px;
    height: 550px;
    background: white;
    -webkit-box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.5);
    padding: 1rem;
}

.elemento:hover {
    cursor: pointer;
}

.name {
    font-size: 1.3rem;
    font-weight: 650;
    margin-top: 1rem;
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
    -webkit-scroll-behavior: smooth;
}
</style>

<!-- media queries -->
<style scoped>
@media (max-width:1450px) {

    .img-container {
        height: 80%;
    }

    .name {
        color: orange;
    }
}


@media (max-width:995px) {

    .container_a {
        height: 800 !important;
    }

    .img-container {
        height: 60%;
    }

    .elemento {
        height: 470px;
    }

}

@media (max-width:770px) {

    .img-container {
        height: 50%;

    }

    .immagine {
        width: 400px;
    }

    button {
        display: none;
    }
}
</style>
