function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  
  let primerMultiplo = null;

  // Itera sobre la secuencia de números.
  for (let numero of secuencia) {
    // Verifica si el número actual es un múltiplo de n.
    if (numero % n === 0) {
      primerMultiplo = numero;
      break; // Utiliza break para detener el bucle una vez encontrado el múltiplo.
    }
  }

  return primerMultiplo !== null ? primerMultiplo : undefined;
}

module.exports = encontrarPrimerMultiploDeN;