<script>
import AppHeader from './components/AppHeader.vue'//1
import Appjumbo from './views/AppJumbo.vue'//2
import AppServices from './views/AppServices.vue'//3
import AppWorkWithUs from './views/AppWorkWithUs.vue'//4



export default{
  

  components:{
    AppHeader,
    Appjumbo,
    AppServices,
    AppWorkWithUs,
 
  },

  data(){
    return{

    }
  },


mounted(){

}

}
</script>

<template>

  <div class="app_Container w-100">

    <AppHeader/>
    <Appjumbo/>
    <AppServices/>
    <AppWorkWithUs/>

  </div>

</template>

<style scoped>

</style>