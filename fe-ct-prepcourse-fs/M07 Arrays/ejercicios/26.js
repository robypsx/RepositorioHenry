function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  
  // Usa el método unshift para agregar el elemento al comienzo del array.
  array.unshift(elemento);
  return array;
}

module.exports = agregarItemAlComienzoDelArray;
