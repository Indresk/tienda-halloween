const cartButtonOnPage = document.querySelector('#cartButtonOnPage');
const closeInCart = document.querySelector('#close-cart');
const mainGrid = document.querySelector("#main-grid");
const cartContainer = document.querySelector('#carrito-container');

function openCart(){
    mainGrid.classList.add("expanded");
    cartContainer.classList.remove("ocultar");
    cartButtonOnPage.dataset.state = 'open';
    scrollApparenceUp();
    scrollApparenceDown();
}

function closeCart(){
    mainGrid.classList.remove("expanded")
    setTimeout(()=>{cartContainer.classList.add("ocultar")},400);
    cartButtonOnPage.dataset.state = 'close';
}

boardProductos.addEventListener('click',(e) =>{
    const cartAddBtn = e.target.closest('[data-id]');
    cartAddBtn && openCart();
}
)

closeInCart.addEventListener('click',()=>{
    closeCart();
    ;})
    cartButtonOnPage.addEventListener('click',()=>{
        const btnState = cartButtonOnPage.getAttribute('data-state');
        if(btnState == "open"){
            closeCart();
        }
        else{
            openCart();
        }
    }
);

// Control de Scroll

const scrollUp = document.querySelector('#uparrow')
const scrollDown = document.querySelector('#downarrow')

let isScrolling = false;
let scrollSpeed = 7;

const scrollApparenceUp = ()=>{
    if (boardCarrito.scrollTop === 0) {
        scrollUp.classList.add('inactive');
    } else {
        scrollUp.classList.remove('inactive');
    }
}
const scrollApparenceDown = ()=>{
    if(Math.abs(boardCarrito.scrollHeight - boardCarrito.clientHeight - boardCarrito.scrollTop)<=1){
        scrollDown.classList.add('inactive')
    }
    else{
        scrollDown.classList.remove('inactive')
    }
}

boardCarrito.addEventListener('scroll', () => {
    scrollApparenceUp();
    scrollApparenceDown();
});

function ScrollUp() {
    if (!isScrolling) return;
    boardCarrito.scrollBy({
        top: -scrollSpeed,
        behavior: 'auto'
    });
    scrollApparenceUp();
    scrollApparenceDown();
    requestAnimationFrame(ScrollUp);
}

function ScrollDown() {
    if (!isScrolling) return;
    boardCarrito.scrollBy({
        top: +scrollSpeed,
        behavior: 'auto'
    });
    scrollApparenceUp();
    scrollApparenceDown();
    requestAnimationFrame(ScrollDown);
}

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