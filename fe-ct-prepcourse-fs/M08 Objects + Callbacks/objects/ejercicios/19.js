function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  // Iterar sobre cada usuario en el arreglo y actualizar la propiedad "esPremium"
  for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    if (objetoMuchosUsuarios[i].hasOwnProperty("esPremium")) {
      objetoMuchosUsuarios[i].esPremium = true;
    } else {
      // Si la propiedad no existe, crearla y asignarle el valor true
      objetoMuchosUsuarios[i].esPremium = true;
    }
  }

  // Retornar el arreglo modificado
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;
