function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  // Verificar si el objeto tiene la propiedad indicada y si es una función
  if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function") {
    // Invocar la función
    objeto[metodo]();
  }
}

// Ejemplo de uso:
const miObjeto = {
  saludar: function() {
    console.log("¡Hola!");
  }
}

module.exports = invocarMetodo;
