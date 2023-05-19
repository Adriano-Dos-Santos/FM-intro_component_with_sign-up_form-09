const form = document.querySelector("form");
const inputUserFirstName = document.getElementById("first-name");
const inputUserLastName = document.getElementById("last-name");
const inputUserEmail = document.getElementById("email-address");
const inputPassword = document.getElementById("password");
const warningLabel = documnet.querySelector(".warningLabel");
let alreadyPressed = 0;

/* email validation function */

function emailValidation() {

    const email = inputUserEmail.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        return true
    } else {
        return false
    };

};

/*-----*/


form.addEventListener("submit", (event) => {
 event.preventDefault()
    if (alreadyPressed === 1) {
        inputUserLastName.style.backgroundImage = "none";
        inputUserLastName.style.borderColor = "rgba(10%,10%,10%,0.2)";
        form.document.removeChild("label");
    };
    
  alreadyPressed = 1;
  const userFirstName = inputUserFirstName.value;
  const userLastName = inputUserLastName.value;
  const userEmail = inputUserEmail.value;
  const userPassword = inputPassword.value;

  if (userFirstName) {
        inputUserFirstName.style.backgroundColor = "green";
  } else {
        inputUserFirstName.style.backgroundImage = "url(assets/icon-error.svg)";
        inputUserFirstName.style.borderColor = "hsla(0,100%,74%,1)";
        warningLabel.innerText = "First Name cannot be empty";
  }
  if (userLastName) {
    inputUserLastName.style.backgroundColor = "green";
  } else {
    inputUserLastName.style.backgroundImage = "url(assets/icon-error.svg)";
    inputUserLastName.style.borderColor = "hsla(0,100%,74%,1)";
    warningLabel.innerText = "Last Name cannot be empty";
  };
  if (userEmail) {
    if (emailValidation()) {
        inputUserEmail.style.backgroundColor = "green";
    } else {
     inputUserEmail.style.backgroundImage = "url(assets/icon-error.svg)";
    inputUserEmail.style.borderColor = "hsla(0,100%,74%,1)";
    inputUserEmail.style.color = "var(--red)"
    warningLabel.innerText = "Looks like this is not an email";
    
    }
  } else {
    inputUserEmail.style.backgroundImage = "url(assets/icon-error.svg)";
    inputUserEmail.style.borderColor = "hsla(0,100%,74%,1)";
    warningLabel.innerText = "Email cannot be empty";
  };

  if (userPassword) {
    inputPassword.style.backgroundColor = "green";
  } else {
    inputPassword.style.backgroundImage = "url(assets/icon-error.svg)";
    inputPassword.style.borderColor = "hsla(0,100%,74%,1)";
    warningLabel.innerText = "Password cannot be empty";
  };
});
