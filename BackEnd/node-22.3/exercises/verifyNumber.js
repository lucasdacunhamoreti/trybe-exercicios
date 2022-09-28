


function verifyNumber(number) {
  if (typeof number !== "number") return "O valor deve ser um número.";
  if (number < 0)return "Negativo";
  if (number > 0)return "Positivo";
  if (number === 0)return "Neutro";
}

verifyNumber('a');

module.exports = { verifyNumber };