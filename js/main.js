var navToggle = document.querySelector('.nav-toggle');
var mainNav = document.querySelector('.main-nav');

navToggle.classList.remove('nav-toggle--no-js');
mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', function(evt) {
	evt.preventDefault();

	this.classList.toggle('nav-toggle--opened');
	mainNav.classList.toggle('main-nav--closed');
});