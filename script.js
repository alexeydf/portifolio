let $hamburguer = document.querySelector(".hamburguer");
let $sidebar = document.querySelector('.container');

$hamburguer.addEventListener('click', function(){
    $sidebar.classList.toggle('show-menu');
})