function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  
  // Verifica si el array es vacío.
  if (array.length === 0) {
    return 0; // Retorna 0 si el array está vacío.
  }

  let indiceMayor = 0;

  // Itera sobre el array para encontrar el índice del número más grande.
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }

  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
