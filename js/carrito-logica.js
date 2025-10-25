// function busqueda(buscando,array){
//     return array.find((jugador) => jugador.nombre.toLowerCase() === buscando)
// }

const boardProductos = document.querySelector('#cards-container');

const cargarProductos = () => {
    productos.forEach(producto => {
        let productCard = document.createElement("div");
        productCard.className = "card col-5 p-2 flex fnw fd-c jc-b";
        productCard.innerHTML = `
        <div>
        <img class="mb-1" src="${producto.asset}" alt="">
        <h4 class="mb-1">${producto.nombre}</h4>
        <p>Precio: $${producto.precio}</p>
        <p class="mb-1">Descripción: ${producto.excerpt}</p>
        </div>
        <button class="cart-add">Añadir al carrito</button class="cart-add">
        `;
        boardProductos.appendChild(productCard);
    });
}

cargarProductos();