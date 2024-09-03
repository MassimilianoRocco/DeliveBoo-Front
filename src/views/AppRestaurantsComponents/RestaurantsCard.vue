<script>
export default {
	name: "RestaurantsCard",
	// props: { element: Object },
	data() {
		return {};
	},
};
</script>

<template>
	<div class="card shadow-lg">
		<!-- IMMAGINE -->

		<!-- <template v-if="!element.thumb.startsWith('http')">
				<img
					class="card-img-top"
					:src="base_url + '/storage/' + element.thumb"
					alt=""
					loading="lazy" />
			</template>

			<template v-else>
				<img class="card-img-top" :src="element.thumb" alt="" loading="lazy" />
			</template> -->

		<!-- LINKARE L'IMMAGINE ALLA PAGINA SINGLE RESTAURANT -->

		<!-- <router-link
			class="btn btn-warning fw-bold"
			:to="{ name: 'single-restaurant', params: { id: element.id } }">
			
		</router-link> -->

		<img
			class="card-img-top"
			src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
			alt="" />

		<!-- CONTENUTO CARD -->

		<div class="card-body text-center fw-bold">
			<p>NOME RISTORANTE</p>
			<!-- <p class="fw-bold fs-4 text-warning">{{ element.project_title }}</p>
			<p>Project start: {{ element.start_project }}</p>
			<p>Project end: {{ element.end_project }}</p>
			 -->
		</div>
	</div>
</template>

<style>
.card:hover {
	scale: 1.1;
	transition: 0.4s ease-in-out;
	cursor: pointer;
}
</style>
