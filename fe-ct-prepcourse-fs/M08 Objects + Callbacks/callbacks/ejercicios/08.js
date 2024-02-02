const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
// Iterar sobre el arreglo y aplicar el callback a cada elemento
for (let i = 0; i < array.length; i++) {
  // Llamar al callback con el elemento actual y verificar si es el elemento buscado
  if (callback(array[i])) {
    // Si se encuentra el elemento, retornarlo
    return array[i];
  }
}

// Si no se encuentra el elemento, devolver el mensaje
return "No se encontró el elemento";
};

module.exports = buscarElemento;
