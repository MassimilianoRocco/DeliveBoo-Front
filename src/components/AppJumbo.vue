<script>
import store from "../store/store";
export default {
	name: "AppJumbo",

	data() {
		return {
			store,
			// texts: ["i tuoi ristoranti preferiti", "direttamente a casa tua"],
			// currentIndex: 0,
			// currentText: "i tuoi ristoranti preferiti",
		};
	},
	methods: {
		// startTextRotation() {
		// 	setInterval(() => {
		// 		this.currentIndex = (this.currentIndex + 1) % this.texts.length;
		// 		this.currentText = this.texts[this.currentIndex];
		// 	}, 3000);
		// },
	},

	mounted() {
		// this.startTextRotation();
	},
};
</script>

<template>
	<div v-if="store.existData" id="video" class="container-fluid bg-warning my_container g-0 p-0">
		<!-- VIDEO SECTION  -->
		<div class="my_videoSection p-0 m-0 g-0 position-relative">
			<div class="text_container w-100">
				<img src="/src/assets/DeliveBoo-Photoroom-text.png" class="img-fluid" alt="" />
				<h2 class="text1">I tuoi ristoranti preferiti</h2>
				<h2 class="text2">Direttamente a casa tua!</h2>
			</div>
			<video muted="" autoplay="" loop="" src="/src/assets/Login_Food Reel FH Studio.mp4" type="video/mp4" class="my_Video">
				<img src="/src/assets/errorVideo.png" alt="Error Video" />
			</video>
		</div>
	</div>
</template>

<style scoped>
.text_container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	z-index: 999;
}

.text1 {
	color: white;
	font-size: 4rem;
	letter-spacing: 8px;
	margin-top: 20px;
	animation: text 3s 1;
	position: relative;
}

.text2 {
	font-size: 3rem;
	color: white;
	animation: text2 3s 1;
}

@keyframes text {
	0% {
		margin-bottom: -40px;
	}
	30% {
		margin-bottom: -40px;
		letter-spacing: 10px;
	}
	85% {
		margin-bottom: -40px;
		letter-spacing: 4px;
	}
}

@keyframes text2 {
	0% {
		opacity: 0;
	}
	30% {
		opacity: 0;
	}
	85% {
		opacity: 0;
	}
}

/* .jumbo_text {
	font-size: 3rem;
	color: white;
	animation: scaleAnimation 2s infinite;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

@keyframes scaleAnimation {
	0% {
		transform: scale(1); 
	}
	50% {
		transform: scale(1.2); 
	}
	100% {
		transform: scale(1); 
	}
} */

#video {
	background-color: rgba(33, 37, 41, 0.5) !important;
}
.my_container {
	height: 100vh;
}
.my_videoSection {
	height: 100vh;
}
.my_Video {
	height: 100vh;
	width: 100%;
	object-fit: cover;
	display: block;
	opacity: 0.6;
}

@media screen and (max-width: 768px) {
	.text1 {
		font-size: 2rem;
		letter-spacing: 2px;
	}

	.text2 {
		font-size: 1.5rem;
	}

	.text_container {
		padding: 0px 10px;
	}
}
</style>
