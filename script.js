function toggleMenu(){
	const menuIcon = document.querySelector('.toggle');
	const menu = document.getElementById('hamburgerMenu');

	menuIcon.classList.toggle('active')
	menu.classList.toggle('show')
}

document.addEventListener('click', function(event){
	const menuIcon = document.querySelector('.toggle');
	const menu =  document.getElementById('hamburgerMenu');

	if(!menu.contains(event.target)&& !menuIcon.contains(event.target)){
		menuIcon.classList.remove('active')
		menu.classList.remove('show')
	}
})