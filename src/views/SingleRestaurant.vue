<script>
import store from "../store";
import axios from "axios";

export default {
	name: "SingleRestaurant",
	data() {
		return {
			restaurant: null,
			store,
		};
	},
	methods: {},
	mounted() {
		const url = `${this.store.requestRestaurants.url}/${this.$route.params.id}`;

		axios.get(url).then((response) => {
			this.restaurant = response.data.restaurant[0];
		});
	},
};
</script>

<template>
	<div class="myBox">
		<div class="container">
			<!-- CONTROLLO V-IF PERCHÈ LA PAGINA CARICA PRIMA DELLA CHIAMATA API -->

			<div v-if="restaurant" class="row mx-0 deb justify-content-center">
				<div class="col-6 deb">
					<img
						class="card-img-top rounded-4 border border-3"
						:src="restaurant.image_path"
						loading="lazy" />
				</div>
				<div class="col-6 deb">
					<p>{{ restaurant.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.myBox {
	background-image: url("../assets/background.jpg") !important;
	background-size: cover;
	padding: 10rem;
}

.deb {
	border: 3px dashed blue;
}
</style>
