<script>


export default {


    components: {


    },

    data() {
        return {

            // polaceholder
        }
    },
    methods: {
        // palceholdewr
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
        <h1 class="text-center">LAVORA CON NOI</h1>

        <div class="section_container d-flex debug">
            <div class="section_left debug">
                <div class="img_container debug">
                    <img src="https://www.giuseppecaprotti.it/2019/wp-content/uploads/Rider-Delivery-illustrazione-06-LT.jpg" alt="">
                </div>
            </div>
            <div class="section_right debug">right</div>
        </div>

    </div>

</template>

<style scoped>
    .debug {
        border: 2px dashed red;
    }
.section_left {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img_container{
    width: 90%;
    height: 90%;
    overflow: hidden;
    border-radius: 30px;
}
img{
    width: 140%;
    margin: 0 -20%;
}
.section_right {
    width: 40%;
}
.section_container{
    height: 90%;
    margin: 3rem 0;
}

h1 {
    font-weight: 700;
    /* padding-top: 8rem; */
    /* padding: 5rem; */
}

.container-fluid {
    margin: auto;
    margin-top: 10rem;
    margin-bottom: 5rem;
    border-radius: 30px;
    padding: 5rem;
    width: 90%;
    -webkit-box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.5);
    height: 60rem;
}
</style>