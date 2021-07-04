const menu = document.querySelector('.navbar-menu')

window.addEventListener('click', e => {
	if (e.target.classList.contains('burger-menu') || e.target.classList.contains('bx-menu') || e.target == menu) {
	 	menu.classList.toggle('active')
	}else {
		menu.classList.remove('active')
	}
})
