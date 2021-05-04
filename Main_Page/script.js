const hamburger = document.getElementById('icon');
const mobileNav = document.getElementById('mobile-nav');
const cancelIcon = document.getElementById('cancel');
const enterIcon =document.getElementById('enter');

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
