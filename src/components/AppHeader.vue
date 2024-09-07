<script>
export default {
	name: "AppHeader",

	data() {
		return {};
	},
	methods: {},

	mounted() {},
};
</script>

<template>
	<header class="p-3 text-white d-flex align-items-center">
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
					<div class="position-relative">
						<i class="fa-solid fa-cart-shopping fs-3 text-warning"></i>
						<span class="my_cart_number"></span>
					</div>
					<a href="http://127.0.0.1:8000/auth">
						<button type="button" class="btn btn-warning my_button">Login/Registrati</button>
					</a>
				</div>
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
	background-color: rgba(33, 37, 41, 0.5) !important;
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
