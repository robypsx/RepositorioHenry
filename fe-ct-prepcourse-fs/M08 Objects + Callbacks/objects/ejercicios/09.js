function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  // Crear un nuevo objeto con las propiedades "nombre", "email" y "password"
  const usuario = {
    nombre: nombre,
    email: email,
    password: password
  };

  // Retornar el objeto creado
  return usuario;

}

module.exports = nuevoUsuario;
