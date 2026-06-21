function converter(valor, taxa) {
  if (valor < 0) throw new Error("Valor não pode ser negativo");
  return valor * taxa;
}
module.exports = { converter };