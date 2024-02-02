function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let resultados = [];

  for (let i = 0; i <= 10; i++) {
    // Multiplica 6 por el número actual de la iteración y agrega el resultado al array.
    resultados.push(6 * i);
  }

  return resultados;
}

module.exports = tablaDelSeis;
