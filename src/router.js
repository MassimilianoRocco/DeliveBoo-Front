import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./views/AppHome.vue";
import SingleRestaurant from "./views/SingleRestaurant.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: AppHome,
		},
		{
			path: "/restaurants/:id",
			name: "single-restaurant",
			component: SingleRestaurant,
		},
	],
});

export { router };
