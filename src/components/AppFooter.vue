<script>
import store from "../store/store.js";
export default {
	data() {
		return {
			shorten: false,
			store,
		};
	},
	methods: {
		isHover() {
			this.shorten = true;
		},
		isNotHover() {
			this.shorten = false;
		},
	},
	mounted() {},
};
</script>

<template>
	<footer v-if="store.existData" class="border-top border-3 border-white">
		<div class="row justify-content-around m-0">
			<div class="col-lg-2 col-md-5">
				<ul class="p-0">
					<li>
						<h4 class="round-font text-nowrap mb-2 mb-sm-3 mt-sm-3">Scopri Deliveboo</h4>
					</li>
					<li v-for="links in store.getLinks" class="mb-2">
						<a :href="links.url"> {{ links.link }} </a>
					</li>
				</ul>
			</div>

			<div class="col-lg-2 col-md-5">
				<ul class="p-0">
					<li>
						<h4 class="round-font mt-3 mb-2 mb-sm-3">{{ store.headTwo }}</h4>
					</li>
					<li v-for="links in store.netLinks" class="mb-2">
						<a :href="links.url"> {{ links.link }} </a>
					</li>
				</ul>
			</div>

			<div class="col-lg-2 col-md-5">
				<ul class="p-0">
					<li>
						<h4 class="round-font mt-3 mb-2 mb-sm-3">Aiuto</h4>
					</li>
					<li class="mb-2">
						<a href="#"> Contatti</a>
					</li>
					<li class="mb-2">
						<a href="#"> FAQ </a>
					</li>
					<li class="mb-2">
						<a href="#"> Tipi di cucina</a>
					</li>
				</ul>
			</div>

			<div class="col-lg-2 col-md-5">
				<p id="foot-desc" class="mt-3">
					Bopoleveroo è la tua piattaforma di food delivery che ti collega ai migliori ristoranti della città con consegne rapide e
					affidabili. Mangia bene, ovunque tu sia!
				</p>
				<div id="foot-icon" class="d-flex flex-row gap-4">
					<div class="social facebook">
						<i class="fa-brands fa-facebook-f"></i>
					</div>
					<div class="social twitter">
						<i class="fa-brands fa-twitter"></i>
					</div>
					<div class="social instagram">
						<i class="fa-brands fa-instagram"></i>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: white;
	padding:2rem;
}

.social {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    margin-top: 1rem;
}

.facebook:hover {
    background: #0866FF;
}

.twitter:hover {
    background: #1C9CEA;
}

.instagram:hover {
    background: rgb(131, 58, 180);
    background: linear-gradient(214deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
}

.social i {
    font-size: 1.5rem;
}

.social:hover i {
	color: aliceblue;
}

ul {
	list-style: none;
}

a {
	color: black;
	text-decoration: none;
	transition: 400ms ease;
}

li:hover a {
	color: orangered;
}

@media (max-width: 992px) {
	#foot-desc {
		display: none;
	}

	#foot-icon {
		margin-top: 1.5rem;
	}

	.social {
		width: 50px;
		height: 50px;
	}
}
</style>
