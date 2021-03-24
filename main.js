window.onload=function(){
	var button = document.querySelector('.menu_button');
	var menu = document.querySelector('.menu');
	function openmenu(){
		menu.classList.toggle('active');
	}
	button.addEventListener('click',openmenu);
}	