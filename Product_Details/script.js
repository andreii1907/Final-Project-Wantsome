// Product Counter //

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const input = document.getElementById('input');

minus.addEventListener('click', function(event){
    event.preventDefault();
    let value = input.value - 1;
    if (input.value <= 1){
        return console.log('You may have at least one item');
    } 
    input.value = value;
})

plus.addEventListener('click', function(event){
    event.preventDefault();
    let value = Number(input.value) + 1;
    if (input.value >= 9) {
        return console.log('You can take only 9 items')
    }
    input.value = value;
})

// Change Image //

const imgDiv = document.querySelectorAll('zoom-div');
const image = document.getElementsByClassName('another-view');

for(let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function(e) {
        e.preventDefault();
        const mainImg = document.getElementById('product-image');
        const url = mainImg.style.backgroundImage.slice(5, -2);
        mainImg.style.backgroundImage = 'url('+ image[i].src +')';
        image[i].src = url;
    })
}




