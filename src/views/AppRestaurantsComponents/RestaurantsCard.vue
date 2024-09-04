<script>
import { RouterLink } from "vue-router";

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
			<img
				class="card-img-top"
				src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
				alt="" />
		</router-link>

		<!-- CONTENUTO CARD -->

		<div class="card-body text-center fw-bold">
			<p>{{ singleRestaurat.name }}</p>
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
