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
            if(count == 1) card.style.left = '-720px';
            if(count == 2) card.style.left = '-1440px';
            if(count == 3) card.style.left = '-2160px';
            if(count > 3){
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
            if(count == 1) card.style.left = '-720px';
            if(count == 2) card.style.left = '-1440px';
            if(count == 3) card.style.left = '-2220px';
            if(count < 0) count = 0;
        }
    })
}

carousel(cardsMen, rightBtn[0], leftBtn[0]);
carousel(cardsWomen, rightBtn[1], leftBtn[1]);