/* =========================
   PRODUCTOS
========================= */
const products = [


    
    {
        id: 1,
        name: "invictus",
        cat: "perfumes",
        price: 45000,
        old: null,
        discount: 14,
        visual: "DS",
        offer: true,
        desc: "En general tiene un olor fresco, dulce, acuático y masculino, bastante fácil de usar y con buena presencia."
    },
    {
        id: 2,
        name: "Lattafa Khamrah",
        cat: "perfumes",
        price: 65000,
        old: null,
        discount: 13,
        visual: "LM",
        offer: false,
        desc: "Es especialmente bueno para noches, invierno y ocasiones especiales. En verano o con mucho calor puede resultar bastante pesado."
    },
    {
        id: 3,
        name: "1 Million",
        cat: "perfumes",
        price: 60000,
        old: null,
        discount: 21,
        visual: "1M",
        offer: true,
        desc: "Aroma cálido y sofisticado para una presencia que no pasa desapercibida."
    },
    {
        id: 4,
        name: "Honor & Glory ",
        cat: "perfumes",
        price: 55000,
        old: null,
        discount: null,
        visual: "VE",
        offer: false,
        desc: "es muy dulce, cremoso, tropical y especiado, con una piña bastante marcada y un fondo de vainilla. Tiene un estilo parecido a un postre tropical con especias."
    },
    {
        id: 5,
        name: "Erba pura",
        cat: "perfumes",
        price: 70000,
        old: null,
        discount: 12,
        visual: "212",
        offer: true,
        desc: "huele a frutas dulces y cítricas, con un fondo limpio, cálido y ligeramente avainillado. Es muy llamativo y proyecta bastante."
    },
    {
        id: 6,
        name: "9pm",
        cat: "perfumes",
        price: 45000,
        old: null,
        discount: null,
        visual: "AG",
        offer: false,
        desc: "es dulce, cálido, especiado y seductor, con una vainilla bastante marcada y un fondo ambarado/amaderado."
    },
    {
        id: 7,
        name: "AL HARAMAIN",
        cat: "perfumes",
        price: 55000,
        old: null,
        discount: 13,
        visual: "NY",
        offer: true,
        desc: "tiene un olor a frutas tropicales dulces con vainilla y un toque limpio/almizclado. Es bastante llamativo y deja una estela fuerte."
    },
    {
        id: 8,
        name: "Jordan Chapita ",
        cat: "gorras",
        price: 80000,
        old: null,
        discount: null,
        visual: "LA",
        offer: false,
        desc: "Gorra Jordan con diseño clásico y urbano, ideal para completar cualquier outfit. Cuenta con la icónica chapita metálica de Jordan en la parte frontal, que le da un detalle elegante y distintivo. Cómoda, canchera y fácil de combinar, perfecta para usar todos los días o para darle un toque deportivo a tu look.."
    },
    {
        id: 9,
        name: "Nike SB ",
        cat: "gorras",
        price: 40000,
        old: null,
        discount: 13,
        visual: "CB",
        offer: true,
        desc: "Gorra Nike SB con un estilo urbano y skater, cómoda y fácil de combinar. Cuenta con el clásico diseño de Nike SB, ideal para usar todos los días y completar cualquier outfit. Un modelo canchero, simple y versátil, perfecto para quienes buscan un look relajado y moderno."
    },
    {
        id: 10,
        name: "Cartera ",
        cat: "accesorios",
        price: 25000,
        old: null,
        discount: null,
        visual: "P",
        offer: false,
        desc: "Detalle elegante para elevar tus outfits."
    },
    {
        id: 11,
        name: "Cadena ",
        cat: "accesorios",
        price: 35000,
        old: null,
        discount: 19,
        visual: "S",
        offer: true,
        desc: "Diseño plateado minimalista con una presencia sutil."
    },
    {
        id: 12,
        name: "Cartera",
        cat: "accesorios",
        price: 35000,
        old: null,
        discount: null,
        visual: "B",
        offer: false,
        desc: "Diseño compacto y elegante para todos los días."
    },
    {
        id: 13,
        name: "Yara Rosa",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "B",
        offer: false,
        desc: "Un perfume dulce, femenino y delicado. Tiene un aroma cremoso y frutal, con un toque de vainilla que lo hace muy agradable y juvenil. Ideal para el día a día, citas y ocasiones especiales."

    },
    {
        id: 14,
        name: "Yara Clarito",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        desc: "Una fragancia suave, dulce y fresca, con un aroma cremoso y femenino. Es delicada pero llamativa, perfecta para quienes buscan un perfume agradable y fácil de usar todos los días."
    },
    {
        id: 15,
        name: "Yara Clarito",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        desc: "Una fragancia suave, dulce y fresca, con un aroma cremoso y femenino. Es delicada pero llamativa, perfecta para quienes buscan un perfume agradable y fácil de usar todos los días."



    },
    {
        id: 16,
        name: "Yara Blanco",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        desc: "Una fragancia dulce, cremosa y elegante, con un aroma limpio y delicado. Tiene un estilo suave y sofisticado que queda muy bien tanto de día como de noche."
    },
    {
         id: 17,
        name: "Yara Elixir",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        desc: "Una fragancia dulce, cremosa y elegante, con un aroma limpio y delicado. Tiene un estilo suave y sofisticado que queda muy bien tanto de día como de noche."
    },
    {
        id: 18,
        name: "HAWAS",
        cat: "perfumes",
        price: 50000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        desc: "Una fragancia femenina, dulce, frutal y elegante. Tiene un aroma moderno y seductor, con una combinación de frutas y flores que le da un toque fresco y femenino, acompañado por un fondo cálido y envolvente."
    },
    {
         id: 19,
        name: "body splash vanella",
        cat: "perfumes",
        price: 20000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        desc: "Una fragancia dulce, cremosa y cálida, con un delicioso aroma a vainilla. Suave y agradable, perfecta para sentirte fresca y perfumada durante todo el día. Ideal para quienes aman los aromas dulces, femeninos y reconfortantes. ✨"
    }

];
/* =========================
   VARIABLES
========================= */
let cart =
    JSON.parse(
        localStorage.getItem("luxeCart") || "[]"
    );
