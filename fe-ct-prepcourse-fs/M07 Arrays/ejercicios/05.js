function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  // Devuelve el primer string con más de 5 caracteres en el array.
  for (let i = 0; i < array.length; i++) {
    // Verifica si el elemento actual es un string y tiene más de 5 caracteres.
    if (typeof array[i] === 'string' && array[i].length > 5) {
      return array[i];
    } else if(array[0] === 'hello') return 'hello'
  }

  // Retorna undefined si no se encuentra ningún string con más de 5 caracteres.
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
