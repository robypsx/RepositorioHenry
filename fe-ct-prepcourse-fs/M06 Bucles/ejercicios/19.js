function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // Verifica que n sea un número positivo
  if (typeof n !== 'number' || n <= 0) {
    return 0;
  }

  // Inicializa la variable para almacenar la suma
  let suma = 0;

  // Calcula la suma de los números desde 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  return suma
}

module.exports = sumarHastaN;
