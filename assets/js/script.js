const menu = document.querySelector('.navbar-menu')
const bars = document.querySelectorAll('.menu-bar')
const navbar = document.querySelector("#top-navbar")

window.addEventListener('click', e => {
	if (e.target.classList.contains('burger-menu') || e.target.classList.contains('menu-bar') || e.target == menu) {
	 	menu.classList.toggle('active')
	 	bars.forEach(bar => bar.classList.toggle('active-menu'))
	}else {
		menu.classList.remove('active')
		bars.forEach(bar => bar.classList.remove('active-menu'))
	}
})

window.addEventListener("scroll", function(e) {
	if(window.scrollY > 150){
		navbar.classList.add("scrolled")

	} else{
		navbar.classList.remove("scrolled")
	}
	console.log(navbar.classList.contains("scrolled"))
})

window.addEventListener("load", () => {
	const loadingElement = document.querySelector(".load")
	loadingElement.classList.add("loaded")

	setTimeout(() => {
		loadingElement.style.display = "none"
	},500)
})