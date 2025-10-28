// Declaración de variables

const inputBuscador = document.querySelector('#buscador');
inputBuscador.value = `${buscadorRecuperado}`;
const productosVisibles = [];

// Funciones de uso general

function busqueda(buscando,array){
    return array.find((producto) => producto.id === parseInt(buscando));
}

const eliminarDeCarrito = (id)=>{
    carrito.splice(carrito.indexOf(busqueda(id,carrito)),1);
}

// Actualización del dom

const cargarProductos = () => {
    boardProductos.innerHTML = '';
    productosVisibles.forEach(producto => {
        let productCard = document.createElement("div");
        productCard.className = "card p-2 flex fnw fd-c jc-b";
        productCard.innerHTML = `
        <div>
        <img class="mb-1" src="${producto.asset}" alt="">
        <h4 class="mb-1">${producto.nombre}</h4>
        <p><span class="taccent">Precio:</span> $${producto.precio}</p>
        <p class="mb-1"><span class="taccent">Descripción:</span> ${producto.excerpt}</p>
        </div>
        <button class="cart-add" data-id="${producto.id}">Añadir al carrito</button>
        `;
        boardProductos.appendChild(productCard);
    });
}

const cargarCarrito = () => {
    boardCarrito.innerHTML = '';
    carrito.filter(v=>v.cantidad <= 0).forEach((i)=>{eliminarDeCarrito(i.id)});
    carrito.forEach(producto => {
        let productCard = document.createElement("div");
        productCard.className = "card p-2";
        productCard.innerHTML = `
        <img class="mb-1" src="${producto.asset}" alt="">
        <h4>${producto.nombre}</h4>
        <p class="mb-1"><span class="taccent">Precio:</span> $${producto.precio}</p>
        <div class="flex ai-c mb-1">
            <button class="col-3" data-substractQ="${producto.id}">-</button>
            <div class="col-3 flex ai-c jc-c"><p>${producto.cantidad}</p></div>
            <button class="col-3" data-addQ="${producto.id}">+</button>            
        </div>
        <button class="flex ai-c" data-id="${producto.id}">
            <p class="col-p80">Eliminar</p>
            <svg class="col-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
        </button>
        `;
        boardCarrito.appendChild(productCard);
    });
    scrollApparenceCheckerUp();
    scrollApparenceCheckerDown();
    localStorage.setItem("carrito",JSON.stringify(carrito));
    document.querySelector('#total').innerText = `$${carrito.reduce((c,p)=>c = c+p.precio,0).toFixed(1)}`;
}

//   Filtro de texto de productos

const busquedaProds = (input)=>{
    if(input != undefined && input != null && input.trim() != ''){
        productosVisibles.splice(0,productosVisibles.length);
        productosVisibles.push(...productos.filter((e) => e.nombre.toLowerCase().includes(input.trim().toLowerCase())))
    }
    else{
        productosVisibles.splice(0,productosVisibles.length);
        productosVisibles.push(...productos)
    }
    cargarProductos();
}

inputBuscador.addEventListener('input',(e)=>{
    let timer;
    clearTimeout(timer);
    timer = setTimeout(()=>{
        busquedaProds(e.target.value);
        localStorage.setItem("buscador",JSON.stringify(e.target.value.trim()))
    },1000);
});



// Detectar eventos en botones de Carrito o productos

boardCarrito.addEventListener('click', (e)=>{
    const deleteButton = e.target.closest('[data-id]')
    const addButton = e.target.closest('[data-addQ]')
    const substractButton = e.target.closest('[data-substractQ]')
    if(deleteButton){
        let id = deleteButton.getAttribute('data-id');
        eliminarDeCarrito(id);
        cargarCarrito();
    }
    if(addButton){
        let id = addButton.getAttribute('data-addQ');
        const existente = busqueda(id, carrito);
        existente.aumentarCantidad();
        cargarCarrito();
    }
    if(substractButton){
        let id = substractButton.getAttribute('data-substractQ');
        const existente = busqueda(id, carrito);
        existente.reducirCantidad();
        cargarCarrito();
    }
}
);

boardProductos.addEventListener('click', (e)=>{
    if(e.target.closest('[data-id]')){
        let id = e.target.getAttribute('data-id');
        let CItemF = busqueda(id,productos)
        const existente = busqueda(id, carrito);
        if (!existente) {
            carrito.push(new ProdCarrito(CItemF.id,CItemF.nombre,CItemF.asset,CItemF.precio));
        }
        else{
            existente.aumentarCantidad();
        }
        cargarCarrito();
    }
}
);

// Cargar DOM

busquedaProds(buscadorRecuperado);
cargarProductos();
cargarCarrito();