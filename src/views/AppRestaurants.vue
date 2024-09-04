<script>
import axios from "axios";
import store from "../store";
import Categories from "../components/Categories.vue";
import RestaurantsCard from "../components/RestaurantsCard.vue";
import AppJumbo from "../components/AppJumbo.vue";
import AppServices from "../components/AppServices.vue";
import AppWorkWithUs from "../components/AppWorkWithUs.vue";

export default {
	name: "AppRestaurants",
	components: {
		Categories,
		RestaurantsCard,
		AppJumbo,
		AppServices,
		AppWorkWithUs,
	},
	data() {
		return {
			store,
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
		axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
			console.log(response.data.restaurants);
			store.restaurants = response.data.restaurants;
		});
	},
};
</script>

<template>
	<AppJumbo />

	<div class="myBox">
		<div class="container">
			<div class="col text-center">
				<h1 class="text-center fw-bold display-5 py-5 text-white">SCEGLI IL TUO RISTORANTE</h1>
			</div>

			<!-- <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5"> -->
			<Categories />
			<!-- </div> -->

			<div class="text-center">
				<h1 class="text-center fw-bold display-5 my-5 text-white">LISTA RISTORANTI</h1>
			</div>

			<div class="row mx-0">
				<div
					v-for="singleRestaurat in store.restaurants"
					:key="i"
					class="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
					<RestaurantsCard :singleRestaurat="singleRestaurat" />
				</div>
			</div>

			<AppServices />

			<AppWorkWithUs />

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
	</div>
</template>

<style scoped>
.myBox {
	background-image: url("../assets/background.jpg") !important;
	background-size: cover;
}
</style>
