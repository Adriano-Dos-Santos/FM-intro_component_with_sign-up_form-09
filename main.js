const form = document.getElementById("form-container");
const inputField = document.getElementsByClassName("input-field");
const warningLabel = document.getElementsByClassName("warningLabel");
const inputUserFirstName = document.getElementById("first-name");
const inputUserLastName = document.getElementById("last-name");
const inputUserEmail = document.getElementById("email-address");
const inputPassword = document.getElementById("password");
let alreadyPressed = 0;


/* validation functions */


function nameValidation(user) {
    const name = user.value;
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
         for (let i = 0; i <= inputField.length - 1; i++) {

            inputField[i].style.backgroundImage = "none";
            inputField[i].style.borderColor = "rgba(10%,10%,10%,0.2)";
            inputField[i].style.backgroundColor = "white";
            inputField[i].style.color = "black";
         }
         for (const label of warningLabel) {
            label.textContent = "";
         }
    };
    alreadyPressed = 1;

   // userInput = [inputUserFirstName,inputUserLastName,inputUserEmail, inputPassword];
   // inputLabels = [firstNameLabel, lastNameLabel];
    const userFirstName = inputUserFirstName.value;
    const userLastName = inputUserLastName.value;
    const userEmail = inputUserEmail.value;
    const userPassword = inputPassword.value;


    const firstNameLabel = document.getElementById("first-name-label");
    const lastNameLabel = document.getElementById("last-name-label");

    const colorRed = "hsla(0,100%,74%,1)";

/*

    for (let i = 0; i <= 4; i++) {
        if (userInput[i].value.length < 1) {
        userInput[i].style.backgroundImage = "url(assets/icon-error.svg)";
        userInput[i].style.borderColor = colorRed;
        userInput[i].style.color = colorRed;
        inputLabels[i].textContent = `${userInput[i]} cannot be empty`
        };
    };
*/
    // First Name Validation

    if (userFirstName.length < 1) {
        inputUserFirstName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserFirstName.style.borderColor = colorRed;
        inputUserFirstName.style.color = colorRed;
        firstNameLabel.textContent = "First Name cannot be empty";
    } else if (!nameValidation(inputUserFirstName)) {
        inputUserFirstName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserFirstName.style.borderColor = colorRed;
        inputUserFirstName.style.color = colorRed;
        firstNameLabel.textContent = "First Name is invalid";
    } else {
        inputUserFirstName.style.backgroundColor = "green";
    };
    // Last Name Validation

    if (userLastName.length < 1) {
        inputUserLastName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserLastName.style.borderColor = colorRed;
        inputUserLastName.style.color = colorRed;
        lastNameLabel.textContent = "Last Name cannot be empty";
    } else if (!nameValidation(inputUserLastName)) {
        inputUserLastName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserLastName.style.borderColor = colorRed;
        inputUserLastName.style.color = colorRed;
        lastNameLabel.textContent = "Last Name is invalid";
    } else {
        inputUserLastName.style.backgroundColor = "green";
    }

});
