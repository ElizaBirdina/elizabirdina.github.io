const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
	const headerMenu = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		headerMenu.classList.toggle('_active');
		iconMenu.classList.toggle('_active');
	});
}
