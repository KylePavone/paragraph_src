/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/
let menu = ['Завтраки', 'Мобильное приложение', 'Кофе в зёрнах', 'Круассаны', 'Новый какао']
let food = ['Дeсeрты', 'Еда', 'Мороженое', 'Напитки']
let kitchen = ['Сырники', 'Команда', 'Круассаны', 'Торты', 'Киши', 'Праздник']
// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-menu__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-menu__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			simulateTouch: true,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			pagination: {
				el: '.main-menu__slider-pagination, .main-menu__slider-pagination-bottom',
				clickable: true,
				renderBullet: function(index, className){
					return '<span class="' + className + '">' + (menu[index]) + '</span>';
				}
				
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}


	if (document.querySelector('.townmenu__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.townmenu__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 14,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			simulateTouch: true,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			/*pagination: {
				el: '.main-menu__slider-pagination, .main-menu__slider-pagination-bottom',
				clickable: true,
				renderBullet: function(index, className){
					return '<span class="' + className + '">' + (menu[index]) + '</span>';
				}
				
			},*/
		

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.townmenu__swiper-button-prev',
				nextEl: '.townmenu__swiper-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					
				},
				768: {
					slidesPerView: 2,
					
				},
				992: {
					slidesPerView: 4,
					
				},
				1268: {
					slidesPerView: 4,
				},
			},
			
			// События
			on: {

			}
		});
	}



	if (document.querySelector('.food__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.food__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 14,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			simulateTouch: true,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			pagination: {
				el: '.food__swiper-pagination',
				clickable: true,
				renderBullet: function(index, className){
					return '<span class="' + className + '">' + (food[index]) + '</span>';
				}
			},
		

			// Скроллбар
			
			/*scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},*/
			

			// Кнопки "влево/вправо"
			

			// Брейкпоинты
			
			/*breakpoints: {
				320: {
					slidesPerView: 1,
					
				},
				768: {
					slidesPerView: 2,
					
				},
				992: {
					slidesPerView: 4,
					
				},
				1268: {
					slidesPerView: 4,
				},
			},*/
			
			// События
			on: {

			}
		});
	}




	if (document.querySelector('.corn__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.corn__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: false,
			observeParents: false,
			slidesPerView: 3,
			spaceBetween: -20,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			simulateTouch: true,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			/*effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},*/
			

			// Пагинация
			/*pagination: {
				el: '.main-menu__slider-pagination, .main-menu__slider-pagination-bottom',
				clickable: true,
				renderBullet: function(index, className){
					return '<span class="' + className + '">' + (menu[index]) + '</span>';
				}
				
			},*/
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.corn__swiper-button-prev',
				nextEl: '.corn__swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}



	if (document.querySelector('.kitchen__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.kitchen__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: false,
			observeParents: false,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			simulateTouch: true,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			/*effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},*/
			

			// Пагинация
			pagination: {
				el: '.kitchen__swiper-pagination',
				clickable: true,
				renderBullet: function(index, className){
					return '<span class="' + className + '">' + (kitchen[index]) + '</span>';
				}
				
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*navigation: {
				prevEl: '.corn__swiper-button-prev',
				nextEl: '.corn__swiper-button-next',
			},*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});