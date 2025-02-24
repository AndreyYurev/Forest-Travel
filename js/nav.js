// const navIcon = document.querySelector('.nav-icon');
// const nav = document.querySelector('.header__nav');

// navIcon.addEventListener('click', function () {
// 	this.classList.toggle('nav-icon--active');
// 	nav.classList.toggle('header__nav--active');
// });

// // Находим ссылки внутри мобильной навигации
// const navLinks = document.querySelectorAll('.nav a');

// // Обходим ссылки методом forEach
// navLinks.forEach(function (item) {
// 	// Для каждой ссылки добавляем прослушку по событию "Клик"
// 	item.addEventListener('click', function () {
// 		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
// 		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
// 	})
// })




// Мобильное меню

let navIcon = document.querySelector('.nav-icon');
let nav = document.querySelector('.header__nav');
let overlay = document.querySelector('#overlay');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__nav--active');
	overlay.classList.toggle('none');
	document.body.classList.toggle('body--noscroll');
})

// находим ссылки внутри мобильной навигации
let navLinks = document.querySelectorAll('.nav a');
// обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// для каждой ссылки добавляем прослушку "клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // убираем у * класс *--active
		nav.classList.remove('nav--active'); // убираем у * класс *--active
		overlay.classList.add('none'); // скрываем оверлей
		document.body.classList.remove('body--noscroll'); // включаем скролл
	})
})

overlay.addEventListener('click', function () {
	navIcon.classList.remove('nav-icon--active'); // убираем у * класс *--active
	nav.classList.remove('nav--active'); // убираем у * класс *--active
	overlay.classList.add('none'); // скрываем оверлей
	document.body.classList.remove('body--noscroll'); // включаем скролл
})