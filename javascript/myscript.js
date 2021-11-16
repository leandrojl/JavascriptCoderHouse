//JSON CARS STORAGE SET IN INDEX

const productList = document.querySelector('#shop');

const cartList = document.querySelector('#cartList');

const cartTotalValue = document.getElementById('cart-total-value');

let cartItemID = 1;

eventListeners();

function eventListeners (){
window.addEventListener('DOMContentLoaded', () =>{
    loadJSON();
    loadCart();
});

productList.addEventListener('click', purchaseProduct);

cartList.addEventListener('click', deleteProduct);
};

function updateCartInfo(){
    let cartInfo = findCartInfo();
    
    cartTotalValue.textContent = cartInfo.total;
}


function loadJSON(){
    fetch("../json/storage.json", ).then(response => response.json()).then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
        <div class="col-md-3 col-xs-12 mb-3">
        <div class="card bg-white m-1 product-img">
            <img src="${product.src}" class="card-img-top" alt="...">
            <div class="card-body text-center">
            <h5 class="card-title mb-3 font-weight-bold product-name">${product.name}</h5>
            <p class="card-text product-color">${product.color}</p>
            <p class="card-text product-model">${product.model}</p>
            <p class="precio product-price">$${product.price}</p>
            <button class="btn btn-dark add-to-cart-btn">ADD TO CART</button>
            
        </div>
        </div>
        </div>
           `
        
        });
        productList.innerHTML = html;
        
    })
}

function purchaseProduct(e){
    if(e.target.classList.contains('add-to-cart-btn')){
        let product = e.target.parentElement.parentElement.parentElement;
        
        getProductInfo(product);
    }
};

function getProductInfo(product){
    let productInfo = {
        id: cartItemID,
        src: product.querySelector('.product-img img').src,
        name: product.querySelector('.product-name').textContent,
        color: product.querySelector('.product-color').textContent,
        model: product.querySelector('.product-model').textContent,
        price: product.querySelector('.product-price').textContent
    }
    cartItemID++;
    
    addToCartList(productInfo);
    saveProductInStorage(productInfo);

}

function addToCartList(product){
    const cartItem = document.createElement('div');
    cartItem.className = 'col-md-3 col-xs-12';
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML = `

            <div class="card bg-white m-1 product-img">
            <img src="${product.src}" class="card-img-top" alt="...">
            <div class="card-body text-center">
            <h5 class="card-title mb-3 font-weight-bold product-name">${product.name}</h5>
            <p class="card-text product-color">${product.color}</p>
            <p class="card-text product-model">${product.model}</p>
            <p class="precio product-price">${product.price}</p>
            <button type= "button" class="btn btn-danger cart-item-del-btn">DELETE</button>
            
        </div>
        </div>
    
    `
    cartList.appendChild(cartItem);
}

function saveProductInStorage(item){
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}

function getProductFromStorage(){
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function loadCart(){
    let products = getProductFromStorage();
    if(products.length < 1){
        cartItemID = 1;
    } else {
        cartItemID = products[products.length - 1].id;
        cartItemID++;
    }
    products.forEach(product => addToCartList(product));
}



function findCartInfo(){
    let products = getProductFromStorage();
    let total = products.reduce((acc, product)=>{
        let price = parseFloat(product.price.substr(1));;
        return acc += price;
    },0);
    
    return{
        total: total.toFixed(2),
        productCount: products.length
    }
}

function deleteProduct(e){
    let cartItem;
    if(e.target.tagName == "BUTTON"){
        cartItem = e.target.parentElement.parentElement.parentElement;
        cartItem.remove();
        
    } 

    let products = getProductFromStorage();
    let updatedProducts = products.filter(product =>{
        return product.id != parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    updateCartInfo();
}






























