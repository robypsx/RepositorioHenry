function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  // Verificar si el objeto tiene la propiedad indicada
  if (objeto.hasOwnProperty(propiedad)) {
    // Eliminar la propiedad del objeto
    delete objeto[propiedad];
  }

  // Retornar el objeto modificado
  return objeto;
}

module.exports = eliminarPropiedad;
