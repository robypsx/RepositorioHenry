function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let contadorPares = 0;

  for (let numero of numeros) {
    // Si el número es impar, utiliza continue para pasar al siguiente iteración.
    if (numero % 2 !== 0) {
      continue;
    }

    // Si el número es par, incrementa el contador.
    contadorPares++;
  }

  return contadorPares;
}

module.exports = contarParesConContinue;
