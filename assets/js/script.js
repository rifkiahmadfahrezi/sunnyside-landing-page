const menu = document.querySelector('.navbar-menu')
const bars = document.querySelectorAll('.menu-bar')

window.addEventListener('click', e => {
	if (e.target.classList.contains('burger-menu') || e.target.classList.contains('menu-bar') || e.target == menu) {
	 	menu.classList.toggle('active')
	 	bars.forEach(bar => bar.classList.toggle('active-menu'))
	}else {
		menu.classList.remove('active')
		bars.forEach(bar => bar.classList.remove('active-menu'))
	}
})

