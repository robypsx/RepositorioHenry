function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  
  // Utiliza un Set para llevar un registro de los elementos únicos encontrados.
  let seen = new Set();

  for (let i = 0; i < numeros.length; i++) {
    // Verifica si el elemento actual ya ha sido visto.
    if (seen.has(numeros[i])) {
      return numeros[i]; // Retorna el primer elemento repetido.
    } else {
      seen.add(numeros[i]); // Agrega el elemento al Set si aún no se ha visto.
    }
  }

  // Retorna undefined si no se encuentra ningún elemento repetido.
  return undefined;
}

module.exports = encontrarElementoRepetido;