<script>
import axios from "axios";
import store from "../store/store";
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
			i: "",
		};
	},
	methods: {

	},
	mounted() {
		axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
			store.restaurants = response.data.restaurants;
		});
	},
};
</script>

<template>
	<AppJumbo />

	<div class="myBox" id="ristoranti">
		<div class="container">
			<div class="col text-center">
				<h1 class="text-center fw-bold display-5 pb-5 myColor">SCEGLI IL TUO RISTORANTE</h1>
			</div>

			<Categories />

			<div class="text-center mt-5">
				<h1 class="text-center fw-bold display-5 my-4 pt-4 myColor">LISTA RISTORANTI</h1>
			</div>

			<h4 class="ps-3">
				<template v-if="store.restaurants.length == 1">
					Trovato {{ store.restaurants.length }} ristorante
				</template>
				<template v-else> Trovati {{ store.restaurants.length }} ristoranti </template>
			</h4>
			<div class="row mx-0">
				<div
					v-if="store.restaurants.length > 0"
					v-for="singleRestaurat in store.restaurants"
					class="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
					<RestaurantsCard :singleRestaurat="singleRestaurat" />
				</div>

				<h2 v-else>Non ci sono ristoranti per i filtri applicati</h2>
			</div>

			<AppServices />

			<AppWorkWithUs />
		</div>
	</div>
</template>

<style scoped>
.myBox {
	background-color: #fbab7e;
	background-image: linear-gradient(90deg, #fbab7e 0%, #f7ce68 50%, #fbab7e 100%);
	padding: 6rem 0;
}

.myColor {
	color: #912731;
}
</style>
