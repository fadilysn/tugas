const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('#hero .navbar ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')

});