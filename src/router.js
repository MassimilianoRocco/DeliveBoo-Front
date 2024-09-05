import { createRouter, createWebHistory } from "vue-router";

import AppRestaurant from "./views/AppRestaurants.vue";
import SingleRestaurant from "./views/SingleRestaurant.vue";
import NotFound from "./views/NotFound.vue";

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
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: NotFound,
		}
	],
});

export { router };
