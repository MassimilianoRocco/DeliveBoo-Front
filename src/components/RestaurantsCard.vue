<script>
export default {
	name: "RestaurantsCard",
	props: {
		singleRestaurat: {
			type: Object,
			required: true,
		},
	},
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

		<router-link :to="{ name: 'single-restaurant', params: { id: singleRestaurat.id } }">
			<template v-if="singleRestaurat.image_path.startsWith('http')">
				<img :src="singleRestaurat.image_path" class="card-img-top" :alt="singleRestaurat.name">
			</template>
			<template v-else>
				<img :src="base_url + '/storage/' + singleRestaurat.image_path" class="card-img-top"
					:alt="singleRestaurat.name">
			</template>
		</router-link>

		<!-- CONTENUTO CARD -->

		<div class="card-body text-center fw-bold position-relative">
			<p class="m-0">{{ singleRestaurat.name }}</p>
			<div class="position-absolute top-0 start-50 translate-middle d-inline-flex justify-content-center">
				<span v-for="singolaCategoria in singleRestaurat.categories" class="bg-dark badge rounded-pill me-1">
					{{ singolaCategoria.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card:hover {
	scale: 1.1;
	transition: 0.4s ease-in-out;
	cursor: pointer;
}
</style>