<script>
import axios from "axios";
import Categories from "./AppRestaurantsComponents/Categories.vue";
import RestaurantsCard from "./AppRestaurantsComponents/RestaurantsCard.vue";

export default {
	name: "AppRestaurants",
	components: {
		Categories,
		RestaurantsCard,
	},
	data() {
		return {
			restaurants: [],
			// posts: "",
		};
	},
	methods: {
		// changePage(url) {
		// 	axios.get(url).then((result) => {
		// 		this.posts = result.data.posts;
		// 	});
		// },
	},
	mounted() {
		axios.get('http://127.0.0.1:8000/api/restaurants').then(response => {
			console.log(response.data.restaurants);
			this.restaurants = response.data.restaurants
		})
	},
};
</script>

<template>
	<div class="container">
		<div class="col text-center">
			<h1 class="text-center fw-bold display-5 my-5 text-warning">SCEGLI IL TUO RISTORANTE</h1>
		</div>

		<!-- <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5"> -->
		<Categories />
		<!-- </div> -->

		<div class="text-center">
			<h1 class="text-center fw-bold display-5 my-5 text-warning">LISTA RISTORANTI</h1>
		</div>

		<div class="row mx-0">
			<div v-for="singleRestaurat in restaurants" :key="i" class="col-3 p-3">
				<RestaurantsCard :singleRestaurat="singleRestaurat" />
			</div>
		</div>

		<!-- <RestaurantsCard v-for="post in posts.data" :element="post" />

			<nav aria-label="Page navigation">
				<ul class="pagination">
					<li
						v-for="link in posts.links"
						class="page-item"
						:class="{ disabled: !link.url, active: link.active }">
						<a
							href="#"
							class="page-link"
							@click="changePage(link.url)"
							v-html="link.label"></a>
					</li>
				</ul>
			</nav> -->
	</div>
</template>

<style></style>
