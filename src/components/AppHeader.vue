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

    <header class="p-3 bg-dark text-white">
        <div class="container-fluid">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src="/src/assets/DeliveBoo-Photoroom.png" alt="logo DeliveBoo" class="my_logo">
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Lista Ristoranti</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Chi siamo</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Lavora con noi</a></li>
                </ul>

                <div class="">
                    <button type="button" class="btn btn-warning">Login/Registrati</button>
                </div>
            </div>
        </div>
    </header>

</template>

<style scoped>
    .my_logo{
        height: 70px;
        margin-right: 2rem;
    }
</style>