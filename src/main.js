//global
let currentLanguage = 'ua';

const switcher = document.querySelector('.hero #lang_input');
//console.log(switcher);

const FILE_PATH = "./text.json";
//switcher
function loadText() {
	fetch(FILE_PATH)
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			const dict = data.section['#features'][currentLanguage];

			for (const selector in dict) {
				const elements = document.querySelectorAll(selector);
				elements.forEach(el => {
					el.textContent = dict[selector];
				});
			}
		})
		.catch(error => {
			console.log('Error loading translation from JSON:', error);
		});
}

function changeLanguage() {
	currentLanguage = switcher.checked ? 'en' : 'ua';
	//console.log(currentLanguage);
	loadText();
}

switcher.addEventListener('click', changeLanguage);

loadText();

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
