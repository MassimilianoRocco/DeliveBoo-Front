<script>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		AppFooter,
	},

	data() {
		return {
			checkScroll: false,
		};
	},
	methods: {
		backToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		},
		handleScroll() {
			if (window.scrollY > 20) {
				this.checkScroll = true;
			} else {
				this.checkScroll = false;
			}
		},
		
		
	},
	mounted() {
		window.addEventListener(`scroll`, this.handleScroll);
	},
};
</script>

<template>
	<div class="app_Container w-100" >
		<AppHeader />

		<RouterView/>

		<!-- <AppServices class="mt-5" /> -->
		<AppFooter />

		<button type="button" class="btn position-fixed rounded-circle border border-3 border-black" id="btn-scroll-top"
			v-if="checkScroll" @click="backToTop">
			<div class="background"></div>
			<i class="fas fa-arrow-up"></i>
		</button>
	</div>
</template>

<style scoped>
#btn-scroll-top {
	bottom: 20px;
	right: 20px;
	background-color: white;
	z-index: 1;
	overflow: hidden;
}

.background {
	width: 0;
	height: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-image: linear-gradient(#000000, #000000);
	transition: 0.5s;
	z-index: -1;
}

button:hover .background {
	width: 150%;
	height: 150%;
}

button:hover i {
	color: white;
}
</style>
