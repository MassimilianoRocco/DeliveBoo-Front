<script>
import AppHeader from './components/AppHeader.vue'
import Appjumbo from './views/AppJumbo.vue'
import AppWorkWithUs from './views/AppWorkWithUs.vue'



export default{
  

  components:{
    AppHeader,
    Appjumbo,
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
    <AppWorkWithUs/>

  </div>

</template>

<style scoped>

</style>