const openDesktopMenu = document.querySelector("#openDesktopMenu");
const desktopMenu = document.querySelector(".menuDesktop");
const openMobileMenu = document.querySelector(".options");
const closeMobileMenu = document.querySelector(".closeMobileMenu");
const mobileMenu = document.querySelector(".menuMobile");
const arrowShoppingCar = document.querySelector("#arrowAside");
const shoppingCar = document.querySelector("#shoppingCar");
const optionShoppingCar = document.querySelector(".asideContainer");
const cardContainer = document.querySelector(".cardContainer");

let littleCar = false;
let products = [{
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 120,
    info: "A beautiful thing"
    }, 
    {
    image: "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 120,
    info: "A beautiful thing"
    },
    {
    image: "https://images.pexels.com/photos/2646380/pexels-photo-2646380.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 120,
    info: "A beautiful thing"
    },
    {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 120,
    info: "A beautiful thing"
    },
    {
    image: "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?cs=srgb&dl=pexels-rafael-pires-943150.jpg&fm=jpg",
    price: 120,
    info: "A beautiful thing",
    },
    {
    image: "https://images.pexels.com/photos/269220/pexels-photo-269220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 120,
    info: "A beautiful thing" 
    }];

shoppingCar.addEventListener("click", toggleShoppingCar)
arrowShoppingCar.addEventListener("click", toggleShoppingCar);
openDesktopMenu.addEventListener("click", toggleDesktopMenu);
openMobileMenu.addEventListener("click", toggleMobileMenu);
closeMobileMenu.addEventListener("click", toggleMobileMenu);

function toggleShoppingCar() {
    littleCar = optionShoppingCar.classList.toggle("inactiveCar");
    console.log(littleCar);
}

function toggleMobileMenu() {
    if (!littleCar) {
        mobileMenu.classList.toggle("inactive");
        toggleShoppingCar();
    } else {
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleDesktopMenu() {
    if (!littleCar) {
        desktopMenu.classList.toggle("inactive");
        openDesktopMenu.classList.toggle("rotate");
        toggleShoppingCar();
    } else {
        desktopMenu.classList.toggle("inactive");
        openDesktopMenu.classList.toggle("rotate");
    }
}

function addProducts(arr) {
    for (let product of arr) {
       
        const productCard = document.createElement("div");
        productCard.classList.add("productCard");
        const image = document.createElement("img");
        image.setAttribute("src", product.image);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("productInfo");
        
        const pricetInfo = document.createElement("div");
        pricetInfo.classList.add("priceInfo");
        const price = document.createElement("p");
        price.innerText = "$" + product.price;
        const info = document.createElement("p");
        info.innerText = product.info;
        pricetInfo.append(price, info);
        
        const figure = document.createElement("figure");
        const iconCart = document.createElement("img");
        iconCart.setAttribute("src", "icons/bt_add_to_cart.svg");
        figure.appendChild(iconCart);
        
        productInfo.append(pricetInfo, figure);
        productCard.append(image, productInfo);
        cardContainer.appendChild(productCard);
    }
}

addProducts(products);
