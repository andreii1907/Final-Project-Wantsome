const tshirtsModels = [
    {
        name: 'Basic Navy Big Hourse',
        price: '39.99',
        gender: 'male',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/113044-8800A.2.INTERNATIONAL_BLUE_2000x.jpg?v=1577724253'
    },
    {
        name: 'Polo White Rounded Singht',
        price: '49.99',
        gender: 'female',
        quality: 'premium',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/214916ZH-OPWH_1_1200x.jpg?v=1570024487'
    },
    {
        name: 'Polo White Blue Spotted',
        price: '59.99',
        gender: 'male',
        quality: 'premium',
        url: 'https://sslimages.shoppersstop.com/sys-master/images/h16/ha2/15034468761630/206339118_WHITE.jpg_1088Wx1632H'
    },
    {
        name: 'Simple Basic Black USPA Denim',
        price: '55.99',
        gender: 'male',
        quality: 'basic',
        url: 'https://sslimages.shoppersstop.com/sys-master/images/h73/hcc/15016301723678/206369554_BLACK.jpg_1088Wx1632H'
    },
    {
        name: 'Simple Basic Black USPA Denim',
        price: '35.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn11.nnnow.com/web-images/large/styles/FC7NAVCJLDV/1584005032504/1.jpg'
    },
    {
        name: 'Simple Basic Blue USPA Denim',
        price: '39.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/2149430H-EVBL_1_1200x.jpg?v=1570019785'
    },
    {
        name: 'Polo Navy  Classic Stripes',
        price: '59.99',
        gender: 'male',
        quality: 'premium',
        url: 'https://assets.ajio.com/medias/sys_master/root/h99/hcb/11766572515358/-1117Wx1400H-440934187-navy-MODEL.jpg'
    },
    {
        name: 'Basic Polo Navy',
        price: '39.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/212678ZH-NVRD--0612_1200x.jpg?v=1598552957'
    },
    {
        name: 'Polo Yellow Classic Blue Stripes',
        price: '55.99',
        gender: 'male',
        quality: 'premium',
        url: 'https://assets.ajio.com/medias/sys_master/root/h3a/h83/13344055427102/-1117Wx1400H-460315329-yellow-MODEL.jpg'
    },
    {
        name: 'Polo Sport Yellow and Black',
        price: '55.99',
        gender: 'male',
        quality: 'premium',
        url: 'https://assets.ajio.com/medias/sys_master/root/20210216/ZyXH/602ad1f5aeb26969816627f5/-473Wx593H-460846833-yellow-MODEL.jpg'
    },
    {
        name: 'Simple Basic White USPA Denim',
        price: '39.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/2151100H-OPWH_1_1600x.jpg?v=1581094303'
    },
    {
        name: 'Basic Polo Grey',
        price: '39.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/21359000-HGRY_1_1200x.jpg?v=1576529891'
    },
    {
        name: 'Polo Black Starred',
        price: '59.99',
        gender: 'male',
        quality: 'premium',
        url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2043355/2017/9/2/11504337530095-US-Polo-Assn-Men-Navy-Blue-Printed-Polo-Collar-T-shirt-9691504337529953-2.jpg'
    },
    {
        name: 'Basic Polo Black',
        price: '45.99',
        gender: 'male',
        quality: 'basic',
        url: 'https://5.imimg.com/data5/TJ/YS/GLADMIN-57831385/u-s-polo-assn-navy-blue-solid-regular-fit-polo-t-shirt-500x500.png'
    },
    {
        name: 'Basic Polo Navy USPA Denim',
        price: '59.99',
        gender: 'female',
        quality: 'premium',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/215186ZH-EVBL--5608_1200x.jpg?v=1600361327'
    },
    {
        name: 'Basic Polo Black-Grey',
        price: '39.99',
        gender: 'male',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/11304488-DRGY_1_d5ebb692-107e-4223-b6fe-b52b76ca93cc_3000x.jpg?v=1608042706'
    },
    {
        name: 'Basic Polo Burgundy',
        price: '39.99',
        gender: 'male',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/11A2230W-MRFL--10435_1600x.jpg?v=1617031589'
    },
    {
        name: 'Basic Polo Green',
        price: '39.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://rukminim1.flixcart.com/image/714/857/jnj7iq80/t-shirt/z/c/c/s-uwts0734-u-s-polo-assn-original-imafa73ampygpa9y.jpeg?q=50'
    },
    {
        name: 'Simple Basic White',
        price: '35.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/2149720H-OWCL_1_6cbd1739-ed52-43e1-b6d0-45abcd4f6b22_1200x.jpg?v=1598551476'
    },
    {
        name: 'Simple Basic Grey',
        price: '35.99',
        gender: 'female',
        quality: 'basic',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/212201PO-GRYP_1_11c57584-7af0-4e59-ab78-d9429d189527_1200x.jpg?v=1598555159'
    },
    {
        name: 'Simple Basic White Blue Stripped',
        price: '45.99',
        gender: 'male',
        quality: 'premium',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/11556804-BLNO--9560_1600x.jpg?v=1617034579'
    },
];

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

const products = document.querySelectorAll('#products div');

function hoverEvent(){
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
    console.log(e.target.value);
    if (e.target.value === "higher-price"){
        currentStateView.sort((a, b) => (a.price > b.price) ? -1 : 1);
        console.log(currentStateView)
    } else if (e.target.value === "lower-price") {
        currentStateView.sort((a, b) => (a.price > b.price) ? 1 : -1);
        console.log(currentStateView);
    } 
    generateView(currentStateView);
});

const sortSelectByName = document.getElementById('sort2');

sortSelectByName.addEventListener('change', function(e){
    console.log(e.target.value);
    if (e.target.value === "A-Z"){
        currentStateView.sort((a, b) => (a.name > b.name) ? 1 : -1);
        console.log(currentStateView);
    } else if (e.target.value === "Z-A") {
        currentStateView.sort((a, b) => (a.name > b.name) ? -1 : 1);
        console.log(currentStateView);
    } 
    generateView(currentStateView);
});

// Filtring // 

