<script>
import axios from "axios";
import EventBus from "../eventBus.js";
export default {
	name: "AppHeader",

	data() {
		return {
			cart: null,
			totalPayment: null,
			name: "davide",
			email: "davide@davide.it",
			phone: "3311234567",
			address: "via roma",
			order: {},
			dynamicBg: 'none'
		};
	},
	methods: {
		addProduct(i) {
			this.cart = localStorage.getItem("cart");
			if (this.cart) {
				this.cart = JSON.parse(this.cart);
				if (this.cart[i].quantity < 99) {
					this.cart[i].quantity += 1;
					this.cart[i].totalPrice = parseFloat(this.cart[i].totalPrice) + parseFloat(this.cart[i].price);
					let numeroStringa = this.cart[i].totalPrice.toString();
					if (!numeroStringa.includes(".")) {
						numeroStringa += ".00";
					} else {
						let decimali = numeroStringa.split(".")[1];
						if (decimali.length == 1) {
							numeroStringa += "0";
						}
					}
					this.cart[i].totalPrice = numeroStringa;
				} else {
					this.cart[i].quantity = 99;
				}
				localStorage.setItem("cart", JSON.stringify(this.cart));
				this.updateTotalPayment();
			}
		},
		decreaseProduct(i) {
			this.cart = localStorage.getItem("cart");
			if (this.cart) {
				this.cart = JSON.parse(this.cart);
				if (this.cart[i].quantity > 1) {
					this.cart[i].quantity -= 1;
					this.cart[i].totalPrice = parseFloat(this.cart[i].totalPrice) - parseFloat(this.cart[i].price);
					let numeroStringa = this.cart[i].totalPrice.toString();
					if (!numeroStringa.includes(".")) {
						numeroStringa += ".00";
					} else {
						let decimali = numeroStringa.split(".")[1];
						if (decimali.length == 1) {
							numeroStringa += "0";
						}
					}
					this.cart[i].totalPrice = numeroStringa;
				} else {
					this.deleteProduct(i);
				}
				localStorage.setItem("cart", JSON.stringify(this.cart));
				this.updateTotalPayment();
			}
		},
		deleteProduct(i) {
			this.cart = localStorage.getItem("cart");
			if (this.cart) {
				this.cart = JSON.parse(this.cart);
				this.cart.splice(i, 1);
				localStorage.setItem("cart", JSON.stringify(this.cart));
				this.updateTotalPayment();
			}
		},
		updateHeader() {
			this.cart = localStorage.getItem("cart");
			if (this.cart) {
				this.cart = JSON.parse(this.cart);
			} else {
				this.cart = [];
			}
			this.$forceUpdate();
			this.updateTotalPayment();
		},
		updateTotalPayment() {
			if (this.cart) {
				this.totalPayment = this.cart.reduce((total, product) => total + parseFloat(product.totalPrice), 0).toFixed(2);
			} else {
				this.totalPayment = "0.00";
			}
		},
		async submitOrder() {
			try {
				const orderData = {
					name: this.name,
					email: this.email,
					phone: this.phone,
					address: this.address,
					total_price: this.totalPayment,
					restaurant_id: this.getRestaurantIdFromCart(),
					products: this.cart.map((product) => ({
						product_id: product.id,
						quantity: product.quantity,
						price: product.price,
						name: product.name,
					})),
				};
				console.log(orderData);

				const response = await axios.post("http://127.0.0.1:8000/api/orders", orderData);

				if (response.status === 200) {
					console.log("Order submitted successfully:", response.data);
					this.cart = null;
					localStorage.removeItem("cart");
				} else {
					console.error("Failed to submit order:", response.data);
				}
			} catch (error) {
				console.error("An error occurred while submitting the order:", error);
			}
		},
		getRestaurantIdFromCart() {
			return this.cart.length > 0 ? this.cart[0].restaurant_id : null;
		},
	},
	beforeUnmount() {
		EventBus.off("refreshHeader", this.updateHeader);
	},
	mounted() {
		window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop
            if (scrollTop >= 816) {
                this.dynamicBg = 'rgba(0, 0, 0, 0.5) !important'
            }
            else {
                this.dynamicBg = 'none'
            }
		})

		EventBus.on("refreshHeader", this.updateHeader);
		// localStorage.clear();
		this.cart = localStorage.getItem("cart");
		if (this.cart) {
			this.cart = JSON.parse(this.cart);
		}
		this.updateTotalPayment();
	},
};
</script>

