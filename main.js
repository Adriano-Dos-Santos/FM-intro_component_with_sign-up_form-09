const form = document.getElementById("form-container");
const inputField = document.getElementsByClassName("input-field");
const warningLabel = document.getElementsByClassName("warningLabel");
const inputUserFirstName = document.getElementById("first-name");
const inputUserLastName = document.getElementById("last-name");
const inputUserEmail = document.getElementById("email-address");
const inputPassword = document.getElementById("password");
let alreadyPressed = 0;

/* validation functions */
// the functions need to receiva an argument with a value

// Names
function nameValidation(user) {
  const name = user;
  const namePattern = /^[a-z\s?A-Z\s?]+$/;

  if (namePattern.test(name)) {
    return true;
  } else {
    return false;
  }
}

// email
function emailValidation(emailAddress) {
  const email = emailAddress;
  const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // TODO complete this regex to validate emails

  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

// Password
function passwordValidation(passwordInput) {
  const password = passwordInput;
  const passwordPattern = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%¨&*()_+´`\[\]`\{\}´/?°\\\|]).*$/

  if (passwordPattern.test(password)) {
    return true;

  } else {
    return false;
  }
}


/*-----*/

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // reset all input styles everytime form is submited
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
  }
  alreadyPressed = 1;

  const userFirstName = inputUserFirstName.value;
  const userLastName = inputUserLastName.value;
  const userEmail = inputUserEmail.value;
  const userPassword = inputPassword.value;

  const firstNameLabel = document.getElementById("first-name-label");
  const lastNameLabel = document.getElementById("last-name-label");
  const emailLabel = document.getElementById("email-label");
  const passwordLabel = document.getElementById("password-label");

  const colorRed = "hsla(0,100%,74%,1)";

  const userInputs = [
    inputUserFirstName,
    inputUserLastName,
    inputUserEmail,
    inputPassword,
  ];
  const inputLabels = [
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    passwordLabel,
  ];

  // Check if the input fields are filled, if not gives a warning

  function checkInputFillStats() {
    for (let i = 0; i <= userInputs.length - 1; i++) {
      if (userInputs[i].value.length < 1) {
        userInputs[i].style.backgroundImage = "url(assets/icon-error.svg)";
        userInputs[i].style.borderColor = colorRed;
        userInputs[i].style.color = colorRed;

        const originalInputName = userInputs[i].id;
        const replacedInputName = originalInputName.replace("-", " ");
        // userInputs.length === inputLabels.length needs to be true my boy, instead it will CRASH
        inputLabels[i].textContent = `${replacedInputName} cannot be empty`;
      }
    }
  }

    checkInputFillStats();

  // First Name Validation
  if (!nameValidation(userFirstName) && userFirstName.length > 0) {
    inputUserFirstName.style.backgroundImage = "url(assets/icon-error.svg)";
    inputUserFirstName.style.borderColor = colorRed;
    inputUserFirstName.style.color = colorRed;
    firstNameLabel.textContent = "First Name is invalid";
  } else if (nameValidation(userFirstName) && userFirstName.length > 1) {
    inputUserFirstName.style.backgroundColor = "green";
  }
  // Last Name Validation

  if (!nameValidation(userLastName) && userLastName.length > 0) {
    inputUserLastName.style.backgroundImage = "url(assets/icon-error.svg)";
    inputUserLastName.style.borderColor = colorRed;
    inputUserLastName.style.color = colorRed;
    lastNameLabel.textContent = "Last Name is invalid";
  } else if (nameValidation(userLastName) && userLastName.length > 1) {
    inputUserLastName.style.backgroundColor = "green";
  }


 // Email Validation
    if (!emailValidation(userEmail) && userEmail.length > 0) {
    inputUserEmail.style.backgroundImage = "url(assets/icon-error.svg)";
    inputUserEmail.style.borderColor = colorRed;
    inputUserEmail.style.color = colorRed;
      emailLabel.textContent = "Email is invalid";
    } else if (emailValidation(userEmail) && userEmail.length > 0) {
        inputUserEmail.style.backgroundColor = "green";
    }

  // Password validation

  if (userPassword.length > 0 && userPassword.length < 12) {
    inputPassword.style.backgroundImage = "url(assets/icon-error.svg)";
    inputPassword.style.borderColor = colorRed;
    inputPassword.style.color = colorRed;
    passwordLabel.textContent = "Password can no be smaller than 12 characters";
  } else if (!passwordValidation(userPassword) && userPassword.length >= 12) {
    inputPassword.style.backgroundImage = "url(assets/icon-error.svg)";
    inputPassword.style.borderColor = colorRed;
    inputPassword.style.color = colorRed;
    passwordLabel.textContent = "Password should contain numbers,Up and Lower case letters and symbols";
  } else if (passwordValidation(userPassword) && userPassword.length >= 12) {
    inputPassword.style.backgroundColor = "green";
      }

});
