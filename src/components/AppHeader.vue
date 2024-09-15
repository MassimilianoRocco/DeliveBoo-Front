<script>
import axios from "axios";
import EventBus from "../eventBus.js";
import dropin from "braintree-web-drop-in";
import store from "../store/store";

export default {
	name: "AppHeader",
	data() {
		return {
			store,
			cart: null,
			totalPayment: null,
			name: "",
			email: "",
			phone: "",
			address: "",
			order: {},
			validation: false,
			clientToken: null,
			instance: null,
			loading: false,
			nameValid: false,
			emailValid: false,
			phoneValid: false,
			addressValid: false,

			nameTouched: false,
			emailTouched: false,
			phoneTouched: false,
			addressTouched: false,

			isSendingPayment: false,

			dynamicBg: "none",
			isHome: true,
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
			this.initializeBraintree();
		},
		updateTotalPayment() {
			if (this.cart) {
				this.totalPayment = this.cart.reduce((total, product) => total + parseFloat(product.totalPrice), 0).toFixed(2);
			} else {
				this.totalPayment = "0.00";
			}
		},
		async submitOrder() {
			// this.pay();
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
					this.store.orderSent = true;
					setTimeout(() => {
						this.isSendingPayment = false;
						this.store.orderSent = false;
						this.closeOffCanv();
					}, 2000);
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
		initializeBraintree() {
			dropin.create(
				{
					authorization: this.clientToken,
					container: "#dropin-container",
					locale: "it_IT",
				},
				(error, instance) => {
					if (error) {
						console.error(error);
					} else {
						this.instance = instance;
					}
				}
			);
		},
		pay() {
			this.isSendingPayment = true;
			if (!this.instance) return;
			this.loading = true;

			this.instance.requestPaymentMethod((error, payload) => {
				if (error) {
					console.error(error);
					this.loading = false;
					return;
				}

				// Invia il nonce al server Laravel insieme all'importo
				axios
					.post("http://127.0.0.1:8000/api/braintree/checkout", {
						payment_method_nonce: payload.nonce,
						amount: this.totalPayment, // Usa l'importo passato come prop
					})
					.then((response) => {
						if (response.data.success) {
							this.submitOrder();
							// Puoi fare ulteriori azioni come svuotare il carrello
							this.$emit("paymentSuccess");
						} else {
							alert("Errore nel pagamento: " + response.data.message);
						}
						this.loading = false;
					})
					.catch((error) => {
						console.error("Errore nel pagamento:", error);
						this.loading = false;
						this.isSendingPayment = false;
					});
			});
		},
		validateName() {
			if (this.name.length < 3 || this.name.length > 255) {
				this.nameValid = false;
				return false;
			} else {
				this.nameValid = true;
				return true;
			}
		},
		validateEmail(email) {
			const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (re.test(String(email).toLowerCase())) {
				this.emailValid = true;
				return true;
			} else {
				this.emailValid = false;
				return false;
			}
		},
		validatePhone(phone) {
			const phonePattern = /^\d{10}$/;

			if (!phonePattern.test(phone)) {
				this.phoneValid = false;

				return false;
			} else {
				this.phoneValid = true;
				return true;
			}
		},
		validateAddress(address) {
			if (address === "") {
				this.addressValid = false;
				return false;
			} else {
				this.addressValid = true;
				return true;
			}
		},
		validationInput() {
			return this.nameValid && this.emailValid && this.phoneValid && this.addressValid;
		},

		closeOffCanv() {
			document.getElementById("my_closeOffCanv").click();
		},
		closeOffCanv() {
			document.getElementById("my_closeOffCanv").click();
		},
	},
	beforeUnmount() {
		EventBus.off("refreshHeader", this.updateHeader);
	},

	mounted() {
		window.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop >= 10) {
				this.dynamicBg = "rgba(0, 0, 0, 0.5) !important";
			} else {
				this.dynamicBg = "none";
			}
		});

		EventBus.on("refreshHeader", this.updateHeader);

		axios
			.get("http://127.0.0.1:8000/api/braintree/token")
			.then((response) => {
				// console.log(response.data.token)
				this.clientToken = response.data.token;
				// Inizializza il Braintree Drop-in UI

				document.addEventListener("DOMContentLoaded", () => {
					this.initializeBraintree();
				});
			})
			.catch((error) => {
				console.error("Errore nel recuperare il token:", error);
			});
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
	<header v-if="store.existData" class="p-3 text-white d-flex align-items-center" :style="{ background: dynamicBg }">
		<div class="container-fluid h-auto">
			<div id="my_box_header" class="d-flex align-items-center justify-content-center justify-content-lg-start">
				<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-center text-decoration-none">
					<img src="/src/assets/DeliveBoo-Photoroom.png" alt="logo DeliveBoo" class="my_logo" />
				</a>

				<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
					<li>
						<a href="http://localhost:5173/#video" class="nav-link px-2 text-white">Home</a>
					</li>
					<li>
						<a href="http://localhost:5173/#ristoranti" class="nav-link px-2 text-white">Lista Ristoranti</a>
					</li>
					<li>
						<a href="http://localhost:5173/#servizi" class="nav-link px-2 text-white">Cosa offriamo</a>
					</li>
					<li>
						<a href="http://localhost:5173/#lavora" class="nav-link px-2 text-white">Lavora con noi</a>
					</li>
				</ul>
				<div class="d-flex align-items-center gap-3">
					<div
						class="position-relative"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasScrolling"
						aria-controls="offcanvasScrolling"
						@click="initializeBraintree()">
						<span v-if="cart && cart.length > 0" class="my_cart_number">{{ cart.length }}</span>
						<div class="cart-icon-container position-relative">
							<div class="background"></div>
							<i class="fa-solid fa-cart-shopping fs-4" :class="cart && cart.length > 0 ? 'fa-beat' : ''"></i>
						</div>
					</div>
					<a class="text-decoration-none text-white" href="http://127.0.0.1:8000/auth" v-if="store.checkLog && store.checkLog.email">{{
						store.checkLog.email
					}}</a>
					<a v-else href="http://127.0.0.1:8000/auth">
						<button type="button" class="btn position-relative fw-bold" id="myBtn">
							<div class="background"></div>
							Login/Registrati
						</button>
					</a>
				</div>
			</div>
		</div>

		<div
			class="offcanvas offcanvas-end w-50"
			data-bs-scroll="true"
			data-bs-backdrop="true"
			tabindex="-1"
			id="offcanvasScrolling"
			aria-labelledby="offcanvasScrollingLabel">
			<div class="offcanvas-header">
				<h5 v-if="cart && cart.length > 0" class="offcanvas-title" id="offcanvasScrollingLabel">
					Stai ordinando da <br />{{ cart[0].restaurant.name }}
				</h5>
				<h5 v-else class="offcanvas-title" id="offcanvasScrollingLabel">Carrello vuoto</h5>
				<button id="my_closeOffCanv" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<div class="h-25 overflow-auto">
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
								<td>
									<i @click="deleteProduct(i)" class="fa-solid fa-trash text-danger"></i>
								</td>
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
				<div class="d-flex flex-column align-items-center" v-if="store.orderSent">
					<h3>Ordine inviato con successo!</h3>
					<i class="fa-regular fa-circle-check fs-1" style="color: #63e6be"></i>
				</div>
				<form v-if="cart && cart.length > 0" @submit.prevent="pay()">
					<div class="mb-3">
						<label for="name" class="form-label">Nome</label>
						<input
							@input="validateName()"
							@focus="nameTouched = true"
							v-model="name"
							type="text"
							class="shadow-none form-control"
							id="name"
							required />
						<p class="alert alert-danger p-1 m-0" v-if="!validateName() && nameTouched">Inserisci un nome con almeno 3 caratteri</p>
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<input
							@input="validateEmail(email)"
							@focus="emailTouched = true"
							v-model="email"
							type="email"
							class="form-control"
							id="email"
							required />
						<p class="alert alert-danger p-1 m-0" v-if="!validateEmail(email) && emailTouched">Inserisci una mail valida</p>
					</div>
					<div class="mb-3">
						<label for="phone" class="form-label">Telefono</label>
						<input
							@input="validatePhone(phone)"
							@focus="phoneTouched = true"
							v-model="phone"
							type="text"
							class="form-control"
							id="phone"
							required />
						<p class="alert alert-danger p-1 m-0" v-if="!validatePhone(phone) && phoneTouched">Inserisci un numero di 10 cifre</p>
					</div>
					<div class="mb-3">
						<label for="address" class="form-label">Indirizzo</label>
						<input
							@input="validateAddress(address)"
							@focus="addressTouched = true"
							v-model="address"
							type="text"
							class="form-control"
							id="address"
							required />
						<p class="alert alert-danger p-1 m-0" v-if="!validateAddress(address) && addressTouched">Campo obbligatorio</p>
					</div>
					<!-- <button type="submit" class="btn btn-primary">Conferma Ordine</button> -->
					<div>
						<div id="dropin-container"></div>
						<button v-if="!validationInput()" disabled>Paga ora</button>
						<button v-else :disabled="loading">Paga ora</button>
						<div v-if="isSendingPayment" class="loader-overlay">
							<div class="loader"></div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</header>
