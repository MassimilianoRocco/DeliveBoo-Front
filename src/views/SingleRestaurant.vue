<script>
import axios from "axios";

export default {
	name: "SingleRestaurant",
	data() {
		return {
			base_url: "http://127.0.0.1:8000",
			restaurant: null,
		};
	},
	methods: {},
	mounted() {
		// const url = `${this.base_url}/api/posts/${this.$route.params.id}`;
		// axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
		// 	console.log(response.data.restaurants);
		// 	this.restaurant = response.data.restaurant;
		// });
	},
};
</script>

<template>
	<h1>{{}}</h1>
</template>

<style scoped></style>
