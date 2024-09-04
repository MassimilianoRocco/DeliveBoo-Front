<script>
import axios from "axios";
import store from "../store";

export default {
	name: "Categories",
	data() {
		return {
			categories: [
				// list of categories
			],
			clickedCategory: null,
			store,
			// mi da errore in console perche vuole che category venga dichiarata
			category: "",
		};
	},
	methods: {
		// selectCategory(category) {
		// 	this.clickedCategory = category;
		// },
		selectCategory(indice) {
			console.log(indice);

			const categoryId = indice + 1;
			if (this.store.categoriesSelected.includes(categoryId)) {
				this.store.categoriesSelected = this.store.categoriesSelected.filter(
					(id) => id !== categoryId
				);
			} else {
				this.store.categoriesSelected.push(categoryId);
			}
			this.store.requestRestaurants.params = {
				categories: this.store.categoriesSelected,
			};
			axios
				.get(this.store.requestRestaurants.url, {
					params: this.store.requestRestaurants.params,
				})
				.then((response) => {
					console.log(response.data);
					store.restaurants = response.data.restaurants;
					console.log(store.restaurants);
				});
		},
	},
	mounted() {
		axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
			// console.log(response.data.categories);
			this.categories = response.data.categories;
		});
	},
};
</script>

<template>
	<div class="row mx-0 px-0 justify-content-center">
		<div v-for="(i, indice) in categories" :key="i" class="col-6 col-sm-4 col-md-3 col-lg-2 p-3">
			<img
				class="w-100 rounded-4 shadow-lg"
				src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
				alt=""
				@click="selectCategory(indice)"
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
