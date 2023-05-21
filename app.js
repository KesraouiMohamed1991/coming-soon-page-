const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.button');
const alerteIcon = document.querySelector('.alerte-icon');
const alerte = document.querySelector('.alerte');




function validateEmail(email) {
    let pattern = /^\S+@\S+\.\S+$/;
    if (pattern.test(email) || !inputField.value === '') {

        //just to show if the email adress is valid or not
        console.log("The email address '" + email + "' is valid.");
        alerte.style.display = 'none';
        alerteIcon.style.display = 'none';
        
    } else {

        //just to show if the email adress is valid or not
        console.log("The email address '" + email + "' is invalid.");
        alerte.style.display = 'block';
        alerteIcon.style.display = 'block';
    }
}

btn.addEventListener('click', function () {
    validateEmail(inputField.value)
    inputField.value = ''
})


inputField.addEventListener('focus', function () {
    alerte.style.display = 'none';
    alerteIcon.style.display = 'none';

})


