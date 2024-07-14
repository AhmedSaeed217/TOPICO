let onSaleContainer = document.getElementById("sale-products-one");
let computerDesktopContainer = document.getElementById("sale-products-two");
let mobileContainer = document.getElementById("sale-products-three");
let allProducts = document.getElementById("all-products");

//Fetch Data for Sections in Home Page
fetch('js/items.json').then(res => res.json()).then(data => {
    products = data;
    let allproducts = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].old_price) {
            const salePercentage = Math.floor((data[i].old_price - data[i].price) / data[i].old_price * 100);
            allproducts += `
        <div class="product swiper-slide">
    
                        <div class="icons">
                           <span ><i onclick=addToCart(${data[i].id},this) class="fa-solid fa-cart-plus"></i></span> 
                            <span><i class="fa-solid fa-share"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                        </div>
                        <span class="sale-percentage">${salePercentage} %</span>
                        <div class="product-img">
                            <img src="${data[i].img}" alt="">
                            <img class="img-hover" src="${data[i].img_hover}" alt="">
                        </div>
                        <h3 class="product-name">
                            <a href="item.html">${data[i].name}</a>
                        </h3>
                        <div class="rate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="product-price">
                            <p class="current-price">$ ${data[i].price}</p>
                            <p class="old-price">$ ${data[i].old_price}</p>
                        </div>
                    </div>
        `
        }
    }

    onSaleContainer.innerHTML = allproducts;
    computerDesktopContainer.innerHTML = allproducts;
    mobileContainer.innerHTML = allproducts;
})


//Fetch Data for All Products Page
fetch('js/items.json').then(res => res.json()).then(data => {
    products = data;
    let allproducts = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].old_price) {
            const salePercentage = Math.floor((data[i].old_price - data[i].price) / data[i].old_price * 100);
            allproducts += `
            <div class="product swiper-slide">
        
                            <div class="icons">
                               <span ><i onclick=addToCart(${data[i].id},this) class="fa-solid fa-cart-plus"></i></span> 
                                <span><i class="fa-solid fa-share"></i></span>
                                <span><i class="fa-solid fa-heart"></i></span>
                            </div>
                            <span class="sale-percentage">${salePercentage} %</span>
                            <div class="product-img">
                                <img src="${data[i].img}" alt="">
                                <img class="img-hover" src="${data[i].img_hover}" alt="">
                            </div>
                            <h3 class="product-name">
                                <a href="item.html">${data[i].name}</a>
                            </h3>
                            <div class="rate">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="product-price">
                                <p class="current-price">$ ${data[i].price}</p>
                                <p class="old-price">$ ${data[i].old_price}</p>
                            </div>
                        </div>
            `
        } else {
            allproducts += `
            <div class="product swiper-slide">
        
                            <div class="icons">
                               <span ><i onclick=addToCart(${data[i].id},this) class="fa-solid fa-cart-plus"></i></span> 
                                <span><i class="fa-solid fa-share"></i></span>
                                <span><i class="fa-solid fa-heart"></i></span>
                            </div>
                            
                            <div class="product-img">
                                <img src="${data[i].img}" alt="">
                                <img class="img-hover" src="${data[i].img_hover}" alt="">
                            </div>
                            <h3 class="product-name">
                                <a href="item.html">${data[i].name}</a>
                            </h3>
                            <div class="rate">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="product-price">
                                <p class="current-price">$ ${data[i].price}</p>
                               
                            </div>
                        </div>
            `
        }


    }

    allProducts.innerHTML = allproducts;
})

