let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let isClicked = false;

menu.addEventListener('click', function() {
    isClicked = !isClicked;
    isClicked ? showMenu() : hideMenu();
})

function showMenu() {
    menu.src = './assets/images/icon-menu-close.svg';
    nav.style.display = 'flex';
    menu.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
}

function hideMenu() {
    menu.src = './assets/images/icon-menu.svg' ;
    menu.style.position = 'relative';
    nav.style.display = 'none';
    document.body.style.overflow = "scroll";
    document.body.style.backgroundColor = 'white';
    document.body.style.filter = 'dropShadow(30px 10px 4px #4444dd);'
}

window.onclick = (event) => {
     if (isClicked && event.target.id != 'menu') 
     {
        hideMenu();
        isClicked = false;
     }
}