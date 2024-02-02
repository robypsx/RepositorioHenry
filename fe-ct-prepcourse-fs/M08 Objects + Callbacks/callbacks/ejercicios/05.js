function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
   // Itera sobre el arreglo y ejecuta el callback con cada elemento.
   for (let elemento of array) {
    cb(elemento);
  }
}

module.exports = forEach;
