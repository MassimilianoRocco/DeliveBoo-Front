<script>
export default {
	name: "Categories",
	data() {
		return {
			categories: [
				// list of categories
			],
			clickedCategory: null,
		};
	},
	methods: {
		selectCategory(category) {
			this.clickedCategory = category;
		},
	},
};
</script>

<template>
	<div class="row mx-0 justify-content-center">
		<!-- v-for="category in categories" :key="category.id" -->
		<div v-for="i in 12" :key="i" class="col-2 p-3">
			<img
				class="w-100 rounded-4 shadow-lg"
				src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
				alt=""
				@click="selectCategory(category)"
				:class="{ active: clickedCategory === category }" />
		</div>
	</div>
</template>

<style scoped>
.deb {
	border: 3px dashed blue;
}

img:hover {
	transition: 0.4s ease-in-out;
	scale: 1.1;
	cursor: pointer;
}

.active {
	border: 2px solid #ccc;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