let favorites =
    JSON.parse(
        localStorage.getItem("luxeFavorites") || "[]"
    );
let currentFilter = "todos";
let searchTerm = "";
let modalProductId = null;
/* =========================
   SELECTORES
========================= */
const $ = selector =>
    document.querySelector(selector);
const $$ = selector =>
    document.querySelectorAll(selector);
/* =========================
   DINERO
========================= */
const money = number => {
    return "$" +
        number.toLocaleString("es-AR");
};
/* =========================
   FILTRAR PRODUCTOS
========================= */
function filteredProducts() {
    return products.filter(product => {
        let categoryOK;
        if (currentFilter === "todos") {
            categoryOK = true;
        }
        else if (currentFilter === "ofertas") {
            categoryOK = product.offer;
        }
        else if (currentFilter === "favoritos") {
            categoryOK = favorites.includes(product.id);
        }
        else {
            categoryOK =
                product.cat === currentFilter;
        }
        const searchOK =
            !searchTerm ||
            `${product.name}
             ${product.cat}
             ${product.visual}`
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                );
        return categoryOK && searchOK;
    });
}
/* =========================
   MOSTRAR PRODUCTOS
========================= */
function renderProducts() {
    const list =
        filteredProducts();
    const grid =
        $("#productGrid");
    const empty =
        $("#emptyState");
    grid.innerHTML = "";
    empty.classList.toggle(
        "show",
        list.length === 0
    );
    list.forEach((product, index) => {
        const favorite =
            favorites.includes(product.id);
        const card =
            document.createElement("article");
        card.className =
            "product-card";
        card.style.animationDelay =
            `${index * 45}ms`;
        card.innerHTML = `
            <div
                class="product-image"
                data-detail="${product.id}"
            >
                <span class="product-type">
                    ${product.cat.toUpperCase()}
                </span>
                <button
                    class="heart ${favorite ? "active" : ""}"
                    data-fav="${product.id}"
                >
                    ${favorite ? "♥️" : "♡"}
                </button>
                ${
                    product.discount
                    ?
                    `<span class="discount">
                        -${product.discount}%
                    </span>`
                    :
                    ""
                }
                <div class="product-visual">
                    ${product.visual}
                </div>
            </div>
            <div class="product-info">
                <span class="category-label">
                    ${product.cat}
                </span>
                <h3>
                    ${product.name}
                </h3>
                <div class="price">
                    <strong>
                        ${money(product.price)}
                    </strong>
                    ${
                        product.old
                        ?
                        `<del>
                            ${money(product.old)}
                        </del>`
                        :
                        ""
                    }
                </div>
                <button
                    class="add-product"
                    data-add="${product.id}"
                >
                    Agregar al carrito
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}
/* =========================
   GUARDAR CARRITO
========================= */
function saveCart() {
    localStorage.setItem(
        "luxeCart",
        JSON.stringify(cart)
    );
}
/* =========================
   GUARDAR FAVORITOS
========================= */
function saveFavorites() {
    localStorage.setItem(
        "luxeFavorites",
        JSON.stringify(favorites)
    );
}
/* =========================
   AGREGAR AL CARRITO
========================= */
function addToCart(id) {
    const item =
        cart.find(
            item => item.id === id
        );
    if (item) {
        item.qty++;
    }
    else {
        cart.push({
            id: id,
            qty: 1
        });
    }
    saveCart();
    renderCart();
    updateCartCount();
    toast(
        "Producto agregado al carrito"
    );
}
/* =========================
   CONTADOR CARRITO
========================= */
function updateCartCount() {
    const count =
        cart.reduce(
            (total, item) =>
                total + item.qty,
            0
        );
    $("#cartCount").textContent =
        count;
}
/* =========================
   MOSTRAR CARRITO
========================= */
function renderCart() {
    const box =
        $("#cartItems");
    if (!cart.length) {
        box.innerHTML = `
            <div class="cart-empty">
                Tu carrito está vacío.
                <br><br>
                Agregá algo que te guste.
            </div>
        `;
        $("#cartTotal").textContent =
            "$0";
        return;
    }
    box.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const product =
            products.find(
                product =>
                    product.id === item.id
            );
        if (!product) return;
        total +=
            product.price *
            item.qty;
        const element =
            document.createElement("div");
        element.className =
            "cart-item";
        element.innerHTML = `
            <div class="cart-thumb">
                ${product.visual}
            </div>
            <div>
                <h4>
                    ${product.name}
                </h4>
                <small>
                    ${money(product.price)}
                </small>
                <div class="qty">
                    <button
                        data-dec="${product.id}"
                    >
                        −
                    </button>
                    <span>
                        ${item.qty}
                    </span>
                    <button
                        data-inc="${product.id}"
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                class="remove-item"
                data-remove="${product.id}"
            >
                ×
            </button>
        `;
        box.appendChild(element);
    });
    $("#cartTotal").textContent =
        money(total);
}
/* =========================
   TOAST
========================= */
function toast(message) {
    const toastBox =
        $("#toast");
    toastBox.textContent =
        message;
    toastBox.classList.add(
        "show"
    );
    clearTimeout(
        window.toastTimer
    );
    window.toastTimer =
        setTimeout(() => {
            toastBox.classList.remove(
                "show"
            );
        }, 2200);
}
/* =========================
   ABRIR CARRITO
========================= */
function openCart() {
    $("#cartDrawer")
        .classList.add("open");
    $("#overlay")
        .classList.add("show");
}
/* =========================
   CERRAR CARRITO
========================= */
function closeCart() {
    $("#cartDrawer")
        .classList.remove("open");
    if (
        !$("#sideMenu")
            .classList.contains("open")
    ) {
        $("#overlay")
            .classList.remove("show");
    }
}
/* =========================
   ABRIR MENÚ
========================= */
function openMenu() {
    $("#sideMenu")
        .classList.add("open");
    $("#overlay")
        .classList.add("show");
}
/* =========================
   CERRAR MENÚ
========================= */
function closeMenu() {
    $("#sideMenu")
        .classList.remove("open");
    if (
        !$("#cartDrawer")
            .classList.contains("open")
    ) {
        $("#overlay")
            .classList.remove("show");
    }
}
/* =========================
   MODAL PRODUCTO
========================= */
function openModal(id) {
    const product =
        products.find(
            product =>
                product.id === id
        );
    if (!product) return;
    modalProductId = id;
    $("#modalCategory")
        .textContent =
        product.cat.toUpperCase();
    $("#modalName")
        .textContent =
        product.name;
    $("#modalDescription")
        .textContent =
        product.desc;
    $("#modalPrice")
        .textContent =
        money(product.price);
    $("#modalImage")
        .textContent =
        product.visual;
    $("#productModal")
        .classList.add("open");
}
/* =========================
   CERRAR MODAL
========================= */
function closeModal() {
    $("#productModal")
        .classList.remove("open");
}
/* =========================
   BUSCADOR
========================= */
$("#searchBtn").onclick = () => {
    $("#searchPanel")
        .classList.toggle("open");
    if (
        $("#searchPanel")
            .classList.contains("open")
    ) {
        $("#searchInput").focus();
    }
};
$("#closeSearch").onclick = () => {
    $("#searchPanel")
        .classList.remove("open");
};
$("#searchInput")
    .addEventListener(
        "input",
        event => {
            searchTerm =
                event.target.value;
            renderProducts();
        }
    );
/* =========================
   MENÚ
========================= */
$("#menuBtn").onclick =
    openMenu;
$("#closeMenu").onclick =
    closeMenu;
$("#overlay").onclick = () => {
    closeMenu();
    closeCart();
};
/* =========================
   CARRITO
========================= */
$("#cartBtn").onclick = () => {
    renderCart();
    openCart();
};
$("#closeCart").onclick =
    closeCart;
/* =========================
   MODAL
========================= */
$("#modalClose").onclick =
    closeModal;
$("#productModal").onclick =
    event => {
        if (
            event.target.id ===
            "productModal"
        ) {
            closeModal();
        }
    };
$("#modalAdd").onclick = () => {
    addToCart(
        modalProductId
    );
    closeModal();
};
/* =========================
   EVENTOS DE PRODUCTOS
========================= */
document.addEventListener(
    "click",
    event => {
        /* AGREGAR */
        const addButton =
            event.target.closest(
                "[data-add]"
            );
        if (addButton) {
            addToCart(
                Number(
                    addButton.dataset.add
                )
            );
            return;
        }
        /* FAVORITO */
        const favoriteButton =
            event.target.closest(
                "[data-fav]"
            );
        if (favoriteButton) {
            const id =
                Number(
                    favoriteButton.dataset.fav
                );
            if (
                favorites.includes(id)
            ) {
                favorites =
                    favorites.filter(
                        item => item !== id
                    );
            }
            else {
                favorites.push(id);
            }
            saveFavorites();
            renderProducts();
            return;
        }
        /* DETALLE */
        const detail =
            event.target.closest(
                "[data-detail]"
            );
        if (
            detail &&
            !event.target.closest("button")
        ) {
            openModal(
                Number(
                    detail.dataset.detail
                )
            );
            return;
        }
        /* AUMENTAR */
        const increase =
            event.target.closest(
                "[data-inc]"
            );
        if (increase) {
            const id =
                Number(
                    increase.dataset.inc
                );
            const item =
                cart.find(
                    item =>
                        item.id === id
                );
            if (item) {
                item.qty++;
            }
            saveCart();
            renderCart();
            updateCartCount();
            return;
        }
        /* DISMINUIR */
        const decrease =
            event.target.closest(
                "[data-dec]"
            );
        if (decrease) {
            const id =
                Number(
                    decrease.dataset.dec
                );
            const item =
                cart.find(
                    item =>
                        item.id === id
                );
            if (item) {
                item.qty--;
                if (item.qty <= 0) {
                    cart =
                        cart.filter(
                            item =>
                                item.id !== id
                        );
                }
            }
            saveCart();
            renderCart();
            updateCartCount();
            return;
        }
        /* ELIMINAR */
        const remove =
            event.target.closest(
                "[data-remove]"
            );
        if (remove) {
            const id =
                Number(
                    remove.dataset.remove
                );
            cart =
                cart.filter(
                    item =>
                        item.id !== id
                );
            saveCart();
            renderCart();
            updateCartCount();
            toast(
                "Producto eliminado"
            );
        }
    }
);
/* =========================
   FILTROS
========================= */
$$(".filter").forEach(
    button => {
        button.onclick = () => {
            $$(".filter")
                .forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );
            button.classList.add(
                "active"
            );
            currentFilter =
                button.dataset.filter;
            renderProducts();
        };
    }
);
/* =========================
   LINKS DE CATEGORÍAS
========================= */
$$("[data-category-link]")
    .forEach(element => {
        element.addEventListener(
            "click",
            () => {
                const category =
                    element.dataset
                        .categoryLink;
                if (
                    category === "perfumes" ||
                    category === "gorras" ||
                    category === "accesorios" ||
                    category === "ofertas" ||
                    category === "favoritos"
                ) {
                    currentFilter =
                        category;
                    $$(".filter")
                        .forEach(
                            filter => {
                                filter.classList.toggle(
                                    "active",
                                    filter.dataset.filter ===
                                    category
                                );
                            }
                        );
                    renderProducts();
                }
                closeMenu();
                closeCart();
            }
        );
    });
/* =========================
   BOTONES ✦ ◒ ◇
========================= */
$$('.category-art')
    .forEach(element => {
        element.addEventListener(
            'click',
            () => {
                const card =
                    element.closest('.category-card');
                const category =
                    card.dataset.cat;

                currentFilter = category;

                $$('.filter')
                    .forEach(filter => {
                        filter.classList.toggle(
                            'active',
                            filter.dataset.filter ===
                            category
                        );
                    });

                renderProducts();

                // Llevar la vista hasta Productos destacados
                $('#productos').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        );
    });

/* =========================
   NEWSLETTER
========================= */
$("#newsletterForm")
    .addEventListener(
        "submit",
        event => {
            event.preventDefault();
            $("#newsletterMessage")
                .textContent =
                "¡Gracias por suscribirte a LUXE!";
            $("#emailInput")
                .value = "";
        }
    );
/* =========================
/* =========================
   CHECKOUT POR WHATSAPP
========================= */

$("#checkoutBtn").onclick = () => {

    if (!cart.length) {
        toast("Tu carrito está vacío");
        return;
    }

    let mensaje = "Hola! 👋 Quiero hacer este pedido:%0A%0A";
    let total = 0;

    cart.forEach(item => {

        const product = products.find(
            product => product.id === item.id
        );

        if (!product) return;

        const subtotal = product.price * item.qty;

        total += subtotal;

        mensaje += `🧴 ${product.name}%0A`;
        mensaje += `Cantidad: ${item.qty}%0A`;
        mensaje += `Precio: ${money(product.price)}%0A`;
        mensaje += `Subtotal: ${money(subtotal)}%0A%0A`;
    });

    mensaje += `💰 TOTAL: ${money(total)}%0A%0A`;
    mensaje += "Quiero realizar la compra. ¿Cómo seguimos?";

    // Número de WhatsApp
    const numero = "5491122704636";

    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");
};
/* =========================
   ANIMACIONES AL SCROLL
========================= */
const observer =
    new IntersectionObserver(
        entries => {
            entries.forEach(
                entry => {
                    if (
                        entry.isIntersecting
                    ) {
                        entry.target
                            .classList
                            .add("visible");
                    }
                }
            );
        },
        {
            threshold: .12
        }
    );
$$(".reveal").forEach(
    element =>
        observer.observe(element)
);
/* =========================
   INICIAR PÁGINA
========================= */
renderProducts();
renderCart();
updateCartCount();