let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let form = document.getElementById('form');

form.addEventListener('submit', (ed) => {
    ed.preventDefault();

    checkUsername(username, 3, 15);
    checkPassword(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});

function checkUsername(username, min, max) {

    if (username.value.length == 0) {
        showError(username, `${getFieldName(username.id)} is required!`)
    } else if (username.value.length < min) {
        showError(username, `${getFieldName(username.id)} must be at least ${min} characters`);
    } else if (username.value.length > max) {
        showError(username, `${getFieldName(username.id)} must be less than ${max} characters`)
    } else {
        showSuccess(username);
    }
};

function checkPassword(password, min, max) {

    if (password.value.length == 0) {
        showError(password, `${getFieldName(password.id)} is required!`)
    } else if (password.value.length < min) {
        showError(password, `${getFieldName(password.id)} must be at least ${min} characters!`)
    } else if (password.value.length > max) {
        showError(password, `${getFieldName(password.id)} must be less than ${max} characters!`)
    } else {
        showSuccess(password);
    }
};

function checkEmail(email) {

    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value.length == 0) {
        showError(email, `${getFieldName(email.id)} is required!`);
    } else if (!re.test(email.value.trim())) {
        showError(email, `Email is not valid`)
    } else {
        showSuccess(email);
    }
};

function checkPasswordMatch(password, password2) {

    if (password2.value.length == 0) {
        showError(password2, `${getFieldName(password2.id)} is required!`)
    } else if (password.value.trim() != password2.value.trim()) {
        showError(password2, `Password does not match!`)
    } else {
        showSuccess(password2);
    }



};

function getFieldName(inputId) {
    return inputId.charAt(0).toUpperCase() + inputId.substring(1);
}

function showError(input, message) {

    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
};

function showSuccess(input, message) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}