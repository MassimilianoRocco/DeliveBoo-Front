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
	methods: {
		getProducts() {
			axios.get("http://127.0.0.1:8000/api/restaurants/" + this.store.activeRestaurant.id + "/products").then((response) => {
				if (response.data.product) {
					for (let i = 0; i < response.data.product.length; i++) {
						if (response.data.product[i].type == "Food" || response.data.product[i].type == "Dessert") {
							if (response.data.product[i].visible) {
								this.piatti.push(response.data.product[i]);
							}
						} else {
							if (response.data.product[i].visible) {
								this.bibite.push(response.data.product[i]);
							}
						}
					}
				}
			});
		},
	},
	mounted() {
		window.scrollTo(0, 0);

		const url = `${this.store.requestRestaurants.url}/${this.$route.params.slug}`;

		axios.get(url).then((response) => {
			if (response.data.restaurant.length > 0) {
				this.restaurant = response.data.restaurant[0];
				this.store.activeRestaurant = response.data.restaurant[0];
				console.log(this.store.activeRestaurant);
				this.getProducts();
			} else {
				this.$router.push({ name: "not-found" });
			}
		});
	},
};
</script>

<template>
	<div class="myBox">
		<div class="container">
			<!-- CONTROLLO V-IF PERCHÈ LA PAGINA CARICA PRIMA DELLA CHIAMATA API -->

			<div v-if="restaurant" class="row mx-0 mb-4 p-2 mx-3 bg-white rounded-4 justify-content-center">
				<div class="col-3 p-0">
					<img class="w-100 rounded-4" :src="restaurant.image_path" loading="lazy" />
				</div>
				<div class="col ms-2">
					<h1>{{ restaurant.name }}</h1>
					<h4>{{ restaurant.address }}</h4>
					<h4>{{ restaurant.phone }}</h4>
					<h4>{{ restaurant.user.email }}</h4>
					<p>{{ restaurant.description }}</p>

					<span v-for="singleCategory in restaurant.categories" class="badge bg-warning p-2 me-2">
						{{ singleCategory.name }}
					</span>
				</div>
			</div>
			<!-- <div v-else>non ci sono</div> -->

			<div v-if="piatti && bibite">
				<div class="row mx-0">
					<h1 class="fw-bold ms-1 myColor my-4">I NOSTRI PIATTI</h1>
					<div v-for="singleProduct in piatti" class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
						<ProductCard v-if="singleProduct.visible" :singleProduct="singleProduct" />
					</div>

					<h1 class="fw-bold ms-1 myColor my-4">LE NOSTRE BEVANDE</h1>
					<div v-for="singleProduct in bibite" class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
						<ProductCard v-if="singleProduct.visible" :singleProduct="singleProduct" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.badge {
	background-image: url("../assets/background.jpg") !important;
	background-size: cover;
}

.myBox {
	padding: 7rem 0 5rem 0;
	background-color: #fbab7e;
	background-image: linear-gradient(90deg, #fbab7e 0%, #f7ce68 50%, #fbab7e 100%);
}

.myColor {
	color: #912731;
}
</style>
