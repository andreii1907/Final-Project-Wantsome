const leftBtn = document.getElementsByClassName('prev-slide');
const rightBtn = document.getElementsByClassName('next-slide');
const cardsMen = document.querySelectorAll('#suggestions-men .suggested-articles .cards');
const cardsWomen = document.querySelectorAll('#suggestions-women .suggested-articles .cards')

function carousel(gender, forword, reverse) {
    let count = 0;
    forword.addEventListener('click', function(e){
        count++;
        console.log('right');
        for(let card of gender) {
            card.style.transition = '0.5s linear';
            if(count == 0) card.style.left = '0px';
            if(count == 1){
                if(window.innerWidth < 600) {
                    card.style.left = '-99%';
                } else card.style.left = '-101.5%';
            } 
            if(count == 2){
                if(window.innerWidth < 600) {
                    card.style.left = '-199%';
                } else card.style.left = '-203%';
            } 
            if(count > 2){
                card.style.left = '0px';
                count = 0;
            } 
            
        }
    })

    reverse.addEventListener('click', function(e){
        count--;
        console.log('right');
        for(let card of gender) {
            if(count == 0) card.style.left = '0px';
            if(count == 1){
                if(window.innerWidth < 600) {
                    card.style.left = '-99%';
                } else card.style.left = '-101.5%';
            }
            if(count == 2){
                if(window.innerWidth < 600) {
                    card.style.left = '-199%';
                } else card.style.left = '-203%';
            }
            if(count < 0) count = 0;

        }
    })
}

carousel(cardsMen, rightBtn[0], leftBtn[0]);
carousel(cardsWomen, rightBtn[1], leftBtn[1]);

const buttonForDetails = cardsMen[0].children;
buttonForDetails[0].addEventListener('click', function(e){
    window.location.href = '../Product_Details/index.html';
})