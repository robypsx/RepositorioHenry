function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let resultados = [];

  for (let i = 0; i < 10; i++) {
    // Aumenta en 2 el número y guárdalo en el array.
    num += 2;
    resultados.push(num);

    // Verifica si la suma y la cantidad de iteraciones coinciden.
    if (num === i) {
      return "Se interrumpió la ejecución";
    }
  }

  return resultados;
}

module.exports = breakStatement;
