import isCpf from "./validateCpf.js";
import isMinor from "./validateAge.js";
import { errorMessages, errorTypes } from "./errorMessages.js";

const formFields = document.querySelectorAll("[required]");
const form = document.querySelector("[data-formulario]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitted = {
    "nome": event.target.elements["nome"].value,
    "email": event.target.elements["email"].value,
    "rg": event.target.elements["rg"].value,
    "cpf": event.target.elements["cpf"].value,
    "aniversario": event.target.elements["aniversario"].value,
  };

  localStorage.setItem("register", JSON.stringify(submitted));
  window.location.href = "./abrir-conta-form-2.html";
})

formFields.forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("invalid", event => event.preventDefault());
});

function validateField(field) {
  let message = "";

  field.setCustomValidity("");

  if (field.name === "cpf" && field.value.length >= 11 ) {
    isCpf(field);
  }

  if (field.name === "aniversario" && field.value != "") {
    isMinor(field);
  }

  errorTypes.forEach(error => {
    if (field.validity[error]) {
      message = errorMessages[field.name][error];
      console.log(message);
    }
  });

  const errorMessage = field.parentNode.querySelector('.mensagem-erro');
  const inputValidator = field.checkValidity();

  if (!inputValidator) {
    errorMessage.textContent = message;
  }
  else {
    errorMessage.textContent = "";
  }
}