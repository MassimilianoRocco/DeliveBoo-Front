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
                        <img class="immagine" draggable="false" :src="elemento.img">
                    </div>
                    <div class="name ">{{ elemento.title }}</div>
                    <div class="task ">{{ elemento.desc }}</div>
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
    /* border: 2px dashed blue; */
}

.container_a {
    /* border: 2px dashed black; */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100%;
}

#carousel {
    /* border: 2px dashed greenyellow; */
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
    /* border: 2px dashed purple; */
    padding: 0 30px;
    min-width: 100%;
}


.elemento {

    /* border: 2px dashed red; */
    border-radius: 30px;
    height: 490px;
    background: white;
    -webkit-box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.5);
    padding: 1rem;
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

    /* .name {
        color: orange;
    } */
    .container_a {
        height: 800 !important;
    }
    .img-container{
        height: 60%;
    }
}

@media (max-width:770px) {

    /* .name {
        color: orange;
    } */


    .img-container {
        /* border: 2px dashed blue; */
        height: 50%;

    }

    .immagine {
        width: 400px ;
        /* border: 2px dashed orange; */
    }
}
</style>
