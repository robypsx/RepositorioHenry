function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // Si hay alguna diferencia, retorna false. Si todos son iguales, retorna true.
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }

  return true;
}

module.exports = todosIguales;
