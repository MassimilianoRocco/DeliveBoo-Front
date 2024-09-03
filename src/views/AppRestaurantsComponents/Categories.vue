<script>
import axios from "axios";
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
	mounted() {
		axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
			console.log(response.data.categories);
			this.categories = response.data.categories;
		});
	},
};
</script>

<template>
	<div class="row mx-0 justify-content-center">
		<!-- v-for="category in categories" :key="category.id" -->
		<div v-for="i in categories" :key="i" class="col-2 p-3">
			<img
				class="w-100 rounded-4 shadow-lg"
				src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
				alt=""
				@click="selectCategory(category)"
				:class="{ active: clickedCategory === category }" />
			{{ i.name }}
		</div>
	</div>
</template>

<style scoped>
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
