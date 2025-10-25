const cartAdd = document.querySelectorAll(".cart-add");
const closeCart = document.querySelector('#close-cart');
const mainGrid = document.querySelector("#main-grid");
const cartContainer = document.querySelector('#carrito-container');

function openCart(){
    mainGrid.classList.add("expanded");
    cartContainer.classList.remove("ocultar");
}

cartAdd.forEach((add)=>{add.addEventListener('click',openCart)})

closeCart.addEventListener('click',()=>{
    mainGrid.classList.remove("expanded")
    setTimeout(()=>{cartContainer.classList.add("ocultar")},400);
    ;})