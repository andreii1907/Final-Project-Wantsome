let productsList = document.getElementById('products');
let currentStateView = [];

function generateView(models){
    currentStateView = models;
    productsList.innerHTML = '';
    for (model of tshirtsModels){
        const divProduct = document.createElement('div');
        divProduct.style.backgroundImage = 'url('+ model.url +')';
        productsList.appendChild(divProduct);
        const productsPrice = document.createElement('small');
        productsPrice.classList = `${model.price}`;
        productsPrice.textContent = `€${model.price}`;
        divProduct.appendChild(productsPrice);
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        divProduct.appendChild(addToCartButton);
        const seeDetails = document.createElement('button');
        seeDetails.textContent = 'Details';
        divProduct.appendChild(seeDetails);
    }
    hoverEvent();
}

function hoverEvent(){
    const products = document.querySelectorAll('#products div');
    for (let prod of products){
        prod.addEventListener('mouseover', function(){
            const priceText = prod.firstChild;
            const addButton = prod.children[1];
            const seeDetails = prod.children[2];
            priceText.style.display = 'block';
            addButton.style.display = 'block';
            seeDetails.style.display = 'block';

            prod.addEventListener('mouseout', function(){
                priceText.style.display = 'none';
                addButton.style.display = 'none';
                seeDetails.style.display = 'none';
            })
        })
    }
}
generateView(tshirtsModels);

// Cart Button // 

const cartButton = document.getElementById('cart-anchor');
const mainPage = document.getElementsByTagName('main')[0];;
const cartContainer = document.getElementById('cart-container');

cartButton.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    mainPage.classList.add('main-movement');
    cartContainer.style.width = '50%';
    mainPage.addEventListener('click', function(e){
        e.preventDefault();
        mainPage.classList.remove('main-movement');
        cartContainer.style.width = '0%';
        cartContainer.style.transition = 'all 0.3s linear';
    });
});

// Add to cart for mobile //

const buttonCartMobile = document.getElementById('your-cart');
function cartForMobile() {
    function backButton () {
        const backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.classList.add('back-button');
        cartContainer.appendChild(backButton);
        backButton.addEventListener('click', function(e){
            e.preventDefault();
            mainPage.style.display = 'block';
            cartContainer.style.display = 'none';
            cartContainer.classList.remove('cart-container-active');
        })
    }
    
    function cartMobileStyle() {
        mainPage.style.display ='none';
        document.body.style.backgroundColor = '#fff';
        cartContainer.classList.add('cart-container-active');
        cartContainer.style.display = 'block';
        cartProductImage = document.getElementsByClassName('cart-product-image');
        for (let images of cartProductImage){
            images.style.width = '40%';
        }
    }

    return {
        backButton,
        cartMobileStyle
    }
}

buttonCartMobile.addEventListener('click', function(e){
    e.preventDefault();
    const mobileCart = cartForMobile();
    mobileCart.backButton();
    mobileCart.cartMobileStyle();
});


// Filter for mobile //
const mobileFilter = document.getElementById('filtering');
const upArrow = document.getElementById('up');
const downArrow = document.getElementById('down');
const list = document.getElementById('list');

downArrow.addEventListener("click", function(event){
    event.preventDefault;
    mobileFilter.style.marginTop = '0';
    list.style.marginTop = '0';
    downArrow.style.display = 'none';
    upArrow.style.display = 'block';
});

upArrow.addEventListener("click", function(event){
    event.preventDefault();
    mobileFilter.style.marginTop = '-700px';
    list.style.marginTop = '170px';
    upArrow.style.display = 'none';
    downArrow.style.display = 'block';
});

// Clear radio buttons // 
const clearBtn = document.getElementById('clear');

clear.addEventListener('click', function(e){
    e.preventDefault();
    const filtrationToClear = document.querySelectorAll('.inputs input');
    for (let filter of filtrationToClear) {
        filter.checked = false;
    }
});

// Sort Part // 
const sortSelectByPrice = document.getElementById('sort1');

sortSelectByPrice.addEventListener('change', function(e){
    if (e.target.value === "higher-price"){
        currentStateView.sort((a, b) => (a.price > b.price) ? -1 : 1);
    } else if (e.target.value === "lower-price") {
        currentStateView.sort((a, b) => (a.price > b.price) ? 1 : -1);
    } 
    generateView(currentStateView);
});

const sortSelectByName = document.getElementById('sort2');

sortSelectByName.addEventListener('change', function(e){
    if (e.target.value === "A-Z"){
        currentStateView.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (e.target.value === "Z-A") {
        currentStateView.sort((a, b) => (a.name > b.name) ? -1 : 1);
    } 
    generateView(currentStateView);
});

// Filtring // 



