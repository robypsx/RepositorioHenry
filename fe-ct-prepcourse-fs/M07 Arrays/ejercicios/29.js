function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Devuelve null si el array es vacío.
  }

  // Ordena el array de números.
  numeros.sort((a, b) => a - b);

  for (let i = 0; i < numeros.length - 1; i++) {
    // Comprueba si hay un número faltante entre los números consecutivos.
    if (numeros[i] + 1 !== numeros[i + 1]) {
      return numeros[i] + 1; // Devuelve el número faltante.
    }
  }

  return null; // Devuelve null si no hay números faltantes.
}

module.exports = encontrarNumeroFaltante;