function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  // Verificar si la propiedad "amigos" es un arreglo
  if (Array.isArray(objetoUsuario.amigos)) {
    // Agregar el nuevo amigo al final del arreglo
    objetoUsuario.amigos.push(nuevoAmigo);
  } else {
    // Si no es un arreglo, crear la propiedad "amigos" como un arreglo con el nuevo amigo
    objetoUsuario.amigos = [nuevoAmigo];
  }

  // Retornar el objeto modificado
  return objetoUsuario;

}

module.exports = agregarAmigo;
