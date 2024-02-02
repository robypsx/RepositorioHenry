function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  if (typeof callback === 'function') {
    // Llamar al callback solo si es una función
    return callback(string);
  } else {
    // Si no se proporciona un callback válido, retornar el string original
    return string;
  }
}

module.exports = cambiarCadena;
