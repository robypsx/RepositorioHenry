function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

   // Crea un nuevo array para almacenar los resultados.
   let resultados = [];

   // Itera sobre el array y multiplica cada elemento por su índice.
   for (let i = 0; i < array.length; i++) {
     resultados.push(array[i] * i);
   }
 
   return resultados;
}

module.exports = multiplicarElementosPorIndice;
