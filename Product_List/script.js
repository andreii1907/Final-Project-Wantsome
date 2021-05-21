const tshirtsModels = [
    {
        name: 'Basic Navy Big Hourse',
        price: '39.99',
        gender: 'male',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/113044-8800A.2.INTERNATIONAL_BLUE_2000x.jpg?v=1577724253'
    },
    {
        name: 'Polo White Rounded Singht',
        price: '49.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/214916ZH-OPWH_1_1200x.jpg?v=1570024487'
    },
    {
        name: 'Polo White Blue Spotted',
        price: '59.99',
        gender: 'male',
        url: 'https://sslimages.shoppersstop.com/sys-master/images/h16/ha2/15034468761630/206339118_WHITE.jpg_1088Wx1632H'
    },
    {
        name: 'Simple Basic Black USPA Denim',
        price: '55.99',
        gender: 'male',
        url: 'https://sslimages.shoppersstop.com/sys-master/images/h73/hcc/15016301723678/206369554_BLACK.jpg_1088Wx1632H'
    },
    {
        name: 'Simple Basic Black USPA Denim',
        price: '35.99',
        gender: 'female',
        url: 'https://cdn11.nnnow.com/web-images/large/styles/FC7NAVCJLDV/1584005032504/1.jpg'
    },
    {
        name: 'Simple Basic Blue USPA Denim',
        price: '39.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/2149430H-EVBL_1_1200x.jpg?v=1570019785'
    },
    {
        name: 'Polo Navy  Classic Stripes',
        price: '59.99',
        gender: 'male',
        url: 'https://assets.ajio.com/medias/sys_master/root/h99/hcb/11766572515358/-1117Wx1400H-440934187-navy-MODEL.jpg'
    },
    {
        name: 'Basic Polo Navy',
        price: '39.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/212678ZH-NVRD--0612_1200x.jpg?v=1598552957'
    },
    {
        name: 'Polo Yellow Classic Blue Stripes',
        price: '55.99',
        gender: 'male',
        url: 'https://assets.ajio.com/medias/sys_master/root/h3a/h83/13344055427102/-1117Wx1400H-460315329-yellow-MODEL.jpg'
    },
    {
        name: 'Polo Sport Yellow and Black',
        price: '55.99',
        gender: 'male',
        url: 'https://assets.ajio.com/medias/sys_master/root/20210216/ZyXH/602ad1f5aeb26969816627f5/-473Wx593H-460846833-yellow-MODEL.jpg'
    },
    {
        name: 'Simple Basic White USPA Denim',
        price: '39.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/2151100H-OPWH_1_1600x.jpg?v=1581094303'
    },
    {
        name: 'Basic Polo Grey',
        price: '39.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/21359000-HGRY_1_1200x.jpg?v=1576529891'
    },
    {
        name: 'Polo Black Starred',
        price: '59.99',
        gender: 'male',
        url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2043355/2017/9/2/11504337530095-US-Polo-Assn-Men-Navy-Blue-Printed-Polo-Collar-T-shirt-9691504337529953-2.jpg'
    },
    {
        name: 'Basic Polo Black',
        price: '45.99',
        gender: 'male',
        url: 'https://5.imimg.com/data5/TJ/YS/GLADMIN-57831385/u-s-polo-assn-navy-blue-solid-regular-fit-polo-t-shirt-500x500.png'
    },
    {
        name: 'Basic Polo Navy USPA Denim',
        price: '59.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/215186ZH-EVBL--5608_1200x.jpg?v=1600361327'
    },
    {
        name: 'Basic Polo Black-Grey',
        price: '39.99',
        gender: 'male',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/11304488-DRGY_1_d5ebb692-107e-4223-b6fe-b52b76ca93cc_3000x.jpg?v=1608042706'
    },
    {
        name: 'Basic Polo Burgundy',
        price: '39.99',
        gender: 'male',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/11A2230W-MRFL--10435_1600x.jpg?v=1617031589'
    },
    {
        name: 'Basic Polo Green',
        price: '39.99',
        gender: 'female',
        url: 'https://rukminim1.flixcart.com/image/714/857/jnj7iq80/t-shirt/z/c/c/s-uwts0734-u-s-polo-assn-original-imafa73ampygpa9y.jpeg?q=50'
    },
    {
        name: 'Simple Basic White',
        price: '35.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/2149720H-OWCL_1_6cbd1739-ed52-43e1-b6d0-45abcd4f6b22_1200x.jpg?v=1598551476'
    },
    {
        name: 'Simple Basic Grey',
        price: '35.99',
        gender: 'female',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/212201PO-GRYP_1_11c57584-7af0-4e59-ab78-d9429d189527_1200x.jpg?v=1598555159'
    },
    {
        name: 'Simple Basic White Blue Stripped',
        price: '45.99',
        gender: 'male',
        url: 'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/11556804-BLNO--9560_1600x.jpg?v=1617034579'
    },
];

const productsList = document.getElementById('products');

for (model of tshirtsModels){
    const divProduct = document.createElement('div');
    divProduct.style.backgroundImage = 'url('+ model.url +')';
    productsList.appendChild(divProduct);
    const productsPrice = document.createElement('small');
    productsPrice.textContent = `€${model.price}`;
    divProduct.appendChild(productsPrice);
}
    