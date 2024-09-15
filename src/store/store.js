import { reactive } from "vue";

const storeData = {
	existData: false,
	services: [
		{
			title: "CONSEGAN RAPIDA E AFFIDABILE",
			img: "https://www.foodserviceweb.it/wp-content/uploads/sites/4/2020/11/contratto-rider.jpg",
			desc: "Goditi i tuoi piatti preferiti comodamente a casa tua con il nostro servizio di consegna rapida e affidabile. Scegli tra una vasta selezione di ristoranti e ricevi il tuo ordine in tempi record, senza stress e senza attese!",
		},
		{
			title: "TRACCIAMENTO IN TEMPO REALE",
			img: "https://c8.alamy.com/compit/2awph98/telescopio-satellitare-vicino-all-astronauta-con-hamburger-da-qualche-parte-nello-spazio-sfondo-fantascienza-elementi-dell-immagine-sono-stati-forniti-dalla-nasa-2awph98.jpg",
			desc: "Tieniti aggiornato su ogni fase del tuo ordine grazie al nostro sistema di tracciamento in tempo reale. Dal momento in cui effettui l'ordine fino alla consegna alla tua porta, sarai sempre informato su dove si trova il tuo cibo!",
		},
		{
			title: "OFFERTE ESCLUSIVE E PROMOZIONI",
			img: "https://img.freepik.com/psd-premium/psd-special-discount-burger-fast-food-design-per-i-social-media-e-il-modello-di-post-di-instagram_949961-780.jpg?w=826",
			desc: "Approfitta di offerte speciali e promozioni riservate ai nostri utenti. Risparmia sui tuoi ristoranti preferiti con sconti imperdibili e accumula punti fedeltà per premi e vantaggi esclusivi. Con noi, mangiare bene conviene!",
		},
	],

	orderSent: false,

	categoriesSelected: [],

	restaurants: [],
	activeRestaurant: null,

	requestRestaurants: {
		method: "GET",
		url: "http://127.0.0.1:8000/api/restaurants",
		params: null,
	},

	getLinks: [
		{ link: "Lavora con noi", url: "#" },
		{ link: "Sfoglia i Ristoranti", url: "#" },
		{ link: "Opzioni di Pagamento", url: "#" },
		{ link: "Assistenza Clienti", url: "#" },
		{ link: "Termini e Condizioni", url: "#" },
	],
	netLinks: [
		{ link: "Diventa Partner", url: "#" },
		{ link: "Vantaggi per i Ristoranti", url: "#" },
		{ link: "Il Nostro Team", url: "#" },
		{ link: "Servizi per Aziende", url: "#" },
		{ link: "Il Mio Account", url: "#" },
	],
	headOne: "Get EduPrime",
	headTwo: "Networking",

	checkLog: null,
};

export default reactive(storeData);
