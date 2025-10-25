class Producto{
    constructor(id,nombre,asset,precio,excerpt){
        this.id = id;
        this.nombre = nombre;
        this.asset = asset;
        this.precio = precio;
        this.excerpt = excerpt;
    }
}

let productosRecuperados = JSON.parse(sessionStorage.getItem("productos"));
const carritoRecuperado = JSON.parse(sessionStorage.getItem("carrito")) || [];

if (productosRecuperados == null){
    productosRecuperados = [
        { id: 1, nombre: "Calabaza tallada", asset: "../assets/img/calabaza.webp", precio: 15.99, excerpt: "Una calabaza tallada con expresión terrorífica típica de Halloween." },
        { id: 2, nombre: "Sombrero de bruja", asset: "../assets/img/sombrero_bruja.png", precio: 12.5, excerpt: "Sombrero negro puntiagudo con detalles morados, ideal para disfraces de bruja." },
        { id: 3, nombre: "Máscara de calavera", asset: "../assets/img/mascara_calavera.webp", precio: 9.99, excerpt: "Máscara blanca con detalles oscuros para un disfraz espeluznante." },
        { id: 4, nombre: "Telaraña decorativa", asset: "../assets/img/telarana.png", precio: 5.5, excerpt: "Decoración sintética que simula telarañas para ambientación de casas o fiestas." },
        { id: 5, nombre: "Vela sangrante", asset: "../assets/img/vela_sangrante.avif", precio: 7.25, excerpt: "Vela blanca que parece sangrar cuando se enciende, ideal para mesas terroríficas." },
        { id: 6, nombre: "Guirnalda de murciélagos", asset: "../assets/img/murcielagos.png", precio: 6.75, excerpt: "Decoración colgante con figuras de murciélagos negros de cartón resistente." },
        { id: 7, nombre: "Disfraz de vampiro", asset: "../assets/img/vampiro.png", precio: 35.0, excerpt: "Traje completo con capa, colmillos y chaleco para una apariencia aterradora." },
        { id: 8, nombre: "Luz estroboscópica", asset: "../assets/img/luz_estroboscopica.jpg", precio: 22.0, excerpt: "Luz parpadeante perfecta para crear efectos en fiestas de Halloween." },
        { id: 9, nombre: "Guantes esqueleto", asset: "../assets/img/guantes_esqueleto.webp", precio: 8.5, excerpt: "Par de guantes negros con impresión de huesos blancos fosforescentes." },
        { id: 10, nombre: "Caldero de bruja", asset: "../assets/img/caldero_bruja.jpg", precio: 14.0, excerpt: "Caldero plástico para colocar dulces o usarse como decoración mística." },
        { id: 11, nombre: "Fantasmas colgantes", asset: "../assets/img/fantasmas.jpg", precio: 11.25, excerpt: "Mini fantasmas decorativos que flotan al colgarse del techo o ventanas." },
        { id: 12, nombre: "Proyector de sombras", asset: "../assets/img/proyector_sombras.webp", precio: 39.99, excerpt: "Proyector LED que muestra siluetas de fantasmas, gatos y murciélagos." },
        { id: 13, nombre: "Tumba falsa", asset: "../assets/img/tumba_falsa.jpg", precio: 18.0, excerpt: "Decoración realista en forma de lápida con inscripción tétrica." },
        { id: 14, nombre: "Cinta de escena del crimen", asset: "../assets/img/cinta_crimen.webp", precio: 4.99, excerpt: "Cinta amarilla decorativa con la leyenda ‘Do Not Cross’ ideal para fiestas temáticas." },
        { id: 15, nombre: "Disfraz de esqueleto", asset: "../assets/img/disfraz_esqueleto.webp", precio: 28.5, excerpt: "Disfraz completo negro con patrón de huesos blancos luminosos." },
        { id: 16, nombre: "Pegatinas de sangre", asset: "../assets/img/pegatinas_sangre.webp", precio: 3.75, excerpt: "Calcomanías realistas con efecto de sangre para ventanas o espejos." },
        { id: 17, nombre: "Luces de calabaza", asset: "../assets/img/luces_calabaza.jpg", precio: 16.99, excerpt: "Serie de luces LED con forma de pequeñas calabazas naranjas." },
        { id: 18, nombre: "Capa de fantasma", asset: "../assets/img/capa_fantasma.webp", precio: 19.25, excerpt: "Capa blanca ligera perfecta para disfraces clásicos de fantasma." },
        { id: 19, nombre: "Figura de gato negro", asset: "../assets/img/gato_negro.webp", precio: 10.5, excerpt: "Figura decorativa de gato negro con ojos brillantes y aspecto místico." },
        { id: 20, nombre: "Caja de golosinas temáticas", asset: "../assets/img/golosinas_halloween.jpg", precio: 13.9, excerpt: "Caja surtida con dulces y chocolates en envases con temática de Halloween." }
    ]
}

const productos = productosRecuperados.map(p => new Producto(p.id ,p.nombre, p.asset, p.precio, p.excerpt));
const carrito = carritoRecuperado.map(p => new Producto(p.id ,p.nombre, p.asset, p.precio, p.excerpt));
