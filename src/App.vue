<script>
export default {
	data() {
		return {
			message: "Hello, new Project?",
			dependencies: "Installed: Vue, Bootstrap, FontAwesome, Axios",
		};
	},
};
</script>

<template>
	<div
		class="d-flex flex-column align-items-center justify-content-center vh-100 text-bg-dark"
	>
		<h1>
			{{ message }}
			<i
				class="fa-regular fa-face-smile fa-beat"
				style="color: #63e6be"
			></i>
		</h1>
		<p>{{ dependencies }}</p>
	</div>
</template>

<style scoped></style>
