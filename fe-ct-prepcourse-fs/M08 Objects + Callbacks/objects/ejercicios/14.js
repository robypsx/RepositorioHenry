function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // Verificar si la propiedad "email" del objeto tiene un valor definido
  return objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== undefined && objetoUsuario.email !== null;
  
}

module.exports = tieneEmail;
