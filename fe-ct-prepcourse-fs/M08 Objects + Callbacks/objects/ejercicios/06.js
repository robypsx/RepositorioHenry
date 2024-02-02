const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
   // Inicializa un contador.
   let contador = 0;

   // Itera sobre las propiedades del objeto utilizando el bucle for-in.
   for (let propiedad in objeto) {
     // Incrementa el contador por cada propiedad encontrada.
     contador++;
   }
 
   // Retorna el total de propiedades.
   return contador;
};

module.exports = contarPropiedades;
