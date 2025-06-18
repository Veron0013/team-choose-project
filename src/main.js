//global
let currentLanguage = 'ua';
const storageKey = 'site_language';

const switcher = document.querySelector('.hero #lang_input');
//console.log(switcher);

const FILE_PATH = './text.json';
//switcher
function renderPage() {
  const savedLang = localStorage.getItem(storageKey);

  if (savedLang === 'en') {
    currentLanguage = 'en';
    switcher.checked = true;
  } else {
    currentLanguage = 'ua';
    switcher.checked = false;
  }

  loadText();
}

function loadText() {
  fetch(FILE_PATH)
    .then(response => response.json())
    .then(data => {
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
  localStorage.setItem(storageKey, currentLanguage);
  loadText();
}

switcher.addEventListener('change', changeLanguage);

renderPage();

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
