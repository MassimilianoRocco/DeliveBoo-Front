import { createRouter, createWebHistory } from "vue-router";

// import AppHome from "./views/AppHome.vue";
// import AppAbout from "./views/AppAbout.vue";
// import AppProjects from "./views/AppProjects.vue";
// import AppContacts from "./views/AppContacts.vue";
// import SingleProject from "./views/SingleProject.vue";
// import NotFound from "./views/NotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// {
		// 	path: "/",
		// 	name: "home",
		// 	component: AppHome,
		// },
	],
});

export { router };
