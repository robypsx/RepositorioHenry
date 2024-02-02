function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  // y agregar una propiedad "meow" que es una función
  const gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  };

  // Retornar el objeto creado
  return gato;
}

module.exports = crearGato;
