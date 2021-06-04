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

email.addEventListener('input', function(event) {
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

const accounts = [
    {email: 'luchianandrei1024@yahoo.com', password: 'test1234@'},
    {email: 'mihaelamihai', password: 'test5678@'},
    {email: 'mihaimuraru@yahoo.com', password: 'test91011@'},
    {email: 'ionitamarius@gmail', password: 'test987@'},
    {email: 'tudoralex@yahoo.com', password: 'test654@'}
]

submit.addEventListener('click', function(event){
    event.preventDefault();
    const existingAccount = accounts.find((user) => {
        return email.value === user.email && password.value === user.password;
    })
    console.log(existingAccount);
    if ( mailValidation(email.value) == true && password.value !== '' && existingAccount) {
        window.location.href = "../Main_Page/index.html";
    } else {
        alert('Something is wrong! Email address or password is  wrong! Please try again!');
    }
})
