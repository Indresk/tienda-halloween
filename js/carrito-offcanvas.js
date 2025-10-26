const cartButtonOnPage = document.querySelector('#cartButtonOnPage');
const closeInCart = document.querySelector('#close-cart');
const mainGrid = document.querySelector("#main-grid");
const cartContainer = document.querySelector('#carrito-container');

function openCart(){
    mainGrid.classList.add("expanded");
    cartContainer.classList.remove("ocultar");
    cartButtonOnPage.dataset.state = 'open';
}

const closeCart = () =>{
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

cartButtonOnPage.addEventListener('click',(btn)=>{
    const btnState = cartButtonOnPage.getAttribute('data-state');
    if(btnState == "open"){
        closeCart();
    }
    else{
        openCart();
    }
}
);