const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const hamBtn = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamBtn.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    //si no esta cerrado el aside lo cierro
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    //si no esta cerrado el aside lo cierro
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}
function toggleCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    //si no esta cerrado el menu mobile lo cierro
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    //si no esta cerrado el menu mobile lo cierro
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Torre",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Teclado",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;

        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.append(productCard);
    }
}
renderProducts(productList);