</template>

<style scoped>
.cart-icon-container i {
	font-size: 15px;
}

.bg_header_noHomo {
	background-color: rgba(0, 0, 0, 0.5) !important;
}

button {
	background-color: #912731;
	color: white;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
}

button:disabled {
	background-color: #ccc;
	cursor: not-allowed;
}

.my_cart_number {
	font-size: 12px;
	font-weight: bold;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 16px;
	position: absolute;
	top: -5px;
	right: -10px;
	background-color: white;
	color: #912731;
	border: 2.5px solid #912731;
	border-radius: 50%;
	padding-left: 0.03rem;
	z-index: 3;
}

.my_cart_number:empty {
	display: none;
}

header {
	height: 10vh;
	position: fixed;
	top: 0;
	width: 100%;
	transition: 0.6s;
	z-index: 800;
}

.my_logo {
	height: 70px;
	margin-right: 2rem;
}

.my_button {
	background-color: #912731;
	color: white;
	border-color: unset;
	padding: 2px 10px;
}

@media screen and (max-width: 992px) {
	.offcanvas {
		width: 75%;
	}

	header {
		height: 13vh;
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

.loader-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.loader {
	border: 16px solid #f3f3f3;
	border-radius: 50%;
	border-top: 16px solid #3498db;
	width: 120px;
	height: 120px;
	-webkit-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;
}

.cart-icon-container-wrapper {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 60px;
}

.cart-icon-container {
	position: relative;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #912731;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2.5px solid white;
	padding-top: 0.2rem;
	padding-right: 0.1rem;
	z-index: 2;
	overflow: hidden;
}

.cart-icon-container:hover {
	border-color: #912731;
	color: #912731;
}

.cart-icon-container:hover .background {
	width: 150%;
	height: 150%;
}

#myBtn {
	color: white;
	z-index: 2;
	overflow: hidden;
	border: 2.5px solid white;
	background-color: #912731;
	padding: 0.4rem;
}

#myBtn:hover {
	color: #912731;
	border-color: transparent;
}

.background {
	width: 0;
	height: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	transition: 0.6s;
	z-index: -1;
	border: none;
}

button:hover .background {
	width: 150%;
	height: 150%;
}

@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@media screen and (max-width: 576px) {
	.offcanvas {
		width: 100%;
	}
}
</style>
