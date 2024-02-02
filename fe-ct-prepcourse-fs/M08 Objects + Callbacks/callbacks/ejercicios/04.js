function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  
   // Suma todos los números del arreglo.
   const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

   // Pasa el resultado al callback recibido.
   cb(suma);
}

module.exports = sumarArray;
