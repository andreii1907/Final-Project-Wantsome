// ------- Email Validation ------- //

const email = document.getElementById('email');
const emailError = document.createElement('span');
const labelEmail = document.getElementById('label-email');

function mailValidation(email) {
    const validSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validSyntax.test(email)) {
        emailError.textContent = 'Valid email address!';
        emailError.style.color = 'green';
        labelEmail.appendChild(emailError);
        console.log('valid email!')
        return true;
    } else {
        emailError.textContent = 'Invalid Email Address. Please try again.';
        emailError.style.color = 'red';
        labelEmail.appendChild(emailError);
        console.log('Invalid Email Address. Please try again.');
        return false;
    }
  }

email.addEventListener('input', function(event) {
    event.preventDefault();
    mailValidation(email.value);
})

// ------- Eye on password input ------- //

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

// ------- Password Validation ------- //

const message = document.createElement('span');

function passwordValidation (passkey) {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const minPasswordLength = 8;
    if (passkey.length < minPasswordLength) {
        message.textContent= 'You must have 8 characters.';
        message.style.color = 'red';
        labelPassword.appendChild(message);
        return false;
    } else if (specialCharacters.test(passkey)) {
        message.textContent= 'Valid password!';
        message.style.color = 'green';
        labelPassword.appendChild(message);
        return true;
    } else {
        message.textContent= 'You must have at least one special character.';
        message.style.color = 'red';
        labelPassword.appendChild(message);
        return false;
    }
} 

password.addEventListener('input', function(event) {
    event.preventDefault();
    message.remove();
    passwordValidation(password.value);
})



// Redirect to Main Page After Conditions is Passed //

const submit = document.getElementById('submit');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (passwordValidation(password.value) && mailValidation(email.value) && fName.value !== '' && lName.value !== '') {
        window.location.href = "../Main_Page/index.html";
    } else {
        alert('Something is wrong! Try again');
    }
})


// Chosse country and state //
