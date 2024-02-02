function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // Verificar si la propiedad "password" del objeto coincide con el parámetro "password"
  return objetoUsuario.hasOwnProperty("password") && objetoUsuario.password === password;

}

module.exports = verificarPassword;
