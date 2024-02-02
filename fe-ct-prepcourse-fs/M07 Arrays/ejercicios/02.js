function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let n = array.length;
  // Utiliza el algoritmo de la burbuja para ordenar el array.
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compara elementos adyacentes y los intercambia si están en el orden incorrecto.
      if (array[j] > array[j + 1]) {
        // Intercambio de elementos utilizando una variable temporal.
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
  
}

module.exports = ordenarArray;
