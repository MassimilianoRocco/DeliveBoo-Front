<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './views/AppJumbo.vue';



export default{
  name: 'App',

  components:{
    AppHeader,
    AppJumbo,
 
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
    <AppHeader />
    <AppJumbo />
  </div>

</template>

<style scoped>

</style>