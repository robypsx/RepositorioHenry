function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  // Verifica que n sea un número positivo
  if (typeof n !== 'number' || n <= 0) {
    return 0;
  }
  
  // Inicializa la variable para almacenar la suma
  let suma = 0;

  // Calcula la suma de los números desde 1 hasta n con break si la suma supera 100
  for (let i = 1; i <= n; i++) {
    suma += i;

    if (i === 100) {
      break;
    }
  }
  return suma;
}
module.exports = sumarHastaNConBreak;