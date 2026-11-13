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
        image: "imagenes/invictus.jpeg",
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
        image: "imagenes/lattafa_khamrah.jpeg",
        desc: "Es especialmente bueno para noches, invierno y ocasiones especiales. En verano o con mucho calor puede resultar bastante pesado."
    },
    {
        id: 3,
        name: "9pm Rebel",
        cat: "perfumes",
        price: 60000,
        old: null,
        discount: 21,
        visual: "1M",
        offer: true,
        image: "imagenes/9pm_rebel.jpeg",
        desc: "Intenso, moderno y llamativo. Un aroma dulce y seductor, ideal para destacar y dejar una gran impresión.."
    },
    {
        id: 4,
        name: "9pm Night Out ",
        cat: "perfumes",
        price: 55000,
        old: null,
        discount: null,
        visual: "VE",
        offer: false,
        image: "imagenes/9pm_night_out.jpeg",
        desc: "Juvenil, fresco y seductor. Ideal para salir de noche y disfrutar de un aroma moderno que llama la atención"
    },
    {
        id: 5,
        name: "9am",
        cat: "perfumes",
        price: 55000,
        old: null,
        discount: 13,
        visual: "NY",
        offer: true,
        image: "imagenes/9AM.jpeg",
        desc: "tiene un olor a frutas tropicales dulces con vainilla y un toque limpio/almizclado. Es bastante llamativo y deja una estela fuerte."
    },
    {
        id: 6,
        name: "9pm Elixir",
        cat: "perfumes",
        price: 45000,
        old: null,
        discount: null,
        visual: "AG",
        offer: false,
        image: "imagenes/9PM.jpeg",
        desc: "Dulce, cálido y elegante. Una fragancia envolvente con un estilo sofisticado, perfecta para salidas y ocasiones especiales"
    },
    {
        id: 7,
        name: "Erba pura",
        cat: "perfumes",
        price: 70000,
        old: null,
        discount: 12,
        visual: "212",
        offer: true,
        image: "imagenes/Erba pura.jpeg",
        desc: "huele a frutas dulces y cítricas, con un fondo limpio, cálido y ligeramente avainillado. Es muy llamativo y proyecta bastante."
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
        image: "https://acdn-us.mitiendanube.com/stores/004/748/690/products/chapita-10-17a218ce7e5f99c5e017689236594470-1024-1024.webp",
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
        image: "imagenes/nike_sb.jpeg",
        desc: "Gorra Nike SB con un estilo urbano y skater, cómoda y fácil de combinar. Cuenta con el clásico diseño de Nike SB, ideal para usar todos los días y completar cualquier outfit. Un modelo canchero, simple y versátil, perfecto para quienes buscan un look relajado y moderno."
    },
    {
        id: 10,
        name: "Cartera diesel",
        cat: "accesorios",
        price: 25000,
        old: null,
        discount: null,
        visual: "P",
        offer: false,
        image: "imagenes/cartera_diesel.jpeg",
        desc: "Detalle elegante para elevar tus outfits."
    },
    {
        id: 11,
        name: "cartera tidal marron ",
        cat: "accesorios",
        price: 35000,
        old: null,
        discount: null,
        visual: "S",
        offer: true,
        image: "imagenes/cartera_tidal.jpeg",
        desc: "Diseño plateado minimalista con una presencia sutil."
    },
    {
        id: 12,
        name: "Cartera tidal negra",
        cat: "accesorios",
        price: 35000,
        old: null,
        discount: null,
        visual: "B",
        offer: false,
        image: "imagenes/cartera_tidal_negra.jpeg",
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
        image: "imagenes/yara_rosa.jpeg",
        desc: "Un perfume dulce, femenino y delicado. Tiene un aroma cremoso y frutal, con un toque de vainilla que lo hace muy agradable y juvenil. Ideal para el día a día, citas y ocasiones especiales."

    },
    {
        id: 14,
        name: "Yara Blanco",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/yara_blanco.jpeg",
        desc: "Dulce, suave y femenino. Una fragancia cremosa y delicada, perfecta para el día a día y para quienes aman los aromas dulces"
    },
    {
        id: 15,
        name: "Yara Elixir",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/yara_elixir.jpeg",
        desc: "Intenso, dulce y envolvente. Una versión más profunda y sensual, ideal para usar de noche o en ocasiones especiales."
    },
    {
        id: 16,
        name: "HAWAS",
        cat: "perfumes",
        price: 50000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/hawas.jpeg",
        desc: "Fresco, elegante y masculino. Una fragancia versátil con un toque moderno y seductor, perfecta para cualquier ocasión.."
    },
    {
        id: 17,
        name: "body splash vanella",
        cat: "perfumes",
        price: 20000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/body_splash_vanilla.jpeg",
        desc: "Dulce, cálido y reconfortante. Un delicioso aroma a vainilla, ideal para usar todos los días y dejar una estela suave y agradable"
    },
    {
        id:18,
        name: "victoria secret forbidden rose",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/victoria_secret_forbidden_rose.jpeg",
        desc: "Floral, delicado y femenino. Un aroma romántico y fresco, perfecto para quienes buscan una fragancia suave y elegante"
    },
    {
        id:19,
        name: "victoria secret cake confetti",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/victoria_secret_cake_confetti.jpeg",
        desc: "Dulce, divertido y gourmand. Un aroma inspirado en un delicioso postre, ideal para quienes aman las fragancias dulces y juveniles"
    },
    {
        id:20,
        name: "victoria secret sugar high",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/victoria_secret_sugar_high.jpeg",
        desc: "Dulce, alegre y adictivo. Una fragancia divertida y juvenil, perfecta para llevar un toque goloso durante todo el día."
    },
    {
        id:21,
        name: "victoria secret Rush",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/victoria_secret_rush.jpeg",
        desc: "Fresco, femenino y sensual. Una fragancia moderna y envolvente, ideal para destacar con un aroma limpio y atractivo."
    },
    {
        id:22,
        name: "xerjoff soprano",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/xerjoff_soprano.jpeg",
        desc: "Elegante, sofisticado y lujoso. Una fragancia intensa y refinada, perfecta para quienes buscan un perfume distintivo y de alta gama"
    },
    {
        id:23,
        name: "AZZARO",
        cat: "perfumes",
        price: 35000,
        old: null,
        discount: null,
        visual: "C",
        offer: false,
        image: "imagenes/azzaro.jpeg",
        desc: "Masculino, elegante y sofisticado. Un aroma con presencia y personalidad, ideal para ocasiones especiales o para quienes buscan destacar."
    }

];


