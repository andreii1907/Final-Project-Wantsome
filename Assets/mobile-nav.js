// Mobile Nav //

const hamburger = document.getElementById('icon');
const mobileNav = document.getElementById('mobile-nav');
const cancelIcon = document.getElementById('cancel');
const enterIcon = document.getElementById('enter');

enterIcon.addEventListener("click", function(event){
    event.preventDefault;
    mobileNav.classList.toggle("active");
    cancelIcon.style.display = 'block';
    enterIcon.style.display = 'none';
});

cancelIcon.addEventListener("click", function(event){
    event.preventDefault();
    mobileNav.classList.toggle("active");
    cancelIcon.style.display = 'none';
    enterIcon.style.display = 'block';
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
    list.style.marginTop = '130px';
    upArrow.style.display = 'none';
    downArrow.style.display = 'block';
});