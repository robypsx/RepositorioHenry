function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  // Inicializa el contador
  let contador = 0;

  //bucle do-while para incrementar el valor de num en 5 hasta un límite de 8 veces
  do {
    num += 5;
    contador++;
  } while (contador < 8);

  return num;
}

module.exports = doWhile;