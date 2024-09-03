<script>

export default{
  name: 'AppJumbo',

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

    <div class="container-fluid bg-warning my_container g-0 p-0 m-0">

                <!-- VIDEO SECTION  -->
        <div class="my_videoSection p-0 m-0 g-0">
            <video muted="" autoplay="" loop="" 
            src="/src/assets/Login_Food Reel FH Studio.mp4" type="video/mp4" class="my_Video">
            <img src="/src/assets/errorVideo.png" alt="Error Video">
            </video>
        </div>
    </div> 

</template>

<style scoped>
    .my_container{
        height: 85vh;
    }
    .my_videoSection{
        height: 85vh;
        
    }
    .my_Video{
        height: 85vh;
        width: 100%;
        object-fit: cover;
        display: block;
    }

    @media screen and (max-width: 992px) {

        div{
            height: 75vh;
            
        }
    }
</style>