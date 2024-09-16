<script>
export default {
	name: "Loader",
};
</script>

<template>
	<div class="loader_container d-flex justify-content-center align-items-center vh-100">
		<img class="loader" src="../assets/DeliveBoo-Photoroom.png" alt="" />
	</div>
</template>

<style scoped>
/* Definisci l'animazione */
@keyframes scaleAnimation {
	0% {
		transform: scale(1); /* Dimensione originale */
	}
	50% {
		transform: scale(1.2); /* Scala al 120% */
	}
	100% {
		transform: scale(1); /* Ritorna alla dimensione originale */
	}
}

.loader_container {
	background-color: #fbab7e;
	background-image: linear-gradient(90deg, #fbab7e 0%, #f7ce68 50%, #fbab7e 100%);
}

/* Applica l'animazione all'elemento */
.loader {
	width: 300px;
	animation: scaleAnimation 2s infinite; /* Durata di 2 secondi, loop infinito */
	display: inline-block;
}
</style>
