import { reactive } from "vue";

const storeData = {
	services: [
        {
            title: 'CONSEGAN RAPIDA E AFFIDABILE',
            img: "https://www.foodserviceweb.it/wp-content/uploads/sites/4/2020/11/contratto-rider.jpg",
            desc: "Goditi i tuoi piatti preferiti comodamente a casa tua con il nostro servizio di consegna rapida e affidabile. Scegli tra una vasta selezione di ristoranti e ricevi il tuo ordine in tempi record, senza stress e senza attese!"
        },
        {
            title: 'TRACCIAMENTO IN TEMPO REALE',
            img: "https://c8.alamy.com/compit/2awph98/telescopio-satellitare-vicino-all-astronauta-con-hamburger-da-qualche-parte-nello-spazio-sfondo-fantascienza-elementi-dell-immagine-sono-stati-forniti-dalla-nasa-2awph98.jpg",
            desc: "Tieniti aggiornato su ogni fase del tuo ordine grazie al nostro sistema di tracciamento in tempo reale. Dal momento in cui effettui l'ordine fino alla consegna alla tua porta, sarai sempre informato su dove si trova il tuo cibo!"
        },
        {
            title: 'OFFERTE E SCLUSIVE E PROMOZIONI',
            img: "https://img.freepik.com/psd-premium/psd-special-discount-burger-fast-food-design-per-i-social-media-e-il-modello-di-post-di-instagram_949961-780.jpg?w=826",
            desc: "Approfitta di offerte speciali e promozioni riservate ai nostri utenti. Risparmia sui tuoi ristoranti preferiti con sconti imperdibili e accumula punti fedeltà per premi e vantaggi esclusivi. Con noi, mangiare bene conviene!"
        },
    ],

	carouselData: [
        {
            name: "Davide di Giacomo",
            task: "Web Developer",
            img: "img/naruto-1.jpg",
        },
        {
            name: "Edoardo Menicucci",
            task: "Web Developer",
            img: "img/naruto-2.jpg",
        },
        {
            name: "Vladislav Ciuperca",
            task: "Web Developer",
            img: "img/naruto-3.jpg",
        },
        {
            name: "Gaara Qualcosa",
            task: "Hokage della Sabbia",
            img: "img/naruto-5.jpg",
        },
        {
            name: "Sakura Qualcosa",
            task: "Ninja Curatore",
            img: "img/naruto-4.jpg",
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
