function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
   // Verificar si el objeto de usuario tiene la propiedad "posts" que es un arreglo
   if (Array.isArray(objetoUsuario.posts)) {
    // Utilizar reduce para sumar los likes de todos los posts
    return objetoUsuario.posts.reduce(function(acumulador, post) {
      // Verificar si el post tiene la propiedad "likes"
      if (post.hasOwnProperty("likes") && typeof post.likes === "number") {
        // Sumar los likes al acumulador
        return acumulador + post.likes;
      } else {
        return acumulador;
      }
    }, 0); // Inicializar el acumulador en 0
  } else {
    // Si no tiene la propiedad "posts" o no es un arreglo, retornar 0
    return 0;
  }
}

module.exports = sumarLikesDeUsuario;
