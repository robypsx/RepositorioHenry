const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
   // Añade una nueva propiedad al objeto con su respectivo valor.
   objeto[propiedad] = valor;

   // Retorna el objeto actualizado.
   return objeto;
};

module.exports = agregarNuevaPropiedad;
