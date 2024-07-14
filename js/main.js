//Start Open and Close Cart Functions 
let cart = document.querySelector(".cart");
let closeBtn = document.querySelector(".close-cart");
let openBtn = document.querySelector(".icon-cart");

openBtn.addEventListener('click', () => { cart.classList.add('active'); })
closeBtn.addEventListener('click', () => { cart.classList.remove('active'); })

//End Open and Close Cart Functions 


//Start Cart Functions
let products;
let cartContainer = document.querySelector('.middle-cart');
let cartProducts = [];
let totalCartPrice = document.querySelector('.total-cart-price');
let cartItemsNumber = document.querySelector(".cart-items-number");
let totalHeaderPrice = document.querySelector(".price-cart");
let itemsCount = document.querySelector(".items-count");
let CheckoutCartContainer = document.querySelector(".cart-container");

function addToCart(id, btn) {
    cartProducts.push(products[id]);
    btn.classList.add('active');
    console.log(cartProducts);
    displayCartItems();
}

function deleteCartItem(index) {
    cartProducts.splice(index, 1);
    displayCartItems();
    let allAddBtns = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < allAddBtns.length; i++) {
        allAddBtns[i].classList.remove('active');

    }
}


function displayCartItems() {
    let items = "";
    let totalPrice = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        items += `
         <div class="cart-product">
                     <img src="${cartProducts[i].img}" alt="">
                     <div class="product-details">
                         <h4>${cartProducts[i].name}</h4>
                         <p class="product-price">$ ${cartProducts[i].price}</p>
                     </div>
                     <button onclick=(deleteCartItem(${i})) class="delete-product"><i class="fa-regular fa-trash-can"></i></button>
                 </div>


        `
        totalPrice += cartProducts[i].price
    }
    cartContainer.innerHTML = items;
    totalCartPrice.innerHTML = "$" + totalPrice;
    cartItemsNumber.innerHTML = `(${cartProducts.length} Items in Cart) `;
    itemsCount.innerHTML = cartProducts.length;
    totalHeaderPrice.innerHTML = "$" + totalPrice;
}


//open and close menu

let menu = document.querySelector(".menu");
let openMenuBtn = document.querySelector(".open-menu")
let closeMenuBtn = document.querySelector(".close-menu")

openMenuBtn.addEventListener('click', () => { menu.classList.add('active'); })

closeMenuBtn.addEventListener('click', () => { menu.classList.remove('active'); })


// Change img Src

let mainImg = document.querySelector(".main-img");
let otherImgs = document.querySelectorAll(".item-imgs img");
for (let i = 0; i < otherImgs.length; i++) {
    otherImgs[i].onclick = function () {
        let src = otherImgs[i].src;
        mainImg.src = src
    }

}
// Back to Top function
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}


let btnTop = document.querySelector(".back-top");
btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})



