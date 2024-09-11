<script>
import axios from "axios";
import store from "../store/store";
export default {
	name: "Categories",
	data() {
		return {
			categories: [],
			selectedCategories: [],
			store,
			category: "",
		};
	},
	methods: {
		selectCategory(indice) {
			const categoryId = indice + 1;

			if (this.selectedCategories.includes(indice)) {
				this.selectedCategories = this.selectedCategories.filter((i) => i !== indice);
				this.store.categoriesSelected = this.store.categoriesSelected.filter(
					(id) => id !== categoryId
				);
			} else {
				this.selectedCategories.push(indice);
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
					store.restaurants = response.data.restaurants;
				});
		},
		isCategorySelected(indice) {
			return this.selectedCategories.includes(indice);
		},
	},
	mounted() {
		axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
			this.categories = response.data.categories;
		});
	},
};
</script>

<template>
	<div class="row mx-0 px-0 justify-content-center mb-5">
		<div
			v-for="(category, indice) in categories"
			:key="category"
			class="col-6 col-sm-4 col-md-3 col-lg-2 p-3">
			<div
				id="img_container"
				class="w-100 shadow-lg rounded-4 p-2 border border-2 position-relative myBg"
				@click="selectCategory(indice)"
				:class="{ grayscale: !isCategorySelected(indice) && selectedCategories.length > 0 }">
				<img
					class="img-fluid mx-auto d-block"
					:src="category.image_path"
					alt=""
					style="height: 100px" />
				<div
					class="position-absolute top-100 start-50 translate-middle text-dark bg-white text-center fs-5 fw-bold text-nowrap badge rounded-pill">
					{{ category.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#img_container:hover {
	transition: 0.4s ease-in-out;
	scale: 1.05;
	cursor: pointer;
}

.myBg {
	background-color: #912731;
}

.grayscale {
	filter: grayscale(100%);
}
</style>