<template>
	<header class="p-3 text-white d-flex align-items-center" :style="{background: dynamicBg}">
		<div class="container-fluid h-auto">
			<div id="my_box_header" class="d-flex align-items-center justify-content-center justify-content-lg-start">
				<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-center text-decoration-none">
					<img src="/src/assets/DeliveBoo-Photoroom.png" alt="logo DeliveBoo" class="my_logo" />
				</a>

				<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
					<li><a href="http://localhost:5173/#video" class="nav-link px-2 text-white">Home</a></li>
					<li><a href="http://localhost:5173/#ristoranti" class="nav-link px-2 text-white">Lista Ristoranti</a></li>
					<li><a href="http://localhost:5173/#servizi" class="nav-link px-2 text-white">Cosa offriamo</a></li>
					<li><a href="http://localhost:5173/#lavora" class="nav-link px-2 text-white">Lavora con noi</a></li>
				</ul>

				<div class="d-flex align-items-center gap-3">
					<div class="position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
						<i class="fa-solid fa-cart-shopping fs-3 text-warning"></i>
						<span v-if="cart && cart.length > 0" class="my_cart_number">{{ cart.length }}</span>
					</div>
					<a href="http://127.0.0.1:8000/auth">
						<button type="button" class="btn btn-warning my_button">Login/Registrati</button>
					</a>
				</div>
			</div>
		</div>
		<!-- <button class="btn btn-primary" type="button">Enable body scrolling</button> -->

		<div
			class="offcanvas w-50 offcanvas-end"
			data-bs-scroll="true"
			data-bs-backdrop="false"
			tabindex="-1"
			id="offcanvasScrolling"
			aria-labelledby="offcanvasScrollingLabel">
			<div class="offcanvas-header">
				<h5 v-if="cart && cart.length > 0" class="offcanvas-title" id="offcanvasScrollingLabel">Riepilogo Carrello</h5>
				<h5 v-else class="offcanvas-title" id="offcanvasScrollingLabel">Carrello vuoto</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<div class="h-25 overflow-auto">
					<!-- <h5 v-if="cart && cart.length == 0">Carrello vuoto</h5> -->
					<table v-if="cart && cart.length > 0" class="table">
						<thead>
							<tr class="text-center">
								<th scope="col">Nome</th>
								<th scope="col">Quantità</th>
								<th scope="col">Prezzo Totale</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(product, i) in cart" class="text-center">
								<td>{{ product.name }}</td>
								<td>
									<i @click="decreaseProduct(i)" class="fa-solid fa-minus bg-light p-1 rounded-circle"></i>
									<span class="mx-2">{{ product.quantity }}</span>
									<i @click="addProduct(i)" class="fa-solid fa-plus bg-light p-1 rounded-circle"></i>
								</td>
								<td>{{ product.totalPrice }} €</td>
								<td><i @click="deleteProduct(i)" class="fa-solid fa-trash text-danger"></i></td>
							</tr>
						</tbody>
					</table>
				</div>
				<table v-if="cart && cart.length > 0" class="table">
					<thead>
						<tr class="text-center">
							<th scope="col">Totale da pagare:</th>
							<th scope="col">{{ totalPayment }} €</th>
						</tr>
					</thead>
				</table>
				<form v-if="cart && cart.length > 0" @submit.prevent="submitOrder">
					<div class="mb-3">
						<label for="name" class="form-label">Nome</label>
						<input v-model="name" type="text" class="form-control" id="name" required />
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<input v-model="email" type="email" class="form-control" id="email" required />
					</div>
					<div class="mb-3">
						<label for="phone" class="form-label">Telefono</label>
						<input v-model="phone" type="text" class="form-control" id="phone" required />
					</div>
					<div class="mb-3">
						<label for="address" class="form-label">Indirizzo</label>
						<input v-model="address" type="text" class="form-control" id="address" required />
					</div>
					<button type="submit" class="btn btn-primary">Conferma Ordine</button>
				</form>
			</div>
		</div>
	</header>
</template>

<style scoped>
.my_cart_number {
	font-size: 10px;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	position: absolute;
	top: -10px;
	right: -10px;
	background-color: white;
	color: red;
	border: 1px solid red;
	border-radius: 50%;
}

.my_cart_number:empty {
	display: none;
}

header {
	height: 10vh;
	position: fixed;
	top: 0;
	width: 100%;
	transition: .6s;
	z-index: 800;
}
.my_logo {
	height: 70px;
	margin-right: 2rem;
}

.my_button {
	background-color: #bf1b2c;
	color: white;
	border-color: unset;
	padding: 2px 10px;
}

@media screen and (max-width: 992px) {
	header {
		height: 10vh;
	}
	.my_logo {
		margin: 0;
	}
	ul {
		display: none;
	}
	#my_box_header {
		justify-content: space-between !important;
	}
}
</style>

