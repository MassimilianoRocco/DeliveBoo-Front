<script>
import store from "../store/store";
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";

export default {
	name: "SingleRestaurant",
	components: {
		ProductCard,
	},
	data() {
		return {
			piatti: [],
			bibite: [],
			restaurant: null,
			store,
		};
	},
	methods: {},
	mounted() {
		const url = `${this.store.requestRestaurants.url}/${this.$route.params.id}`;

		axios.get(url).then((response) => {
			console.log(response.data.restaurant)
			if (response.data.restaurant.length > 0) {
				this.restaurant = response.data.restaurant[0];
			} else {
				this.$router.push({ name: "not-found" })
			}
		});

		axios.get(url + "/products").then((response) => {
			if (response.data.product) {
				for (let i = 0; i < response.data.product.length; i++) {
					if (response.data.product[i].type == 'Food' || response.data.product[i].type == 'Dessert') {
						this.piatti.push(response.data.product[i])
					} else {
						this.bibite.push(response.data.product[i])
					}
				}
			}
		})
	},
};
</script>

<template>
	<div class="myBox">
		<div class="container">
			<!-- CONTROLLO V-IF PERCHÈ LA PAGINA CARICA PRIMA DELLA CHIAMATA API -->

			<div v-if="restaurant" class="row mx-0 deb justify-content-center">
				<div class="col-6 deb">
					<img class="card-img-top rounded-4 border border-3" :src="restaurant.image_path" loading="lazy" />
				</div>
				<div class="col-6 deb">
					<p>{{ restaurant.name }}</p>
				</div>
			</div>
			<!-- <div v-else>non ci sono</div> -->

			<div v-if="piatti && bibite">
				<div class="row mx-0">

					<h1>I NOSTRI PIATTI</h1>
					<div v-for="singleProduct in piatti" :key="i" class="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
						<ProductCard :singleProduct="singleProduct" />
					</div>

					<h1>LE NOSTRE BEVANDE</h1>
					<div v-for="singleProduct in bibite" :key="i" class="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
						<ProductCard :singleProduct="singleProduct" />
					</div>
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
