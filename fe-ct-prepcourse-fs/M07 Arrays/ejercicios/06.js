function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map(function(element) {
    return element * 2;
  });
}

module.exports = duplicarElementos;
