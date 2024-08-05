$ = document;
const form = $.querySelector(".form");
const username = $.querySelector("#username");
const email = $.querySelector("#email");
const password = $.querySelector("#password");
const confirmPassword = $.querySelector("#password-confirm");
const btnSubmit = $.querySelector(".button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateInputs();
});

function emailValidation(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function errorMaker(input, message) {
  const inputParent = input.parentElement;
  const errorText = inputParent.querySelector(".message");
  errorText.innerHTML = message;

  inputParent.classList.remove("success");
  inputParent.classList.add("error");
}

function successMaker(input) {
  const inputParent = input.parentElement;
  const errorText = inputParent.querySelector(".message");
  errorText.innerHTML = "";
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
}

function validateInputs() {
  usernameValue = username.value.trim();
  emailValue = email.value.trim();
  passwordValue = password.value.trim();
  confirmPasswordValue = confirmPassword.value.trim();

  usernameValue === ""
    ? errorMaker(username, "Input must be filled.")
    : successMaker(username);

  emailValue === ""
    ? errorMaker(email, "Email must be filled.")
    : !emailValidation(emailValue)
    ? errorMaker(email, "Email is not valid.")
    : successMaker(email);

  // if (emailValue === "") {
  //   errorMaker(email, "email must be filled");
  // } else if (!emailValidation(emailValue)) {
  //   errorMaker(email, "email is not valid");
  // } else {
  //   successMaker(email);
  // }

  passwordValue === ""
    ? errorMaker(password, "Password must be filled.")
    : passwordValue.length < 8
    ? errorMaker(password, "Password shoud contain at least 8 characters.")
    : successMaker(password);

  confirmPasswordValue === ""
    ? errorMaker(confirmPassword, "Password must be filled.")
    : confirmPasswordValue !== passwordValue
    ? errorMaker(confirmPassword, "Password is not match.")
    : successMaker(confirmPassword);
}
