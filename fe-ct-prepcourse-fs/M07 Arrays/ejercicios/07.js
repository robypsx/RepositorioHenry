function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  // Utiliza el método map para aplicar la conversión a mayúsculas a cada string.
  return array.map(function(element) {
    // Verifica si el elemento actual es un string antes de convertirlo.
    if (typeof element === 'string') {
      return element.toUpperCase();
    } else {
      return element;
    }
  });
}

module.exports = convertirStringAMayusculas;
