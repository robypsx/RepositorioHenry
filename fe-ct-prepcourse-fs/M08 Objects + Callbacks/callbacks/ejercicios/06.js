function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
// Crear un nuevo arreglo para almacenar los resultados
const resultado = [];

// Iterar sobre el arreglo y aplicar el callback a cada elemento
for (let i = 0; i < array.length; i++) {
  // Llamar al callback con el elemento actual y agregar el resultado al nuevo arreglo
  resultado.push(cb(array[i]));
}

// Retornar el nuevo arreglo con los resultados
return resultado;
}

module.exports = map;
