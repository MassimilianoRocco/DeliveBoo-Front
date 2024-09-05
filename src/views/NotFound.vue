<script>
export default {
    name: "NotFound",
};
</script>

<template>
    <div class="p-5 mb-4 text-dark vh-100 d-flex align-items-center" id="background">
        <div class="container py-5 text-center fw-bold">
            <h1 class="display-4 fw-bold">OPS 404</h1>
            <p class="fs-3">LORIS CI HAI PROVATO</p>

            <router-link to="/" class="btn btn-dark text-warning fs-5">TORNA ALLA HOME</router-link>
        </div>
    </div>
</template>

<style scoped>
#background {
    background-image: url("../assets/background.jpg");
}
</style>