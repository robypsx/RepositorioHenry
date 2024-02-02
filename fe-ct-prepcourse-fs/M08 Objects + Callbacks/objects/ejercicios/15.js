function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
   // Verificar si el objeto tiene la propiedad indicada
   return objeto.hasOwnProperty(propiedad);
}

module.exports = tienePropiedad;
