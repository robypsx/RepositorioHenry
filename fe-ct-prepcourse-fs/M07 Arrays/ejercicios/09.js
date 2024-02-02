function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  
  let contador = 0;

  // Itera sobre el array y cuenta los elementos mayores a 10.
  for (let num of array) {
    if (num > 10) {
      contador++;
    }
  }

  return contador;
}

module.exports = contarElementosMayoresA10;