/* =========================
   VARIABLES
========================= */

let cart = [];

let favorites = [];

let currentFilter = "todos";

let searchTerm = "";

let modalProductId = null;


/* =========================
   CARGAR DATOS
========================= */

try {
    const savedCart = JSON.parse(
        localStorage.getItem("luxeCart") || "[]"
    );

    cart = Array.isArray(savedCart) ? savedCart : [];
} catch (error) {
    cart = [];
}


try {
    const savedFavorites = JSON.parse(
        localStorage.getItem("luxeFavorites") || "[]"
    );

    favorites = Array.isArray(savedFavorites)
        ? savedFavorites
        : [];
} catch (error) {
    favorites = [];
}


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
        Number(number).toLocaleString("es-AR");

};


/* =========================
   FILTRAR PRODUCTOS
========================= */

function filteredProducts() {

    return products.filter(product => {

        let categoryOK = true;

        if (currentFilter === "todos") {

            categoryOK = true;

        } else if (currentFilter === "ofertas") {

            categoryOK = product.offer;

        } else if (currentFilter === "favoritos") {
            categoryOK = favorites.includes(product.id)
        }
        else {

            categoryOK =
                product.cat === currentFilter;

        }

        const searchableText =
            `${product.name} ${product.cat} ${product.visual}`;

        const searchOK =
            !searchTerm ||
            searchableText
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase().trim()
                );

        return categoryOK && searchOK;

    });

}


/* =========================
   MOSTRAR PRODUCTOS
========================= */

