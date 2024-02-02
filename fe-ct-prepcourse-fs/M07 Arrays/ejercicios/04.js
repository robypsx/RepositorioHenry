function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  // Multiplica Math.random() por la longitud del array para obtener un índice válido.
  const randomIndex = Math.floor(Math.random() * array.length);

  // Retorna el elemento correspondiente al índice aleatorio.
  return array[randomIndex];
}

module.exports = obtenerElementoAleatorio;
