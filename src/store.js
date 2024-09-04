import { reactive } from "vue";

const storeData = {
	services: [
		{
			title: "CONSEGAN RAPIDA E AFFIDABILE",
			icon: "fa-solid fa-truck-fast",
			desc: "Goditi i tuoi piatti preferiti comodamente a casa tua con il nostro servizio di consegna rapida e affidabile. Scegli tra una vasta selezione di ristoranti e ricevi il tuo ordine in tempi record, senza stress e senza attese!",
		},
		{
			title: "TRACCIAMENTO IN TEMPO REALE",
			icon: "fa-solid fa-location-dot",
			desc: "Tieniti aggiornato su ogni fase del tuo ordine grazie al nostro sistema di tracciamento in tempo reale. Dal momento in cui effettui l'ordine fino alla consegna alla tua porta, sarai sempre informato su dove si trova il tuo cibo!",
		},
		{
			title: "OFFERTE E SCLUSIVE E PROMOZIONI",
			icon: "fa-solid fa-magnifying-glass-dollar",
			desc: "Approfitta di offerte speciali e promozioni riservate ai nostri utenti. Risparmia sui tuoi ristoranti preferiti con sconti imperdibili e accumula punti fedeltà per premi e vantaggi esclusivi. Con noi, mangiare bene conviene!",
		},
	],

	categoriesSelected: [],

	restaurants: [],

	requestRestaurants: {
		method: "GET",
		url: "http://127.0.0.1:8000/api/restaurants",
		params: null,
	},
};

export default reactive(storeData);