function renderProducts() {

    const list = filteredProducts();

    const grid = $("#productGrid");

    const empty = $("#emptyState");

    if (!grid || !empty) return;

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

        card.className = "product-card";

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
                    type="button"
                    aria-label="Agregar a favoritos"
                >
                    ${favorite ? "♥️" : "♡"}
                </button>

                ${product.discount
                ?
                `<span class="discount">
                        -${product.discount}%
                    </span>`
                :
                ""
            }

                <div class="product-visual">
                    ${product.image
                ? `<img src="${product.image}" alt="${product.name}">`

                : product.visual
            }
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

                    ${product.old
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
                    type="button"
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

    const product = products.find(
        product => product.id === id
    );

    if (!product) return;

    const item =
        cart.find(
            item => item.id === id
        );

    if (item) {

        item.qty++;

    } else {

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
                total + Number(item.qty || 0),
            0
        );

    const counter = $("#cartCount");

    if (counter) {
        counter.textContent = count;
    }

}


/* =========================
   MOSTRAR CARRITO
========================= */

function renderCart() {

    const box = $("#cartItems");

    const totalBox = $("#cartTotal");

    if (!box || !totalBox) return;

    if (!cart.length) {

        box.innerHTML = `
            <div class="cart-empty">

                Tu carrito está vacío.

                <br><br>

                Agregá algo que te guste.

            </div>
        `;

        totalBox.textContent = "$0";

        return;

    }

    box.innerHTML = "";

    let total = 0;

    const validCart = [];

    cart.forEach(item => {

        const product =
            products.find(
                product =>
                    product.id === Number(item.id)
            );

        if (!product) return;

        const qty = Math.max(
            1,
            Number(item.qty) || 1
        );

        validCart.push({
            id: product.id,
            qty: qty
        });

        total +=
            product.price * qty;

        const element =
            document.createElement("div");

        element.className = "cart-item";

        element.innerHTML = `
            <div class="cart-thumb">
                ${product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : product.visual
                }
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
                        type="button"
                        aria-label="Disminuir cantidad"
                    >
                        −
                    </button>

                    <span>
                        ${qty}
                    </span>

                    <button
                        data-inc="${product.id}"
                        type="button"
                        aria-label="Aumentar cantidad"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                data-remove="${product.id}"
                type="button"
                aria-label="Eliminar producto"
            >
                ×
            </button>
        `;

        box.appendChild(element);

    });

    cart = validCart;

    saveCart();

    totalBox.textContent =
        money(total);

}


/* =========================
   TOAST
========================= */

function toast(message) {

    const toastBox = $("#toast");

    if (!toastBox) return;

    toastBox.textContent = message;

    toastBox.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer =
        setTimeout(() => {

            toastBox.classList.remove("show");

        }, 2200);

}


/* =========================
   ABRIR CARRITO
========================= */

function openCart() {

    $("#cartDrawer")
        ?.classList.add("open");

    $("#overlay")
        ?.classList.add("show");

}


/* =========================
   CERRAR CARRITO
========================= */

function closeCart() {

    $("#cartDrawer")
        ?.classList.remove("open");

    const menuOpen =
        $("#sideMenu")
            ?.classList.contains("open");

    if (!menuOpen) {

        $("#overlay")
            ?.classList.remove("show");

    }

}


/* =========================
   ABRIR MENÚ
========================= */

function openMenu() {

    $("#sideMenu")
        ?.classList.add("open");

    $("#overlay")
        ?.classList.add("show");

}


/* =========================
   CERRAR MENÚ
========================= */

function closeMenu() {

    $("#sideMenu")
        ?.classList.remove("open");

    const cartOpen =
        $("#cartDrawer")
            ?.classList.contains("open");

    if (!cartOpen) {

        $("#overlay")
            ?.classList.remove("show");

    }

}


/* =========================
   MODAL PRODUCTO
========================= */

function openModal(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;

    modalProductId = id;

    $("#modalCategory").textContent =
        product.cat.toUpperCase();

    $("#modalName").textContent =
        product.name;

    $("#modalDescription").textContent =
        product.desc;

    $("#modalPrice").textContent =
        money(product.price);

    $("#modalImage").textContent =
        product.visual;

    $("#productModal")
        .classList.add("open");

}


/* =========================
   CERRAR MODAL
========================= */

function closeModal() {

    $("#productModal")
        ?.classList.remove("open");

    modalProductId = null;

}


/* =========================
   BUSCADOR PREMIUM
========================= */

function renderSearchResults() {
    const resultsBox = $("#searchResults");
    if (!resultsBox) return;

    const query = searchTerm.trim().toLowerCase();

    if (!query) {
        resultsBox.innerHTML = "";
        return;
    }

    const results = products
        .filter(product => {
            const searchableText =
                `${ product.name } ${ product.cat } ${ product.visual } ${ product.desc } `
                    .toLowerCase();

            return searchableText.includes(query);
        })
        .slice(0, 6);

    if (!results.length) {
        resultsBox.innerHTML = `
            < div class="search-empty" >
                <strong>No encontramos resultados</strong>
                Probá con otro nombre, categoría o producto.
            </div >
            `;
        return;
    }

    resultsBox.innerHTML = results.map((product, index) => `
            < button
        class="search-result"
        type = "button"
        data - search - id="${product.id}"
        style = "animation-delay:${index * 45}ms"
            >
            <span class="search-result-visual">
                ${product.visual}
            </span>

            <span class="search-result-info">
                <small>${product.cat}</small>
                <strong>${product.name}</strong>
                <span>${money(product.price)}</span>
            </span>

            <span class="search-result-arrow">→</span>
        </button >
            `).join("");

    if (results.length < products.filter(product => {
        const searchableText =
            `${ product.name } ${ product.cat } ${ product.visual } ${ product.desc } `
                .toLowerCase();
        return searchableText.includes(query);
    }).length) {
        resultsBox.insertAdjacentHTML("beforeend", `
            < button class="search-all" id = "searchAll" type = "button" >
                Ver todos los resultados →
            </button >
            `);
    }
}

$("#searchBtn")?.addEventListener(
    "click",
    () => {
        const panel = $("#searchPanel");

        panel.classList.toggle("open");

        if (panel.classList.contains("open")) {
            $("#searchInput").focus();
            renderSearchResults();
        }
    }
);

$("#closeSearch")?.addEventListener(
    "click",
    () => {
        $("#searchPanel").classList.remove("open");
    }
);

$("#searchInput")?.addEventListener(
    "input",
    event => {
        searchTerm = event.target.value;
        renderProducts();
        renderSearchResults();
    }
);

$("#searchResults")?.addEventListener(
    "click",
    event => {
        const result = event.target.closest("[data-search-id]");

        if (result) {
            openModal(Number(result.dataset.searchId));
            $("#searchPanel")?.classList.remove("open");
            return;
        }

        const allButton = event.target.closest("#searchAll");

        if (allButton) {
            $("#searchPanel")?.classList.remove("open");
            $("#productos")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
);


/* =========================
   MENÚ
========================= */

$("#menuBtn")?.addEventListener(
    "click",
    openMenu
);


$("#closeMenu")?.addEventListener(
    "click",
    closeMenu
);


$("#overlay")?.addEventListener(
    "click",
    () => {

        closeMenu();

        closeCart();

    }
);


/* =========================
   CARRITO
========================= */

$("#cartBtn")?.addEventListener(
    "click",
    () => {

        renderCart();

        openCart();

    }
);


$("#closeCart")?.addEventListener(
    "click",
    closeCart
);


/* =========================
   MODAL
========================= */

$("#modalClose")?.addEventListener(
    "click",
    closeModal
);


$("#productModal")?.addEventListener(
    "click",
    event => {

        if (
            event.target.id ===
            "productModal"
        ) {

            closeModal();

        }

    }
);


$("#modalAdd")?.addEventListener(
    "click",
    () => {

        if (modalProductId !== null) {

            addToCart(modalProductId);

            closeModal();

        }

    }
);


/* =========================
   ESC PARA CERRAR
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeModal();

        closeMenu();

        closeCart();

        $("#searchPanel")
            ?.classList.remove("open");

    }
);


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

            } else {

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

                item.qty =
                    Number(item.qty) + 1;

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

                item.qty =
                    Number(item.qty) - 1;

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

        button.addEventListener(
            "click",
            () => {

                $$(".filter")
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );

                button.classList.add("active");

                currentFilter =
                    button.dataset.filter;

                renderProducts();

            }
        );

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
                    element.dataset.categoryLink;

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

$("#newsletterForm")?.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        $("#newsletterMessage")
            .textContent =
            "¡Gracias por suscribirte a LUXE!";

        $("#emailInput").value = "";

    }
);


/* =========================
   CHECKOUT
========================= */

$("#checkoutBtn")?.addEventListener(
    "click",
    () => {

        if (!cart.length) {

            toast(
                "Tu carrito está vacío"
            );

            return;

        }

        toast(
            "Demo: el pago no está conectado."
        );

    }
);

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

        mensaje += `🧴 ${ product.name }% 0A`;
        mensaje += `Cantidad: ${ item.qty }% 0A`;
        mensaje += `Precio: ${ money(product.price) }% 0A`;
        mensaje += `Subtotal: ${ money(subtotal) }% 0A % 0A`;
    });

    mensaje += `💰 TOTAL: ${ money(total) }% 0A % 0A`;
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

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
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