function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  // Verifica si el array es vacío.
  if (resultadosTest.length === 0) {
    return 0; // Retorna 0 si no hay resultados.
  }

  let sumaNotas = 0;

  // Suma todas las notas en el array.
  for (let nota of resultadosTest) {
    sumaNotas += nota;
  }

  // Calcula el promedio dividiendo la suma de notas entre la cantidad de notas.
  const promedio = sumaNotas / resultadosTest.length;

  return promedio;
}

module.exports = promedioResultadosTest;
