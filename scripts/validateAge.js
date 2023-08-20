const adulthoodAge = 18;

export default function isMinor(field) {
  const birthDate = new Date(field.value);

  if (validateAge(birthDate)) {
    field.setCustomValidity("O usuário não é maior de idade");
  }
}

function validateAge(birthDate) {
  let dateNow = new Date();
  let birthDatePlusAdulthood = new Date(birthDate.getUTCFullYear() + adulthoodAge, birthDate.getUTCMonth(), birthDate.getUTCDay());

  return birthDatePlusAdulthood > dateNow;
}