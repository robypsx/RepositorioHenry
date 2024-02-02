function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Verifica que a sea menor o igual a b
  if (a > b || a < 0) {
    return 0;
  }

  // Inicializa el producto
  let producto = 1;

  // Calcula el producto de los números entre a y b
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto;
}

module.exports = productoEntreNúmeros;