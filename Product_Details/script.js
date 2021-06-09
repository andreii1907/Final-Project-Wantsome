// Product Counter //

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const input = document.getElementById('input');
const minProduct = 1;
const maxProduct = 5;

input.addEventListener('input', function(e){
    if(input.value > maxProduct || input.value < minProduct){
        input.value = 1;
    }
})

minus.addEventListener('click', function(event){
    event.preventDefault();
    let value = input.value - 1;
    if (input.value <= minProduct){
        return console.log('You may have at least one item');
    } 
    input.value = value;
})

plus.addEventListener('click', function(event){
    event.preventDefault();
    let value = Number(input.value) + 1;
    if (input.value >= maxProduct) {
        return console.log('You can take only five items')
    }
    input.value = value;
})

// Change Image //

const imgDiv = document.querySelectorAll('zoom-div');
const image = document.getElementsByClassName('another-view');
const mainImg = document.getElementById('product-image');

for(let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function(e) {
        e.preventDefault();
        const url = mainImg.style.backgroundImage.slice(5, -2);
        mainImg.style.backgroundImage = 'url('+ image[i].src +')';
        image[i].src = url;
    })
}

// Selected Size //

const sizeButtons = document.querySelectorAll('#sizes-btn button');
let activeButtons = [];

for(let button of sizeButtons){
    button.addEventListener('click', function(e){
        activeButtons.push(button);
        button.classList.toggle('clicked-size');
        const newClickedItem = activeButtons[0];
        if(activeButtons.length > 1) {
            newClickedItem.classList.remove('clicked-size');
            activeButtons.shift();
        }
    })
}


// WhisList Popup //

const whislistButton = document.getElementById('add-to-whishlist');
const popupContainer = document.getElementById('popup');
const popupMessage = document.getElementById('myPopup');
let popupList = [];

function popupAdd(message) {
    popupContainer.style.display = 'flex';
    popupMessage.textContent = message;
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 4000);
}

whislistButton.addEventListener('click', function(e){
    popupAdd('You add this item to your Whislist! We send you an email with your wishlist items!');
    if(popupList.length > 1) {
        popupMessage.textContent = 'You already add this item to whishlist!';    
    }
    popupList.push(popupContainer);
});

// Cart Button // 

const cartButton = document.getElementById('cart-anchor');
const mainPage = document.getElementsByTagName('main')[0];;
const cartContainer = document.getElementById('cart-container');

cartButton.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    mainPage.classList.toggle('main-movement');
    cartContainer.style.width = '100%';
    mainPage.addEventListener('click', function(e){
        mainPage.classList.remove('main-movement');
    });
});

// Add to cart //

const addToCartButton = document.getElementById('add-to-cart-btn');
const cartItems = document.getElementById('cart-items');
const productPrice = document.getElementById('product-price');
const chosenSize = document.getElementsByClassName('clicked-size');
const url = mainImg.style.backgroundImage.slice(5, -2);
const priceList = [];


function addToCart(){
    function createElementsForCart() {
        const product = document.createElement('div');
        cartItems.appendChild(product);
        const productImage = document.createElement('img');
        productImage.setAttribute('src', '');
        productImage.classList.add('cart-product-image');
        productImage.src = url;
        product.appendChild(productImage);
        const price = document.createElement('p');
        price.classList.add('prices');
        price.textContent = `Price: ${productPrice.textContent}`;
        product.appendChild(price);
        priceList.push(price.textContent);
        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${input.value}`;
        product.appendChild(quantity);
        const size = document.createElement('p');
        size.textContent = `Size: ${chosenSize[0].value}`;
        product.appendChild(size);
    }
    
    const total = document.getElementById('total');
    const totalMainPage = document.getElementById('value');
    const removeButton = document.createElement('button');

    function totalCalc() {
        const priceListValue = [];
        for (let price of priceList){
            let priceValue = Number(price.slice(8, 13));
            priceListValue.push(priceValue);
            console.log(priceListValue);
        }
        const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
        let totalValue = priceListValue.reduce(reducer);
        total.textContent = totalValue;
        totalMainPage.textContent = totalValue;
    }

    function removeAction(){
            product = document.querySelectorAll('#cart-items div');
            removeButton.textContent = 'Remove';
            for (let prod of product){
                prod.appendChild(removeButton);
                prod.classList.add('prod');   
            }

            removeButton.addEventListener('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                removeButton.parentElement.remove();
                let listOfPrices = document.getElementsByClassName('prices');
                const priceOfRemovedItem = removeButton.parentElement.children[1].textContent.slice(8,13);
                const totalTrasnsformed = Number(total.textContent - priceOfRemovedItem).toFixed(2);
                if (listOfPrices.length < 1) {
                    total.textContent = 'Total' 
                    totalMainPage.textContent = '0.00';
                } else{
                    total.textContent = totalTrasnsformed;
                    totalMainPage.textContent = totalTrasnsformed;   
                }
            })
        }
        return {
            createElementsForCart,
            removeAction,
            totalCalc
        }        
    }
    
    

addToCartButton.addEventListener('click', function(e){
    e.stopPropagation();
    if(chosenSize[0] === undefined) {
        return popupAdd('You must choose a size!');
    };
    popupAdd('You add this item to your cart!');
    const addItem = addToCart();
    addItem.createElementsForCart();
    addItem.totalCalc();
    addItem.removeAction();
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
