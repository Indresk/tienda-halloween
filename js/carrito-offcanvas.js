// Declarar variables
    // variables de apertura y cierre del carrito
const cartButtonOnPage = document.querySelector('#cartButtonOnPage');
const closeInCart = document.querySelector('#close-cart');
const mainGrid = document.querySelector("#main-grid");
const cartContainer = document.querySelector('#carrito-container');
    // asginación de flechas de scroll
const scrollUp = document.querySelector('#uparrow')
const scrollDown = document.querySelector('#downarrow')
    // velocidad de scrolleo por flechas y estado de scroll
let isScrolling = false;
let scrollSpeed = 7;

// Control de Scroll

    // cambio de apariencia
const scrollApparenceCheckerUp = ()=>{
    if (boardCarrito.scrollTop === 0) {
        scrollUp.classList.add('inactive');
    } 
    else {
        scrollUp.classList.remove('inactive');
    }
}

const scrollApparenceCheckerDown = () =>{
    if(Math.abs(boardCarrito.scrollHeight - boardCarrito.clientHeight - boardCarrito.scrollTop)<=1){
        scrollDown.classList.add('inactive')
    }
    else{
        scrollDown.classList.remove('inactive')
    }
}

    // movimiento
function ScrollUp() {
    if (!isScrolling) return;
    boardCarrito.scrollBy({
        top: -scrollSpeed,
        behavior: 'auto'
    });
    scrollApparenceCheckerUp();
    scrollApparenceCheckerDown();
    requestAnimationFrame(ScrollUp);
}

function ScrollDown() {
    if (!isScrolling) return;
    boardCarrito.scrollBy({
        top: +scrollSpeed,
        behavior: 'auto'
    });
    scrollApparenceCheckerUp();
    scrollApparenceCheckerDown();
    requestAnimationFrame(ScrollDown);
}

    // estado del scroll
scrollUp.addEventListener('mousedown', () => {
    isScrolling = true;
    requestAnimationFrame(ScrollUp);
});
scrollUp.addEventListener('mouseup', () => {
    isScrolling = false;
});
scrollUp.addEventListener('mouseleave', () => {
    isScrolling = false;
});

scrollDown.addEventListener('mousedown', () => {
    isScrolling = true;
    requestAnimationFrame(ScrollDown);
});
scrollDown.addEventListener('mouseup', () => {
    isScrolling = false;
});
scrollDown.addEventListener('mouseleave', () => {
    isScrolling = false;
});

boardCarrito.addEventListener('scroll', () => {
    scrollApparenceCheckerUp();
    scrollApparenceCheckerDown();
});

// Control de apariencia del carrito

function openCart(){
    mainGrid.classList.add("expanded");
    cartContainer.classList.remove("ocultar");
    cartButtonOnPage.dataset.state = 'open';
    scrollApparenceCheckerUp();
    scrollApparenceCheckerDown();
}

function closeCart(){
    mainGrid.classList.remove("expanded")
    setTimeout(()=>{cartContainer.classList.add("ocultar")},400);
    cartButtonOnPage.dataset.state = 'close';
}

closeInCart.addEventListener('click',()=>{
    closeCart()
;})

cartButtonOnPage.addEventListener('click',()=>{
    const btnState = cartButtonOnPage.getAttribute('data-state');
    btnState == "open"? closeCart():openCart();
    }
);

