let productsList = document.getElementById('products');
let currentStateView = [];

function generateView(models){
    currentStateView = models;
    productsList.innerHTML = '';
    for (model of models){
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
        divProduct.classList.add('item', model.price, model.gender, model.quality); 
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
    mobileFilter.style.marginTop = '-800px';
    list.style.marginTop = '100px';
    upArrow.style.display = 'none';
    downArrow.style.display = 'block';
});

// Filtring // 

const fillteringSection = document.getElementById('filtering');
const genderMale = document.getElementById('filtring-mens');
const genderWomen = document.getElementById('filtring-womens');
const basic = document.getElementById('filtring-basic');
const premium = document.getElementById('filtring-premium');
const filtringPriceOne = document.getElementById('filtring1');
const filtringPriceTwo = document.getElementById('filtring2');
const filtringPriceThree = document.getElementById('filtring3');
const filtringPriceFour = document.getElementById('filtring4');
const filtringPriceFive = document.getElementById('filtring5');
const noResult = document.getElementById('no-result');

let filteredItems = currentStateView;

function noResultView(){
    const result = filteredItems.length < 1;
    result ? noResult.style.display = 'block' : noResult.style.display = 'none';
}

function genderAndQualityFilter(filter, prop, gender){
    filter.addEventListener('click', function(){
        filteredItems = currentStateView.filter((item) => {
            return item[prop] == gender;
        })
        noResultView();
        generateView(filteredItems);
        currentStateView = filteredItems;
    })
}

function priceFilter(prop, min, max) {
    filtringPriceOne.addEventListener('click', function(){
        filteredItems = currentStateView.filter((item) => {
            return Number(item[prop]) < min;
        })
        noResultView();
        generateView(filteredItems);
        currentStateView = filteredItems;
    })
    filtringPriceFive.addEventListener('click', function(){
        filteredItems = currentStateView.filter((item) => {
            return Number(item[prop]) > max;
        })
        noResultView();
        generateView(filteredItems);
        currentStateView = filteredItems;
    })

    function multiplePriceFilter (filter, priceOne, priceTwo){
        filter.addEventListener('click', function(){
            filteredItems = currentStateView.filter((item) => {
                return Number(item[prop]) > priceOne && Number(item.price) <= priceTwo;
            })
            noResultView();
            generateView(filteredItems);
            currentStateView = filteredItems;
        })
    }
    
    multiplePriceFilter(filtringPriceTwo, 29.99, 39.99);
    multiplePriceFilter(filtringPriceThree, 39.99, 49.99);
    multiplePriceFilter(filtringPriceFour, 49.99, 59.99);
}

function checked(){
    genderAndQualityFilter(genderMale, 'gender', 'male');
    genderAndQualityFilter(genderWomen,'gender', 'women');
    genderAndQualityFilter(basic, 'quality', 'basic');
    genderAndQualityFilter(premium,'quality', 'premium');
    priceFilter('price', 29.99, 59.99);
} 
checked();

// Clear buttons // 
const clearBtn = document.getElementById('clear');

clear.addEventListener('click', function(e){
    e.preventDefault();
    currentStateView = tshirtsModels;
    generateView(currentStateView);
});

// Search Part // 

const search = document.querySelector('#search-bar input');
const searchBtn = document.querySelector('#search-bar button');

search.addEventListener('keyup', function(e) {
    const searchString = e.target.value;
    filteredItems = currentStateView.filter((item) => {
        return item.name.toLowerCase().includes(searchString);
    })
    generateView(filteredItems);
    noResultView();
    currentStateView = tshirtsModels;
});

// Sort Part // 
const items = document.querySelectorAll('.item');
const sortSelectByPrice = document.getElementById('sort1');

sortSelectByPrice.addEventListener('change', function(e){
    if (e.target.value === "higher-price"){
        filteredItems.sort((a, b) => (a.price > b.price) ? -1 : 1);
    } else if (e.target.value === "lower-price") {
        filteredItems.sort((a, b) => (a.price > b.price) ? 1 : -1);
    } 
    generateView(filteredItems);
});

const sortSelectByName = document.getElementById('sort2');

sortSelectByName.addEventListener('change', function(e){
    if (e.target.value === "A-Z"){
        filteredItems.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (e.target.value === "Z-A") {
        filteredItems.sort((a, b) => (a.name > b.name) ? -1 : 1);
    } 
    generateView(filteredItems);
});