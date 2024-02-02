function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let resultados = [];

  for (let i = 0; i < 10; i++) {
    // Si el número de iteración es 4, utiliza continue para omitir la suma.
    if (i === 4) {
      continue;
    }

    // Aumenta en 2 el número y guárdalo en el array.
    num += 2;
    resultados.push(num);
  }

  return resultados;
}

module.exports = continueStatement;
