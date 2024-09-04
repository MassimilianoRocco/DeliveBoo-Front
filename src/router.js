import { createRouter, createWebHistory } from "vue-router";

import AppRestaurant from "./views/AppRestaurants.vue";
import SingleRestaurant from "./views/SingleRestaurant.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "appRestaurant",
			component: AppRestaurant,
		},
		{
			path: "/restaurants/:id",
			name: "single-restaurant",
			component: SingleRestaurant,
		},
	],
});

export { router };
