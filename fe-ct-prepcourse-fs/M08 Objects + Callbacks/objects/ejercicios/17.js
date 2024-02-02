function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  // Actualizar la propiedad "password" con la nueva contraseña
  objetoUsuario.password = nuevaPassword;

  // Retornar el objeto modificado
  return objetoUsuario;
}

module.exports = actualizarPassword;
