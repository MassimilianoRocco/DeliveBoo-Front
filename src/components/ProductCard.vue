<script>
import EventBus from "../eventBus.js";
export default {
	name: "ProducCard",
	props: {
		singleProduct: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			differenceRestaurant: false,
			base_url: "http://127.0.0.1:8000",
			quantity: 1,
			totalPrice: null,
		};
	},
	methods: {
		addQuantity(price, elemento) {
			if (this.quantity < 99) {
				this.quantity++;
				this.getPrice(price, elemento.restaurant_id
				);
			} else {
				this.quantity = 99;
				this.getPrice(price, elemento.restaurant_id
				);
			}
		},
		decreaseQuantity(price, elemento) {
			if (this.quantity < 2) {
				this.quantity = 1;
				this.getPrice(price, elemento.restaurant_id
				);
			} else {
				this.quantity--;
				this.getPrice(price, elemento.restaurant_id
				);
			}
		},
		getPrice(price, product) {
			let cart = localStorage.getItem("cart");
			if (cart) {
				cart = JSON.parse(cart);
				const restaurantId = product;
				this.differenceRestaurant = cart.some((element) => element.restaurant_id !== restaurantId);
			}
			let result = price * this.quantity;
			this.totalPrice = parseFloat(result);
			this.totalPrice = this.totalPrice.toFixed(2);
		},

		addToCart(singleProduct) {
			singleProduct.quantity = this.quantity;
			singleProduct.totalPrice = this.totalPrice;

			let cart = localStorage.getItem("cart");
			// Se esiste lo trasformo in array di oggetti
			cart = JSON.parse(cart);

			let productExists = false;

			if (cart) {
				console.log('entrato nel primo if')
				// if (cart.length > 0) {
				cart.forEach((element, index) => {
					if (element.id === singleProduct.id) {
						console.log('entrato nel foreach')

						productExists = true;
						cart[index].quantity += singleProduct.quantity;
						cart[index].totalPrice = parseFloat(cart[index].totalPrice) + parseFloat(singleProduct.totalPrice);
						let numeroStringa = cart[index].totalPrice.toString();
						if (!numeroStringa.includes(".")) {
							numeroStringa += ".00";
						} else {
							let decimali = numeroStringa.split(".")[1];
							if (decimali.length == 1) {
								numeroStringa += "0";
							}
						}
						cart[index].totalPrice = numeroStringa;
					}
				});
				// }
			} else {
				console.log('creato')
				// Se non esiste creo un array vuoto
				cart = [];
			}
			if (!productExists) {
				cart.push(singleProduct);
			}
			localStorage.setItem("cart", JSON.stringify(cart));
			this.refreshHeader();
		},

		deleteCart() {
			localStorage.removeItem("cart");
			this.differenceRestaurant = false;
			window.location.reload();
			this.refreshHeader();
		},
		refreshHeader() {
			EventBus.emit("refreshHeader");
		},
	},
	mounted() {
	},
};
</script>

<template>
	<div class="card p-0 m-0">
		<div class="img-container ratio ratio-4x3 p-0 m-0">
			<template v-if="singleProduct.image_path.startsWith('http')">
				<img :src="singleProduct.image_path" class="card-img-top p-0 m-0" :alt="singleProduct.name" />
			</template>
			<template v-else>
				<img :src="base_url + '/storage/' + singleProduct.image_path" class="card-img-top"
					:alt="singleProduct.name" />
			</template>
		</div>

		<div class="card-body text-center fw-bold">
			<p>{{ singleProduct.name }}</p>
			<div class="">
				<p v-if="singleProduct.ingredients" class="text-center fw-bold m-0" style="font-size: 14px">INGREDIENTI
				</p>
				<p v-if="singleProduct.ingredients" style="height: 3.2rem; font-size: 12px" class="overflow-auto">{{
					singleProduct.ingredients }}</p>
			</div>

			<div class="card-footer">
				<div class="row justify-content-between align-items-center flex-column flex-sm-row">
					<div class="col-sm-12 col-md-8 text-center text-md-end">
						<p class="m-0 pe-sm-0 pe-md-2">{{ singleProduct.price }}€</p>
					</div>
					<div class="col-sm-12 col-md-3">
						<button @click="getPrice(singleProduct.price, singleProduct.restaurant_id)" type="button"
							class="btn btn-warning btn-sm" data-bs-toggle="modal"
							:data-bs-target="'#' + singleProduct.id">
							<i class="fa-solid fa-plus"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" :id="singleProduct.id" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 v-show="differenceRestaurant">Attenzione!</h5>
					<h5 v-show="!differenceRestaurant" class="modal-title" id="modalTitleId">Aggiungere {{
						singleProduct.name
					}} al carrello</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<h5 v-show="differenceRestaurant">
						Hai già un ordine in corso con un altro ristorante, per effettuare un nuovo ordine svuota il
						carrello
					</h5>
					<button v-show="differenceRestaurant" @click="deleteCart()" data-bs-dismiss="modal" type="button"
						class="btn btn-danger">
						Svuota carrello
					</button>
					<div v-show="!differenceRestaurant" class="row">
						<div class="col-4">
							<template v-if="singleProduct.image_path.startsWith('http')">
								<img :src="singleProduct.image_path" class="img-fluid" :alt="singleProduct.name" />
							</template>
							<template v-else>
								<img :src="base_url + '/storage/' + singleProduct.image_path" class="img-fluid"
									:alt="singleProduct.name" />
							</template>
						</div>
						<div class="col-6">
							<p><span class="fw-bold">Prezzo : </span>{{ singleProduct.price }}€</p>
							<div class="d-flex align-items-center justify-content-start gap-2">
								<i @click="decreaseQuantity(singleProduct.price, singleProduct)"
									class="fa-solid fa-minus p-2 bg-warning rounded-circle"></i>
								<input v-model="quantity" class="my_quantity_input" disabled />
								<i @click="addQuantity(singleProduct.price, singleProduct)"
									class="fa-solid fa-plus p-2 bg-warning rounded-circle"></i>
							</div>
						</div>
					</div>
				</div>
				<div v-show="!differenceRestaurant" class="modal-footer">
					<button @click="addToCart(singleProduct)" data-bs-dismiss="modal" type="button"
						class="btn btn-warning">
						<i class="fs-5 text-white fa-solid fa-cart-plus me-2"></i><input :value="totalPrice + '€'"
							class="my_total_price_input" disabled />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.fa-minus:hover,
.fa-plus:hover {
	transform: scale(1.2);
	transition: 300ms;
}

.my_total_price_input {
	border: none;
	width: 4rem;
	text-align: center;
	outline: none;
}

.my_quantity_input {
	border: none;
	width: 1.5rem;
	text-align: center;
	outline: none;
}

input:disabled {
	background-color: rgba(255, 255, 255, 0);
}
</style>
