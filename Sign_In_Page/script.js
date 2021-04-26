const email = document.getElementById('email');
const emailError = document.createElement('span');
const labelEmail = document.getElementById('label-email');

function mailValidation(email) {
    const validSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validSyntax.test(email)) {
        emailError.textContent = 'Email address validated!';
        emailError.style.color = 'green';
        labelEmail.appendChild(emailError);
        console.log('valid email!')
        return true;
    } else {
        emailError.textContent = 'Invalid Email Address. Please try again.';
        emailError.style.color = 'red';
        labelEmail.appendChild(emailError);
        console.log('Invalid Email Address. Please try again.');
    }
  }

email.addEventListener('change', function(event) {
    event.preventDefault();
    mailValidation(email.value);
})

const password = document.getElementById('password');
const labelPassword = document.getElementById('label-password');
const eye = document.getElementById('eye');

eye.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click on eye');
    eye.classList.toggle('fa-eye-slash');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
})

const submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault();
    if (mailValidation(email.value) == true && password.value !== '') {
        window.location.href = "../Main_Page/index.html";
    } else {
        alert('Something is wrong! Email address or password is  wrong! Please try again!');
    }
})
