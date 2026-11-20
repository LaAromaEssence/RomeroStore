/* =========================
   PRODUCTOS
========================= */
let products = [];
const API_BASE = "";

/* =========================
   VARIABLES
========================= */
let cart =
    JSON.parse(
        localStorage.getItem("LARØMA ESSENZÉCart") || "[]"
    );
let favorites =
    JSON.parse(
        localStorage.getItem("LARØMA ESSENZÉFavorites") || "[]"
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
        }else if (currentFilter === "favoritos"){
            categoryOK = favorites.includes(product.id)
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
                    type="button"
                    aria-label="Agregar a favoritos"
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
                <div class="product-visual" ${product.image_url ? 'hidden' : ''}>${product.visual}</div>
                ${product.image_url ? `<img class="product-photo" src="${product.image_url}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.hidden=true; this.previousElementSibling.hidden=false">` : ""}
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
                        ${product.price > 0 ? money(product.price) : 'Precio a definir'}
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
                <span class="stock-label">${product.stock > 0 ? `Stock: ${product.stock}` : "Sin stock"}</span>
                <button
                    class="add-product"
                    data-add="${product.id}"
                    type="button"
                    ${product.stock <= 0 || product.price <= 0 ? "disabled" : ""}
                >
                    ${product.stock > 0 ? "Agregar al carrito" : "Sin stock"}
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
        "LARØMA ESSENZÉCart",
        JSON.stringify(cart)
    );
}
/* =========================
   GUARDAR FAVORITOS
========================= */
function saveFavorites() {
    localStorage.setItem(
        "LARØMA ESSENZÉFavorites",
        JSON.stringify(favorites)
    );
}
/* =========================
   AGREGAR AL CARRITO
========================= */
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const item = cart.find(item => item.id === id);
    const currentQty = item ? Number(item.qty) : 0;
    if (currentQty >= Number(product.stock || 0)) {
        toast("No hay más unidades disponibles");
        return;
    }
    if (item) {
        item.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
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
                    ${product.price > 0 ? money(product.price) : 'Precio a definir'}
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
        .textContent = product.price > 0 ? money(product.price) : "Precio a definir";
    $("#modalImage").innerHTML = product.image_url
        ? `<img src="${product.image_url}" alt="${product.name}" referrerpolicy="no-referrer" onerror="this.remove(); this.parentElement.textContent='${product.visual}'">`
        : product.visual;
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
                const product = products.find(p => p.id === id);
                if (product && Number(item.qty) >= Number(product.stock || 0)) {
                    toast("No hay más unidades disponibles");
                    return;
                }
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
                "¡Gracias por suscribirte a LARØMA ESSENZÉ!";
            $("#emailInput")
                .value = "";
        }
    );
/* =========================
   CHECKOUT: REGISTRAR PEDIDO EN SQLITE
========================= */
$("#checkoutBtn").onclick = async () => {
    if (!cart.length) {
        toast("Tu carrito está vacío");
        return;
    }
    const cliente = prompt("Nombre y apellido para registrar el pedido:");
    if (!cliente || !cliente.trim()) return;
    const telefono = prompt("Teléfono de contacto:") || "";
    try {
        const response = await fetch(`${API_BASE}/api/compras`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cliente: cliente.trim(),
                telefono: telefono.trim(),
                items: cart.map(item => ({ producto_id: Number(item.id), cantidad: Number(item.qty) }))
            })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "No se pudo registrar el pedido.");
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
        toast(`Pedido #${result.id} registrado como Pendiente`);
        alert(`¡Pedido #${result.id} registrado! Estado: Pendiente. El administrador podrá actualizarlo desde /admin.`);
    } catch (error) {
        toast(error.message);
    }
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
async function initializeStore() {
    try {
        const response = await fetch(`${API_BASE}/api/productos`);
        if (!response.ok) throw new Error("No se pudo conectar con el servidor.");
        products = await response.json();
        renderProducts();
        renderCart();
        updateCartCount();
    } catch (error) {
        console.error(error);
        const grid = $("#productGrid");
        if (grid) grid.innerHTML = '<p class="empty-state show">No pudimos cargar el catálogo. Comprobá que el servidor LARØMA ESSENZÉ esté iniciado.</p>';
        toast("No se pudo conectar con LARØMA ESSENZÉ");
    }
}
initializeStore();