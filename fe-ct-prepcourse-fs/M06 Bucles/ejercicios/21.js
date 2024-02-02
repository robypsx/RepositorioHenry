function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Verifica que el número sea positivo y diferente de cero
  if (typeof numero !== 'number' || numero <= 0) {
    return false;
  }

  // Comprueba si el número es una potencia de 2 usando un bucle while
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false;
    }
    numero = numero / 2;
  }

  return true;
}

module.exports = esPotenciaDeDos;
