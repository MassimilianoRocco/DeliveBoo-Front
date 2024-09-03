<script>

export default{
  name: 'AppHeader',

  data(){
    return{
    
    }
  },
  methods: {


  },


mounted(){
  
}

}
</script>

<template>

    <header class="p-3 bg-dark text-white d-flex align-items-center">
        <div class="container-fluid h-auto ">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-center text-decoration-none">
                    <img src="/src/assets/DeliveBoo-Photoroom.png" alt="logo DeliveBoo" class="my_logo">
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Lista Ristoranti</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Chi siamo</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Lavora con noi</a></li>
                </ul>

                <div class="">
                    <button type="button" class="btn btn-warning my_button">Login/Registrati</button>
                </div>
            </div>
        </div>
    </header>

    <!-- <main class="container-fluid bg-warning my_container g-0">
        <div class="my_container ">

        </div>
        
        TEST DA ELIMINARE _________________________
    </main> -->
</template>

<style scoped>

    header{
        height: 15vh;
    }
    .my_logo{
        height: 80px;
        margin-right: 2rem;
    }

    .my_button{
       background-color: #BF1B2C; 
       color: white;
       border-color: unset;
       padding: 2px 10px;
    }

    /* .my_container{
        height: 85vh;
        test-da-eliminare
    } */

    @media screen and (max-width: 992px) {
        header{
            height: 25vh;
        }
        .my_logo{
            margin: 0;
        }
        /* main{
            height: 75vh;
            test-da-eliminare
        } */
    }
</style>