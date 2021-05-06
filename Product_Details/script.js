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
    console.log(value);
})

plus.addEventListener('click', function(event){
    event.preventDefault();
    let value = Number(input.value) + 1;
    if (input.value >= 9) {
        return console.log('You can take only 9 items')
    }
    
    input.value = value;
    console.log(value);
})
