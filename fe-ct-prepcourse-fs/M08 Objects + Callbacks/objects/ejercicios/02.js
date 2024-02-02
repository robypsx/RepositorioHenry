function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
 // Crea un nuevo objeto con las mismas propiedades que el objeto original.
 const objetoActualizado = { ...objeto };

 // Actualiza el valor de la propiedad en el nuevo objeto.
 objetoActualizado[propiedad] = valor;

 // Retorna el objeto actualizado.
 return objetoActualizado;
}

module.exports = actualizarValorPropiedad;
