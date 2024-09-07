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
		console.log(document.querySelector(".my_cart_number"));
		const url = `${this.store.requestRestaurants.url}/${this.$route.params.id}`;

		axios.get(url).then((response) => {
			if (response.data.restaurant.length > 0) {
				this.restaurant = response.data.restaurant[0];
			} else {
				this.$router.push({ name: "not-found" });
			}
		});

		axios.get(url + "/products").then((response) => {
			if (response.data.product) {
				// for (let i = 0; i < response.data.product.length; i++) {
				// 	if (response.data.product[i].type == 'Food' || response.data.product[i].type == 'Dessert') {
				// 		this.piatti.push(response.data.product[i])
				// 		if (!this.piatti[i].visible) {
				// 			this.piatti.splice(i, 1)
				// 		}
				// 		console.log(this.piatti)
				// 	} else {
				// 		this.bibite.push(response.data.product[i])
				// 		if (!this.bibite[i].visible) {
				// 			this.bibite.splice(i, 1)
				// 		}
				// 	}
				// }
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
					<h4>{{ restaurant.user.email }}</h4>
					<h4>{{ restaurant.address }}</h4>
					<h4>{{ restaurant.phone }}</h4>
					<p>{{ restaurant.description }}</p>

					<span v-for="singleCategory in restaurant.categories" class="badge bg-warning p-2 me-2">
						{{ singleCategory.name }}
					</span>
				</div>
			</div>
			<!-- <div v-else>non ci sono</div> -->

			<div v-if="piatti && bibite">
				<div class="row mx-0">
					<h1 class="text-white fw-bold ms-1">I NOSTRI PIATTI</h1>
					<div v-for="singleProduct in piatti" class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
						<ProductCard v-if="singleProduct.visible" :singleProduct="singleProduct" />
					</div>

					<h1 class="text-white fw-bold ms-1">LE NOSTRE BEVANDE</h1>
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

.deb {
	border: 3px dashed blue;
}
</style>
