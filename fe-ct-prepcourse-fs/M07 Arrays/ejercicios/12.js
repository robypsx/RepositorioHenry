function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  // Verifica si el array es vacío.
  if (arrayOfNums.length === 0) {
    return 0; // Retorna 0 si el array está vacío.
  }

  let suma = 0;

  // Suma todos los elementos del array.
  for (let num of arrayOfNums) {
    suma += num;
  }

  return suma;
}

module.exports = agregarNumeros;
