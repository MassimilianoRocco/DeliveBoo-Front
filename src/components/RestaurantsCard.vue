<script>
import store from "../store/store";
export default {
	name: "RestaurantsCard",
	props: {
		singleRestaurat: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			store,
		};
	},
	computed: {
		isSelected() {
			return (categoryId) => store.categoriesSelected.includes(categoryId);
		},
	},
};
</script>

<template>
	<div v-if="store.existData" @click="store.existData = false" class="card shadow-lg">
		<router-link :to="{ name: 'single-restaurant', params: { slug: singleRestaurat.slug } }">
			<template v-if="singleRestaurat.image_path.startsWith('http')">
				<img :src="singleRestaurat.image_path" class="card-img-top" :alt="singleRestaurat.name" />
			</template>
			<template v-else>
				<img :src="'http://localhost:8000' + '/storage/' + singleRestaurat.image_path" class="card-img-top" :alt="singleRestaurat.name" />
			</template>
		</router-link>

		<!-- CONTENUTO CARD -->

		<div class="card-body text-center fw-bold position-relative">
			<p class="m-0">{{ singleRestaurat.name }}</p>
			<div class="position-absolute top-0 start-50 translate-middle d-inline-flex justify-content-center">
				<span
					v-for="(singolaCategoria, i) in singleRestaurat.categories"
					class="mySecondBg badge rounded-pill me-1"
					:class="{ myBg: isSelected(singolaCategoria.id) }">
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

.myBg {
	background-color: #912731 !important;
}
.mySecondBg {
	background-color: black;
}
</style>
