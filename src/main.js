//global
let currentLanguage = 'ua';

const switcher = document.querySelector(".hero #lang_input");
console.log(switcher);

//switcher
function loadText() {
	console.log("magic place here");
}

function changeLanguage() {

	currentLanguage = switcher.checked ? 'en' : 'ua';
	console.log(currentLanguage);
}

loadText();

switcher.addEventListener("click", changeLanguage);


//swiper
const swiper_experts = new Swiper('.experts_swiper', {
	loop: true,
	slidesPerView: 3.8,
	spaceBetween: 34,
	grabCursor: true,

	navigation: {
		nextEl: '.right',
		prevEl: '.left',
	},
	//scrollbar: {
	//	el: ".swiper-scrollbar",
	//	hide: true,
	//},

});