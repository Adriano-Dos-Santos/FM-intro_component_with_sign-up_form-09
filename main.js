const form = document.getElementById("form-container");
const inputField = document.querySelector(".input-field");
const inputUserFirstName = document.getElementById("first-name");
const inputUserLastName = document.getElementById("last-name");
const inputUserEmail = document.getElementById("email-address");
const inputPassword = document.getElementById("password");
const warningLabel = document.querySelector(".warningLabel");
let alreadyPressed = 0;


/* validation functions */


function firstNameValidation() {
    const name = inputUserFirstName.value;
    const namePattern = /^[a-zA-Z]+$/;

    if (namePattern.test(name)) {
        return true;
    } else {
        return false;
    };
};

function emailValidation() {

    const email = inputUserEmail.value;
    const emailPattern = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    };
};


/*-----*/

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // reset input styles everytime form is submited
     if (alreadyPressed === 1) {
            inputField.style.backgroundImage = "none";
            inputField.style.borderColor = "rgba(10%,10%,10%,0.2)";
            inputField.style.backgroundColor = "white";
            inputField.style.color = "black";
            warningLabel.textContent = "";
    };
    alreadyPressed = 1;

    const userFirstName = inputUserFirstName.value;
    const userLastName = inputUserLastName.value;
    const userEmail = inputUserEmail.value;
    const userPassword = inputPassword.value;
    const firstNameLabel = document.getElementById("first-name-label");

    // First Name Validation

    if (userFirstName.length < 1) {
        inputUserFirstName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserFirstName.style.borderColor = "hsla(0,100%,74%,1)";
        inputUserFirstName.style.color = "red";
        firstNameLabel.textContent = "First Name cannot be empty";
    } else if (!firstNameValidation()) {
        inputUserFirstName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserFirstName.style.borderColor = "hsla(0,100%,74%,1)";
        inputUserFirstName.style.color = "red";
        firstNameLabel.textContent = "First Name is invalid";
    } else {
        inputUserFirstName.style.backgroundColor = "green";
    };
    // Second Name Validation

    
});
