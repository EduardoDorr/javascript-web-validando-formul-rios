export default function isCpf(field) {
  const cpf = field.value.replace(/\.|-/g, "");

  if (validateRepeatNumbers(cpf) || validateFirstDigit(cpf) || validateSecondDigit(cpf)) {
    field.setCustomValidity("Este CPF não é válido")
  }
}

function validateRepeatNumbers(cpf) {
  const invalidCpfs = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];

  return invalidCpfs.includes(cpf);
}

function validateFirstDigit(cpf) {
  let sum = 0;
  let multiplier = 10;

  for (let i = 0; i < 9; i++) {
    sum += cpf[i] * multiplier;
    multiplier--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[9];
}

function validateSecondDigit(cpf) {
  let sum = 0;
  let multiplier = 11;

  for (let i = 0; i < 10; i++) {
    sum += cpf[i] * multiplier;
    multiplier--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 1) {
    sum = 0;
  }

  return sum != cpf[10];
}