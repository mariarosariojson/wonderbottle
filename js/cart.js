let cart = document.querySelectorAll('.add-cart');

let cartProducts = [
    {
        name: 'Pink Wonder Bottle',
        price: 299,
        inCart: 0,
        img: '/img/product_pic13.png',
    },
    {
        name: 'Blue Wonder Bottle',
        price: 299,
        inCart: 0,
        img: '/img/product_pic10.png',
    },
    {
        name: 'Green Wonder Bottle',
        price: 299,
        inCart: 0,
        img: '/img/product_pic11.png',
    },
    {
        name: 'Red Wonder Bottle',
        price: 199,
        inCart: 0,
        img: '/img/product_pic12.png',
    },
];

for (let i=0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(cartProducts[i]);
        totalCost(cartProducts[i]);
    })
}
// ================== Check if there is anything in cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
// ================= Amount in Cart
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    

    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
    
}
// ================ Adding products to cart in localstorage
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems !=null) {
        
        if(cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart +=1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
    } 
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// ================ Total cost
function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);

    }

}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let totalCartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-products");
    
<<<<<<< HEAD
    
    console.log(cartItems);
=======

>>>>>>> 06cad8de809bcf23578a91921182a585bde18020
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="${item.img}"/>
                <span>${item.name}</span>
                <span>${item.price} kr</span>
                <span>${item.inCart} st</span>
                <span>${item.inCart * item.price} kr</span>
            </div>
            
            `;
        });
        
        productContainer.innerHTML += `
        <div class="cartTotal">
            <span>Total Cart Price ${totalCartCost} kr</span>
        </div>
        
        <button class="buyNow cart-purchase-btn">Purchase</button>
        
        `;
        
    }
}


onLoadCartNumbers();
displayCart();

function userInfo() {
    let purchaseGreeting = document.querySelector(".greeting");
    purchaseGreeting.innerHTML = `Thank you for shopping at WonderBottle! 🎉 <br><a href="index.html"<button class="buyNow" style="height: 43px; text-decoration: none;">CONTINUE SHOPPING</button></a>`;
  }
  let userButton = document.querySelector(".buyNow");
  userButton.addEventListener("click", userInfo);